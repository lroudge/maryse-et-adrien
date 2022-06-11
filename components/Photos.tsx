import Main from './common/Main';
import Image from 'next/image';

const Photos: React.FC = () => {
  return (
    <Main id="photos">
      <div className="flex flex-col md:flex-row items-center justify-between md:justify-evenly w-screen h-112">
        <div className="hidden md:flex h-96 md:h-96 w-72 md:w-112 rounded-md shadow-lg relative">
          <Image
            objectFit={'cover'}
            alt="Maryse et Adrien devant des hortensias"
            src="https://raw.githubusercontent.com/lroudge/maryse-et-adrien/main/.github/images/Onglet-Photos.jpeg"
            layout="fill"
            className="rounded-md"
          />
        </div>
        <div className="flex flex-col items-center justify-evenly md:w-1/2 h-200 md:h-full p-5 md:p-10">
          <h1 className="text-3xl md:text-6xl font-bold font-title filter drop-shadow-md text-emerald-700">Photos</h1>
          <div className="flex flex-col mt-3 text-l md:text-2xl text-emerald-700 justify-evenly md:justify-center items-center">
            Pour accéder aux photos du mariage, cliquez sur le lien suivant :
            <br />
            <br />
            <a
              href="https://www.yannickbilliouxphotography.com/"
              aria-describedby="new-window"
              className="flex flex-row items-center justify-center md:justify-evenly md:text-3xl text-emerald-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              yannickbilliouxphotography.com
            </a>
            <br />
            <br />
            <p>
              Puis allez dans l’onglet <b>ACCÈS CLIENT</b> et entrez les codes suivants :
            </p>
            <br />
            <br />
            <div className="flex flex-col items-center justify-center shadow-lg rounded-md md:text-2xl bg-emerald-500 text-emerald-700 h-36 md:h-36 w-64 md:w-124 p-2">
              <p>
                <b>Identifiant :</b> YB59-MARYADR0705
              </p>
              <br />
              <p>
                <b>Mot de passe :</b> MARYADR0705@&
              </p>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Photos;
