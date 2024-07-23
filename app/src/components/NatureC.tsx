import React from "react";
import wcmatch from "wildcard-match";
import data from "./TouristDestinations/TouristDestinations.json";
import { Slide } from "react-slideshow-image";
import { useNavigate } from "react-router-dom";
import "../style/secondary-page.css";

export const NatureC: React.FC = () => {
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
      <div 
      // style={{ display: "flex", flexDirection: "row", marginBottom: "6rem" }}
      className="contentSection"
      >
        <div
          // style={{
          //   display: "flex",
          //   flexDirection: "column",
          //   justifyContent: "center",
          //   paddingRight: "50px",
          // }}
          className="textContainer"
        >
          <h2>
            Brunei is filled with wondrous natural places with overwhelmingly
            beautiful scenery. From parks to mountains, there is no end to the
            wonders of nature that Brunei has.
          </h2>
        </div>

        <img
          // style={{ borderRadius: "20px", width: "40rem", height: "20rem" }}
          className="imgStyle"
          src="https://green-brunei.com/wp-content/uploads/2022/09/Tasek-Merimbun-1-jpg.jpg"
          alt="scenery.jpg"
        />
      </div>
      <div
        // style={{
        //   display: "flex",
        //   flexDirection: "row-reverse",
        //   marginBottom: "6rem",
        // }}
        className="contentSection-reverse"
      >
        <div
          // style={{
          //   display: "flex",
          //   flexDirection: "column",
          //   justifyContent: "center",
          //   paddingLeft: "50px",
          // }}
          className="textContainer"
        >
          <h1 className="explainHead">Parks.</h1>

          <p className="explainBody">
            The parks in Brunei have everything there is to experience about
            nature, ranging from wildlife to extreme outbound activities
          </p>
        </div>
        <img
          // style={{ borderRadius: "20px", width: "40rem", height: "20rem" }}
          className="imgStyle"
          src="https://www.bruneitourism.com/wp-content/uploads/2020/04/ATV-Adventure-Brunei-2020.jpg"
        />
      </div>

      <div className="pageSection">
        <h1 style={{ marginLeft: "20px" }}>Popular Parks</h1>
        <br></br>
        <Slide slidesToScroll={1} slidesToShow={2} indicators={true}>
          {filterContent("Park").map((content, index) => (
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
          <h1 className="explainHead">Islands.</h1>

          <p className="explainBody">
            Brunei's islands make for some of the best vacation spots for
            sightseeing and relaxation.
          </p>
        </div>
        <img
          // style={{ borderRadius: "20px", width: "40rem", height: "20rem" }}
          className="imgStyle"
          src="https://ponidivers.com/ponidivers/wp-content/uploads/sites/2/2021/08/Pelong-Rock-1-Jack-Fish-min-compressed-scaled.jpg"
        />
      </div>
      <div className="pageSection">
        <h1 style={{ marginLeft: "20px" }}>Islands</h1>
        <br></br>
        <Slide slidesToScroll={1} slidesToShow={2} indicators={true}>
          {filterContent("Islands").map((content, index) => (
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
