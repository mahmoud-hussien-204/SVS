interface IProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

const Label = ({children, ...props}: IProps) => {
  return (
    <label className='mb-0.5rem block text-14 text-neutral-1100' {...props}>
      {children}
    </label>
  );
};

export default Label;
