import PlayIcon from "@/assets/icons/play.svg";
import DownloadIcon from "@/assets/icons/download.svg";
import BookmarkIcon from "@/assets/icons/bookmark.svg";
import LikeIcon from "@/assets/icons/thumbs-up.svg";
import DissLikeIcon from "@/assets/icons/thumbs-down.svg";
import { Button } from "@/components";

export const MediaActions = () => {
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-x-6 gap-y-4 md:justify-start">
      <Button className="w-full gap-x-2 md:max-w-[98px]">
        <img src={PlayIcon} /> پخش
      </Button>
      <div className="flex gap-x-2">
        <Button size="sm" variant="secondary">
          <img src={DownloadIcon} />
        </Button>
        <Button size="sm" variant="secondary">
          <img src={BookmarkIcon} />
        </Button>
      </div>
      <div className="flex gap-x-2">
        <Button size="sm" variant="secondary">
          <img src={LikeIcon} />
        </Button>
        <Button size="sm" variant="secondary">
          <img src={DissLikeIcon} />
        </Button>
      </div>
    </div>
  );
};
