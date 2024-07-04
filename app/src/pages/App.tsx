import { Link } from 'react-router-dom';
import './App.css';
import Header from "../components/header";
import InfoBody from "../components/infoBody";
import Footer from "../components/footer";

function App() {
  return (
    <div id="home-page">
      <Header />
      <Link to="/test">Test</Link>  
      <InfoBody />
      <Footer />
    </div>
  );
}

export default App;
