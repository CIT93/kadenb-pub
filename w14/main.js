function renderPhotos(photos) {
    photos.forEach((img) => {
        const imgEL = document.createElement("img");
        imgEL.setAttribute("src", img.thumbnailUrl);
        document.getElementById("output").appendChild(imgEL);
    })
}

async function getPhotos() {
    try {
        const data = await fetch('https://jsonplaceholder.typicode.com/photos')
        const result = await data.json()
        renderPhotos(result)
        onSuccess(result)
    } catch(e) {
        onError(e)
    }
}

function onSuccess(result) {
    console.log(`Success: ${result}`)
  }
  
  function onError(err) {
    console.log(`ERROR: ${err}`)
  }
  
getPhotos()
  