import AppHelper from "@/helpers/appHelper";

import useModal from "@/hooks/useModal";

import Dropdown, {DropdownMenu} from "./Dropdown";

import Dots from "./Dots";

import {EnumModals} from "@/enums";

import IconSell from "./icons/IconSell";

import IconBuy from "./icons/IconBuy";

import IconSendReceive from "./icons/IconSendReceive";

import IconPrimary from "./icons/IconPrimary";

import IconEdit from "./icons/IconEdit";

import IconEye from "./icons/IconEye";

import IconTrash from "./icons/IconTrash";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

export const TableBoxedLayoutContainer = ({children, className}: IProps) => {
  return <table className={AppHelper.classes("w-full align-middle", className)}>{children}</table>;
};

export const TableBoxedLayoutTHead = ({children, className}: IProps) => {
  return <thead className={className}>{children}</thead>;
};

export const TableBoxedLayoutTBody = ({children, className}: IProps) => {
  return <tbody className={className}>{children}</tbody>;
};

export const TableBoxedLayoutTR = ({children}: IProps) => {
  return <tr className='only:!bg-transparent odd:bg-base-200'>{children}</tr>;
};

export const TableBoxedLayoutTH = ({children}: IProps) => {
  return (
    <th className='h-3.5rem px-1rem text-start text-12 font-normal text-neutral-300'>{children}</th>
  );
};

type TableBoxedLayoutTDProps = IProps &
  React.DetailedHTMLProps<
    React.TdHTMLAttributes<HTMLTableDataCellElement>,
    HTMLTableDataCellElement
  >;

export const TableBoxedLayoutTD = ({children, className, ...props}: TableBoxedLayoutTDProps) => {
  return (
    <td
      className={AppHelper.classes(
        "h-3.5rem px-1rem text-14 text-white first:rounded-es-btn first:rounded-ss-btn last:rounded-ee-btn last:rounded-se-btn",
        className
      )}
      {...props}
    >
      {children}
    </td>
  );
};

export const TableBoxedLayoutSkeleton = (props: Omit<TableBoxedLayoutTDProps, "children">) => {
  return (
    <TableBoxedLayoutTD {...props}>
      <div className='skeleton h-2rem w-full rounded-btn opacity-40'></div>
    </TableBoxedLayoutTD>
  );
};

export const TableBoxedLayoutFlexContent = ({children}: IProps) => {
  return <div className='flex items-center gap-0.5rem'>{children}</div>;
};

export const TableBoxedLayoutActions = ({children}: IProps) => {
  return (
    <Dropdown button={<Dots />}>
      <DropdownMenu className='flex min-w-[11rem] flex-col gap-0.5rem'>{children}</DropdownMenu>
    </Dropdown>
  );
};

interface ITableBoxedLayoutActionButtonProps {
  title: string;
  modal: IModals;
  data?: unknown;
  icon: React.ReactNode;
}
export const TableBoxedLayoutActionButton = ({
  title,
  modal,
  data,
  icon,
}: ITableBoxedLayoutActionButtonProps) => {
  const {show, setClassName} = useModal();

  return (
    <div
      className='flex cursor-pointer items-center gap-0.75rem rounded-btn py-0.5rem text-12 transition-all hover:bg-base-100 hover:ps-0.75rem'
      onClick={() => {
        show(modal, data);

        if (typeof data === "object" && Object.prototype.hasOwnProperty.call(data, "className")) {
          setClassName((data as {className: string}).className);
        }
      }}
    >
      {icon}
      {title}
    </div>
  );
};

interface IButtonProps {
  data?: unknown;
}

export const TableBoxedLayoutActionButtonWithdraw = ({data}: IButtonProps) => {
  return (
    <TableBoxedLayoutActionButton
      modal={EnumModals.withdraw}
      title='Withdraw'
      icon={
        <IconSell
          svgProps={{
            className: "w-1rem",
          }}
        />
      }
      data={data}
    />
  );
};

export const TableBoxedLayoutActionButtonDeposit = ({data}: IButtonProps) => {
  return (
    <TableBoxedLayoutActionButton
      modal={EnumModals.deposit}
      title='Deposit'
      icon={
        <IconBuy
          svgProps={{
            className: "w-1rem",
          }}
        />
      }
      data={data}
    />
  );
};

export const TableBoxedLayoutActionButtonSwap = ({data}: IButtonProps) => {
  return (
    <TableBoxedLayoutActionButton
      modal={EnumModals.swap}
      title='Swap'
      icon={
        <IconSendReceive
          svgProps={{
            className: "w-1rem",
          }}
        />
      }
      data={data}
    />
  );
};

export const TableBoxedLayoutActionButtonMakePrimary = ({data = {}}: IButtonProps) => {
  return (
    <TableBoxedLayoutActionButton
      modal={EnumModals.confirmation}
      title='Make Primary'
      icon={
        <IconPrimary
          svgProps={{
            className: "w-1rem",
          }}
        />
      }
      data={{
        className: "max-w-[30rem]",
        message: "Are you sure you want to make this as primary?",
        ...(data as object),
      }}
    />
  );
};

export const TableBoxedLayoutActionButtonMakeEdit = ({data = {}}: IButtonProps) => {
  return (
    <TableBoxedLayoutActionButton
      modal={EnumModals.edit}
      title='Edit'
      icon={
        <IconEdit
          svgProps={{
            className: "w-1rem",
          }}
        />
      }
      data={data}
    />
  );
};

export const TableBoxedLayoutActionButtonMakeView = ({data = {}}: IButtonProps) => {
  return (
    <TableBoxedLayoutActionButton
      modal={EnumModals.view}
      title='View'
      icon={
        <IconEye
          svgProps={{
            className: "w-1rem",
          }}
        />
      }
      data={data}
    />
  );
};

export const TableBoxedLayoutActionButtonMakeDelete = ({data = {}}: IButtonProps) => {
  return (
    <TableBoxedLayoutActionButton
      modal={EnumModals.confirmation}
      title='Delete'
      icon={
        <IconTrash
          svgProps={{
            className: "w-1rem",
          }}
        />
      }
      data={{
        className: "max-w-[30rem]",
        message: "Are you sure you want to delete this record?",
        ...(data as object),
      }}
    />
  );
};
