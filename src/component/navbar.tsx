import Link from "next/link";
import { Merriweather } from "next/font/google";
const Merri = Merriweather({
    subsets: ["latin"],
    weight: "700"
});
export default function Navbar() {
    return (
        <nav className="w-full shadow-md">
            <div className={`w-100 h-[50px] bg-black text-center text-white font-bold flex items-center justify-center ${Merri.className}`}>Ksatiara 11</div>
            <div className="w-100 h-[50px] flex justify-between items-center px-5">
                <div className=" font-semibold">Rumah Ke<span className=" text-red-500">pemimpin</span>an</div>
                <div className="flex gap-5 tab-nav">
                    <Link href={'/'}>Home</Link>
                    <Link href={'/awardee'}>Awardee</Link>
                    <Link href={'/'}>Moments</Link>
                    <Link href={'/'}>Team</Link>
                </div>
            </div>
        </nav>
    )
}