import React from "react";
import wcmatch from "wildcard-match";
import data from "./TouristDestinations/TouristDestinations.json";
import { Slide } from "react-slideshow-image";
import { useNavigate } from "react-router-dom";
import "../style/secondary-page.css";

export const TopAttractionsC: React.FC = () => {
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
      <div className="pageSection">
        <h1 style={{ marginLeft: "20px" }}>Landmarks</h1>
        <br></br>
        <Slide slidesToScroll={1} slidesToShow={2} indicators={true}>
          {filterContent("Top Attractions").map((content, index) => (
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
          <h1 className="explainHead">Dining.</h1>

          <p className="explainBody">
            Brunei is home to some of the most mouth-watering food and beverages
            any tourist can expect to find. Not only that, the food showcases
            its deeply established culture.
          </p>
        </div>
        <img
          // style={{ borderRadius: "20px", width: "40rem", height: "20rem" }}
          className="imgStyle"
          src="https://images.squarespace-cdn.com/content/v1/5e72c8bfe21ad940ba788673/1621098958484-IPJVGUD743UPCHLEK8J6/ambuyat-with-cacah-set.jpg"
        />
      </div>
      <div className="pageSection">
        <h1 style={{ marginLeft: "20px" }}>Popular Dining Destinations</h1>
        <br></br>
        <Slide slidesToScroll={1} slidesToShow={1} indicators={true}>
          {filterContent("Food & Drink").map((content, index) => (
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

      <div className="contentSection">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingRight: "50px",
          }}
        >
          <h1 className="explainHead">Museums.</h1>

          <p className="explainBody">
            Brunei's museums are the most perfect places to visit for those who
            wish to understand its deep roots as well as its people's way of
            life. It is also home to some extremely remarkable artifacts and
            masterful artpieces.
          </p>
        </div>
        <img
          className="imgStyle"
          src="https://www.bruneitourism.com/wp-content/uploads/2020/05/Royal-Chariot.jpg"
        />
      </div>
      <div className="pageSection">
        <h1 style={{ marginLeft: "20px" }}>Popular Museums</h1>
        <br></br>
        <Slide slidesToScroll={1} slidesToShow={1} indicators={true}>
          {filterContent("Museums").map((content, index) => (
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
