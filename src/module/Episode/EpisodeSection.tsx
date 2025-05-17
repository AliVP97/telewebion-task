import type { FC } from "react";

import { Tabs, Button } from "@/components";
import { EpisodeCard } from "./EpisodeCard";

type TEpisodeCardProps = {
  seasons: {
    nid: number;
    season: number;
    episode: number;
    media: {
      special_image_part: string;
    };
    duration: number;
    view_count: number;
    special_title: string;
  }[][];
};

export const EpisodesSection: FC<TEpisodeCardProps> = ({ seasons }) => {
  return (
    <Tabs.Provider className="w-full">
      <Tabs.Navbar>
        {seasons.map((_, index) => (
          <Tabs.Trigger
            key={index}
            id={String(index)}
            title={`فصل ${index + 1}`}
            defaultActive={index === 0}
          />
        ))}
      </Tabs.Navbar>
      <div className="flex flex-col gap-y-4 py-5 md:gap-y-8">
        {seasons.map((episodes, index) => (
          <Tabs.Item
            key={index}
            id={String(index)}
            className="flex-col justify-center gap-4 md:grid md:grid-cols-[repeat(auto-fill,280px)]"
          >
            {episodes.map((episode) => (
              <EpisodeCard key={episode.nid} episode={episode} />
            ))}
          </Tabs.Item>
        ))}
        <div className="flex justify-center">
          <Button size="sm" variant="secondary" className="w-[108px] text-sm">
            مشاهده بیشتر
          </Button>
        </div>
      </div>
    </Tabs.Provider>
  );
};
