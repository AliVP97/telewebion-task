import type { FC } from "react";

type TMediaHeaderProps = {
  logoUrl: string;
  persianTitle: string;
  englishTitle: string;
};

export const MediaHeader: FC<TMediaHeaderProps> = ({
  logoUrl,
  persianTitle,
  englishTitle,
}) => {
  return (
    <>
      <div className="mb-2 hidden md:flex">
        <img src={logoUrl} className="h-[156px] w-[400px] object-fill" />
      </div>
      <div className="flex flex-col items-center gap-y-2 md:items-start">
        <div className="text-xl leading-7 font-bold">
          {persianTitle} | {englishTitle}
        </div>
      </div>
    </>
  );
};
