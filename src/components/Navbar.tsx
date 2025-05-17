import SearchIcon from "@/assets/icons/search.svg";
import UserIcon from "@/assets/icons/user.svg";
import ArrowRight from "@/assets/icons/arrow-right.svg";
import { MOCK_NAVBAR_ITEMS } from "@/utils";

const Mobile = () => {
  return (
    <div className="sticky top-0 z-10 flex h-10 w-full items-center justify-between border-b border-[#1F2933] bg-black px-2 md:hidden">
      <img src={ArrowRight} className="p-2" />
      <img width={24} src="https://telewebion.com/assets/images/Logo.svg" />
      <img src={UserIcon} className="p-2" />
    </div>
  );
};

const Desktop = () => (
  <div className="sticky top-0 z-10 hidden h-12 w-full items-center border-b border-white/5 pe-4 backdrop-blur-2xl md:flex">
    <img width={48} src="https://telewebion.com/assets/images/24.svg" />
    <div className="grow">
      {MOCK_NAVBAR_ITEMS.map((title) => (
        <a key={title} href="#" className="mx-2 inline-block p-2 text-sm">
          {title}
        </a>
      ))}
    </div>
    <div className="p-2">
      <img width={18} src={SearchIcon} />
    </div>
    <a href="#" className="p-2 text-xs">
      ورود / ثبت نام
    </a>
  </div>
);

export const Navbar = () => {
  return (
    <>
      <Mobile />
      <Desktop />
    </>
  );
};
