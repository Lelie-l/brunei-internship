document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('mainreservation')

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

        const boxContainer = document.createElement('div');

        const ul = document.createElement('ul');
      
        records.forEach(record => {
            const li=  document.createElement('header')
            let stars = ''
            // eslint-disable-next-line no-undef
            for (i = 0; i < record.rating; i++) {
                stars += "<i class = 'fa-solid fa-star'></i>"
            }
                li.innerHTML = 
                `
                <div class = "image">
                    <img class = "imageStyle" src = "${record.imagesrc} alt = "Image of Hotel/>
                </div> <br> 
                <div class = "text">
                    <div class = "hotelName">${record.name}</div>
                    <div class = "address">Address:<a href = "http://maps.google.com/?q=${record.name}"> ${record.address} </a><br> </div>
                    <div class = "description">  
                        <div class="desc"> ${record.description} <br> </div>
                        <div class="others"> Rating: ${stars} <br> 
                        Current Price: $${record.currentPrice}<br> </div>
                        <div class = "book"><a href = "${record.book}">Book Here</a></div>
                    </div>
                </div>
                `;

            ul.appendChild(li);
            li.className = ("boxStyle");

        })
        container.appendChild(ul)
    }
    fetchData();
})