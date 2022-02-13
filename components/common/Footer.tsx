const Footer: React.FC = () => (
  <footer className="flex flex-wrap items-center justify-center w-full md:h-16 md:fixed z-10 bg-emerald-100 bottom-0 text-emerald-800 text-xs md:text-sm p-2">
    Pour toute question, vous pouvez en un clic nous contacter ici : &nbsp;
    <a
      href="mailto:mariage@maryse-et-adrien.fr"
      target="_blank"
      rel="noopener noreferrer"
      aria-describedby="new-window"
    >
      mariage@maryse-et-adrien.fr
    </a>
    <div hidden>
      <span id="new-window">Ouvre le lien dans un nouvel onglet</span>
    </div>
  </footer>
);

export default Footer;
