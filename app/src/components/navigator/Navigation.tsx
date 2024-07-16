import React from "react";
import '../../style/header.css';
import hotelimg from '../../assets/img/bed.png';
import monumentimg from '../../assets/img/monument.png';
import planeimg from '../../assets/img/plane.png'
import { scrollToDiv } from "../../utils/scrolltoDiv";

const CreateNavigation: React.FC = () => {

    
    return (
        <div className="buttonNavigation">
            <a onClick={() => scrollToDiv('')}>
                <img src={monumentimg} alt="hotel" height="18px" /><p>Attractions</p>
            </a>
            <a onClick={() => scrollToDiv('mainreservation')}>
                <img src={hotelimg} alt="hotel" height="18px" /><p>Accommodations</p>
            </a>
            <a onClick={() => scrollToDiv('mainreservation')}>
            <img src={planeimg} alt="hotel" height="18px" /><p>Flights</p>
            </a>
        </div>
    );
}

export default CreateNavigation;