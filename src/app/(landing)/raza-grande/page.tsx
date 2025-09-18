"use client"
import PetsGrid from '@/components/PetsGrid'
import React from 'react'

const pets = [
    {
        imageUrl: 'https://mascotaspetskennel.com/wp-content/uploads/2023/02/Doberman-1-300x300.png',
        category: 'Perro',
        title: 'Doberman',
        onReadMore: () => console.log('Ver más sobre Doberman')
    },
    {
        imageUrl: 'https://mascotaspetskennel.com/wp-content/uploads/2023/02/Golden-Retriever-10-300x300.png',
        category: 'Perro',
        title: 'Golden Retriever',
        onReadMore: () => console.log('Ver más sobre Golden Retriever')
    },
    {
        imageUrl: 'https://mascotaspetskennel.com/wp-content/uploads/2023/02/Husky-Siberiano-1-300x300.png',
        category: 'Perro',
        title: 'Husky Siberiano',
        onReadMore: () => console.log('Ver más sobre Husky Siberiano')
    },
    {
        imageUrl: 'https://mascotaspetskennel.com/wp-content/uploads/2023/02/Labrador-Retriever-4-300x300.png',
        category: 'Perro',
        title: 'Labrador Retriever',
        onReadMore: () => console.log('Ver más sobre Labrador Retriever')
    }
];

export default function page() {
  return (
    
      <PetsGrid title="Raza Grande" pets={pets} />
  
  )
}
