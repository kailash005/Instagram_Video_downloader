import { BadRequest, TimeoutException } from "@/lib/exceptions";
import { getTimedFilename } from "@/utils";

export const getIGVideoFileName = () =>
  getTimedFilename("ig-downloader", "mp4");

export const handleScraperError = (error: any) => {
  if (error.message.includes("status code 404")) {
    throw new BadRequest("This post is private or does not exist", 400);
  } else if (error instanceof TimeoutException) {
    throw new TimeoutException();
  }
};
