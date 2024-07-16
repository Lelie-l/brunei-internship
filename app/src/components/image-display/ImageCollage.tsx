import React from 'react'; // Adjust the path based on your file location
import '../../style/header.css';

const ImageCollage: React.FC = () => {
    return(
        <div className='MainContainer-Test'>
            <div className='Row'>
                <div className='Section0'>
                    <h1 className='text-test'>Recommendation summer</h1>
                </div>
                <div className='Section1'>
                    <img className='img-test' src="https://plus.unsplash.com/premium_photo-1667530621211-7924dc31a4a8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXRhbHl8ZW58MHx8MHx8fDA%3D" alt="pic" width="100%"></img>
                    <div className='desc-test'>Summer Holidays</div>
                </div>
                <div className='Section1'>
                    <img className='img-test' src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="pic" width="100%"></img>
                    <div className='desc-test'>Beautiful Sites</div>
                </div>
            </div>
            <div className='Row'>
                <div className='Section2'>
                    <img className='img-test' src="https://images.unsplash.com/photo-1515859005217-8a1f08870f59?q=80&w=2010&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="pic" width="100%"></img>
                    <div className='desc-test'>Ancient Cities</div>
                </div>
                <div className='Section1'>
                    <img className='img-test' src="https://images.unsplash.com/photo-1528114039593-4366cc08227d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="pic" width="100%"></img>
                    <div className='desc-test'>Scenery</div>
                </div>
            </div>
        </div>
    );
};

export default ImageCollage;