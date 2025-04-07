// create an array with objects for pairings of art & music

const ambient = [
    {
        art_id: 129884,
        song_id: "7KkqPFSw8jrZgSqSHGUagZ?si=a305668083ea4bbf",
        //Turn away and run by Hammock 2016
    
    },
    {
        art_id: 14692,
        song_id: "6CYfnlGK2TAjrFwHPg2S0O?si=a55448d022bc4e3c",
    },
    {
        art_id: 24306,
        song_id: "1vgSaC0BPlL6LEm4Xsx59J?si=84ac35241922441c",
    },
    {
        art_id: 100858,
        song_id: "7m2iqOIBuCT0XvMkv4wYNv?si=3c4fa4b8d44249ef",
    },
]

const classical = [
    {
        art_id: 870888,
        song_id: "25zykbJGBYXYjnq5VyhO3N?si=bed14e8a0f0e46e4",
    },
    {
        art_id: 16487,
        song_id: "3MRQn2RYo2VLYMoStnLRxu?si=64e29a5c1e8b410f",
    },
    {
      art_id: 61428, 
      song_id: "5GIb1Ex3euFcOwR1WP9LIH?si=4d039158a92a43fa"
    },
    {
        art_id: 111436,
        song_id: "1cmigB9I6IRpFqjIbzvSQB?si=12d4fc635ee745d0",
    },
]
const jazz = [
    {
        art_id:79593,
        song_id:"3muwYfpLZGYsvrrssEzrxF?si=70c21db75303483b"
    },
    {
       art_id:149995,
       song_id: "6YYu8qFzcY1ZyzzsJIQM12?si=f974154a9a7c49d1" 
    }, 
    {
        art_id: 109445, 
        song_id: "3ZikLQCnH3SIswlGENBcKe?si=f961c71594464acf"
    }, 
    {
        art_id: 16464, 
        song_id: "5yYJNiQ3oapwwxu2A7Ch0A?si=95442596009f4522"
    }
]

const pop =[
    {
        art_id: 150044,
        song_id:"73zDQykFwu3yT5VQ6MwYbh?si=fe24aeca4f0b4a61"
    }, 
    {
        art_id: 146909, 
        song_id: "3ix6K4wZY29bCujrSznwFZ?si=02986e9c27904caf", 
    }, 
    {
        art_id: 122054, 
        song_id: "6aU6a9tdn2vHhnPGlboFZX?si=ff50a79698d147e3"
    }, 
    {
        art_id: 151531, 
        song_id: "6QaVfG1pHYl1z15ZxkvVDW?si=df91409d92104cf9"
    }
]

const rock =[
    {
        art_id:118662,
        song_id:"4pt5fDVTg5GhEvEtlz9dKk?si=cacaca6c1a1d4166",

    },
    {
        art_id:62315 ,
        song_id:"0Evhu0dKCkIuEn88Pmb9mj?si=c70e395da2d64202" ,
    },
    {
        art_id:189807,
        song_id: "4mWahKerLaVddUjb8d1Q4Q?si=b0561cc85d0643c5"
    }, 
    {
        art_id: 117188, 
        song_id: "5SAUIWdZ04OxYfJFDchC7S?si=65c7c8a4d1b049b3"
    }

]
const hiphop= [
    {
        art_id: 125660,
        song_id: "5fybLNY2eBRnEGg8SUW6yk?si=f73d96c1bfaa487e"

    },
    {
        art_id: 76244,
        song_id:"6GAemDMWAXa8wZOBkO1gar?si=4f5cde762c334114"
    },
    {
        art_id: 229393,
        song_id:"7G3lxTsMfSx4yarMkfgnTC?si=020f5a87f74e4455"
    },
    {
        art_id:117266,
        song_id:"1UjyF6okUHhnVxaLV8ojsA?si=9c7be2801a6e4c0e"
    }
]

const country = [
    {
        art_id:187474,
        song_id: "0S8CKAHarMn66HSd7Sz4M1?si=39a145d65c0f417a"
    },
    {
        art_id: 209969,
        song_id: "1YpaLgbV9uZt1q55TvmjM7?si=a800d8bb761e4ee6"
    }, 
    {
        art_id: 180826, 
        song_id: "0u2FHSq3ln94y5Q57xazwf?si=a7850031b3f74c6d"
    }, 
    {
        art_id:59455,
        song_id: "2JbOgVzCGIl5dASAyWm8zd?si=1ac37e3712664332"
    }

]

const electronic = [
    {
        art_id: 70125, 
        song_id:"3Om7xxNAn64xJOuU9WVKtp?si=f1e37b9743724c38"
    },
    {
        art_id:62323 , 
        song_id: "3v65IsDl6LDOHDu9bU4ZOn?si=1bf86ab8360248a5",
    },
    {
        art_id: 185186, 
        song_id: "0r9NLcp6718EYibVX6diWN?si=c566c04bfde54061",
    }, 
    {
        art_id: 79598, 
        song_id: "0RiN1nQXJ48CaNLuwKwXQO?si=601710db2c6d41d6",
    }
]
const lofi = [
    {
        art_id: 2923,
        song_id:"52mfldfVqK2V7gmgpHJRoW?si=876319c276a241cf",
    },
    {
        art_id: 60031,
        song_id:"70a0qq6odWt4EHd64fIzLC?si=dd104ebde88d4569",
    },
    {
        art_id:8424,
        song_id:"2TkgXOak0gvGbjS9bjGKxJ?si=c6ca5b0f1d464a8c"
    },
    {
        art_id: 14749, 
        song_id: "5X5HS4UiJrjzl8SIBLlv4u?si=6b9515404a7b4bd5"
    }
]


module.exports = {
    ambient,
    classical,
    jazz,
    pop,
    rock,
    hiphop,
    country,
    electronic,
    lofi,
}
