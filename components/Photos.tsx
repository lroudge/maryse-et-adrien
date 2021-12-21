import Main from './common/Main';
import Image from 'next/image';

const Photos: React.FC = () => {
  return (
    <Main id="photos">
      <div className="flex flex-col md:flex-row items-center justify-between md:justify-evenly w-screen h-240 md:h-112">
        <div className="hidden md:flex h-96 md:h-112 w-72 md:w-96 rounded-md shadow-lg relative">
            <Image
                alt='Table dréssée avec lavandes et ronds de serviettes Maryse et Adrien'
                src="https://raw.githubusercontent.com/lroudge/maryse-et-adrien/main/.github/images/Onglet-RSVP.JPG"
                layout="fill"
                className="rounded-md"
            />
          </div>
          <div className="flex flex-col items-center justify-evenly md:w-1/2 h-96 md:h-full p-5 md:p-10">
              <h1 className="text-3xl md:text-6xl font-bold font-title filter drop-shadow-md text-emerald-700">Photos</h1>
              <span className="mt-3 text-l md:text-2xl text-emerald-700">
                Yannick, photographe, sera parmi nous pour immortaliser l’ensemble de la journée et vous permettre de profiter au mieux de ces moments.
                <br/>
                Toutes les photos du mariage seront disponibles sur cette page dès qu’elles nous seront communiquées.
              </span>
          </div>
      </div>
    </Main>
  );
};

export default Photos;