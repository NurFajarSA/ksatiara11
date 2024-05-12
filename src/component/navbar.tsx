import Link from "next/link";
import { useEffect, useState } from "react";
import { useMediaQuery } from 'react-responsive';
import dynamic from "next/dynamic";
import { Merriweather } from "next/font/google";

const DynamicHamburger = dynamic(() => import('hamburger-react').then(mod => mod.Sling), { ssr: false });
const Merri = Merriweather({
    subsets: ["latin"],
    weight: "700"
});

export default function Navbar() {
    const [isOpen, setOpen] = useState(false);
    const [navFixed, setNavFixed] = useState(false);

    useEffect(() => {
        const setNavbar = () => {
            if (window.scrollY >= 90) {
                setNavFixed(true);
            } else {
                setNavFixed(false);
            }
        };

        window.addEventListener("scroll", setNavbar);

        return () => {
            window.removeEventListener("scroll", setNavbar);
        };
    }, []);

    const isMobile = useMediaQuery({ maxWidth: 950 });

    return (
        <>
            {navFixed &&
                <div className="flex fixed w-full z-50 transition-all duration-300 ease-in-out">
                    <nav className="w-full shadow-md">
                        <div className={`flex bg-white w-full h-[60px] justify-between items-center px-5`}>
                            <div className="font-semibold">Rumah Ke<span className="text-red-500">pemimpin</span>an</div>
                            {isMobile ?
                                (<DynamicHamburger toggled={isOpen} toggle={setOpen} size={20} />)
                                :
                                (
                                    <ul className="flex gap-5 tab-nav">
                                        <Link href={'/'}><li className="hover:text-red-600">Home</li></Link>
                                        <Link href={'/awardee'}><li className="hover:text-red-600">Awardee</li></Link>
                                        <Link href={'/'}><li className="hover:text-red-600">Squads</li></Link>
                                        <Link href={'/'}><li className="hover:text-red-600">Moments</li></Link>
                                    </ul>
                                )}
                        </div>
                    </nav>
                </div>
            }
            <div className="flex w-full">
                <nav className="w-full shadow-md">
                    <div className={`flex w-full h-[55px] bg-black text-center text-white font-bold items-center justify-center ${Merri.className}`}>Ksatiara 11</div>
                    <div className={`flex bg-white w-full h-[60px] justify-between items-center px-5`}>
                        <div className="font-semibold">Rumah Ke<span className="text-red-500">pemimpin</span>an</div>
                        {isMobile ?
                            (<DynamicHamburger toggled={isOpen} toggle={setOpen} size={20} />)
                            :
                            (
                                <ul className="flex gap-5 tab-nav">
                                    <Link href={'/'}><li className="hover:text-red-600">Home</li></Link>
                                    <Link href={'/awardee'}><li className="hover:text-red-600">Awardee</li></Link>
                                    <Link href={'/'}><li className="hover:text-red-600">Squads</li></Link>
                                    <Link href={'/'}><li className="hover:text-red-600">Moments</li></Link>
                                </ul>
                            )}
                    </div>
                </nav>
            </div>
        </>
    )
}
