import React from "react";
import Card from "./Card";

interface Pet {
    imageUrl: string;
    category: string;
    title: string;
    onReadMore?: () => void;
}

interface PetsGridProps {
    title: string;
    pets: Pet[];
}

const PetsGrid: React.FC<PetsGridProps> = ({ title, pets }) => (
    <section>
        <div className="container mx-auto my-8 px-10 md:px-52">
            <h2
                className="text-4xl font-semibold mb-6 text-center text-[#00966B] font-montserrat"
            >
                {title}
            </h2>
            <div className="grid gap-6 grid-cols-1 sm:g rid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {pets.map((pet, idx) => (
                    <Card
                        key={idx}
                        imageUrl={pet.imageUrl}
                        category={pet.category}
                        title={pet.title}
                        onReadMore={pet.onReadMore}
                    />
                ))}
            </div>
        </div>
    </section>
);

export default PetsGrid;
