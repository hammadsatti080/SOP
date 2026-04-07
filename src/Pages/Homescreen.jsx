import React from 'react'
import Homepage from '../Component/Homescreen/Homepage'
import AboutSection from '../Component/Homescreen/About/AboutSection'
import ServicesSection from '../Component/Homescreen/Services/ServicesSection'
import FeaturesSection from '../Component/Homescreen/Features/FeaturesSection'
import TestimonialsSection from '../Component/Homescreen/Testimonial/TestimonialsSection'
import FAQS from '../Component/Homescreen/FAQ/FAQS'


export default function Homescreen() {
  return (
    <div>
      <Homepage/>
       <AboutSection/>
       <ServicesSection/>
       <FeaturesSection/>
    <TestimonialsSection/>
     <FAQS/>

    </div>
  )
}
