import Logo from "./Logo";

import Nav from "./Nav";

const Sidebar = () => {
  return (
    <aside
      className={`fixed bottom-container-padding start-container-padding top-container-padding z-40 w-sidebar-width overflow-y-auto rounded-1rem bg-base-300 transition-all`}
    >
      {/* start logo  */}
      <div className='mb-1.5rem flex h-header-height items-center px-container-padding'>
        <Logo />
      </div>
      {/* ********* end  */}

      <Nav />
    </aside>
  );
};

export default Sidebar;
