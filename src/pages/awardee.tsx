import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Merriweather } from "next/font/google";
import akif from "/public/images/akif(1).jpg"
import mutia from "/public/images/kamute.png"
import { profile } from "./api/data"
import Head from "next/head";

const Merri = Merriweather({
    subsets: ["latin"],
    weight: "700"
});

const Navbar = dynamic(() => import("@/component/navbar"), { ssr: false });
const Footer = dynamic(() => import("@/component/footer"), { ssr: false })

export default function Awardee() {

    return (
        <>
            <Head>
                <title>The Awardees | Rumah Kepemimpinan</title>
            </Head>
            <main>
                <Navbar />
                <div className=" w-full bg-black py-3">
                    <div className="spv p-5 mx-5 flex flex-col justify-center items-center border-b border-[#E1D599]">
                        <h1 className={` mb-3 text-xl md:text-[50px] font-bold text-[#E1D599] ${Merri.className}`}>THE AWARDEES</h1>
                        <div className="w-full p-[20px] md:p-[90px] flex flex-col md:flex-row justify-center items-center gap-[60px] md:gap-[50px]">
                            <div className="max-w-sm text-white text-center bg-transparent hover:text-[#E1D599] shadow-2xl hover:shadow-[#E1D599]">
                                <a href="#" className="flex items-center justify-center w-[300px] h-[350px]">
                                    <div className="w-full h-full relative">
                                        <Image src={akif} layout="fill" objectFit="cover" alt='' />
                                    </div>
                                </a>
                                <div className="p-2">
                                    <div className="name mt-1">
                                        <div>Supervisor | Entrepreneur</div>
                                        <h1 className="font-bold text-[24px] md:text-[28px]">M AKIF THOLIBUL H</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="max-w-sm text-white text-center bg-transparent hover:text-[#E1D599] shadow-2xl hover:shadow-[#E1D599]">
                                <a href="#" className="flex items-center justify-center w-[300px] h-[350px]">
                                    <div className="w-full h-full relative">
                                        <Image src={mutia} layout="fill" objectFit="cover" alt='' />
                                    </div>
                                </a>
                                <div className="p-2">
                                    <div className="name mt-1">
                                        <div>Supervisor | Entrepreneur</div>
                                        <h1 className="font-bold text-[24px] md:text-[28px]">MUTIA AZIZAH</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ksatiara min-h-[500px] w-full mt-5 p-5">
                        <div className="profile-wrap grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-items-center">
                            {
                                profile.map((data, index) => (
                                    <div key={index} className="relative w-full max-w-[270px] h-[230px] md:h-[330px] text-white text-center hover:text-[#E1D599] shadow-2xl hover:shadow-[#E1D599] cursor-pointer">
                                        <Link href={`/awardee/${data.nickname}`} passHref>
                                            <div className="w-full shadow-md">
                                                <Image src={data.image} layout="fill" objectFit="cover" alt="mutia foto" />
                                            </div>
                                        </Link>
                                        <div className="absolute w-full bottom-0 name mt-1 bg-black opacity-80 py-2">
                                            <div className="text-[10px] md:text-[14px]">{data.role} | {data.mainDream}</div>
                                            <h1 className="font-bold text-[10px] md:text-[16px]">{data.name}</h1>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <Footer />
            </main >
        </>
    )
}
