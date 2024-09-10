interface IProps {
  children: React.ReactNode;
}

const Content = ({children}: IProps) => {
  return (
    <section className='mt-header-height-with-padding ms-header-start p-container-padding'>
      {children}
    </section>
  );
};

export default Content;
