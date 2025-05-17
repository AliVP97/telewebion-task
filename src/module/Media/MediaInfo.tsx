import type { FC } from "react";

import LikeIconSolid from "@/assets/icons/thumbs-up-solid.svg";
import ImdbIcon from "@/assets/icons/imdb.svg";
import type { MOCK_CONTENT } from "@/utils";
import { GenresList } from "./GenersList";

type TMediaInfoProps = {
  content: typeof MOCK_CONTENT;
};

export const MediaInfo: FC<TMediaInfoProps> = ({ content }) => {
  return (
    <div className="flex flex-col items-center gap-y-2 md:items-start">
      <div className="flex flex-wrap items-center justify-center gap-1.5 text-xs text-[#CBD2D9]">
        <div className="flex items-center">
          <img src={LikeIconSolid} className="px-[3px] pt-0.5 pb-1" /> %
          {Math.round(content.likeRate * 100)}
        </div>
        <div>·</div>
        <div className="flex items-center gap-x-0.5">
          <img src={ImdbIcon} />
          {content.imdb_rank}
        </div>
        <div>·</div>
        <div>{content.last_episode[0].duration} دقیقه</div>
        <div>·</div>
        <div>
          {content.gregorian_release} - {content.gregorian_last_release}
          {content.last_episode_of_serials === true ? " (پایان انتشار)" : ""}
        </div>
        <div>·</div>
        <div>{content.countries.map(({ title }) => title).join("٬ ")}</div>
        <div>·</div>
        <div>
          {content.seasons.length} فصل (
          {content.seasons.reduce((acc, curr) => acc + curr.length, 0)}) قسمت
        </div>
        <div>·</div>
        <div>{content.fa_dubbed}</div>
        <div>·</div>
        <div>مناسب برای بالای {content.age_limit} سال</div>
      </div>

      <GenresList genres={content.genres} />
    </div>
  );
};
