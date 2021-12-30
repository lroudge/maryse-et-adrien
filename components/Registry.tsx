import Main from './common/Main';
import Image from 'next/image';

const Registry: React.FC = () => {
  return (
    <Main id="registry">
    <div className="flex flex-row items-center justify-around w-screen h-96 md:h-112 md:p-10">
              <div className="flex flex-col items-center justify-between md:w-1/2 h-96 md:h-full p-5">
                  <h1 className="text-3xl md:text-6xl font-bold font-title filter drop-shadow-md text-emerald-700">Liste de Mariage</h1>
                  <span className="mt-3 text-l md:text-2xl text-emerald-700">
                    Le plus beau cadeau que vous puissiez nous faire est d’être présents le jour J pour venir célébrer et vous réjouir avec nous de ce jour unique.
                    <br />
                    Cela étant, si vous souhaitez nous faire un cadeau, nous vous proposons une liste d’idées ci-dessous :
                  </span>
                  <a
                    className="flex flex-row items-center justify-center md:justify-evenly shadow-lg rounded-md md:text-2xl bg-emerald-500 hover:bg-emerald-600 transition-colors text-emerald-800 h-10 md:h-16 w-48 md:w-52 p-2"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.millemercismariage.com/maryseetadrien/liste.html">
                    Liste de Mariage
                  </a>
              </div>
              <div className="hidden md:flex h-104 w-112 rounded-md shadow-lg relative">
                <Image
                    alt='Table dréssée avec lavandes et ronds de serviettes Maryse et Adrien'
                    src="https://raw.githubusercontent.com/lroudge/maryse-et-adrien/main/.github/images/Onglet-liste-mariage.jpeg"
                    layout="fill"
                    className="rounded-md"
                />
            </div>
          </div>
    </Main>
  );
};

export default Registry;