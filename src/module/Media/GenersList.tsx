import type { FC } from "react";

type TGenresListProps = {
  genres: { title: string }[];
};

export const GenresList: FC<TGenresListProps> = ({ genres }) => {
  return (
    <div className="flex gap-x-1 text-xs">
      {genres.map(({ title }, index) => (
        <div key={index} className="rounded-xs bg-white/20 px-1 py-0.5">
          {title}
        </div>
      ))}
    </div>
  );
};
