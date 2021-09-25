const body = document.body;

const title = document.createElement("h1");
title.id = 'title';
title.innerHTML = 'COUNTRIES'

const div = document.createElement("div");
div.id = 'main-container';

async function calling() {
    const response = await fetch("https://rest-countries-api-techieegy.herokuapp.com/v1/all");
    const data = await response.json();
    console.log(data);
    
    data.forEach((item) => {
        
        const cards = document.createElement("div");
        cards.className = 'cards'

        const image = document.createElement("img");
        image.className = 'image';
        image.setAttribute("src", item.flags[0]);

        const name = document.createElement("h1");
        name.className = 'name';
        name.innerHTML = `${item.name}`;

        const content = document.createElement("div");
        content.className = 'content';

        cards.append(name, image, content);

        if(item.currencies || item.region || item.capital){
            const capital = document.createElement("p");
            capital.className = 'capital';
            capital.innerHTML = `Capital:  <span>${item.capital} </span>`;
            content.append(capital);

            const region = document.createElement("p");
            region.className = 'region';
            region.innerHTML = `Region:  <span>${item.region}</span>`
            content.append(region);

            const currencyname = document.createElement("p");
            currencyname.innerHTML = `Currency name: <span>${item.currencies[0].name}</span>`;
            content.append(currencyname);

            const currencycode = document.createElement("p");
            currencycode.innerHTML = `Currency code: <span>${item.currencies[0].code}</span>`;
            content.append(currencycode);

            const currencysymbol = document.createElement("p");
            currencysymbol.innerHTML = `Currency symbol: <span>${item.currencies[0].symbol}</span>`;
            content.append(currencysymbol);
        }
        else{
            const capital = document.createElement("p");
            capital.innerHTML = `Capital: - -`;
            content.append(capital);

            const region = document.createElement("p");
            region.innerHTML = `Region: - -`;
            content.append(region);
                
            const currencyname = document.createElement("p");
            currencyname.innerHTML = `Currency name: - -`;
            content.append(currencyname);

            const currencycode = document.createElement("p");
            currencycode.innerHTML = `Currency code: - -`;
            content.append(currencycode);

            const currencysymbol = document.createElement("p");
            currencysymbol.innerHTML = `Currency currencysymbol: - -`;
            content.append(currencysymbol);
            }

        const latlng = document.createElement("p");
        latlng.className = 'latlng';
        latlng.innerHTML = `Lat,Long:  <span>${item.latlng}</span>`

        content.append(latlng);
        
        div.append(cards);
    });
    
}
calling();

body.append(title, div);