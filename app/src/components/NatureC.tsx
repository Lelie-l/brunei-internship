import React from 'react'
import wcmatch from 'wildcard-match'
import data from './TouristDestinations/TouristDestinations.json'
import { Slide } from 'react-slideshow-image'
import { useNavigate } from 'react-router-dom'
export const NatureC: React.FC = () => {

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
      <div style = {{ display:'flex', flexDirection:'row', margin:'75px'}}>
        <div style = {{display:'flex', flexDirection:'column',justifyContent:'center', paddingRight:'50px'}}>
    <h2>Brunei is filled with wondrous natural places with overwhelmingly beautiful scenery. From parks to mountains, there is no end to the wonders of nature that Brunei has.</h2>
    </div>
   

<img  style = {{borderRadius:'20px'}}src = "https://green-brunei.com/wp-content/uploads/2022/09/Tasek-Merimbun-1-jpg.jpg" alt = "scenery.jpg"/>
</div>
<div style = {{display:'flex', flexDirection:'row-reverse', margin:'75px'}}>
  <div style = {{display:'flex', flexDirection:'column', justifyContent:'center', paddingLeft:'50px' }}>
  <h1>Parks</h1>
  
  <h2>The parks in Brunei have everything there is to experience about nature, ranging from wildlife to extreme outbound activities</h2>
  </div>
    <img  style = {{ borderRadius:'20px',width:'40rem', height:'20rem'}}src =  "https://www.bruneitourism.com/wp-content/uploads/2020/04/ATV-Adventure-Brunei-2020.jpg"/>
    
</div>
<div>


</div>
    <div>
      <h1 style = {{marginLeft:'20px'}}>Parks</h1>
      <br></br>
      <Slide slidesToScroll = {1} slidesToShow = {2} indicators = {true}>

{filterContent('Park').map((content, index) => (
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
  <h1>Islands</h1>
  
  <h2>Brunei's islands make for some of the best vacation spots for sightseeing and relaxation.</h2>
  </div>
    <img  style = {{ borderRadius:'20px',width:'40rem', height:'20rem'}}src =  "https://ponidivers.com/ponidivers/wp-content/uploads/sites/2/2021/08/Pelong-Rock-1-Jack-Fish-min-compressed-scaled.jpg"/>
    
</div>
<div>
      <h1 style = {{marginLeft:'20px'}}>Islands</h1>
      <br></br>
      <Slide slidesToScroll = {1} slidesToShow = {2} indicators = {true}>

{filterContent('Islands').map((content, index) => (
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

