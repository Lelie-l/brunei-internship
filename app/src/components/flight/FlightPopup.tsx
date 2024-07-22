import React from "react";
import data from '../../assets/img/airportStuff.json';
import { search } from "../../utils/scrolltoDiv";
import '../../style/flightPopup.css';

const FlightDropDown: React.FC = () => {
    const fetchData = Object.entries(data).map(([countryName, countryCode]) => (
        <option key={countryName} value={countryName}/>
    ));

    return (
        <div id="form" className="hidden-form">
            <form id="flightSearch" onSubmit={search}>
                <div className="inputField">
                    <label htmlFor="departure">From:</label>
                    <input list="datalist" type="text" id="departure" name="departure" required />
                    <datalist id="datalist">
                        {fetchData}
                    </datalist>
                </div>

                <div className="inputField">
                    <label htmlFor="destination">To: </label>
                    <input type="text" list = "datalist"id="destination" name="destination" required />
                </div>

                <div className="inputField">
                    <label htmlFor="departureDate">Departure: </label>
                    <input type="date" id="departureDate" name="departureDate" required />
                </div>

                <div className="inputField">
                    <label htmlFor="returnDate">Return: </label>
                    <input type="date" id="returnDate" name="returnDate" />
                </div>

                <div className="inputField">
                    <label>Flight Class: </label>
                    <select id = "flightclass">
                        <option value = "economy">Economy Class</option>
                        <option value = "business">Business Class</option>
                        <option value = "premium">Premium Class</option>
                        <option value = "first">First Class</option>
                    </select>
                </div>

                <button className = "submitButton" type="submit">Search</button>
            </form>
        </div>
    )
}

export default FlightDropDown;