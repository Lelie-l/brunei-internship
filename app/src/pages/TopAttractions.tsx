import React from 'react'
import { TopAttractionsC } from '../components/TopAttractionsC'
import CreateNavigation from '../components/navigator/Navigation'
import '../style/secondary-page.css'

const TopAttractions = () => {
  return (
    <div>
      <div className = "bodytext" style = {{alignItems:'center',backgroundImage: 'url(https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1577454517/bitsxokn1visre3foklw.jpg)'}}>
        <h1 style = {{fontSize:'40px'}}>Top Attractions</h1>
      </div>
      <CreateNavigation/>

      <div className="formatContent">
        <TopAttractionsC/>
      </div>

    </div>
  )
}

export default TopAttractions