import React from 'react';
import './styles.css'
import data from './TouristDestinations.json';
import { Slide } from 'react-slideshow-image';
import wcmatch from 'wildcard-match';
import { useNavigate } from 'react-router-dom';
import "../../style/secondary-page.css";

export const TouristDestinations: React.FC = () => {
  const tags = ['Cities','Top Attractions','Landmarks', 'Parks', 'Architectural Buildings', 'Religious Sites', 'Food & Drinks', 'Outdoor Activities','Museums', 'Markets'];
  
  const filterContent = (tag:string) => {
  const match = wcmatch(`*${tag}*`);
 
   return data.filter(filteredData => match(filteredData.tags));
   
  }
  // const spanStyle = {
  //   padding: '1rem',
  //   background: '#efefef',
  //   color: '#000000'
  // }
  
  // const divStyle = {
    
  //   display: 'flex',
  //   alignItems: 'center',
  //   borderRadius:'10px',
  //   borderStyle:'solid',
  //   borderColor:'black',
  //   borderWidth:'4px',
  //   justifyContent: 'center',
  //   backgroundSize: 'cover',
  //   height: '25rem',
  //   width: '40rem',
  //   cursor:'pointer'
  // }
  const navigate = useNavigate();
  const handleClick = (content:any) => {
    navigate('/DestinationInfo', {state: {name: content.name, description: content.description, address:content.address, tags: content.tags, imageSrc:content.imageSrc}})
  }
  
   
    
  return (
    <div className="touristDestinationPage">
      <h1>Popular Cities</h1>
      <br></br>
      <Slide slidesToScroll = {1} slidesToShow = {2} indicators = {true}>

        {filterContent(tags[0]).map((content, index) => (
          <div key={index} style = {{ display:'flex', justifyContent:'center'}}>
         
           <div  className = "transImages" style={{'backgroundImage': `url(${content.imageSrc})` }} onClick = {()=> handleClick(content)}>
        
        <span className="contentcontainer"><p className="contentname">{content.name}</p></span>
        </div>
    
          </div>
        ))}
      </Slide>
        <h1>Top Attractions</h1>
       <br></br>
       <Slide slidesToScroll = {1} slidesToShow = {2} indicators = {true}
       >
        {filterContent(tags[1]).map((content,index) => (
          <div key = {index} style = {{display:'flex', justifyContent:'center'}}>
            <div className ="transImages" style = {{ 'backgroundImage': `url(${content.imageSrc})`}} onClick = {()=> handleClick(content)}>
              <span className="contentcontainer"><p className="contentname">{content.name}</p></span>
            </div>

          </div>
      ))}

       </Slide>
       <h1>Landmarks</h1>
       <br></br>
      <Slide slidesToScroll = {1} slidesToShow = {2} indicators = {true}
       >
        {filterContent(tags[2]).map((content,index) => (
          <div key = {index} style = {{display:'flex', justifyContent:'center'}}>
            <div className = "transImages" style = {{'backgroundImage': `url(${content.imageSrc})`}} onClick = {()=> handleClick(content)}>
              <span className="contentcontainer"><p className="contentname">{content.name}</p></span>
            </div>

          </div>
      ))}

       </Slide>
      <h1>Parks</h1>
      <br></br>
      <Slide slidesToScroll = {1} slidesToShow = {2} indicators = {true}
       >
        {filterContent(tags[3]).map((content,index) => (
          <div key = {index} style = {{display:'flex', justifyContent:'center'}}>
            <div className = "transImages" style = {{ 'backgroundImage': `url(${content.imageSrc})`}} onClick = {() => handleClick(content)}>
              
              <span className="contentcontainer"><p className="contentname">{content.name}</p></span>
            </div>
              
          </div>
      ))}

       </Slide>
    </div>
  );
}
