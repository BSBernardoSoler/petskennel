import React from 'react';
import Image from 'next/image';

const Compromiso = () => {
    return (
        <section className="py-16 px-52 bg-gray-50">
            <div className="container mx-auto">
                {/* Título principal */}
                <h1 className="text-4xl font-bold text-center mb-16 text-teal-600">
                    Nuestro compromiso
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Raza 100% pura */}
                    <div className="flex flex-col items-center text-center">
                        <div className="mb-6">
                            <Image
                                src="https://mascotaspetskennel.com/wp-content/uploads/2023/02/icon1.png"
                                alt="Raza 100% pura"
                                width={120}
                                height={120}
                                className="w-30 h-30 object-contain"
                                priority
                            />
                        </div>
                        <h2 className="text-xl font-semibold mb-4 text-teal-600 animate-slideInUp">
                            Raza 100% pura
                        </h2>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Entregamos al cachorro delante de sus padres.
                        </p>
                    </div>

                    {/* Crianza ética */}
                    <div className="flex flex-col items-center text-center">
                        <div className="mb-6">
                            <Image
                                src="https://mascotaspetskennel.com/wp-content/uploads/2023/02/icon2.png"
                                alt="Crianza ética"
                                width={120}
                                height={120}
                                className="w-30 h-30 object-contain"
                                loading="lazy"
                            />
                        </div>
                        <h2 className="text-xl font-semibold mb-4 text-teal-600 animate-slideInUp">
                            Crianza ética
                        </h2>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Respetamos su ciclo estral siguiendo la naturaleza animal.
                        </p>
                    </div>

                    {/* Cuidados con amor */}
                    <div className="flex flex-col items-center text-center">
                        <div className="mb-6">
                            <Image
                                src="https://mascotaspetskennel.com/wp-content/uploads/2023/02/icon3.png"
                                alt="Cuidados con amor"
                                width={120}
                                height={120}
                                className="w-30 h-30 object-contain"
                                loading="lazy"
                            />
                        </div>
                        <h2 className="text-xl font-semibold mb-4 text-teal-600 animate-slideInUp">
                            Cuidados con amor
                        </h2>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Estamos al pendiente de su salud y bienestar.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Compromiso;