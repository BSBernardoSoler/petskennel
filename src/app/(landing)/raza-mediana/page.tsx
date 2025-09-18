"use client"
import PetsGrid from '@/components/PetsGrid'
import React from 'react'

const pets = [
    {
        imageUrl: 'https://mascotaspetskennel.com/wp-content/uploads/2023/02/Beagle-2-300x300.png',
        category: 'Perro',
        title: 'Beagle',
        onReadMore: () => console.log('Ver más sobre Beagle')
    },
    {
        imageUrl: 'https://mascotaspetskennel.com/wp-content/uploads/2023/02/Bulldog-ingles-1-300x300.png',
        category: 'Perro',
        title: 'Bulldog Inglés',
        onReadMore: () => console.log('Ver más sobre Bulldog Inglés')
    },
    {
        imageUrl: 'https://mascotaspetskennel.com/wp-content/uploads/2023/02/Shar-pei-1-300x300.png',
        category: 'Perro',
        title: 'Shar Pei',
        onReadMore: () => console.log('Ver más sobre Shar Pei')
    },
    {
        imageUrl: 'https://mascotaspetskennel.com/wp-content/uploads/2023/02/West-Highland-White-Terrier-5-300x300.png',
        category: 'Perro',
        title: 'West Highland White Terrier',
        onReadMore: () => console.log('Ver más sobre West Highland White Terrier')
    }
];

export default function page() {
  return (
  
      <PetsGrid title="Raza Mediana" pets={pets} />
    
  )
}
