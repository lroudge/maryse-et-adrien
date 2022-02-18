import Main from './common/Main';
import Image from 'next/image';
import Countdown from 'react-countdown';
import { stringify } from 'querystring';
import ICalendarLink from 'react-icalendar-link';

type Props = {
  userAgent?: string;
};

export type GCalendarEventQuery = {
  action: string;
  text: string;
  details: string | null;
  location: string | null;
  dates: string;
};

export type ICalEvent = {
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  location: string;
};

const makeGoogleCalendarUrl = (event: GCalendarEventQuery) =>
  `https://calendar.google.com/calendar/render?${stringify(event)}`;

const Completion = () => <span className="mt-3 text-l md:text-2xl">Vive les mariés!</span>;

const About: React.FC<Props> = ({ userAgent }) => {
  const isIos = userAgent?.match(/iPhone|iPad|iPod/i) || false;

  const googleEvent: GCalendarEventQuery = {
    action: 'TEMPLATE',
    text: 'Mariage de Maryse et Adrien',
    details: "Cérémonie Civile, Religieuse, puis Vin d'honneur, Dîner et Soirée.",
    location: 'Noyal-sur-Vilaine, 35530',
    dates: '20220507T140000/20220508T050000',
  };

  const iosEvent: ICalendarLink = {
    title: 'Mariage de Maryse et Adrien',
    description: "Cérémonie Civile, Religieuse, puis Vin d'honneur, Dîner et Soirée.",
    startTime: '2022-05-07T14:00:00',
    endTime: '2022-05-08T05:00:00',
    location: 'Noyal-sur-Vilaine, 35530',
  };

  const countdownRenderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
  }) => {
    if (completed) {
      return <Completion />;
    } else {
      return (
        <span className="italic p-5 mt-3 text-l md:text-2xl text-emerald-700">
          Dans <b>{days}</b> jours, <b>{hours}</b> heures, <b>{minutes}</b> minutes et <b>{seconds}</b> secondes...
        </span>
      );
    }
  };

  return (
    <Main id="about">
      <div className="flex flex-col md:flex-row flex-wrap justify-start md:justify-center items-center min-h-screen w-full">
        <div className="flex flex-col md:justify-evenly items-center w-full md:w-1/2 h-72 md:h-96">
          <h1 className="text-3xl md:text-6xl font-bold font-title filter drop-shadow-md text-emerald-700">
            Maryse et Adrien se marient !
          </h1>
          <Countdown date={'2022-05-07T14:00:00Z'} renderer={countdownRenderer} />
          <span className="flex flex-row items-center justify-center mt-5">
            {isIos ? (
              <ICalendarLink
                event={iosEvent}
                filename="wedding.ics"
                className="flex flex-row items-center justify-center md:justify-evenly shadow-lg rounded-md md:text-2xl bg-emerald-500 hover:bg-emerald-600 transition-colors text-emerald-800 h-16 md:h-24 w-72 md:w-96 p-2"
              >
                Ajoutez notre évènement à votre calendrier
              </ICalendarLink>
            ) : (
              <a
                rel="noopener noreferrer"
                target="_blank"
                aria-describedby="new-window"
                href={makeGoogleCalendarUrl(googleEvent)}
                className="flex flex-row items-center justify-center md:justify-evenly shadow-lg rounded-md md:text-2xl bg-emerald-500 hover:bg-emerald-600 transition-colors text-emerald-800 h-16 md:h-24 w-72 md:w-96 p-2"
              >
                Ajoutez notre évènement à votre calendrier
              </a>
            )}
          </span>
        </div>
        <div className="h-48 md:h-96 w-64 md:w-112 relative shadow-lg rounded-md">
          <Image
            alt="Maryse et Adrien souriants"
            src="https://raw.githubusercontent.com/lroudge/maryse-et-adrien/main/.github/images/Onglet-Accueil.JPG"
            layout="fill"
            className="rounded-md"
            priority
            objectFit={'cover'}
          />
        </div>
      </div>
    </Main>
  );
};

export default About;
