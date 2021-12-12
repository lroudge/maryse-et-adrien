import { useRouter } from "next/router";
import {useState, useCallback} from 'react';
import Link from "next/link";
import {FiMenu} from 'react-icons/fi';

const Header: React.FC = () => {
	const router = useRouter();
	const [displayMenu, setDisplayMenu] = useState<boolean>(false);

	const onDisplayMenuClick = useCallback(() => {
	    setDisplayMenu(!displayMenu);
	}, [displayMenu]);

	return (
	<div className="w-full flex justify-start items-start fixed z-10">
	    <button onClick={onDisplayMenuClick} className={`${displayMenu ? 'hidden' : 'flex'} md:hidden text-emerald-700 w-10 h-10 transition transform duration-200 ease-in-out m-2 bg-emerald-100 rounded-md`}><FiMenu className="text-xl w-10 h-10" /></button>
		<header className={`${displayMenu ? 'md:transform translate-x-0' : 'md:transform translate-x-full'} flex flex-col md:flex-row justify-evenly items-center w-full h-96 md:h-16 font-title bg-emerald-500 text-sm md:text-lg text-emerald-900 font-bold shadow-md transition transform duration-200 ease-in-out`}>
		    <div className="nav_option" onClick={() => {setDisplayMenu(false)}}>
			    <Link href="#about">A Propos</Link>
			</div>
			<div className="nav_option" onClick={() => {setDisplayMenu(false)}}>
			    <Link href="#program">L'évènement</Link>
			</div>
			<div className="nav_option" onClick={() => {setDisplayMenu(false)}}>
			    <Link href="#directions">Venir</Link>
			</div>
            <div className="nav_option" onClick={() => {setDisplayMenu(false)}}>
			    <Link href="#accommodation">Se Loger</Link>
			</div>
            <div className="nav_option" onClick={() => {setDisplayMenu(false)}}>
			    <Link href="#registry">Liste de Mariage</Link>
			</div>
            <div className="nav_option" onClick={() => {setDisplayMenu(false)}}>
			    <Link href="#rsvp">RSVP</Link>
			</div>
            <div className="nav_option" onClick={() => {setDisplayMenu(false)}}>
			    <Link href="#photos">Photos</Link>
			</div>
            <div className="nav_option" onClick={() => {setDisplayMenu(false)}}>
			    <Link href="#covid">Actus Covid</Link>
			</div>
		</header>
		</div>);
};

export default Header;