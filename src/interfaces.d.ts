interface IUser {
  name: string;
  email: string;
  role: IUserRole;
  permissions: string[];
  id: number;
  token: string;
  photo: string;
  status: IUserStatus;
  phone: string;
}

type IUserStatus = keyof typeof import("./enums").EnumUserStatus;

type IUserRole = keyof typeof import("./enums").EnumUserRole;

interface ISvgIconProps {
  svgProps?: import("react").SVGProps<SVGSVGElement>;
  pathProps?: import("react").SVGProps<SVGPathElement>;
}

type IModals = keyof typeof import("./enums").EnumModals;

interface IModalComponentProps {
  type: IModals | undefined;
  isOpen: boolean;
  show: (type: IModals, data?: unknown) => void;
  hide: () => void;
  data: unknown;
}
