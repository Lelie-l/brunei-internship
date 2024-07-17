import "../style/header.css";
import CreateList from "../components/reservationList/ReservationLists";
import CreateNavigation from "../components/navigator/Navigation";
import { scrollToDiv } from "../utils/scrolltoDiv";
import ImageCollage from "../components/image-display/ImageCollage";

function Home() {
  return (
    <div className="alignbody">
      <div id="bodytext" className="bodytext">
        <h2 className="contents firstline">Welcome to Brunei Darussalam</h2>
        <p>
          Welcome to Brunei Darussalam, a peaceful kingdom on the island of Borneo. Rich in Islamic heritage and surrounded by lush rainforests, Brunei offers a serene escape from the bustle of modern life. Explore majestic mosques and experience the warm hospitality of its people. Discover the natural beauty of pristine rainforests, teeming with diverse wildlife. Taste the flavors of Brunei's unique cuisine, a delightful blend of Malay, Chinese, and Indian influences. Whether you seek cultural immersion or outdoor adventure, Brunei welcomes you with its tranquil charm and timeless traditions.
        </p>
        <a id="learnmore" className="learnmorebutton" onClick={() => scrollToDiv('mainreservation')}>
          LEARN MORE
        </a>
      </div>
      <div className="mural" id="learnmoreresult"></div>
      <CreateNavigation />
      <ImageCollage />
      <div className="classreservation "id="mainreservation">
      <CreateList />
      </div>
    </div>
  );
}

export default Home;
