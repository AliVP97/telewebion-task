import type { FC } from "react";

type TSynopsisProps = {
  story: string;
  providerLogo: string;
};

export const Synopsis: FC<TSynopsisProps> = ({ story, providerLogo }) => {
  return (
    <div className="flex w-full justify-between">
      <div className="text-justify md:max-w-[576px]">{story}</div>
      <img src={providerLogo} className="hidden max-h-12 lg:block" />
    </div>
  );
};
