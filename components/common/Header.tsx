import { useRouter } from "next/router";
import Link from "next/link";

const Header: React.FC = () => {
	const router = useRouter();
	return (
		<header className="flex flex-wrap justify-evenly items-center w-full md:h-20 fixed z-10 font-title bg-emerald-500 text-xs md:text-lg text-emerald-900 font-bold shadow-md">
		    <div className="nav_option">
			    <Link href="#about">A Propos</Link>
			</div>
			<div className="nav_option">
			    <Link href="#program">L'évènement</Link>
			</div>
			<div className="nav_option">
			    <Link href="#transportation">Venir</Link>
			</div>
            <div className="nav_option">
			    <Link href="#accommodation">Se Loger</Link>
			</div>
            <div className="nav_option">
			    <Link href="#registry">Liste de Mariage</Link>
			</div>
            <div className="nav_option">
			    <Link href="#rsvp">RSVP</Link>
			</div>
            <div className="nav_option">
			    <Link href="#photos">Photos</Link>
			</div>
            <div className="nav_option">
			    <Link href="#covid">Actus Covid</Link>
			</div>
		</header>);
};

export default Header;