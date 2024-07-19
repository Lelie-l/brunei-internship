import React from 'react'
import '../style/destinationDetails.css'
import { useLocation } from "react-router-dom"

export const DestinationDetails: React.FC = () => {
    const {state} = useLocation()
   console.log(state.name)
  return (
    <div>
        {/* <div className = "boxContainer">
            <div className = "image">
                <img src= {state.imageSrc} alt = "Image of Cities" style = {{borderRadius:'10px', width:'350px', height:'300px'}}/>  
            </div>
            <div style = {{margin:'20px',background:'white',paddingLeft:'10px',borderRadius:'10px'}}>
        
            <h1 style = {{color:'black'}}>{state.name}</h1>
            <br></br>

            <a href = {`http://maps.google.com/?q=${state.address}`}><p>{state.address}</p></a>
            
            <br></br>
            <p style = {{color:'black'}}>Tags: {state.tags}</p>
            </div>
            <div className = "text" style = {{color:'black'}}>
        
            <h2>About</h2>
            
            <div className = "description" style = {{marginTop:'50px'}}>
                <p>{state.description}</p>
            </div>
            

            </div> */}
            <div className="contentContainer">
                <h1>{state.name}</h1>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <a href={`http://maps.google.com/?q=${state.address}`} className="contentLocation"><p className="formatTag">{state.tags}</p><p>{state.address}</p></a>
                </div>
                <img src= {state.imageSrc} alt = "Image of Cities" className="imageStyle"/>  
                <div className="contentBody"> 
                    <div className="rowLayout">
                    <div>
                        <p className="bodyText">{state.description}</p>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d508839.5496889911!2d114.6195207898922!3d4.887835434598996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32228b2dc600d135%3A0x629259028b47b824!2sBrunei-Muara%20District%2C%20Brunei!5e0!3m2!1sen!2sid!4v1721370790673!5m2!1sen!2sid" width="300rem" height="200rem" style={{border: '0', borderRadius: "10px"}} loading="lazy"></iframe>
                    </div>

                </div>

            </div>
        

    </div>
  )
}

