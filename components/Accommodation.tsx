import Main from './common/Main';
import Image from 'next/image';

const SPREADSHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS9h6Dq3DfR0fSxzZpkRue_z9oFTB9q4ldKR8l3KZnos_a2hDS4amXqbjvgZZA65_q76e1W5reTHpdB/pubhtml?gid=1575551701&amp;single=true&amp;widget=false&amp;headers=false&amp;range=A1:H17&amp;chrome=false';

const Accommodation: React.FC = () => {
  return (
    <Main id="accommodation">
      <h1 className="text-3xl md:text-6xl font-bold font-title filter drop-shadow-md text-emerald-700">Se Loger</h1>
      <div className="flex flex-col items-center justify-evenly w-full md:h-112 md:pt-10">
          <div className="flex flex-col justify-evenly items-center h-84 p-x-5 md:h-full w-full">
              <span className="text-sm md:text-xl text-emerald-700">
                Nous avons identifié pour vous les hébergements potentiels autour de Mont-Dol.
                <br />
                La liste n’est bien sûr pas exhaustive :
              </span>
              <a
                 rel="noopener noreferrer"
                 target="_blank"
                 href="https://docs.google.com/spreadsheets/d/1XgQe2J03OlUqljUCO4LlNmnAIIiVe6z4c4zm71bO5TM/edit?usp=sharing"
                 className="md:hidden flex flex-row items-center justify-center shadow-lg rounded-md bg-beige-400 hover:bg-beige-500 transition-colors text-beige-800 p-2"
                 >
                 Tableau des hébergements
              </a>
              <iframe
              width="895px"
              height="340px"
              className="hidden md:block overflow-hidden"
              src='https://docs.google.com/spreadsheets/d/e/2PACX-1vS9h6Dq3DfR0fSxzZpkRue_z9oFTB9q4ldKR8l3KZnos_a2hDS4amXqbjvgZZA65_q76e1W5reTHpdB/pubhtml?gid=1575551701&amp;single=true&amp;widget=false&amp;headers=false&amp;range=A1:H17&amp;chrome=false'></iframe>
              <span className="text-sm md:text-xl text-emerald-700">
                Et vous trouverez sur d’autres plateformes web très connues d’autres solutions complémentaires pour vous loger !
              </span>
          </div>
          <div className="md:hidden h-48 w-72 rounded-md shadow-lg relative">
              <Image
                  alt='Paysage Breton'
                  src="https://raw.githubusercontent.com/lroudge/maryse-et-adrien/main/.github/images/onglet-se-loger.jpg"
                  layout="fill"
                  className="rounded-md"
              />
            </div>
      </div>
    </Main>
  );
};

export default Accommodation;