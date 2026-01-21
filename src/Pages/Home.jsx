import React from 'react'
import Hero from '../Components/Hero'
import Categories from '../Components/Categories'
import Products from '../Components/Products'
import { Box } from '@mui/material'

export default function Home() {
    return (
        <>
            <Hero />
            <Categories />
            <Products />
        </>
    )
}
