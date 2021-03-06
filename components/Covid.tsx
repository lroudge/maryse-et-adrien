import Main from './common/Main';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Covid: React.FC = () => {
  const router = useRouter();

  return (
    <Main id="covid">
      <div className="flex flex-col h-112 md:h-full justify-evenly">
        <h1 className="text-3xl md:text-6xl font-bold font-title filter drop-shadow-md text-emerald-700">
          Actus Covid
        </h1>
        <div className="flex flex-col items-center justify-evenly h-96 md:h-112">
          <p className="mt-3 text-l md:text-2xl text-emerald-700">En attendant la prochaine allocution...</p>
          <div
            className="w-64 h-48 md:w-80 md:h-64 relative"
            onClick={(e) => {
              e.preventDefault();
              router.push('https://parti-animaliste.fr/programme');
            }}
          >
            <Image
              alt="Gif de Macron disant 'je ne suis pas un tartarin de tarascon'"
              className="absolute"
              layout="fill"
              src="https://media0.giphy.com/media/d48u0covFE4VUdsQ/giphy.gif?cid=ecf05e47c31emzh0ynm98cz06dw877dbpp67022uj1xvk34i&rid=giphy.gif&ct=g"
            />
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Covid;
