
import data from '../assets/airportStuff.json'
export function scrollToDiv(divId) {
    const targetDiv = document.getElementById(divId);
    if (targetDiv) {
        console.log("tvue")
        targetDiv.scrollIntoView({ behavior: 'smooth' });
    }
}

export const PopUpForm  =()  =>{
    function formatDate(dateString) {
        const date = new Date(dateString);
        const year = date.getFullYear().toString().slice(-2); // Last two digits of the year
        const month = ('0' + (date.getMonth() + 1)).slice(-2); // Month (01-12)
        const day = ('0' + date.getDate()).slice(-2); // Day (01-31)
        return `${year}${day}${month}`;
    }
    function search(event) {
        event.preventDefault()
    const departureCode = document.getElementById('departure').value;
    const destinationCode = document.getElementById('destination').value;
    const departureDate = document.getElementById('departureDate').value;
    const returnDate = document.getElementById('returnDate').value;
    const departure = data[departureCode].toLowerCase();
    const destination = data[destinationCode].toLowerCase();
    const desDate = formatDate(departureDate);
    const retDate = formatDate(returnDate);
    const flightClass = document.getElementById('flightclass').value
    console.log(desDate);
    window.location.href = `https://www.skyscanner.co.id/transport/flights/${departure}/${destination}/${desDate}/${retDate}/?cabinclass=${flightClass}=&ref=home&rtn=1&preferdirects=false&outboundaltsenabled=false&inboundaltsenabled=false`
    }
    const fetchData = Object.entries(data).map(([countryName, countryCode]) => (
        <option key={countryName} value={countryName}/>
    ));
    return(
        <div  id="form" className = "hidden-form">
            <form id="flightSearch" onSubmit = {search}>
                <label htmlFor="departure">City of Departure: </label>
                <input list = "datalist" type="text" id="departure" name="departure" required /><br /><br />
                <datalist id = "datalist">
                    {fetchData}
                </datalist>

                <label htmlFor="destination">City of Destination: </label>
                <input type="text" list = "datalist"id="destination" name="destination" required /><br /><br />

                <label htmlFor="departureDate">Departure Date: </label>
                <input type="date" id="departureDate" name="departureDate" required /><br /><br />

                <label htmlFor="returnDate">Return Date: </label>
                <input type="date" id="returnDate" name="returnDate" /><br /><br />
                <label>Flight Class: </label>
                <br></br>
                <select id = "flightclass">
                    <option value = "economy">Economy Class</option>
                    <option value = "business">Business Class</option>
                    <option value = "premium">Premium Class</option>
                    <option value = "first">First Class</option>
                </select>
                <br></br>
                <button className = "submitButton" type="submit">Search Flights</button>

            </form>
        </div>
    )
}
