import React from 'react'; // Adjust the path based on your file location
import '../../style/header.css';
import { Link } from 'react-router-dom';

const ImageCollage: React.FC = () => {
    return(
        <div className='MainContainer-Test'>
            <div className='Row'>
                <div className='Section0'>
                    <h1 className='text-test'>Recommendation summer</h1>
                </div>
        <div className='Section1' >
        <Link to = "/religious-sites">       <img className='img-test' src="https://mosqpedia.org/img/cache/largeimage/2VO6yirFEZaug1hwypPw4eNwcK5rpktP6XQK3NyT" alt="pic" width="100%"></img></Link>
                    <div className='desc-test'>Religious Sites</div>
                </div>
                <div className='Section1'>
            <Link to="/beautiful-cities"><img className='img-test' src="https://images.squarespace-cdn.com/content/v1/5e72c8bfe21ad940ba788673/1621088501890-G9PLJ8QNZCSX4JSVTK4D/kampong-ayer-top-image.jpg" alt="pic" width="100%"></img></Link>
                    <div className='desc-test'>Beautiful Cities</div>
                </div>
            </div>
            <div className='Row'>
                <div className='Section2'>
               <Link to = "/top-attractions"><img className='img-test' src="https://images.unsplash.com/photo-1515859005217-8a1f08870f59?q=80&w=2010&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="pic" width="100%"></img></Link>
                    <div className='desc-test'>Top Attractions</div>
                </div>
                <div className='Section1'>
               <Link to ="/nature"><img className='img-test' src="https://i0.wp.com/borneoadventure.com/v3/wp-content/uploads/2012/01/BRN_DK_5221.jpg?fit=2000%2C1331&quality=60&strip=all&ssl=1" alt="pic" width="100%"></img></Link>
                    <div className='desc-test'>Nature</div>
                </div>
            </div>
        </div>
    );
};

export default ImageCollage;
