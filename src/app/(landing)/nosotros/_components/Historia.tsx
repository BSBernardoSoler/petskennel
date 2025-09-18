import React from 'react';
import Image from 'next/image';

const Historia = () => {
    return (
        <section className="py-16 px-52">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-green-600 text-center mb-12">
                    Somos garantía de raza
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="animate-fade-in-left">
                        <div className="space-y-6">
                            <p className="text-gray-700 leading-relaxed">
                                En Pet's Kennel contamos con más de 30 años de experiencia en la crianza de ejemplares caninos de raza. Todos los padres tienen pedigree y son campeones importados. Todos los cachorros son entregados con una garantía de raza y un seguro veterinario gratis. Visítanos y te asesoraremos.
                            </p>
                            <h4 className="text-xl font-semibold text-green-600">
                                Te ayudaremos a elegir la raza que más se adapte a ti y a tu ritmo de vida.
                            </h4>
                        </div>
                    </div>
                    
                    <div className="animate-fade-in-right">
                        <div className="relative">
                            <Image
                                src="https://mascotaspetskennel.com/wp-content/uploads/2023/02/Nosotros-1.png"
                                alt="Pet's Kennel - Nosotros"
                                width={768}
                                height={433}
                                className="w-full h-auto rounded-lg shadow-lg"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Historia;