require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const https = require('https');

const genreData = require("./components/data/data.js");
const art = require('./components/chicago_art/api.js');
const music = require('./components/spotify/api.js');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async (req, res) => {


    res.render('index');
});



//routes for data

app.get('/ambient', async (req,res)=>{
    let randomIndex  = Math.floor(Math.random() * genreData.ambient.length);
    //1. retreive song/art from data under 'ambient'
    let artID = genreData.ambient[randomIndex].art_id;
    let artData = await art.getArtData(artID);

    // 1. Retrieve iiif URL from art data.
    let iiifURL = artData.config.iiif_url;
    // 2. Retrieve image_id from art data.
    let imgID = artData.data.image_id;
    // 3. Create the final image URL using the iiif URL and image_id.
    let imageURL = `${iiifURL}/${imgID}/full/843,/0/default.jpg`;

    let songID = genreData.ambient[randomIndex].song_id;
    let songData = await music.getSpotifyData(songID);
    console.log(songData);

    // let songData = {artist: "Queen", song: "Don't Stop Me Now"};

    res.render("results", {artData: artData, imageURL: imageURL, songData: songData});
});

app.get('/classical', async (req, res) =>{
    let randomIndex  = Math.floor(Math.random() * genreData.classical.length);
    
    let artID = genreData.classical[randomIndex].art_id;
    let artData = await art.getArtData(artID);

    // 1. Retrieve iiif URL from art data.
    let iiifURL = artData.config.iiif_url;
    // 2. Retrieve image_id from art data.
    let imgID = artData.data.image_id;
    // 3. Create the final image URL using the iiif URL and image_id.
    let imageURL = `${iiifURL}/${imgID}/full/843,/0/default.jpg`;

    let songID = genreData.classical[randomIndex].song_id;
    let songData = await music.getSpotifyData(songID);
    console.log(songData);

    res.render("results", {artData: artData, imageURL: imageURL, songData: songData});
})


app.get('/jazz', async(req, res) => {
    let randomIndex  = Math.floor(Math.random() * genreData.jazz.length);
    
    let artID = genreData.jazz[randomIndex].art_id;
    let artData = await art.getArtData(artID);

    // 1. Retrieve iiif URL from art data.
    let iiifURL = artData.config.iiif_url;
    // 2. Retrieve image_id from art data.
    let imgID = artData.data.image_id;
    // 3. Create the final image URL using the iiif URL and image_id.
    let imageURL = `${iiifURL}/${imgID}/full/843,/0/default.jpg`;

    let songID = genreData.jazz[randomIndex].song_id;
    let songData = await music.getSpotifyData(songID);
    console.log(songData);

    res.render("results", {artData: artData, imageURL: imageURL, songData: songData});
}); 

app.get('/pop', async(req, res) => {
    let randomIndex  = Math.floor(Math.random() * genreData.pop.length);
    
    let artID = genreData.pop[randomIndex].art_id;
    let artData = await art.getArtData(artID);

    // 1. Retrieve iiif URL from art data.
    let iiifURL = artData.config.iiif_url;
    // 2. Retrieve image_id from art data.
    let imgID = artData.data.image_id;
    // 3. Create the final image URL using the iiif URL and image_id.
    let imageURL = `${iiifURL}/${imgID}/full/843,/0/default.jpg`;

    let songID = genreData.pop[randomIndex].song_id;
    let songData = await music.getSpotifyData(songID);
    console.log(songData);

    res.render("results", {artData: artData, imageURL: imageURL, songData: songData});
});

app.get('/rock', async(req, res) => {
    let randomIndex  = Math.floor(Math.random() * genreData.rock.length);
    
    let artID = genreData.rock[randomIndex].art_id;
    let artData = await art.getArtData(artID);

    // 1. Retrieve iiif URL from art data.
    let iiifURL = artData.config.iiif_url;
    // 2. Retrieve image_id from art data.
    let imgID = artData.data.image_id;
    // 3. Create the final image URL using the iiif URL and image_id.
    let imageURL = `${iiifURL}/${imgID}/full/843,/0/default.jpg`;

    let songID = genreData.rock[randomIndex].song_id;
    let songData = await music.getSpotifyData(songID);
    console.log(songData);

    res.render("results", {artData: artData, imageURL: imageURL, songData: songData});
});

app.get('/hiphop', async(req, res) => {
    let randomIndex  = Math.floor(Math.random() * genreData.hiphop.length);
    
    let artID = genreData.hiphop[randomIndex].art_id;
    let artData = await art.getArtData(artID);

    // 1. Retrieve iiif URL from art data.
    let iiifURL = artData.config.iiif_url;
    // 2. Retrieve image_id from art data.
    let imgID = artData.data.image_id;
    // 3. Create the final image URL using the iiif URL and image_id.
    let imageURL = `${iiifURL}/${imgID}/full/843,/0/default.jpg`;

    let songID = genreData.hiphop[randomIndex].song_id;
    let songData = await music.getSpotifyData(songID);
    console.log(songData);

    res.render("results", {artData: artData, imageURL: imageURL, songData: songData});
});

app.get('/country', async(req, res) => {
    let randomIndex  = Math.floor(Math.random() * genreData.country.length);
    
    let artID = genreData.country[randomIndex].art_id;
    let artData = await art.getArtData(artID);

    // 1. Retrieve iiif URL from art data.
    let iiifURL = artData.config.iiif_url;
    // 2. Retrieve image_id from art data.
    let imgID = artData.data.image_id;
    // 3. Create the final image URL using the iiif URL and image_id.
    let imageURL = `${iiifURL}/${imgID}/full/843,/0/default.jpg`;

    let songID = genreData.country[randomIndex].song_id;
    let songData = await music.getSpotifyData(songID);
    console.log(songData);

    res.render("results", {artData: artData, imageURL: imageURL, songData: songData});
});

app.get('/electronic', async(req, res) => {
    let randomIndex  = Math.floor(Math.random() * genreData.electronic.length);
    
    let artID = genreData.electronic[randomIndex].art_id;
    let artData = await art.getArtData(artID);

    // 1. Retrieve iiif URL from art data.
    let iiifURL = artData.config.iiif_url;
    // 2. Retrieve image_id from art data.
    let imgID = artData.data.image_id;
    // 3. Create the final image URL using the iiif URL and image_id.
    let imageURL = `${iiifURL}/${imgID}/full/843,/0/default.jpg`;

    let songID = genreData.electronic[randomIndex].song_id;
    let songData = await music.getSpotifyData(songID);
    console.log(songData);

    res.render("results", {artData: artData, imageURL: imageURL, songData: songData});
});

app.get('/lofi', async(req, res) => {
    let randomIndex  = Math.floor(Math.random() * genreData.lofi.length);
    
    let artID = genreData.lofi[randomIndex].art_id;
    let artData = await art.getArtData(artID);

    // 1. Retrieve iiif URL from art data.
    let iiifURL = artData.config.iiif_url;
    // 2. Retrieve image_id from art data.
    let imgID = artData.data.image_id;
    // 3. Create the final image URL using the iiif URL and image_id.
    let imageURL = `${iiifURL}/${imgID}/full/843,/0/default.jpg`;

    let songID = genreData.lofi[randomIndex].song_id;
    let songData = await music.getSpotifyData(songID);
    console.log(songData);

    res.render("results", {artData: artData, imageURL: imageURL, songData: songData});
});







const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
  });
