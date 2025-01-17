import Image from "next/image";
import Head from "next/head";
import { Merriweather } from "next/font/google";
import amazingrace from "/public/images/fotbar/amazingRace.png"
import itikaf from "/public/images/fotbar/itikaf.jpg"
import rihlah from "/public/images/fotbar/rihlah-crop.jpg"
import hero from "/public/images/fotbar/fotbar..png"
import ksatria from "/public/images/fotbar/ksatria.png"
import tiara from "/public/images/fotbar/tiara.png"
import NLC from "/public/images/fotbar/NLC.png"
import livingyou from "/public/images/fotbar/livewithYou.jpg"
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
        {navFixed ? (
          <div className="flex flex-col fixed w-full z-50 transition-all duration-300 ease-in-out">
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
                      <Link href={'/squad'}><li className="hover:text-red-600">Squads</li></Link>
                      <Link href={'/'}><li className="hover:text-red-600">Moments</li></Link>
                    </ul>
                  )}
              </div>
            </nav>
            {isOpen &&
              <div className="w-full p-5 h-screen bg-white">
                <ul className="flex flex-col gap-5 tab-nav">
                  <Link href={'/'}><li className="hover:text-red-600">Home</li></Link>
                  <Link href={'/awardee'}><li className="hover:text-red-600">Awardee</li></Link>
                  <Link href={'/squad'}><li className="hover:text-red-600">Squads</li></Link>
                  <Link href={'/'}><li className="hover:text-red-600">Moments</li></Link>
                </ul>
              </div>
            }
          </div>
        ) : (
          <div className="flex flex-col fixed z-20 w-full">
            <nav className="w-full">
              <div className={`flex bg-transparent w-full h-[60px] justify-between items-center px-5`}>
                <div className="font-semibold text-white">Rumah Ke<span className="text-white">pemimpin</span>an</div>
                {isMobile ?
                  (<DynamicHamburger toggled={isOpen} toggle={setOpen} size={20} color="transparent" />)
                  :
                  (
                    <ul className="flex gap-5 tab-nav text-white">
                      <Link href={'/'}><li className="hover:text-[#E1D599]">Home</li></Link>
                      <Link href={'/awardee'}><li className="hover:text-[#E1D599]">Awardee</li></Link>
                      <Link href={'/squad'}><li className="hover:text-[#E1D599]">Squads</li></Link>
                      <Link href={'/'}><li className="hover:text-[#E1D599]">Moments</li></Link>
                    </ul>
                  )}
              </div>
            </nav>
            {isOpen &&
              <div className="w-full p-5 h-screen bg-white">
                <ul className="flex flex-col gap-5 tab-nav">
                  <Link href={'/'}><li className="hover:text-red-600">Home</li></Link>
                  <Link href={'/awardee'}><li className="hover:text-red-600">Awardee</li></Link>
                  <Link href={'/squads'}><li className="hover:text-red-600">Squads</li></Link>
                  <Link href={'/'}><li className="hover:text-red-600">Moments</li></Link>
                </ul>
              </div>
            }
          </div>
        )
        }
        <div className="relative h-screen w-full">
          <Image src={hero} className="absolute inset-0 w-full h-full object-cover filter" alt='hero' />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 text-center px-3">
            <h1 className={`hidden md:flex text-xl text-[30px] md:text-[50px] font-bold z-20 text-white ${Merri.className}`}>
              THE FUTURE <span className='text-[#E1D599] font-semibold' style={{ marginLeft: '0.25rem', marginRight: '0.25rem' }}>FORBES 30 UNDER 30</span>
            </h1>
            <h1 className={`flex md:hidden text-[#E1D599] text-[30px] ${Merri.className}`}>THE FUTURE FORBES 30 UNDER 30</h1>
            <p className="text-xl text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full text-center py-[100px]">
          <h1 className="font-semibold text-dark text-[40px]">The Home Where <span className='text-[#0066B2] font-semibold'>We Grew</span> Together</h1>
          <p className="text-[22px]">We live with the value.</p>
        </div>
        <div className="value grid grid-cols-3 md:flex text-center text-white">
          <div className="w-full h-[300px] bg-[#0066B2]">
            <h1 className="text-[32px] p-5">R</h1>
            <div className="text-[21px]">Rendah Hati</div>
            <div>lorem ipsum</div>
          </div>
          <div className="w-full h-[300px] bg-[#0c81da]">
            <h1 className="text-[32px] p-5">O</h1>
            <div className="text-[21px]">Objective</div>
            <div>Lorem ipsum</div>
          </div>
          <div className="w-full h-[300px]  bg-[#0e8eef]">
            <h1 className="text-[32px] p-5">O</h1>
            <div className="text-[21px]">Open-mind</div>
            <div>Lorem ipsum</div>
          </div>
          <div className="w-full h-[300px] bg-[#E1D599]">
            <h1 className="text-[32px] p-5">M</h1>
            <div className="text-[21px]">Moderat</div>
            <div>Lorem ipsum</div>
          </div>
          <div className="w-full h-[300px] bg-[#e4d172]">
            <h1 className="text-[32px] p-5">P</h1>
            <div className="text-[21px]">Prestatif</div>
            <div>Lorem ipsum</div>
          </div>
          <div className="w-full h-[300px] bg-[#e3cb55]">
            <h1 className="text-[32px] p-5">k</h1>
            <div className="text-[21px]">Kontributif</div>
            <div>Lorem ipsum</div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full text-center py-[100px]">
          <h1 className="font-semibold text-dark text-[40px]">We Do<span className='text-[#0066B2] font-semibold'> a Process </span>Together</h1>
          <p className="text-[22px]">We try together, we fail together, then we learn together.</p>
        </div>
        <div className="relative h-screen w-full">
          <Image src={livingyou} alt="" className="absolute inset-0 w-full h-full object-cover filter" />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center md:h-[200px] md:w-[320px] p-5 text-center md:bg-white bg-opacity-90 rounded-md md:ml-10 md:mt-10">
            <h1 className="text-[32px] text-[#0e8eef] font-bold">Living with you</h1>
            <p className="text-lg text-white md:text-black mt-4">Is a beautiful blessing I've ever get.</p>
          </div>
        </div>
        <div className="w-full p-[20px] md:p-[90px] flex flex-col md:flex-row justify-center items-center gap-[60px] md:gap-[50px]">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <a href="#">
              <Image className="rounded-t-lg" src={ksatria} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Noteworthy technology acquisitions 2021</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-gray-900 focus:ring-4 focus:outline-none">
                Read more
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <a href="#">
              <Image className="rounded-t-lg" src={tiara} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Noteworthy technology acquisitions 2021</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-gray-900 focus:ring-4 focus:outline-none">
                Read more
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center p-5">
          <div className="border-t border-t-black flex flex-col w-full py-10 gap-5">
            <h1 className=" font-semibold">HIGHLIGHTED MOMENTS</h1>
            <div className="moments flex flex-col md:flex-row w-full gap-2 ">
              <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                <a href="#">
                  <Image className="rounded-t-lg h-64 object-cover" src={amazingrace} alt="" />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">Amazing Race Part 1 & 2</h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
              </div>
              <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                <a href="#">
                  <Image className="rounded-t-lg h-64 object-cover" src={rihlah} alt="" />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">Rihlah Ksatria & Tiara</h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
              </div>
              <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                <a href="#">
                  <Image className="rounded-t-lg h-64 object-cover" src={NLC} alt="" />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">National Leadership Camp</h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
              </div>
              <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                <a href="#">
                  <Image className="rounded-t-lg h-64 object-cover" src={itikaf} alt="" />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">Ramadhan I'tikaf</h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-black text-white px-5 p-10 ">
          <h1 className="text-[28px]">So, Who We Are?</h1>
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
