const Footer: React.FC = () => (
	<footer className="flex flex-wrap items-center justify-center w-full md:h-20 fixed z-10 bg-emerald-100 bottom-0 text-emerald-800 text-xs md:text-sm p-2">
		Pour toute question, vous pouvez en un clic nous contacter ici :
		&nbsp;
	    <a
			href="mailto:question@maryse-et-adrien.fr"
			target="_blank"
			rel="noopener noreferrer"
		>
			question@maryse-et-adrien.fr
		</a>
	</footer>);

export default Footer;