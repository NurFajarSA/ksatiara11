import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import Head from "next/head";
import { Merriweather } from "next/font/google";
import hero from "/public/images/hero..jpg";
import akif from "/public/images/akif.jpg"
import mutia from "/public/images/kamute.png"
import { useState } from "react";
import { useMediaQuery } from 'react-responsive';

const Merri = Merriweather({
  subsets: ["latin"],
  weight: "700"
});

const DynamicHamburger = dynamic(() => import('hamburger-react').then(mod => mod.Sling), { ssr: false });

export default function Home() {
  const [isOpen, setOpen] = useState(false)
  const isMobile = useMediaQuery({ maxWidth: 950 });
  return (
    <>
      <Head>
        <title>Ksatiara Forbes 30 Under 30</title>
      </Head>
      <main className='flex min-h-screen flex-col'>
        <nav className="w-full shadow-md">
          <div className={`w-100 h-[50px] bg-black text-center text-white font-bold flex items-center justify-center ${Merri.className}`}>Ksatiara 11</div>
          <div className="w-100 h-[50px] flex justify-between items-center px-5">
            <div className=" font-semibold">Rumah Ke<span className=" text-red-500">pemimpin</span>an</div>
            {isMobile ?
              (<DynamicHamburger toggled={isOpen} toggle={setOpen} size={20} />)
              :
              (
                <div className="flex gap-5 tab-nav">
                  <Link className=" hover:text-red-600" href={'/'}>Home</Link>
                  <Link className=" hover:text-red-600" href={'/awardee'}>Awardee</Link>
                  <Link className=" hover:text-red-600" href={'/'}>Squads</Link>
                  <Link className=" hover:text-red-600" href={'/'}>Moments</Link>
                </div>
              )
            }
          </div>
        </nav>
        <div className="flex justify-center items-center flex-col gap-1 md:gap-5 mt-10 mb-3">
          <h1 className={` text-xl md:text-[50px] font-bold ${Merri.className}`}>THE FUTURE FORBES 30 UNDER 30</h1>
          <div className="text-sm ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          <div>Logo</div>
        </div>
        <div className="w-full mt-2 md:mt-10">
          <Image src={hero} layout="responsive" width={100} height={500} className=" object-cover" alt="hero element" />
        </div>
        <div className="w-full p-[80px] flex flex-col md:flex-row justify-center items-center gap-[100px]">
          <div className="relative w-full max-w-[300px] h-[350px] shadow-md ">
            <Image src={akif} layout="fill" objectFit="cover" alt="akif foto" />
          </div>
          <div className="relative w-full max-w-[300px] h-[350px] shadow-md">
            <Image src={mutia} layout="fill" objectFit="cover" alt="mutia foto" />
          </div>
        </div>
        <div className="w-full flex justify-center items-center p-5">
          <div className="border border-t-black flex flex-col w-full py-10 gap-5">
            <h1 className=" font-semibold">HIGHLIGHTED MOMENTS</h1>
            <div className="flex gap-10 ">
              <div className="h-[200px] w-[200px] border border-black"></div>
              <div className="h-[200px] w-[200px] border border-black"></div>
              <div className="h-[200px] w-[200px] border border-black"></div>
              <div className="h-[200px] w-[200px] border border-black"></div>
            </div>
          </div>
        </div>
        <div className="w-full bg-black text-white px-5 p-10 ">
          <h1>About Us</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget justo eget justo malesuada scelerisque. Ut commodo velit et eros ullamcorper, nec fermentum magna interdum. Nullam non fringilla lacus. Duis eu turpis quis justo pulvinar efficitur. Integer viverra tortor eu leo pulvinar, at aliquam lectus convallis.
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed aliquam metus eget nulla consectetur, id rutrum purus commodo. Nulla facilisi. Sed vel purus luctus, consequat lorem eget, sollicitudin sapien. Proin viverra consequat arcu, vel consectetur purus feugiat at. Vivamus bibendum, neque non fermentum vehicula, sem tortor blandit elit, eu fermentum velit risus in eros.
            Integer vitae ligula eu nulla posuere pretium. Sed id posuere mauris. In hac habitasse platea dictumst. Curabitur ut dolor eu lacus luctus bibendum. Nunc non tincidunt dolor. Ut faucibus gravida mi eget molestie. Sed at est non ligula venenatis volutpat. Vivamus eget elit nec justo vulputate lacinia. Maecenas vehicula, velit vitae fermentum efficitur, lectus leo tristique lorem, vitae eleifend orci metus vel felis.
          </p>
        </div>
        <footer className="w-full">
          <div className="w-full flex flex-col justify-center items-center border border-black">
            <div className=" p-3 border-b-2 border-black">Ksatiara 11</div>
            <div className=" p-2">©2024 Rumah Kepemimpinan Regional 1 Jakarta</div>
          </div>
        </footer>
      </main>
    </>
  );
}
