"use client"
import PetsGrid from '@/components/PetsGrid'
import React from 'react'

const pets = [
    {
        imageUrl: 'https://mascotaspetskennel.com/wp-content/uploads/2023/02/Bichon-Frise-3-300x300.png',
        category: 'Raza Pequeña',
        title: 'Bichón Frisé',
        onReadMore: () => console.log('Ver más sobre Bichón Frisé')
    },
    {
        imageUrl: 'https://mascotaspetskennel.com/wp-content/uploads/2023/02/Bichon-Maltes-3-300x300.png',
        category: 'Raza Pequeña',
        title: 'Bichón maltes',
        onReadMore: () => console.log('Ver más sobre Bichón maltes')
    },
    {
        imageUrl: 'https://mascotaspetskennel.com/wp-content/uploads/2023/02/Bulldog-Frances-1-300x300.png',
        category: 'Raza Pequeña',
        title: 'Bulldog Francés',
        onReadMore: () => console.log('Ver más sobre Bulldog Francés')
    },
    {
        imageUrl: 'https://mascotaspetskennel.com/wp-content/uploads/2023/02/Caniche-2-300x300.png',
        category: 'Raza Pequeña',
        title: 'Caniche',
        onReadMore: () => console.log('Ver más sobre Caniche')
    },
    {
        imageUrl: 'https://mascotaspetskennel.com/wp-content/uploads/2023/02/Chihuahua-4-300x300.png',
        category: 'Raza Pequeña',
        title: 'Chihuahua',
        onReadMore: () => console.log('Ver más sobre Chihuahua')
    },
    {
        imageUrl: 'https://mascotaspetskennel.com/wp-content/uploads/2023/02/Jack-Russell-Terrier-1-300x300.png',
        category: 'Raza Pequeña',
        title: 'Jack Russell Terrier',
        onReadMore: () => console.log('Ver más sobre Jack Russell Terrier')
    },
    {
        imageUrl: 'https://mascotaspetskennel.com/wp-content/uploads/2023/02/Pomerania-1-300x300.png',
        category: 'Raza Pequeña',
        title: 'Pomerania',
        onReadMore: () => console.log('Ver más sobre Pomerania')
    },
    {
        imageUrl: 'https://mascotaspetskennel.com/wp-content/uploads/2023/02/Pug-Carlino-1-300x300.png',
        category: 'Raza Pequeña',
        title: 'Pug Carlino',
        onReadMore: () => console.log('Ver más sobre Pug Carlino')
    },
    {
        imageUrl: 'https://mascotaspetskennel.com/wp-content/uploads/2023/02/Salchicha-1-300x300.png',
        category: 'Raza Pequeña',
        title: 'Salchicha',
        onReadMore: () => console.log('Ver más sobre Salchicha')
    },
    {
        imageUrl: 'https://mascotaspetskennel.com/wp-content/uploads/2023/02/Schnauzer-Miniatura-5-300x300.png',
        category: 'Raza Pequeña',
        title: 'Schnauzer Miniatura',
        onReadMore: () => console.log('Ver más sobre Schnauzer Miniatura')
    },
    {
        imageUrl: 'https://mascotaspetskennel.com/wp-content/uploads/2023/02/Shih-Tzu-4-300x300.png',
        category: 'Raza Pequeña',
        title: 'Shih Tzu',
        onReadMore: () => console.log('Ver más sobre Shih Tzu')
    },
    {
        imageUrl: 'https://mascotaspetskennel.com/wp-content/uploads/2023/02/Yorkshire-Terrier-5-300x300.png',
        category: 'Raza Pequeña',
        title: 'Yorkshire Terrier',
        onReadMore: () => console.log('Ver más sobre Yorkshire Terrier')
    }
];

export default function page() {
  return (
    
      <PetsGrid title="Raza Pequeña" pets={pets} />
  
  )
}
