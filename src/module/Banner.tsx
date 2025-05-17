import type { FC } from "react";

type TBannerProps = {
  posterUrl: string;
};

export const Banner: FC<TBannerProps> = ({ posterUrl }) => {
  return (
    <div className="relative z-0">
      <img
        src={posterUrl}
        className="h-[216px] w-full object-cover md:h-[568px]"
      />
      <div className="main-poster-overlay" />
    </div>
  );
};
