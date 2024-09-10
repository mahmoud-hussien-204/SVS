import Dropdown, {DropdownMenu} from "./Dropdown";

import IconBell from "./icons/IconBell";

const NotificationsMenu = () => {
  return (
    <Dropdown
      button={
        <div className='indicator mt-[10px]'>
          <span className='badge indicator-item badge-primary badge-xs rounded-full'></span>
          <IconBell />
        </div>
      }
    >
      <DropdownMenu>New Notifications</DropdownMenu>
    </Dropdown>
  );
};

export default NotificationsMenu;
