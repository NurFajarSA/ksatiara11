import Image from "next/image";
import Head from "next/head";
import { Merriweather } from "next/font/google";
import hero from "/public/images/fotbar/fotbar.JPG";
import ksatria from "/public/images/fotbar/ksatria.JPG"
import tiara from "/public/images/fotbar/tiara.JPG"
import amazingrace from "/public/images/fotbar/amazingRace.png"
import itikaf from "/public/images/fotbar/itikaf.jpg"
import rihlah from "/public/images/fotbar/rihlah-crop.jpg"
import NLC from "/public/images/fotbar/NLC.JPG"
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
          <h1 className="font-semibold text-dark text-[40px]">The Home Where We Grew Together</h1>
          <p className="text-[22px]">"Live with the giants!"</p>
        </div>
        <div className="w-full p-[20px] md:p-[90px] flex flex-col md:flex-row justify-center items-center gap-[60px] md:gap-[50px]">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <Image className="rounded-t-lg" src={ksatria} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <Image className="rounded-t-lg" src={tiara} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center p-5">
          <div className="border-t border-t-black flex flex-col w-full py-10 gap-5">
            <h1 className=" font-semibold">HIGHLIGHTED MOMENTS</h1>
            <div className="moments flex flex-col md:flex-row w-full gap-2 ">
              <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <Image className="rounded-t-lg h-64 object-cover" src={amazingrace} alt="" />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Amazing Race Part 1 & 2</h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
              </div>
              <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <Image className="rounded-t-lg h-64 object-cover" src={rihlah} alt="" />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Rihlah Ksatria & Tiara</h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
              </div>
              <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <Image className="rounded-t-lg h-64 object-cover" src={NLC} alt="" />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">National Leadership Camp</h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
              </div>
              <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <Image className="rounded-t-lg h-64 object-cover" src={itikaf} alt="" />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Ramadhan I'tikaf</h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
              </div>
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
