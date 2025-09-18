"use client";
import Image from "next/image";
import React from "react";

const footerLinks = [
    { label: "Raza Pequeña", href: "/raza-pequena" },
    { label: "Raza Mediana", href: "/raza-mediana" },
    { label: "Raza Grande", href: "/raza-grande" },
    { label: "Nosotros", href: "/nosotros" },
    { label: "Contacto", href: "/contacto" },
];

export default function Footer() {
    return (
        <footer
            style={{
                background: "#fff",
                padding: "40px 0 0 0",
                width: "100%",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    maxWidth: 1400,
                    margin: "0 auto",
                    gap: 40,
                    paddingLeft: "10rem",
                    paddingRight: "10rem",
                }}
                className="footer-container"
            >
                {/* Logo & Description */}
                <div
                    style={{
                        flex: 1,
                        minWidth: 280,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        gap: 20,
                        marginBottom: 32,
                    }}
                >
                    {/* Logo */}
                    <div>
                        <Image
                            src="/images/pets-kennel-transparente-300x154.png"
                            alt="Pet's Kennel de Hugo Taboada"
                            width={200}
                            height={200}
                        />
                    </div>
                    {/* Description */}
                    <div style={{ maxWidth: 520 }}>
                        <p style={{ color: "#666", fontSize: 19, lineHeight: 1.4 }}>
                            Pets Kennel de Hugo Taboada cuenta con más de 30 años de experiencia en crianza de perros de 50 razas distintas. Ofrecemos selectos cachorros, con padre y madre presentes importados de los mejores criaderos del mundo.
                        </p>
                    </div>
                </div>
                {/* Links */}
                <div style={{ minWidth: 220, marginBottom: 32 }}>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                        {footerLinks.map((link, idx) => (
                            <li
                                key={link.label}
                                style={{
                                    borderBottom: idx < footerLinks.length - 1 ? "1px solid #e5e5e5" : "none",
                                    padding: "12px 0",
                                    fontSize: 16,
                                    color: "#666",
                                }}
                            >
                                <a
                                    href={link.href}
                                    style={{
                                        textDecoration: "none",
                                        color: "#666",
                                        fontWeight: 400,
                                    }}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* Bottom border */}
            <div style={{ borderTop: "6px solid #f2f2f2", marginTop: 40 }} />
            <style jsx>{`
                @media (max-width: 900px) {
                    .footer-container {
                        flex-direction: column !important;
                        gap: 32px !important;
                        align-items: stretch !important;
                        padding-left: 1rem !important;
                        padding-right: 1rem !important;
                    }
                }
                @media (max-width: 600px) {
                    .footer-container > div {
                        min-width: 0 !important;
                        max-width: 100% !important;
                    }
                    .footer-container {
                        padding-left: 0.5rem !important;
                        padding-right: 0.5rem !important;
                    }
                }
            `}</style>
        </footer>
    );
}