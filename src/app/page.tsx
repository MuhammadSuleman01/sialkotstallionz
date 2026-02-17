import Footer from '@/components/Footer'
import FeaturedPlayers from '@/LandingPage/FeaturedPlayers'
import Hero from '@/LandingPage/Hero'
import MediaPartners from '@/LandingPage/MediaPartners'
import Partners from '@/LandingPage/Partners'
import SocialSection from '@/LandingPage/SocialSection'
import Sponsers from '@/LandingPage/Sponsers'
import StallionzStore from '@/LandingPage/StallionzStore'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero />
      <FeaturedPlayers />
      <SocialSection />
      <StallionzStore />
      <Sponsers />
      <Partners />
      <MediaPartners />
    </div>
  )
}

export default page