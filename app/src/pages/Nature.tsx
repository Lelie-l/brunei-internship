import React from 'react'
import { NatureC } from '../components/NatureC'
import CreateNavigation from '../components/navigator/Navigation'
const Nature = () => {
  return (
    <div>
    <div className = "bodytext" style = {{alignItems:'center',backgroundImage: 'url(https://i0.wp.com/borneoadventure.com/v3/wp-content/uploads/2012/01/BRN_DK_5221.jpg?fit=2000%2C1331&quality=60&strip=all&ssl=1)' }}>
    <h1 style = {{fontSize:'40px'}}>Nature</h1>
    </div>
    
    <CreateNavigation/>

    <NatureC/>
    </div>
  )
}

export default Nature