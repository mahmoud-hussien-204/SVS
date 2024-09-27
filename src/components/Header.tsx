import useScreenTitle from "@/hooks/useScreenTitle";

import NotificationsMenu from "./NotificationsMenu";

import ProfileMenu from "./ProfileMenu";

import IconMenu from "./icons/IconMenu";
import useShowSideBar from "@/hooks/useShowSideBar";
const Header = () => {
  const { screenTitle } = useScreenTitle();
  const { showSidebar, toogleShowSideBar } = useShowSideBar()

  return (
    <header className={`fixed end-0 ${showSidebar ? "start-header-start" : "w-full"} duration-150 top-0 z-40 flex h-header-height-with-padding items-center justify-between px-container-padding pt-1.5rem backdrop-blur-md`}>
      <div className='flex items-center gap-0.75rem'>
        <button
          type='button'
          onClick={toogleShowSideBar}
          className='flex h-2rem w-2rem items-center justify-center rounded-full bg-base-300 text-neutral-content opacity-70 hover:opacity-100'
        >
          <IconMenu svgProps={{ className: "w-1.25rem" }} />
        </button>
        <h2 className='text-22 text-white'>{screenTitle}</h2>
      </div>

      <div className='flex items-center gap-1.5rem'>
        <NotificationsMenu />
        <ProfileMenu />
      </div>
    </header>
  );
};

export default Header;
