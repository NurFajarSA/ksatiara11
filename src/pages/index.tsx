import Image from "next/image";
import Head from "next/head";
import { Merriweather } from "next/font/google";
import hero from "/public/images/hero..jpg";
import akif from "/public/images/akif.jpg"
import mutia from "/public/images/kamute.png"
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useMediaQuery } from 'react-responsive';
import Link from "next/link";

const DynamicHamburger = dynamic(() => import('hamburger-react').then(mod => mod.Sling), { ssr: false });
const Footer = dynamic(() => import("@/component/footer"), { ssr: false })

const Merri = Merriweather({
  subsets: ["latin"],
  weight: "700"
});

export default function Home() {
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
      <Head>
        <title>Ksatiara Forbes 30 Under 30</title>
      </Head>
      <main className='flex min-h-screen flex-col'>
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
        <div className="flex justify-center items-center flex-col gap-1 md:gap-5 mt-5 md:mt-10 mb-3 text-center">
          <h1 className={` text-xl text-[20px] md:text-[50px] px-2 font-bold ${Merri.className}`}>THE FUTURE FORBES 30 UNDER 30</h1>
          <div className="text-sm ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          <div>Logo</div>
        </div>
        <div className="w-full mt-2 md:mt-10">
          <Image src={hero} layout="responsive" width={100} height={500} className=" object-cover" alt="hero element" />
        </div>
        <div className="flex flex-col justify-center items-center w-full text-center py-[100px]">
          <h1 className="font-semibold text-[40px]">The Home Where We Grew Together</h1>
          <p className="text-[22px]">"Live with the giants!"</p>
        </div>
        <div className="w-full p-[20px] md:p-[90px] flex flex-col md:flex-row justify-center items-center gap-[60px] md:gap-[50px]">
          <div className="max-w-sm text-black text-center shadow-2xl dark:bg-gray-800 dark:border-gray-700 hover:text-[#E1D599] hover:shadow-[#E1D599]">
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
          <div className="max-w-sm text-black text-center bg-transparent hover:text-[#E1D599] shadow-2xl hover:shadow-[#E1D599]">
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
        <div className="w-full flex justify-center items-center p-5">
          <div className="border border-t-black flex flex-col w-full py-10 gap-5">
            <h1 className=" font-semibold">HIGHLIGHTED MOMENTS</h1>
            <div className="flex gap-10 ">
              <div className="h-[200px] w-full max-w-[200px] border border-black"></div>
              <div className="h-[200px] w-full max-w-[200px] border border-black"></div>
              <div className="h-[200px] w-full max-w-[200px] border border-black"></div>
              <div className="h-[200px] w-full max-w-[200px] border border-black"></div>
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
        <Footer />
      </main>
    </>
  );
}
