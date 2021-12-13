import { useRouter } from "next/router";
import {useState, useCallback} from 'react';
import Link from "next/link";
import Image from 'next/image';
import {FiMenu} from 'react-icons/fi';

const Header: React.FC = () => {
	const router = useRouter();
	const [displayMenu, setDisplayMenu] = useState<boolean>(false);

	const onDisplayMenuClick = useCallback(() => {
	    setDisplayMenu(!displayMenu);
	}, [displayMenu]);

	return (
	<div className="w-full flex justify-evenly items-start fixed z-10 h-0">
		<header className={`${displayMenu ? 'md:transform -translate-x-0' : 'md:transform -translate-x-full'} flex flex-col md:flex-row justify-evenly items-start w-full h-96 md:h-16 font-title bg-emerald-500 text-md md:text-lg text-emerald-900 font-bold shadow-md transition transform duration-200 ease-in-out`}>
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
			    <Link href="#rsvp">RSVP</Link>
			</div>
            <div className="nav_option" onClick={() => {setDisplayMenu(false)}}>
			    <Link href="#registry">Liste de Mariage</Link>
			</div>
            <div className="nav_option" onClick={() => {setDisplayMenu(false)}}>
			    <Link href="#photos">Photos</Link>
			</div>
            <div className="nav_option" onClick={() => {setDisplayMenu(false)}}>
			    <Link href="#covid">Actus Covid</Link>
			</div>
		</header>
		<div className={`${displayMenu ? 'hidden' : 'flex'} justify-between items-center w-screen fixed h-10 bg-emerald-100 md:hidden`}>
		<span className="flex flex-row items-center">
		    <div className={`${displayMenu ? 'hidden' : 'flex'} md:hidden m-2 w-5 h-5 relative`}>
                <Image alt='icon' src='https://raw.githubusercontent.com/lroudge/maryse-et-adrien/main/.github/images/icons8-wedding-64.png' layout="fill"/>
            </div>
            <p className="font-title text-emerald-700 font-bold">Maryse & Adrien</p>
            </span>
            <button onClick={onDisplayMenuClick} className={`${displayMenu ? 'hidden' : 'flex'} items-center justify-center md:hidden text-emerald-700 w-8 h-8 m-2 bg-emerald-100 rounded-md`}><FiMenu className="text-xl w-8 h-8" /></button>
		</div>
		</div>);
};

export default Header;