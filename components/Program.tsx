import Main from './common/Main';
import Image from 'next/image';
import {BsBank2} from 'react-icons/bs';
import {GiLinkedRings, GiGlassCelebration, GiPartyPopper} from 'react-icons/gi';
import { FaGoogle, FaApple } from "react-icons/fa";
import { SiGooglecalendar } from "react-icons/si";
import { stringify } from "querystring";

export type GCalendarEventQuery = {
	action: string;
	text: string;
	details: string | null;
	location: string | null;
	dates: string;
};

const makeGoogleCalendarUrl = (event: GCalendarEventQuery) =>
	`https://calendar.google.com/calendar/render?${stringify(event)}`;

const Program: React.FC = () => {
  const googleEvent: GCalendarEventQuery = {
  		action: "TEMPLATE",
  		text: "Mariage de Maryse et Adrien",
  		details: "Cérémonie Civile, Religieuse, puis Vin d'honneur, Dîner et Soirée.",
  		location:
  			"Noyal-sur-Vilaine, 35530",
  		dates: "20220507T140000/20220508T050000"
  	};

  return (
    <Main id="program">
      <h1 className="text-3xl md:text-6xl font-bold font-title filter drop-shadow-md">Le Programme</h1>
      <p className="text-xl md:text-3xl font-title filter drop-shadow-md">7 mai 2022</p>
          <div className="flex flex-row flex-wrap items-center justify-evenly md:justify-center w-full h-96 md:h-56 md:mt-5">
             <div className="flex flex-col justify-evenly w-full md:w-1/3 md:h-64">
                <div className="flex flex-row justify-left items-center w-full">
                    <BsBank2 className="text-emerald-700 text-3xl" />
                    <span className="flex flex-col items-left text-left ml-5">
                        <h2 className="text-l md:text-2xl font-bold text-emerald-700">Cérémonie civile</h2>
                        <p className="text-md md:text-xl">14h, Mairie de Noyal-sur-Vilaine </p>
                    </span>
                </div>
                <div className="flex flex-row justify-left items-center w-full">
                    <GiLinkedRings className="text-emerald-700 text-3xl" />
                    <span className="flex flex-col items-left text-left ml-5">
                        <h2 className="text-l md:text-2xl font-bold text-emerald-700">Cérémonie religieuse</h2>
                        <p className="text-md md:text-xl">14h30, église de Noyal-sur-Vilaine </p>
                    </span>
                </div>
            </div>
            <div className="h-48 md:h-56 w-80 relative shadow-lg rounded-md">
                <Image
                alt="Eglise"
                src="https://raw.githubusercontent.com/lroudge/maryse-et-adrien/main/.github/images/Onglet-événement-église.jpg"
                layout="fill"
                className="rounded-md"
                />
            </div>
          </div>
          <div className="flex flex-row flex-wrap-reverse items-center justify-evenly md:justify-center w-full h-96 md:h-56 mt-5">
            <div className="h-48 md:h-56 w-80 relative shadow-lg rounded-md">
                <Image
                alt="Manoir de la Bégaudière"
                src="https://raw.githubusercontent.com/lroudge/maryse-et-adrien/main/.github/images/onglet-événement-manoir-de-la-begaudiere.jpg"
                layout="fill"
                className="rounded-md"
                />
            </div>
            <div className="flex flex-col justify-evenly w-full md:w-1/3 md:h-64">
                <div className="flex flex-row justify-center items-center w-full">
                    <GiGlassCelebration className="text-emerald-700 text-3xl" />
                    <span className="flex flex-col items-left text-left ml-5">
                        <h2 className="text-l md:text-2xl font-bold text-emerald-700">Vin d’honneur </h2>
                        <p className="text-md md:text-xl">17h30, Manoir de la Bégaudière, Mont-Dol</p>
                    </span>
                </div>
                <div className="flex flex-row justify-center items-center w-full">
                    <GiPartyPopper className="text-emerald-700 text-3xl" />
                    <span className="flex flex-col text-left ml-5">
                        <h2 className="text-l md:text-2xl font-bold text-emerald-700">Dîner et soirée dansante</h2>
                        <p className="text-md md:text-xl">20h, Manoir de la Bégaudière, Mont-Dol</p>
                    </span>
                </div>
            </div>
          </div>
          <span className="flex flex-row items-center justify-center mt-5">
          <a rel="noopener noreferrer"
               target="_blank"
               aria-describedby="new-window"
               href={makeGoogleCalendarUrl(
                   googleEvent
               )} className="flex flex-row items-center justify-center md:justify-evenly shadow-lg rounded-md bg-emerald-500 hover:bg-emerald-400 transition-colors text-emerald-800 h-12 w-96 p-2">
          <SiGooglecalendar title="Add to Calendar" className="text-xl md:text-3xl"/>{" "}
          Ajoutez notre évènement à votre calendrier
          </a>
          </span>
    </Main>
  );
};

export default Program;
