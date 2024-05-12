import { profile } from "../api/data";
import { useRouter } from 'next/router'
import Image from "next/image";
import dynamic from "next/dynamic";
import { useState } from "react";
import { useMediaQuery } from 'react-responsive';
import { Merriweather } from "next/font/google";
import Head from "next/head";

const Merri = Merriweather({
    subsets: ["latin"],
    weight: "700"
});

const Navbar = dynamic(() => import("@/component/navbar"), { ssr: false });
const Footer = dynamic(() => import("@/component/footer"), { ssr: false })

export default function Page() {
    const router = useRouter();
    const { slug } = router.query;

    const data = profile.find(item => item.nickname === slug);

    if (!data) {
        return <div>Data not found</div>;
    }

    return (
        <>
            <Head>
                <title>{data.nickname} | Ksatiara 11</title>
            </Head>
            <Navbar />
            <main className="px-5 flex flex-col gap-10 pb-10">
                <div className="w-full flex-row md:flex">
                    <div className="w-full py-10 text-center md:text-start">
                        <h1 className={`text-[20px] md:text-[35px] font-bold ${Merri.className}`}>{data.name}</h1>
                        <h2>{data.dream}</h2>
                    </div>
                    <div className="w-full">
                        <Image src={data?.image} alt={data?.nickname} />
                    </div>
                </div>
                <div className="w-full flex flex-col md:flex-row gap-5">
                    <div className="w-full flex flex-col gap-10">
                        <div className="birth">
                            <div className="font-bold border-b border-black">Date of birth</div>
                            <div>{data.birth}</div>
                        </div>
                        <div className="about">
                            <div className="font-bold border-b border-black">About</div>
                            <div>{data.about}</div>
                        </div>
                        <div className="education">
                            <div className="font-bold border-b border-black">Education</div>
                            <div>{data.education}</div>
                        </div>
                        {/* <div className="achievement">
                            <div className="font-bold border-b border-black">Achievements</div>
                            <ol className="flex flex-col gap-3">
                                <li>• {data.achievement1}</li>
                                <li>• {data.achievement2}</li>
                                <li>• {data.achievement3}</li>
                            </ol>
                        </div> */}
                        <div className="message">
                            <div className="font-bold border-b border-black">Message</div>
                            <div>{data.message}</div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col justify-center items-center gap-10 font-bold">
                        <h1>{data.nickname}'s moments</h1>
                        <div className="w-[250px] h-[300px] bg-[#D9D9D9]"></div>
                        <div className="w-[250px] h-[300px] bg-[#D9D9D9]"></div>
                        <div className="w-[250px] h-[300px] bg-[#D9D9D9]"></div>
                    </div>
                </div>
                {
                    (data.visdream === "null") ?
                        <></> :
                        <>
                            <div className="visualisasi_mimpi text-center md:text-start w-full flex flex-col gap-5 font-bold">
                                <h1>{data.nickname}'s dream visualization</h1>
                                {/* <div className=" vismim rounded-lg " dangerouslySetInnerHTML={{ __html: data.visdream }} /> */}
                                <div className="vismim w-full max-w-[560px] h-[315px] rounded-md">
                                    {data.visdream}
                                </div>
                            </div>
                        </>
                }
            </main>
            <Footer />
        </>
    )
}
