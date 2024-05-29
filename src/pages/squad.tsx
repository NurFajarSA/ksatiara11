import Head from "next/head";
import dynamic from "next/dynamic";
import { Merriweather } from "next/font/google";
import { useState, useEffect } from "react";
import Dropdown, { Option } from 'react-dropdown';
import 'react-dropdown/style.css';
import { photoArray } from "./api/dataSquad";
import Image from "next/image";

const Navbar = dynamic(() => import("@/component/navbar"), { ssr: false });
const Footer = dynamic(() => import("@/component/footer"), { ssr: false });

const Merri = Merriweather({
    subsets: ["latin"],
    weight: "700"
});

const options: Option[] = [
    { value: 'Ksatria 1', label: 'Ksatria 1' },
    { value: 'Ksatria 2', label: 'Ksatria 2' },
    { value: 'Ksatria 3', label: 'Ksatria 3' },
    { value: 'Ksatria 4', label: 'Ksatria 4' },
    { value: 'Tiara 1', label: 'Tiara 1' },
    { value: 'Tiara 2', label: 'Tiara 2' },
    { value: 'Tiara 3', label: 'Tiara 3' },
    { value: 'Tiara 4', label: 'Tiara 4' },
    { value: 'Tiara 5', label: 'Tiara 5' }
];
const defaultOption = options[0];

export default function Squads() {
    const [selectedOption, setSelectedOption] = useState<string>(defaultOption.value);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const onSelect = (option: Option) => {
        setSelectedOption(option.value);
        setIsLoading(true);
        console.log("Selected option:", option.value);
    };

    useEffect(() => {
        setIsLoading(false);
    }, [selectedOption]);

    const renderContent = () => {
        if (isLoading) {
            return <p>Loading...</p>;
        }

        switch (selectedOption) {
            case 'Ksatria 1':
                return (
                    <>
                        {photoArray.ksat1.map((photo) => (
                            <div key={photo.id} className="grid-item py-3">
                                <Image src={photo.url} alt={photo.alt} className="rounded-lg" />
                            </div>
                        ))}
                    </>
                );
            case 'Ksatria 2':
                return (
                    <>
                        {photoArray.ksat2.map((photo) => (
                            <div key={photo.id} className="grid-item py-3">
                                <Image src={photo.url} alt={photo.alt} className="rounded-lg" />
                            </div>
                        ))}
                    </>
                );
            case 'Ksatria 3':
                return (
                    <>
                        {photoArray.ksat3.map((photo) => (
                            <div key={photo.id} className="grid-item py-3">
                                <Image src={photo.url} alt={photo.alt} className="rounded-lg" />
                            </div>
                        ))}
                    </>
                );
            case 'Ksatria 4':
                return (
                    <>
                        {photoArray.ksat4.map((photo) => (
                            <div key={photo.id} className="grid-item py-3">
                                <Image src={photo.url} alt={photo.alt} className="rounded-lg" />
                            </div>
                        ))}
                    </>
                );
            case 'Tiara 1':
                return <p>Content for Tiara 1</p>;
            case 'Tiara 2':
                return (
                    <>
                        {photoArray.tiara2.map((photo) => (
                            <div key={photo.id} className="grid-item py-3">
                                <Image src={photo.url} alt={photo.alt} className="rounded-lg" />
                            </div>
                        ))}
                    </>
                );
            case 'Tiara 3':
                return <p>Content for Tiara 3</p>;
            case 'Tiara 4':
                return (
                    <>
                        {photoArray.tiara4.map((photo) => (
                            <div key={photo.id} className="grid-item py-3">
                                <Image src={photo.url} alt={photo.alt} className="rounded-lg" />
                            </div>
                        ))}
                    </>
                );
            case 'Tiara 5':
                return <p>Content for Tiara 5</p>;
            default:
                return <p>Select an option to see the content</p>;
        }
    };

    return (
        <>
            <Head>
                <title>The Awardees | Rumah Kepemimpinan</title>
            </Head>
            <main className="w-full">
                <Navbar />
                <div className="flex flex-col gap-5 px-3 py-10 w-full min-h-screen bg-black">
                    <h1 className={`mb-3 text-xl text-center md:text-[50px] font-bold text-[#E1D599] ${Merri.className}`}>THE SQUADS</h1>
                    <div className="max-w-[300px] text-white">
                        <h1>Search for : {selectedOption}</h1>
                        <Dropdown
                            options={options}
                            onChange={onSelect}
                            value={options.find(option => option.value === selectedOption)}
                            placeholder="Select an option"
                        />
                    </div>
                    <div className="grid-image text-white w-full columns-1 md:columns-2 lg:columns-3">
                        {renderContent()}
                    </div>
                </div>
                <Footer />
            </main>
        </>
    );
}
