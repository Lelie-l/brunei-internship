import "../style/header.css";
import Heading from "../components/header";

function App() {
  return (
    <><Heading /><div id="bodytext" className="bodytext">
      {/* <Link to="/test">Test</Link>   */}
      {/* <InfoBody />
    <Footer /> */}

      <h2 className="contents firstline">Welcome to Brunei Darussalam</h2>
      <p>
        Welcome to Brunei Darussalam, a peaceful kingdom on the island of Borneo. Rich in Islamic heritage and surrounded by lush rainforests, Brunei offers a serene escape from the bustle of modern life. Explore majestic mosques and experience the warm hospitality of its people. Discover the natural beauty of pristine rainforests, teeming with diverse wildlife. Taste the flavors of Brunei's unique cuisine, a delightful blend of Malay, Chinese, and Indian influences. Whether you seek cultural immersion or outdoor adventure, Brunei welcomes you with its tranquil charm and timeless traditions.
      </p>
      <button id="learnmore" className="learnmorebutton">
        LEARN MORE
      </button>
    </div></>
  );
}

export default App;
