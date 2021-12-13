import Main from './common/Main';
import Image from 'next/image';

const Accommodation: React.FC = () => {
  return (
    <Main id="accommodation">
      <h1 className="text-3xl md:text-6xl font-bold font-title filter drop-shadow-md text-emerald-700">Se Loger</h1>
      <div className="flex flex-col md:flex-row items-center justify-evenly w-screen md:h-112 pt-10">
        <div className="h-48 md:h-80 w-72 md:w-112 rounded-md shadow-lg relative">
            <Image
                alt='Paysage Breton'
                src="https://raw.githubusercontent.com/lroudge/maryse-et-adrien/main/.github/images/onglet-se-loger.jpg"
                layout="fill"
                className="rounded-md"
            />
          </div>
          <div className="flex flex-col justify-evenly items-center h-112 md:h-full md:text-left md:w-1/2">
              <span className="text-l md:text-xl text-emerald-700">
                Nous avons identifié pour vous les hébergements potentiels autour de Mont-Dol.
                <br />
                La liste n’est bien sûr pas exhaustive :
              </span>
              <iframe className="h-48 w-64 md:h-72 md:w-112" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQQm58UlfmXp-VgGGMqz-b8NrJv7InxvulG3yEFJPWqQKEPoRFwwXd6jOv7CUtdXw/pubhtml?gid=213833129&amp;single=true&amp;widget=false&amp;headers=false&amp;range=A1:L17&amp;chrome=false"></iframe>
              <span className="text-l md:text-xl text-emerald-700">
                Et vous trouverez sur d’autres plateformes web très connues d’autres solutions complémentaires pour vous loger !
              </span>
          </div>
      </div>
    </Main>
  );
};

export default Accommodation;