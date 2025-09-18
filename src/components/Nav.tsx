"use client";
import Image from "next/image";
import React from "react";
import { Phone } from "lucide-react";
import { AiOutlineTikTok } from 'react-icons/ai';
import { BiLogoFacebookCircle } from 'react-icons/bi';
import { BiLogoYoutube } from 'react-icons/bi';
import { BiLogoInstagram } from 'react-icons/bi';
import { BiLogoWhatsapp } from 'react-icons/bi';
import Link from "next/link";
import { usePathname } from "next/navigation";
const navLinks = [
    { label: "Raza Pequeña", active: false , href: "/raza-pequena" },
    { label: "Raza Mediana", active: false, href: "/raza-mediana" },
    { label: "Raza Grande", active: false, href: "/raza-grande" },
];

const socialIcons = [
    { icon: "facebook", url: "#" },
    { icon: "instagram", url: "#" },
    { icon: "youtube", url: "#" },
    { icon: "tiktok", url: "#" },
];

const phoneNumbers = [
    { icon: "whatsapp", number: "963 267 350" },
    { icon: "whatsapp", number: "998 550 545" },
    { icon: "call", number: "(01) 435 6578" },
];

const Nav = () => {
    const pathname = usePathname();
    console.log("Current pathname:", pathname);
    return (
        <div className="font-[Montserrat]">
            {/* Banner */}
            <div className="bg-[#00996D] text-white flex flex-col md:flex-row items-center justify-between px-4 md:px-12 lg:px-24 py-2 text-sm gap-2">
                <div className="flex items-center gap-2 text-center md:text-left">
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-base" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 21c-6.16-7.19-8-10.13-8-13A8 8 0 0 1 20 8c0 2.87-1.84 5.81-8 13z"/>
                        <circle cx="12" cy="8" r="3"/>
                    </svg>
                </span>
                <span className="hidden sm:inline">
                    Av. Primavera 1289, Santiago de Surco (Lima – Perú).
                </span>
            </div>
            <div className="flex items-center gap-4 flex-wrap justify-center mt-2 md:mt-0">
                {phoneNumbers.map((p, i) => (
                    <span key={i} className="flex items-center gap-1">
                        <span className="material-icons text-base">
                            {p.icon === "whatsapp" ? <BiLogoWhatsapp /> : <Phone />}
                        </span>
                        {p.number}
                    </span>
                ))}
            </div>
        </div>
        {/* Nav */}
        <nav className="flex flex-col md:flex-row items-center justify-between px-4 md:px-12 lg:px-24 py-4 bg-white gap-4">
            {/* Logo */}
            <Link href={"/"}>
            <div className="flex items-center gap-4 mb-2 md:mb-0">
                <Image
                    src="/images/pets-kennel-transparente-300x154.png"
                    alt="Pet's Kennel Logo"
                    width={150}
                    height={150}
                    className="object-contain"
                />
            </div>
            </Link>
            {/* Search */}
            <div className="flex-1 flex justify-center mb-2 md:mb-0 mx-2 w-full max-w-md">
                <div className="flex items-center bg-[#ededed] rounded-full px-4 py-2 w-full">
                    <span className="text-[#222]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                    </span>
                    <input
                        type="text"
                        placeholder="Buscar..."
                        className="bg-transparent outline-none ml-2 w-full text-[#666] font-medium"
                        style={{ fontFamily: "Montserrat" }}
                    />
                </div>
            </div>
            {/* Links & Social */}
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 w-full md:w-auto">
                <div className="flex gap-4 md:gap-8 justify-center">
                    {navLinks.map((link, i) => (
                        <Link href={link.href} key={i}>
                        <div key={i} className="flex flex-col items-center group">
                            <span
                                className={`text-[#00996D] font-semibold text-base md:text-md cursor-pointer`}
                                style={{ fontFamily: "Montserrat" }}
                            >
                                {link.label}
                            </span>
                            {pathname === link.href && (
                                <span className="w-16 md:w-25 h-1 bg-[#F37A8E] rounded mt-1" />
                            )}
                            {pathname != link.href && (<span className="w-16 md:w-25 h-1 bg-[#F37A8E] rounded mt-1 hidden group-hover:block" />) }
                        </div>
                        </Link>
                    ))}
                </div>
                <div className="flex gap-2 md:gap-4 mt-2 md:mt-0 justify-center">
                    {socialIcons.map((icon, i) => (
                        <a
                            key={i}
                            href={icon.url}
                            className="bg-[#00996D] rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="material-icons text-white text-xl md:text-2xl">
                                {icon.icon === "facebook"
                                    ? <BiLogoFacebookCircle />
                                    : icon.icon === "instagram"
                                    ? <BiLogoInstagram />
                                    : icon.icon === "youtube"
                                    ? <BiLogoYoutube />
                                    : <AiOutlineTikTok />}
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </nav>
        <style jsx>{`
            @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');
            .material-icons {
                font-family: 'Material Icons';
                font-style: normal;
                font-weight: normal;
                font-size: 24px;
                line-height: 1;
                letter-spacing: normal;
                text-transform: none;
                display: inline-block;
                white-space: nowrap;
                direction: ltr;
                -webkit-font-feature-settings: 'liga';
                -webkit-font-smoothing: antialiased;
            }
        `}</style>
    </div>
);};

export default Nav;
