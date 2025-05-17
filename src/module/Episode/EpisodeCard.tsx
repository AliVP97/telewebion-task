import type { FC } from "react";

import { minutesToTimestamp } from "@/utils";

type TEpisodeCardProps = {
  episode: {
    season: number;
    episode: number;
    media: {
      special_image_part: string;
    };
    duration: number;
    view_count: number;
    special_title: string;
  };
};

export const EpisodeCard: FC<TEpisodeCardProps> = ({ episode }) => {
  const {
    season,
    episode: episodeNumber,
    media,
    duration,
    view_count,
    special_title,
  } = episode;

  return (
    <div className="flex gap-2 md:flex-col">
      <div className="relative rounded-xs border border-[#FFFFFF1A]">
        <img
          src={`https://gateway.telewebion.com/${media.special_image_part}`}
          className="h-[84px] w-36 object-fill md:h-[158px] md:w-[280px]"
        />
        <span className="absolute bottom-0.5 left-0.5 bg-[#10151AE5] px-1 text-xs">
          {minutesToTimestamp(duration)}
        </span>
      </div>
      <div>
        <div className="text-xs leading-5 font-bold">{special_title}</div>
        <div className="my-0.5 text-[11px] text-[#7B8794]">
          فصل {season} قسمت {episodeNumber}
          {view_count ? ` · ${view_count / 1000} هزار بازدید` : ""}
        </div>
      </div>
    </div>
  );
};
