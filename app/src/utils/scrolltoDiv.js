import data from '../assets/airportStuff.json'

export function scrollToDiv(divId) {
    const targetDiv = document.getElementById(divId);
    if (targetDiv) {
        console.log("tvue")
        targetDiv.scrollIntoView({ behavior: 'smooth' });
    }
}
    
export function formatDate(dateString) {
        const date = new Date(dateString);
        const year = date.getFullYear().toString().slice(-2); // Last two digits of the year
        const month = ('0' + (date.getMonth() + 1)).slice(-2); // Month (01-12)
        const day = ('0' + date.getDate()).slice(-2); // Day (01-31)
        return `${year}${month}${day}`;
    }

export function search(event) {
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
    window.open( `https://www.skyscanner.co.id/transport/flights/${departure}/${destination}/${desDate}/${retDate}/?cabinclass=${flightClass}=&ref=home&rtn=1&preferdirects=false&outboundaltsenabled=false&inboundaltsenabled=false`, '_blank')
    }

export function initFlightDropDown() {
    const hiddenform = document.querySelector(".hidden-form");
    if (hiddenform.style.visibility === "visible") {
        hiddenform.style.transition = "opacity 0s ease, height 1s ease, width 1s ease, visibility 1s ease";
        hiddenform.style.visibility = "hidden";
        hiddenform.style.opacity = "0";
        hiddenform.style.width = "0";
        hiddenform.style.height = "0";

    } else {
        hiddenform.style.transition = "opacity 2s ease, height 0.7s ease, width 1s ease, visibility 1s ease";
        hiddenform.style.visibility = "visible";
        hiddenform.style.height = "10vh";
        hiddenform.style.width = "100%";
        hiddenform.style.opacity = "1";
    }
}