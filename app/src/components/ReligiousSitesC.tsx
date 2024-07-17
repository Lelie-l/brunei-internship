import React from 'react'
import wcmatch from 'wildcard-match'
import data from './TouristDestinations/TouristDestinations.json'
import { Slide } from 'react-slideshow-image'
import { useNavigate } from 'react-router-dom'
export const ReligiousSitesC: React.FC = () => {

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
    <h2>The religious places in Brunei not only brings the feeling of closeness to the Lord, but also has spots that tourists just can't miss in their sightseeing journey.</h2>
    </div>
   

<img  style = {{borderRadius:'20px'}}src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjAF6h_GeQBOLX1HNoRzmSp4BoGKWeYfAzBgRNNCVlRelBcwyQKNFsTsGYGCwQyIp2dnG9ueAU1-IF3bTX4s2lfLvpkWXTmkTd6wI_z3q3idmrY_yf7wvK590JeUR_bXhMGy8L7rLWOapGi/s1600/proud+to+be+bruneian7.jpg"/>
</div>
<div style = {{display:'flex', flexDirection:'row-reverse', margin:'75px'}}>
  <div style = {{display:'flex', flexDirection:'column', justifyContent:'center', paddingLeft:'50px' }}>
  <h1>Mosques</h1>
  
  <h2>Brunei's mosques are some of the most wonderous forms of architectural masterpieces in the world.</h2>
  </div>
    <img  style = {{ borderRadius:'20px',width:'40rem', height:'20rem'}}src =  "https://images.squarespace-cdn.com/content/v1/5e72c8bfe21ad940ba788673/1621093358865-V8GSOPP5UHSPDM2S27YY/hassanil-bolkiah-mosque-lot.jpeg"/>
    
</div>
<div>


</div>
    <div>
      <h1 style = {{marginLeft:'20px'}}>Mosques</h1>
      <br></br>
      <Slide slidesToScroll = {1} slidesToShow = {1} indicators = {true}>

{filterContent('Mosques').map((content, index) => (
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
  <h1>Temples</h1>
  
  <h2>Just like it's mosques, Brunei's temples showcase a mix of divinity and architectural wonder that cannot be found in any other part of the world.</h2>
  </div>
    <img  style = {{ borderRadius:'20px',width:'40rem', height:'20rem'}}src =  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Bandar_Seri_Begawan_Bangunan_Guru_GM_0004.jpg/640px-Bandar_Seri_Begawan_Bangunan_Guru_GM_0004.jpg"/>
    
</div>
<div>
      <h1 style = {{marginLeft:'20px'}}>Temples</h1>
      <br></br>
      <Slide slidesToScroll = {1} slidesToShow = {1} indicators = {true}>

{filterContent('Temples').map((content, index) => (
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

