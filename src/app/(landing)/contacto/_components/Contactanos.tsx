"use client";
import React, { useState } from "react";

const breeds = [
    "Beagle", "Bichón Frisé", "Bichón Maltes", "Bulldog Francés", "Bulldog Inglés",
    "Caniche", "Chihuahua", "Doberman", "Golden Retriever", "Husky Siberiano",
    "Jack Russell Terrier", "Labrador Retriever", "Pastor Alemán", "Pomerania",
    "Pug Carlino", "Rottweiler", "Salchicha", "Schnauzer Miniatura", "Shar Pei",
    "Shih Tzu", "West Highland White Terrier", "Yorkshire Terrier"
];

export default function Contactanos() {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        breed: breeds[0],
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aquí puedes manejar el envío del formulario
    };

    return (
        <section className="flex flex-col md:flex-col col-6 items-center justify-center py-12 px-4 md:px-0 max-w-5xl mx-auto">
            {/* Form */}
           <div>
             <h1 className="text-4xl font-bold text-green-700 text-center mb-4">Contáctanos</h1>
                <p className="text-gray-700 text-center mb-6">
                    ¿Deseas tener un cachorro en casa? Llena el formulario a continuación y con gusto te responderemos.<br />
                    También puedes escribirnos al WhatsApp 963 267 350.
                </p>
           </div>
            <div className="w-full flex flex-col md:flex-row bg-white rounded-lg shadow-lg p-8">
                {/* Form */}
                <div className="md:w-1/2 w-full">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Nombre y Apellido"
                                value={form.name}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                name="phone"
                                placeholder="Teléfono"
                                required
                                value={form.phone}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Correo electrónico"
                                required
                                value={form.email}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
                            />
                        </div>
                        <div>
                            <select
                                name="breed"
                                required
                                value={form.breed}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
                            >
                                {breeds.map((breed) => (
                                    <option key={breed} value={breed}>{breed}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <textarea
                                name="message"
                                rows={4}
                                placeholder="Mensaje"
                                value={form.message}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-green-700 text-white py-3 rounded-md hover:bg-green-800 transition font-semibold"
                            >
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
                {/* Image */}
                <div className="md:w-1/2 w-full flex justify-center items-center mt-8 md:mt-0 md:ml-8">
                    <img
                        src="https://mascotaspetskennel.com/wp-content/uploads/2023/02/formulario-foto.jpg"
                        alt="Formulario"
                        className="rounded-lg shadow-lg max-w-full h-auto"
                        width={400}
                        height={396}
                    />
                </div>
            </div>
            
            {/* Image */}
           
        </section>
    );
}