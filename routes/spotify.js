const express = require('express');
const router = express.Router();
const https = require('https');

router.get('/', async (req, res) => {
    try {
        const token = process.env.SPOTIFY_TOKEN;
        const options = {
            hostname: 'api.spotify.com',
            path: '/v1/browse/new-releases',
            method: 'GET',
            headers: { Authorization: `Bearer ${token}` }
        };

        const request = https.request(options, (response) => {
            let data = '';
            response.on('data', chunk => { data += chunk; });
            response.on('end', () => {
                const musicData = JSON.parse(data);
                res.render('spotify', { title: 'New Releases', albums: musicData.albums.items });
            });
        });

        request.on('error', (err) => {
            res.status(500).send('Error fetching music data');
        });
        request.end();
    } catch (error) {
        res.status(500).send('Error fetching music data');
    }
});

module.exports = router;