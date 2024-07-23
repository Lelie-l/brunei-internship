import React from "react";
import wcmatch from "wildcard-match";
import data from "./TouristDestinations/TouristDestinations.json";
import { Slide } from "react-slideshow-image";
import { useNavigate } from "react-router-dom";
import "../style/secondary-page.css";

export const BeautifulCitiesC: React.FC = () => {
  const filterContent = (tag: string) => {
    const match = wcmatch(`*${tag}*`);

    return data.filter((filteredData) => match(filteredData.tags));
  };

  // const spanStyle = {
  //   padding: "1rem",
  //   background: "#efefef",
  //   color: "#000000",
  // };
  const navigate = useNavigate();
  const handleClick = (content: any) => {
    navigate("/DestinationInfo", {
      state: {
        name: content.name,
        description: content.description,
        address: content.address,
        tags: content.tags,
        imageSrc: content.imageSrc,
      },
    });
  };

  return (
    <div>
      <div className="contentSection">
        <div
          // style={{
          //   display: "flex",
          //   flexDirection: "column",
          //   justifyContent: "center",
          //   paddingRight: "50px",
          // }}
          className="textContainer"
        >
          <h1 className="explainHead">Cities.</h1>
          <p className="explainBody">
            Brunei is home to some of the most vast and attractive cities in the
            world. It's capital, Bandar Seri Begawan, has some of the most
            beautiful sightseeing spots any tourist can ever wish for.
          </p>
        </div>

        <img
          // style={{ borderRadius: "20px", width: "35rem", height: "25rem" }}
          className="imgStyle"
          src="https://images.squarespace-cdn.com/content/v1/5e72c8bfe21ad940ba788673/1621101929190-UPTDOEPKKE7P210WA4XN/bandar-seri-begawan-pusat-bandar-city-center.jpg"
        />
      </div>

      <div>
        <h1>Popular Cities</h1>
        <br></br>
        <Slide slidesToScroll={1} slidesToShow={1} indicators={true}>
          {filterContent("Cities").map((content, index) => (
            <div
              key={index}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div
                className="transImages"
                style={{ backgroundImage: `url(${content.imageSrc})` }}
                onClick={() => handleClick(content)}
              >
                <span className="contentcontainer">
                  <p className="contentname">{content.name}</p>
                </span>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};
