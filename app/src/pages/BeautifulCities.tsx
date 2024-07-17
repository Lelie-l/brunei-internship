import React from 'react'
import { BeautifulCitiesC } from '../components/BeautifulCitiesC'
import CreateNavigation from '../components/navigator/Navigation'
const BeautifulCities = () => {
  return (
    <div>
        <div className = "bodytext" style = {{alignItems:'center',backgroundImage: 'url(https://images.squarespace-cdn.com/content/v1/5e72c8bfe21ad940ba788673/1621088501890-G9PLJ8QNZCSX4JSVTK4D/kampong-ayer-top-image.jpg)'}}>
        <h1 style = {{fontSize:'40px'}}>Beautiful Cities</h1>
        </div>
        <CreateNavigation/>

    <BeautifulCitiesC/>
    </div>
  )
}

export default BeautifulCities