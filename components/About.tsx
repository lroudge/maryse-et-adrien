import Main from './common/Main';
import Image from 'next/image';
import Countdown from 'react-countdown';

const Completion = () => <span className="mt-3 text-l md:text-2xl">Vive les mariés!</span>;

const About: React.FC = () => {
    const countdownRenderer = ({ days, hours, minutes, seconds, completed }) => {
      if (completed) {
        return <Completion />;
      } else {
        return <span className="mt-3 text-l md:text-2xl text-emerald-700">Dans {days} jours, {hours} heures, {minutes} minutes et {seconds} secondes...</span>;
      }
    }

  return (
    <Main id="about">
    <div className="flex flex-row">
      <div className="flex flex-col justify-evenly items-center w-1/2">
        <h1 className="text-3xl md:text-6xl font-bold font-title filter drop-shadow-md">Maryse et Adrien se marient !</h1>
        <Countdown
            date={'2022-05-07T14:00:00Z'}
            renderer={countdownRenderer}
        />
      </div>
      <div className="w-1/2">
        <Image
            alt="Maryse et Adrien souriants"
            src="https://raw.githubusercontent.com/lroudge/maryse-et-adrien/main/.github/images/Onglet-Accueil.JPG"
            width="500px"
            height="340px"
        />
      </div>
      </div>
    </Main>
  );
};

export default About;