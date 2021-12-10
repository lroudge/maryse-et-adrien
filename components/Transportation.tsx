import Main from './common/Main';
import {FaCar, FaTrain} from 'react-icons/fa';

const Transportation: React.FC = () => {
  return (
    <Main id="transportation">
      <h1 className="text-3xl md:text-6xl font-bold font-title filter drop-shadow-md text-emerald-700">Comment venir ...</h1>
      <div className="flex flex-row items-center justify-between h-full">
      <div className="flex flex-col justify-between w-3/4 h-112">
          <div className="flex flex-col justify-between items-center text-left h-64">
            <h2 className="text-l md:text-2xl font-bold text-emerald-700 w-full">… à Noyal-sur-Vilaine depuis Paris ?</h2>
            <div className="flex flex-row justify-between w-full">
                <iframe title="Noyal-sur-Vilaine on Maps"
                    src={`https://www.google.com/maps/embed/v1/place?key=${
                        process.env.GOOGLE_API_KEY
                    }&q=${encodeURI("Noyal-sur-Vilaine")}`}
                    width="350px"
                    height="200px">
                </iframe>
                <ul className="flex flex-col items-left justify-evenly text-left w-2/3">
                    <li className="flex flex-row items-center justify-start w-full">
                        <FaTrain title="train" className="text-3xl text-emerald-700 mx-5"/>
                        <span className="text-xl">
                            <p>Paris - Rennes : 1h30-2h (TGV)</p>
                            <p>Rennes - Noyal-sur-Vilaine : 10 min (TER - trains peu réguliers)</p>
                        </span>
                    </li>
                    <li className="flex flex-row items-center justify-start w-full">
                        <FaCar title="car" className="text-3xl text-emerald-700 mx-5"/>
                        <span className="text-xl">
                            <p>Paris - Noyal-sur-Vilaine : 3h30-4h30</p>
                        </span>
                    </li>
                </ul>
            </div>
          </div>
          <div className="flex flex-col justify-between items-center text-left h-64">
            <h2 className="text-l md:text-2xl font-bold text-emerald-700 w-full">… à Mont-Dol ?</h2>
            <div className="flex flex-row">
                <iframe title="Mont-Dol on Maps"
                          src={`https://www.google.com/maps/embed/v1/place?key=${
                              process.env.GOOGLE_API_KEY
                          }&q=${encodeURI("Mont-Dol")}`}
                          width="350px"
                          height="200px">
                </iframe>
                <ul className="flex flex-col items-left justify-evenly text-left w-2/3">
                    <li className="flex flex-row items-center justify-start w-full">
                        <FaTrain title="train" className="text-3xl text-emerald-700 mx-5"/>
                        <span className="text-xl">
                            <p>Paris - Dol-de-Bretagne : 2h-3h (TGV) et 20 min de vélo pour faire Dol-de-Bretagne - Mont-Dol</p>
                        </span>
                    </li>
                    <li className="flex flex-row items-center justify-start w-full">
                        <FaCar title="car" className="text-3xl text-emerald-700 mx-5"/>
                        <span className="text-xl">
                            <p>Noyal-sur-Vilaine - Mont-Dol : 1h</p>
                            <p>Mont-Dol - Paris : 4h-5h</p>
                        </span>
                    </li>
                </ul>
            </div>
          </div>
      </div>
      <div className="flex flex-col justify-evenly rounded-md  filter shadow-lg p-5 h-104 w-80 bg-beige-200">
        <h2 className="text-l md:text-2xl font-bold text-beige-700">3 bonnes raisons de covoiturer :</h2>
        <ul className="text-xl text-left list-inside list-disc text-beige-600">
            <li>Réduisez vos émissions de CO2</li>
            <li>Réduisez vos frais de déplacement</li>
            <li>Faites connaissance avec les autres invités</li>
        </ul>
        <a href="" className="flex flex-row items-center justify-center md:justify-evenly shadow-lg rounded-md md:text-2xl bg-beige-500 hover:bg-beige-600 transition-colors text-beige-800  p-2">Je covoiture !</a>
      </div>
      </div>
    </Main>
  );
};

export default Transportation;