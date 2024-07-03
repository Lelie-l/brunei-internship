document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('record-container')

    async function fetchData() {
        try{
            const response = await fetch('Hotels.json');
            if(!response.ok) {
                throw Error('Error during data fetching');
            }
            const data = await response.json();
            renderList(data);
        } catch (error) {
            console.error(error);
        }
    }

    function renderList(records) {
        if(records.length ===0) {
            container.innerHTML = '<p>No records found';
            return;
        }
        const ul = document.createElement('ul');
      
        records.forEach(record => {
            const li=  document.createElement('header')
            let stars = ''
            for (i = 0; i < record.rating; i++) {
                stars += "<i class = 'fa-solid fa-star'></i>"
            }
                li.innerHTML = 
                `<div class = "image"><img class = "imageStyle" src = "${record.imagesrc} alt = "Image of Hotel/></div> <br> 
                <div class = "text"><div class = "hotelName">${record.id}. ${record.name}</div> 
                <div class = "description">Address:<a href = "google.com/maps/place/${record.address}"> ${record.address} </a> <br> ${record.description} <br> 
                Rating: ${stars} <br> 
                Current Price: $${record.currentPrice}</div></div>
                <div class = "book"><a href = "">Book Here</a></div>`;

            ul.appendChild(li)
            li.className = ("boxStyle")
           
        })
        container.appendChild(ul)
    }
    fetchData();
})