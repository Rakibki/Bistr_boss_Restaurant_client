import React from 'react'
import Banner from './Banner'
import Gategory from './Gategory'
import BistroBoss from './BistroBoss'
import Menu from './Menu'
import Contact from './Contact'
import ChefRecommends from './ChefRecommends'
import FeaturedFood from './FeaturedFood'
import Testimonials from './Testimonials'

const Home = () => {
  return (
    <div>
      <Banner />
      <Gategory />
      <BistroBoss />
      <Menu />
      <Contact />
      <ChefRecommends />
      <FeaturedFood />
      <Testimonials />
    </div>
  )
}

export default Home