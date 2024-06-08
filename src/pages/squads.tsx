import Head from "next/head";
import dynamic from "next/dynamic";
import { Merriweather } from "next/font/google";
import React, { useState } from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";

const Navbar = dynamic(() => import("@/component/navbar"), { ssr: false });
const Footer = dynamic(() => import("@/component/footer"), { ssr: false });

const Merri = Merriweather({
    subsets: ["latin"],
    weight: "700"
});

const options = [
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

export default function App() {
    const [selectedKey, setSelectedKey] = useState<string | number | null>(null);

    const handleAction = (key: string | number) => {
        setSelectedKey(key);
        alert(`Selected: ${key}`);
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
                    <div className="max-w-[300px] text-white mx-auto">
                        <Dropdown backdrop="blur">
                            <DropdownTrigger>
                                <Button
                                    variant="bordered"
                                    className="border-white border rounded-md p-2 hover:bg-[#E1D599] active:bg-[#E1D599]"
                                >
                                    Open Menu
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu variant="flat" aria-label="Static Actions" className="bg-dark p-3 text-white" onAction={handleAction}>
                                {options.map(option => (
                                    <DropdownItem
                                        key={option.value}
                                        className={`hover:bg-gray-100 ${selectedKey === option.value ? 'bg-gray-200' : ''}`}
                                    >
                                        {option.label}
                                    </DropdownItem>
                                ))}
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                    <div className="grid-image text-white w-full columns-1 md:columns-2 lg:columns-3">
                        {/* Content for the grid images */}
                    </div>
                </div>
                <Footer />
            </main>
        </>
    );
}
