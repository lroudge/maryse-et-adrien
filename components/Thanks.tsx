import Main from './common/Main';

const Thanks: React.FC = () => {
  return (
    <Main id="thanks">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between md:justify-evenly w-screen h-240 md:h-112">
        <h1 className="text-3xl md:text-6xl font-bold font-title filter drop-shadow-md text-emerald-700">
          Remerciements
        </h1>
      </div>
    </Main>
  );
};

export default Thanks;
