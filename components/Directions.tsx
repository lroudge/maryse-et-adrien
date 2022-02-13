import Main from './common/Main';
import { FaCar, FaTrain } from 'react-icons/fa';

const Directions: React.FC = () => {
  return (
    <Main id="directions">
      <h1 className="text-3xl md:text-6xl font-bold font-title filter drop-shadow-md text-emerald-700">
        Comment venir ...
      </h1>
      <div className="flex flex-col md:flex-row items-center md:justify-between">
        <div className="flex flex-col md:justify-between w-full md:w-3/4 md:h-112">
          <div className="flex flex-col justify-evenly md:justify-between items-center text-left h-112 md:h-64">
            <h2 className="text-xl md:text-2xl font-bold text-emerald-700 w-full text-center md:text-left">
              … à Noyal-sur-Vilaine depuis Paris ?
            </h2>
            <div className="flex flex-col md:flex-row justify-between items-center w-full h-96">
              <iframe
                title="Noyal-sur-Vilaine sur Google Maps"
                className="h-48 w-64 md:h-60 md:w-96"
                src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_API_KEY}&q=${encodeURI(
                  'Noyal-sur-Vilaine',
                )}&zoom=9&center=48.19935692728263,-1.5465458429396723`}
              ></iframe>
              <ul className="flex flex-col items-left justify-evenly text-left w-full md:w-2/3 h-48">
                <li className="flex flex-row items-center justify-start w-full">
                  <FaTrain title="En train" className="text-2xl md:text-3xl text-emerald-700 mx-5" />
                  <div className="flex flex-col items-left">
                    <span className="flex flex-row items-left text-left text-sm md:text-xl">
                      <h2 className="contents font-bold text-emerald-700">Paris - Rennes : </h2>&nbsp;
                      <p className="contents">1h30-2h (TGV)</p>
                    </span>
                    <span className="flex flex-row items-left text-left text-sm md:text-xl">
                      <h2 className="contents font-bold text-emerald-700">Rennes - Noyal-sur-Vilaine : </h2>&nbsp;
                      <p className="contents">10 min (TER - trains peu réguliers)</p>
                    </span>
                  </div>
                </li>
                <li className="flex flex-row items-center justify-start w-full">
                  <FaCar title="En voiture" className="text-2xl md:text-3xl text-emerald-700 mx-5" />
                  <div className="flex flex-col items-left">
                    <span className="flex flex-row items-left text-left text-sm md:text-xl">
                      <h2 className="contents font-bold text-emerald-700">Paris - Noyal-sur-Vilaine : </h2>&nbsp;
                      <p className="contents">3h30-4h30</p>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col justify-evenly md:justify-between items-center text-left h-112 md:h-64">
            <h2 className="text-xl md:text-2xl font-bold text-emerald-700 w-full text-center md:text-left">
              … à Mont-Dol ?
            </h2>
            <div className="flex flex-col md:flex-row justify-between items-center w-full h-96">
              <iframe
                title="Mont-Dol sur Google Maps"
                className="h-48 w-64 md:h-60 md:w-96"
                src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_API_KEY}&q=${encodeURI(
                  'Mont-Dol',
                )}&zoom=9&center=48.60310840645996,-1.771535774463247`}
              ></iframe>
              <ul className="flex flex-col items-left justify-evenly text-left w-full md:w-2/3 h-48">
                <li className="flex flex-row items-center justify-start w-full">
                  <FaTrain title="En train" className="text-2xl md:text-3xl text-emerald-700 mx-5" />
                  <div className="flex flex-col items-left">
                    <span className="flex flex-row items-left text-left text-sm md:text-xl">
                      <h2 className="contents font-bold text-emerald-700">Paris - Dol-de-Bretagne : </h2>&nbsp;
                      <p className="contents">2h-3h (TGV)</p>
                    </span>
                    <span className="flex flex-row items-left text-left text-sm md:text-xl">
                      <h2 className="contents font-bold text-emerald-700">Dol-de-Bretagne - Mont-Dol : </h2>&nbsp;
                      <p className="contents">20 min de vélo</p>
                    </span>
                  </div>
                </li>
                <li className="flex flex-row items-center justify-start w-full">
                  <FaCar title="En voiture" className="text-2xl md:text-3xl text-emerald-700 mx-5" />
                  <div className="flex flex-col items-left">
                    <span className="flex flex-row items-left text-left text-sm md:text-xl">
                      <h2 className="contents font-bold text-emerald-700">Noyal-sur-Vilaine - Mont-Dol : </h2>&nbsp;
                      <p className="contents">1h</p>
                    </span>
                    <span className="flex flex-row items-left text-left text-sm md:text-xl">
                      <h2 className="contents font-bold text-emerald-700">Mont-Dol - Paris : </h2>&nbsp;
                      <p className="contents">4h-5h</p>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-evenly rounded-md  filter shadow-lg p-5 h-80 md:h-104 w-72 md:w-80 bg-beige-200">
          <h2 className="text-l md:text-2xl font-bold text-beige-700">3 bonnes raisons de covoiturer</h2>
          <ul className="text-md md:text-xl text-left list-inside list-disc text-beige-600">
            <li>Réduisez vos émissions de CO2</li>
            <li>Réduisez vos frais de déplacement</li>
            <li>Faites connaissance avec les autres invités</li>
          </ul>
          <a
            aria-describedby="new-window"
            rel="noopener noreferrer"
            target="_blank"
            href="https://docs.google.com/spreadsheets/d/1QbfUFX9kly4oxFm0_FQmvVp2HIf07NLT_MH43Xq5RCI/edit?usp=sharing"
            className="flex flex-row items-center justify-center md:justify-evenly shadow-lg rounded-md md:text-2xl bg-beige-500 hover:bg-beige-600 transition-colors text-beige-800  p-2"
          >
            Je covoiture !
          </a>
        </div>
      </div>
    </Main>
  );
};

export default Directions;
