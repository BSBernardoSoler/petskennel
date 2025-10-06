import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";



export const metadata: Metadata = {
  title: "PetsKennel-Mascotas Pets Kennel",
  description: "Encuentra tu compañero ideal en PetsKennel. Ofrecemos una amplia variedad de cachorros adorables y saludables, listos para llenar tu hogar de amor y alegría.",
   icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        
      >
        <Nav />
          {children}
     
        <Footer />
      </body>
      
        
     
    </html>
  );
}
