type Props = {
  id: string;
};

const Main: React.FC<Props> = ({ children, id }) => {
  return (
    <div id={id} className="flex flex-col justify-center md:min-h-screen relative font-body w-full pt-16 md:pt-0">
      {children}
    </div>
  );
};

export default Main;
