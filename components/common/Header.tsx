import { useRouter } from "next/router";
import Link from "next/link";

const Header: React.FC = () => {
	const router = useRouter();
	return (
		<header className="flex justify-evenly items-center w-full h-20 fixed z-10">
			<Link href="#about">A Propos</Link>
			<Link href="#program">L'évènement</Link>
			<Link href="#transportation">Venir</Link>
			<Link href="#accommodation">Se Loger</Link>
			<Link href="#registry">Liste de Mariage</Link>
			<Link href="#rsvp">RSVP</Link>
			<Link href="#photos">Photos</Link>
			<Link href="#covid">Actus Covid</Link>
		</header>);
};

export default Header;