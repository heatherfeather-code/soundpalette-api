const imageIdUrl = {
    AlmaThomas : 129884,
    // EdwardHopper : 129885,
    // FridaKahlo : 129886,
}
// const iiifURL = response.json.config.ifff_url;
// const imageID = response.json.image_id;

const art = "https://api.artic.edu/api/v1/artworks";

// Image Info

async function getArtData(){
    let imgUrl = `${art}/${imageIdUrl.AlmaThomas}`;
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