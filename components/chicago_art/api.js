
// const iiifURL = response.json.config.ifff_url;
// const imageID = response.json.image_id;

const art = "https://api.artic.edu/api/v1/artworks";


// Image Info

async function getArtData(art_id){
    let imgUrl = `${art}/${art_id}`;
    let response = await fetch(
        imgUrl,
        {
            headers:{
            "Content-Type": "application/json",
            }


        }
    );
    return await response.json();
}
// Image Display


module.exports = {
    getArtData,
}