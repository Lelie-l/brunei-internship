import React, { useState } from 'react';
import data from './Hotels.json';

interface Record {
    name: string;
    address: string;
    description: string;
    rating: number;
    currentPrice: number;
    book: string;
    imagesrc: string;
}

const CreateList: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const renderStars = (rating: number) => {
        const stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(<i className="fa-solid fa-star" key={i}></i>);
        }
        return stars;
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    };

    if (data.length === 0) {
        return <p>No records found</p>;
    }

    return (
        <div className="carousel">
            <button className="carousel-button prev" onClick={prevSlide}>
                &#10094;
            </button>
            <div className="carousel-slide" key={currentIndex}>
                <div className="imageContainer">
                    <img src={data[currentIndex].imagesrc} alt="Hotel" />
                    <div className="text-container">
                        <h1>{data[currentIndex].name}</h1>
                        <p className="address">
                            <a href={`http://maps.google.com/?q=${data[currentIndex].name}`} className="address-link">{data[currentIndex].address}</a>
                        </p>
                        <h3>{renderStars(data[currentIndex].rating)}</h3>
                        <p>{data[currentIndex].description}</p>
                        <p>Price: ${data[currentIndex].currentPrice}</p>
                        <a href={data[currentIndex].book}>Book Here</a>
                    </div>
                </div>
            </div>
            <button className="carousel-button next" onClick={nextSlide}>
                &#10095;
            </button>
        </div>
    );
};

export default CreateList;
