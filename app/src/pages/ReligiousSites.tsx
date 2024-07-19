import React from 'react'
import { ReligiousSitesC } from '../components/ReligiousSitesC'
import CreateNavigation from '../components/navigator/Navigation'
const ReligiousSites = () => {
  return (
    <div>
        <div className = "bodytext" style = {{alignItems:'center',backgroundImage: 'url(https://mosqpedia.org/img/cache/largeimage/2VO6yirFEZaug1hwypPw4eNwcK5rpktP6XQK3NyT)'}}>
        <h1 style = {{fontSize:'40px'}}>Religious Sites</h1>
        </div>
   
    <CreateNavigation/>

    <div className="formatContent">
    <ReligiousSitesC/>
    </div>
</div>
  )
}

export default ReligiousSites