import React from 'react'
import '../style/destinationDetails.css'
import { useLocation } from "react-router-dom"
export const DestinationDetails: React.FC = () => {
    const {state} = useLocation()
   console.log(state.name)
  return (
    <div>
        <div style = {{margin:'20px',background:'white',paddingLeft:'10px',borderRadius:'10px'}}>
        
        <h1 style = {{color:'black'}}>{state.name}</h1>
        <br></br>

        <a href = {`http://maps.google.com/?q=${state.address}`}><p>{state.address}</p></a>
        
        <br></br>
        <p style = {{color:'black'}}>Tags: {state.tags}</p>
        </div>
        <div className = "boxContainer">
            <div className = "image">
                <img src= {state.imageSrc} alt = "Image of Cities" style = {{borderRadius:'10px', width:'350px', height:'300px'}}/>  
            </div>
            <div className = "text" style = {{color:'black'}}>
        
            <h2>About</h2>
            
            <div className = "description" style = {{marginTop:'50px'}}>
                <p>{state.description}</p>
            </div>
            

            </div>
        </div>
        

    </div>
  )
}

