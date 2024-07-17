import React from 'react'
import wcmatch from 'wildcard-match'
import data from './TouristDestinations/TouristDestinations.json'
import { Slide } from 'react-slideshow-image'
import { useNavigate } from 'react-router-dom'
export const TopAttractionsC: React.FC = () => {

  const filterContent = (tag:string) => {
    const match = wcmatch(`*${tag}*`);
   
     return data.filter(filteredData => match(filteredData.tags));
     
    }


    const spanStyle = {
      padding: '1rem',
      background: '#efefef',
      color: '#000000'
    }
    const navigate = useNavigate();
    const handleClick =(content:any) =>{
      navigate('/DestinationInfo', {state: {name:content.name, description: content.description, address:content.address, tags:content.tags, imageSrc: content.imageSrc}})
    }

  return  (
    <div>
      
    <div>
      <h1 style = {{marginLeft:'20px'}}>Landmarks</h1>
      <br></br>
      <Slide slidesToScroll = {1} slidesToShow = {2} indicators = {true}>

{filterContent('Top Attractions').map((content, index) => (
  <div key={index} style = {{ display:'flex', justifyContent:'center'}}>
 
   <div  className = "transImages" style={{'backgroundImage': `url(${content.imageSrc})` }} onClick = {()=> handleClick(content)}>

<span style = {spanStyle}><h1>{content.name}</h1></span>
</div>

  </div>
))}
</Slide>



    </div>

    <div style = {{display:'flex', flexDirection:'row', margin:'75px'}}>
  <div style = {{display:'flex', flexDirection:'column', justifyContent:'center', paddingRight:'50px' }}>
  <h1></h1>
  
  <h2>Brunei is home to some of the most mouth-watering food and beverages any tourist can expect to find. Not only that, the food showcases its deeply established culture.</h2>
  </div>
    <img  style = {{ borderRadius:'20px',width:'40rem', height:'20rem'}}src =  "https://images.squarespace-cdn.com/content/v1/5e72c8bfe21ad940ba788673/1621098958484-IPJVGUD743UPCHLEK8J6/ambuyat-with-cacah-set.jpg"/>
    
</div>
<div>
      <h1 style = {{marginLeft:'20px'}}>Popular Dining Destinations</h1>
      <br></br>
      <Slide slidesToScroll = {1} slidesToShow = {1} indicators = {true}>

{filterContent('Food & Drink').map((content, index) => (
  <div key={index} style = {{ display:'flex', justifyContent:'center'}}>
 
   <div  className = "transImages" style={{'backgroundImage': `url(${content.imageSrc})` }} onClick = {()=> handleClick(content)}>

<span style = {spanStyle}><h1>{content.name}</h1></span>
</div>

  </div>
))}
</Slide>



    </div>

    <div style = {{display:'flex', flexDirection:'row', margin:'75px'}}>
  <div style = {{display:'flex', flexDirection:'column', justifyContent:'center', paddingRight:'50px' }}>
  <h1></h1>
  
  <h2>Brunei's museums are the most perfect places to visit for those who wish to understand its deep roots as well as its people's way of life. It is also home to some extremely remarkable artifacts and masterful artpieces.</h2>
  </div>
    <img  style = {{ borderRadius:'20px',width:'40rem', height:'20rem'}}src =  "https://www.bruneitourism.com/wp-content/uploads/2020/05/Royal-Chariot.jpg"/>
    
</div>
<div>
      <h1 style = {{marginLeft:'20px'}}>Museums</h1>
      <br></br>
      <Slide slidesToScroll = {1} slidesToShow = {1} indicators = {true}>

{filterContent('Museums').map((content, index) => (
  <div key={index} style = {{ display:'flex', justifyContent:'center'}}>
 
   <div  className = "transImages" style={{'backgroundImage': `url(${content.imageSrc})` }} onClick = {()=> handleClick(content)}>

<span style = {spanStyle}><h1>{content.name}</h1></span>
</div>

  </div>
))}
</Slide>



    </div>

    </div>
  )
}

