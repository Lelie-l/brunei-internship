import React from 'react';
import data from './Hotels.json'; // Adjust the path based on your file location
import '../../style/header.css';

const CreateList: React.FC = () => {
    const renderStars = (rating: number) => {
        const stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(<i className="fa-solid fa-star" key={i}></i>);
        }
        return stars;
    };

    if (data.length === 0) {
        return <p>No records found</p>;
    }

    return (
        <ul>
            {data.map((record, index) => (
                <li key={index} className="boxStyle">
                    <div className="image">
                        <img className="imageStyle" src={record.imagesrc} alt="Image of Hotel" />
                    </div>
                    <br />
                    <div className="text">
                        <div className="hotelName">{record.name}</div>
                        <div className="address">
                            Address:
                            <a href={`http://maps.google.com/?q=${record.name}`}> {record.address} </a>
                            <br />
                        </div>
                        <div className="description">
                            <div className="desc">{record.description}</div>
                            <br />
                            <div className="others">
                                Rating: {renderStars(record.rating)}
                                <br />
                                Current Price: ${record.currentPrice}
                                <br />
                            </div>
                            <div className="book">
                                <a href={record.book}>Book Here</a>
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default CreateList;
