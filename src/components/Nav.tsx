import {constantSidebar} from "@/constants/sidebar";

import useAuth from "@/modules/auth/hooks/useAuth";

import {NavLink, useLocation} from "react-router-dom";

import IconDashboard from "./icons/IconDashboard";

import IconBuy from "./icons/IconBuy";

import IconSendReceive from "./icons/IconSendReceive";

import IconUser from "./icons/IconUser";

import {EnumUserRole} from "@/enums";

import AppHelper from "@/helpers/appHelper";

import IconWallet from "./icons/IconWallet";

import IconMembership from "./icons/IconMembership";

import IconReferral from "./icons/IconReferral";

import IconSettings from "./icons/IconSettings";

import IconUsers from "./icons/IconUsers";

import IconLedger from "./icons/IconLedger";

import IconCoin from "./icons/IconCoin";

import IconCart from "./icons/IconCart";

const icons = {
  dashboard: <IconDashboard />,
  buy: <IconBuy />,
  sendReceive: <IconSendReceive />,
  profile: <IconUser />,
  wallets: <IconWallet />,
  membership: <IconMembership />,
  referral: <IconReferral />,
  cog: <IconSettings />,
  users: <IconUsers />,
  ledgers: <IconLedger />,
  coins: <IconCoin />,
  orders: <IconCart />,
} as const;

const Nav = () => {
  const {userData} = useAuth();

  return (
    <nav className='flex flex-col gap-1rem px-container-padding'>
      {userData?.role &&
        constantSidebar[userData?.role].map((item) =>
          item.isSubmenu ? (
            <LinkWithSubMenu key={item.path} linkData={item} />
          ) : (
            <MainLink key={item.path} linkData={item} />
          )
        )}
    </nav>
  );
};

export default Nav;

interface ILinkProps {
  linkData: (typeof constantSidebar)[keyof typeof EnumUserRole][0];
}

const LinkWithSubMenu = ({linkData}: ILinkProps) => {
  const {pathname} = useLocation();

  const isActiveClass = () => pathname.startsWith(linkData.path);

  return (
    <div className='collapse collapse-arrow'>
      <input type='checkbox' className='peer min-h-0' defaultChecked={isActiveClass()} />
      <div
        className={AppHelper.classes(
          "collapse-title flex min-h-0 items-center gap-0.75rem px-0.75rem py-0.5rem after:!top-1/2 after:-translate-y-1/2",
          {
            "rounded-btn bg-primary text-base-100": isActiveClass(),
          }
        )}
      >
        {icons[linkData.icon as keyof typeof icons]}
        <span>{linkData.title}</span>
      </div>
      <div className='collapse-content ms-2rem px-0 !pb-0'>
        {linkData.isSubmenu &&
          linkData.subMenu.map((item) => (
            <NavLinkItem className='text-14' key={item.path} path={item.path} isSubmenu>
              {item.title}
            </NavLinkItem>
          ))}
      </div>
    </div>
  );
};

const MainLink = ({linkData}: ILinkProps) => {
  return (
    <NavLinkItem path={linkData.path} end={linkData.end}>
      {icons[linkData.icon as keyof typeof icons]}
      <span>{linkData.title}</span>
    </NavLinkItem>
  );
};

const NavLinkItem = ({
  children,
  path,
  className,
  end = false,
  isSubmenu = false,
}: {
  children: React.ReactNode;
  path: string;
  className?: string;
  end?: boolean;
  isSubmenu?: boolean;
}) => {
  return (
    <NavLink
      to={path}
      end={end}
      className={({isActive}) => {
        const classes = `flex items-center gap-0.75rem px-0.75rem py-0.5rem ${className}`;
        const activeClass = isSubmenu ? "text-primary" : "rounded-btn bg-primary text-base-100";
        return isActive ? `${classes} ${activeClass}` : `${classes}`;
      }}
    >
      {children}
    </NavLink>
  );
};
