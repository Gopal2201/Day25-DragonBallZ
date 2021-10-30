//function which fetch a random data
async function getData() {
    const response = await fetch("https://api.jikan.moe/v3/search/anime?q=Dragon%20Ball%20Z");
    //parse
    data = await response.json();
    console.log(data);        
    return data.results;
}

async function getAnime() {
    try {
        let res = await getData();
        console.log(res)
        displayResult(res);
    } catch (err) {
        console.error(err);
    }
}

function displayResult(res) {
    let Animedata = document.getElementById("Animedata");
    

    for (let content in res) {
        let div = document.createElement('div');
        div.className = 'Anime';
        let img = document.createElement("img")
        
        img.src = res[content].image_url;
        img.className = "img-fluid";
        img.style.width = "180px";
        div.appendChild(img);
        
        let startdate = document.createElement("h4");
        startdate.innerHTML = "Start Date: " + res[content].start_date;
        div.appendChild(startdate);

        let enddate = document.createElement("h4");
        enddate.innerHTML = "End Date: " + res[content].end_date;
        div.appendChild(enddate);

        let type = document.createElement("h4");
        type.innerHTML = "Type of series: " + res[content].type;
        div.appendChild(type);

        let score = document.createElement("h4");
        score.innerHTML = "IMDB Rating: " + res[content].score;
        div.appendChild(score);

        Animedata.appendChild(div);
    }
}
getAnime();