import { Navbar } from "./components";
import { MOCK_CONTENT } from "./utils";
import {
  Banner,
  EpisodesSection,
  MediaActions,
  MediaHeader,
  MediaInfo,
  Synopsis,
} from "./module";

function App() {
  return (
    <div className="relative bg-black font-medium select-none">
      <Navbar />
      <Banner
        posterUrl={`https://static.telewebion.com/vodBannerImages/${MOCK_CONTENT.media.main_big_poster}/default`}
      />
      <div className="relative z-0 -mt-2 flex w-full flex-col items-center gap-y-8 px-4 md:-mt-[508px] md:items-start md:px-[136px]">
        <MediaHeader
          logoUrl={`https://static.telewebion.com/vodBannerImages/${MOCK_CONTENT.media.logo_type}/default`}
          persianTitle={MOCK_CONTENT.persian_title}
          englishTitle={MOCK_CONTENT.english_title}
        />
        <MediaInfo content={MOCK_CONTENT} />
        <MediaActions />
        <Synopsis
          story={MOCK_CONTENT.story}
          providerLogo={`https://static.telewebion.com/ownerImages/${MOCK_CONTENT.media.provider_logo}/default`}
        />
        <EpisodesSection seasons={MOCK_CONTENT.seasons} />
      </div>
    </div>
  );
}

export default App;
