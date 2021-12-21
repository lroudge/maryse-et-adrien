import Main from './common/Main';
import Image from 'next/image';

const Rsvp: React.FC = () => {
  return (
    <Main id="rsvp">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between md:justify-evenly w-screen h-240 md:h-112">
          <div className="h-96 md:h-112 w-72 md:w-96 rounded-md shadow-lg relative">
              <Image
                  alt='Table dréssée avec lavandes et ronds de serviettes Maryse et Adrien'
                  src="https://raw.githubusercontent.com/lroudge/maryse-et-adrien/main/.github/images/Onglet-RSVP.JPG"
                  layout="fill"
                  className="rounded-md"
              />
          </div>
          <div className="flex flex-col items-center justify-between md:w-1/2 h-96 md:h-full p-5 md:p-10">
              <h1 className="text-3xl md:text-6xl font-bold font-title filter drop-shadow-md text-emerald-700">RSVP</h1>
              <span className="mt-3 text-l md:text-2xl text-emerald-700">
                  Nous vous invitons à nous indiquer votre présence via le questionnaire ci-dessous et à renseigner quelques informations complémentaires à des fins d’organisation.
                  <br />
                  <br />
                  C’est promis, nous respectons le RGPD.
              </span>
              <a
                className="flex flex-row items-center justify-center md:justify-evenly shadow-lg rounded-md md:text-2xl bg-emerald-500 hover:bg-emerald-600 transition-colors text-emerald-800 h-10 md:h-16 w-48 md:w-52 p-2"
                target="_blank"
                rel="noopener noreferrer"
                href="https://docs.google.com/forms/d/e/1FAIpQLSf9wQgUeCbU-EKpigqdcxwPM8P5KcbB4JfvEoXjvZ23UrcYfA/viewform?usp=sf_link">
                Questionnaire
              </a>
          </div>
      </div>
    </Main>
  );
};

export default Rsvp;