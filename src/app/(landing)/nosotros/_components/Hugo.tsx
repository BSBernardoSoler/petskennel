import React from 'react';
import Image from 'next/image';

const Hugo = () => {
    return (
        <section className="w-full py-16 bg-gray-50 px-52">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Image Column */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative w-full h-[400px] lg:h-[500px]">
                            <Image
                                src="https://mascotaspetskennel.com/wp-content/uploads/2023/02/Nosotros-2-v2.jpg"
                                alt="Dr. Hugo Taboada con cachorros"
                                fill
                                className="object-cover rounded-lg shadow-lg"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                            />
                        </div>
                    </div>

                    {/* Text Column */}
                    <div className="w-full lg:w-1/2">
                        <div className="space-y-4">
                            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                                El Dr. Hugo Taboada es el mejor criador de perros del Perú. Gracias a su paciencia y cariño, 
                                mantiene a distintas razas de perros en su criadero de más de 5 mil metros cuadrados 
                                ambientados en Pachacamac. En ese amplio espacio, los cachorros son cuidados por un 
                                staff completo de criadores y veterinarios, desde su nacimiento hasta que son albergados 
                                en un hogar.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hugo;