import React from 'react';
import './styles.css'
import data from './TouristDestinations.json';
import { Slide } from 'react-slideshow-image';
import wcmatch from 'wildcard-match';

export const TouristDestinations: React.FC = () => {
  const tags = ['Cities','Top Attractions','Landmarks', 'Parks', 'Architectural Buildings', 'Religious Sites', 'Food & Drinks', 'Outdoor Activities','Museums', 'Markets'];
  
  const filterContent = (tag:string) => {
  const match = wcmatch(`*${tag}*`);
   return data.filter(filteredData => match(filteredData.tags));
  }
  const spanStyle = {
    padding: '1rem',
    background: '#efefef',
    color: '#000000'
  }
  
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
  
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '25rem',
    width: '40rem'
  }
  
  
   
    
  return (
    <div>
      
      <h1>Popular Cities</h1>
      <br></br>
      <Slide slidesToScroll = {1} slidesToShow = {2} indicators = {true}>

        {filterContent(tags[0]).map((content, index) => (
          <div key={index} style = {{display:'flex', justifyContent:'center'}}>
           <div style={{ ...divStyle, 'backgroundImage': `url(${content.imageSrc})` }}>
        <span style = {spanStyle}><h1>{content.name}</h1></span>
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
            <div style = {{...divStyle, 'backgroundImage': `url(${content.imageSrc})`}}>
              <span style = {spanStyle}><h1>{content.name}</h1></span>
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
            <div style = {{...divStyle, 'backgroundImage': `url(${content.imageSrc})`}}>
              <span style = {spanStyle}><h1>{content.name}</h1></span>
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
            <div style = {{...divStyle, 'backgroundImage': `url(${content.imageSrc})`}}>
              <span style = {spanStyle}><h1>{content.name}</h1></span>
            </div>

          </div>
      ))}

       </Slide>
    </div>
  );
}
