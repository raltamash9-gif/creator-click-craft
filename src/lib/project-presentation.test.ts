import { expect, test } from "bun:test";
import { videoDetails } from "./project-presentation";

test("video and view count remain hidden without a URL", () => {
  expect(videoDetails({ viewCount: 1000 })).toBeNull();
});
test("a supplied video URL enables the link and view count", () => {
  expect(videoDetails({ videoUrl: "https://www.youtube.com/watch?v=example", viewCount: 1234 })).toEqual({ url: "https://www.youtube.com/watch?v=example", views: 1234 });
});
test("unsafe URLs do not produce video links", () => {
  expect(videoDetails({ videoUrl: "javascript:alert(1)" })).toBeNull();
});