import Main from './common/Main';
import Image from 'next/image';
import Countdown from 'react-countdown';

const Completion = () => <span className="mt-3 text-l md:text-2xl">Vive les mariés!</span>;

const About: React.FC = () => {
    const countdownRenderer = ({ days, hours, minutes, seconds, completed }: {days: number, hours: number, minute: numbers, seconds: numbers, completed: boolean}) => {
      if (completed) {
        return <Completion />;
      } else {
        return <span className="mt-3 text-l md:text-2xl text-emerald-700">Dans {days} jours, {hours} heures, {minutes} minutes et {seconds} secondes...</span>;
      }
    }

  return (
    <Main id="about">
    <div className="flex flex-col md:flex-row flex-wrap justify-start md:justify-center items-center min-h-screen w-full">
      <div className="flex flex-col justify-evenly items-center w-full md:w-1/2 h-48 mb-5">
        <h1 className="text-3xl md:text-6xl font-bold font-title filter drop-shadow-md">Maryse et Adrien se marient !</h1>
        <Countdown
            date={'2022-05-07T14:00:00Z'}
            renderer={countdownRenderer}
        />
      </div>
      <div className="h-48 md:h-64 w-64 md:w-96 relative shadow-lg rounded-md">
        <Image
            alt="Maryse et Adrien souriants"
            src="https://raw.githubusercontent.com/lroudge/maryse-et-adrien/main/.github/images/Onglet-Accueil.JPG"
            layout="fill"
            className="rounded-md"
        />
      </div>
      </div>
    </Main>
  );
};

export default About;