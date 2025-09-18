"use client"
import Image from "next/image";
import React from "react";

interface CardProps {
    imageUrl: string;
    category: string;
    title: string;
    onReadMore?: () => void;
}

const Card: React.FC<CardProps> = ({
    imageUrl = "",
    category = "Raza Pequeña",
    title = "Bichón Frisé",
    onReadMore,
}) => (
    <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center gap-2 ">
        <Image
            src={imageUrl}
            alt={title}
            width={300}
            height={300}
            className="w-[200px] h-[200px] object-cover rounded-2xl mt-2"
        />
        <div className="text-gray-400 text-sm font-normal text-center">
            {category}
        </div>
        <div className="text-[#159A7B] font-bold text-xl  text-center">
            {title}
        </div>
        <button
            onClick={onReadMore}
            className="bg-[#159A7B] text-white border-none rounded-3xl px-8 py-1 text-lg font-semibold cursor-pointer shadow-md shadow-[#159A7B]/10"
        >
            Read more
        </button>
    </div>
);

export default Card;
