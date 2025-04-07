

//need to get access token from spotify api
async function spotifyToken(){
    let spotifyEndpoint = "https://accounts.spotify.com/api/token";
    let clientID = process.env.SPOTIFY_CLIENT_ID;
    let clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

    let requestData = {
        "grant_type": "client_credentials",
        "client_id": clientID,
        "client_secret": clientSecret
    };

    let response = await fetch(spotifyEndpoint,{
        method:"POST",
        headers:
        {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(requestData)
    });

    return await response.json();
}
const spotifyURL = "https://api.spotify.com/v1/tracks";
// need function for accessing the spotify api 
async function getSpotifyData(song_id){
    let tokenResponse = await spotifyToken();
    let accessToken = tokenResponse.access_token;

    let songURL = `${spotifyURL}/${song_id}`;

    let response = await fetch(songURL,{
        method:"GET",
        headers:{
            "Authorization": `Bearer ${accessToken}`,
            "Content-Type": "application/json",
        }
    });

    return await response.json();
}

// within function need to access the data file to get the song id

module.exports={
    getSpotifyData,
}