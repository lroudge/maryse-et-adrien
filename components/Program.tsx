import Main from './common/Main';
import Image from 'next/image';
import { BsBank2 } from 'react-icons/bs';
import { GiLinkedRings, GiGlassCelebration, GiPartyPopper } from 'react-icons/gi';

const Program: React.FC = () => {
  return (
    <Main id="program">
      <h1 className="text-3xl md:text-6xl font-bold font-title filter drop-shadow-md text-emerald-700">Le Programme</h1>
      <p className="text-xl md:text-2xl italic filter text-emerald-700 mt-3">7 mai 2022</p>
      <div className="flex flex-col flex-wrap md:flex-row items-center justify-evenly md:justify-center w-full h-104 md:h-1/2 md:mt-5">
        <div className="flex flex-col justify-evenly items-center w-full md:w-1/3 h-64">
          <div className="flex flex-row justify-evenly items-center w-80 md:w-full">
            <BsBank2 title="Icone de Mairie" className="text-emerald-700 text-3xl" />
            <span className="flex flex-col items-left text-left w-3/4">
              <h2 className="text-l md:text-2xl font-bold text-emerald-700">Cérémonie civile</h2>
              <p className="text-md md:text-xl">14h, Mairie de Noyal-sur-Vilaine </p>
            </span>
          </div>
          <div className="flex flex-row justify-evenly items-center w-80 md:w-full">
            <GiLinkedRings title="Icone d'alliances" className="text-emerald-700 text-3xl" />
            <span className="flex flex-col items-left text-left w-3/4">
              <h2 className="text-l md:text-2xl font-bold text-emerald-700">Cérémonie religieuse</h2>
              <p className="text-md md:text-xl">14h30, Église de Noyal-sur-Vilaine </p>
            </span>
          </div>
        </div>
        <div className="h-48 md:h-56 w-72 md:w-80 relative shadow-lg rounded-md">
          <Image
            objectFit={'cover'}
            alt="Eglise de Noyal-sur-Vilaine"
            src="https://raw.githubusercontent.com/lroudge/maryse-et-adrien/main/.github/images/Onglet-événement-église.jpg"
            layout="fill"
            className="rounded-md"
          />
        </div>
      </div>
      <div className="flex flex-col-reverse flex-wrap-reverse md:flex-row items-center justify-evenly md:justify-center w-full h-104 md:h-1/2 mt-5">
        <div className="h-48 md:h-56 w-72 md:w-80 relative shadow-lg rounded-md">
          <Image
            objectFit={'cover'}
            alt="Manoir de la Bégaudière"
            src="https://raw.githubusercontent.com/lroudge/maryse-et-adrien/main/.github/images/onglet-événement-manoir-de-la-begaudiere.jpg"
            layout="fill"
            className="rounded-md"
          />
        </div>
        <div className="flex flex-col justify-evenly items-center w-full md:w-1/3 h-64">
          <div className="flex flex-row justify-evenly items-center w-80 md:w-full">
            <GiGlassCelebration title="Icone de coupes de champagne" className="text-emerald-700 text-3xl" />
            <span className="flex flex-col items-left text-left w-3/4">
              <h2 className="text-l md:text-2xl font-bold text-emerald-700">Vin d’honneur </h2>
              <p className="text-md md:text-xl">17h30, Manoir de la Bégaudière, Mont-Dol</p>
            </span>
          </div>
          <div className="flex flex-row justify-evenly items-center w-80 md:w-full">
            <GiPartyPopper title="Icone de cotillons de fête" className="text-emerald-700 text-3xl" />
            <span className="flex flex-col text-left w-3/4">
              <h2 className="text-l md:text-2xl font-bold text-emerald-700">Dîner et soirée dansante</h2>
              <p className="text-md md:text-xl">20h, Manoir de la Bégaudière, Mont-Dol</p>
            </span>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Program;
