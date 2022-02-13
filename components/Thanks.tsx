import Main from './common/Main';
import Image from 'next/image';

const Thanks: React.FC = () => {
  return (
    <Main id="thanks">
      <div className="flex flex-col-reverse md:flex-row items-center justify-evenly md:justify-evenly p-5 md:p-0 w-screen h-112 md:h-112">
        <div className="hidden md:flex h-0 md:h-96 md:w-112 rounded-md shadow-lg relative">
          <Image
            objectFit={'cover'}
            alt="Maryse et Adrien souriants avec la Maman d'Adrien"
            src="https://raw.githubusercontent.com/lroudge/maryse-et-adrien/main/.github/images/Onglet-merci2.JPG"
            layout="fill"
            className="rounded-md"
          />
          <Image
            objectFit={'cover'}
            alt="Maryse et Adrien souriants"
            src="https://raw.githubusercontent.com/lroudge/maryse-et-adrien/main/.github/images/Onglet-merci.JPG"
            layout="fill"
            className="rounded-md absolute top-0 left-0 transition hover:opacity-0 transition-opacity duration-500 ease-in-out"
          />
        </div>
        <div className="flex flex-col items-center justify-evenly md:w-1/2 h-96 md:h-full p-5 md:p-10">
          <h1 className="text-3xl md:text-6xl font-bold font-title filter drop-shadow-md text-emerald-700">
            Remerciements
          </h1>
          <span className="mt-3 text-l md:text-2xl text-emerald-700 text-justify">
            <p>Un immense merci à tous nos amis et famille qui participent aussi à la logistique de ce grand jour.</p>
            <br />
            <p>Une pensée spéciale pour :</p>
            <br />
            <ul className="list-disc text-left">
              <li>Nos parents</li>
              <li>Le père Cédric</li>
              <li>Nos témoins (Jeanne, Carl, Alexandra & Mikhael)</li>
              <li>Nos conseillers bon goût (Paul & Joséphine)</li>
              <li>
                <a
                  aria-describedby="new-window"
                  target="_blank"
                  className="unicorn"
                  //                   className=" transition-all duration-500 bg-pos-100 cursor-fancy bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-emerald-700 to-emerald-700 bg-moved hover:bg-pos-0-100"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/lauraderohan/"
                >
                  Notre développeuse web (Laura)
                </a>
              </li>
            </ul>
          </span>
        </div>
      </div>
    </Main>
  );
};

export default Thanks;
