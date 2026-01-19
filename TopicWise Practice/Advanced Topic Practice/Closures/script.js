// function counter() {
//     let count = 0;
//     return function () {
//         count++
//         return `Count: ${count}`
//     }
// }

// let count = counter()
// console.log(count())
// console.log(count())
// console.log(count())
// console.log(count())
// console.log(count())
// console.log(count())



// function usernameStore(username) {
//     let usernames = []

//     return {
//         addUser: function (username) {
//             usernames.push(username);
//             return `${username} stored`
//         },

//         searchUser: function (user) {
//             return usernames.includes(user) ? `Founded` : `Not Found`;
//         }
//     }
// }

// let foundUser = usernameStore()
// console.log(foundUser.addUser('Nitin'))
// console.log(foundUser.addUser('Punit'))
// console.log(foundUser.addUser('Kuldeep'))
// console.log(foundUser.addUser('Tamanna'))
// console.log(foundUser.searchUser('tamanna'))
// console.log(foundUser.searchUser('Punit'))
// console.log(foundUser.searchUser('Kuldeep'))
// console.log(foundUser.searchUser('Nitin'))



// function number(num) {
//     return function (multipliedBy) {
//         return num * multipliedBy;
//     }
// }

// let double = number(2)
// console.log(double(5))


// function getId(){
//     let ID = 0
//     return function(){
//         ID++;
//         return `ID- ${ID}`
//     }
// }

// let newidGenerator = getId()
// console.log(newidGenerator())
// console.log(newidGenerator())
// console.log(newidGenerator())






// function counter() {
//     let Count = 0
//     return {
//         increament: function () {
//             return ++Count
//         },
//         decrement: function () {
//             return --Count
//         },
//         reset: function () {
//             return Count = 0
//         }
//     }
// }

// let count = counter()
// console.log(count.increament())
// console.log(count.increament())
// console.log(count.decrement())
// console.log(count.reset())


// Example: Add a "tags" property in songs array
const songs = [
    {
        id: 1,
        title: "Ha Ha Ha",
        artist: "Dhanda Nyoliwala",
        artistImage: 'https://c.saavncdn.com/artists/Dhanda_Nyoliwala_000_20240820133551_500x500.jpg',
        file: "assets/Dhanda Nyoliwala/Dhanda_Nyoliwala_-_Ha_Ha_Ha__Official_Music_Video_(0).mp3",
        cover: "./assets/images/ed-sheeran.jpg",
        genre: "Pop",
        tags: ["Motivational", "energetic", "rap"] // Added a tags array
    },
    {
        id: 2,
        title: "Rubicon",
        artist: "Dhanda Nyoliwala",
        artistImage: 'https://c.saavncdn.com/artists/Dhanda_Nyoliwala_000_20240820133551_500x500.jpg',
        file: "assets/Dhanda Nyoliwala/Dhanda_Nyoliwala_-_RUBICON__Official_Music_Video_(0).mp3",
        cover: "./assets/images/ed-sheeran.jpg",
        genre: "Pop",
        tags: ["Motivational", "energetic", "rap"] // Added a tags array
    },
    {
        id: 3,
        title: "La La La",
        artist: "Dhanda Nyoliwala",
        artistImage: 'https://c.saavncdn.com/artists/Dhanda_Nyoliwala_000_20240820133551_500x500.jpg',
        file: "assets/Dhanda Nyoliwala/Dhanda_Nyoliwala_-_La_La_La__Music_Video____Deepesh_Goyal___VYRL_Haryanvi(0).mp3",
        cover: "./assets/images/ed-sheeran.jpg",
        genre: "Pop",
        tags: ["rap", "love"] // Added a tags array
    },
    {
        id: 4,
        title: "Filhal",
        artist: "Dhanda Nyoliwala",
        artistImage: 'https://c.saavncdn.com/artists/Dhanda_Nyoliwala_000_20240820133551_500x500.jpg',
        file: "assets/Dhanda Nyoliwala/Dhanda_Nyoliwala_-_Ha_Ha_Ha__Official_Music_Video_(0).mp3",
        cover: "./assets/images/ed-sheeran.jpg",
        genre: "Pop",
        tags: ["Sad", "Romantic", "Bollywood"] // Added a tags array
    },
    {
        id: 5,
        title: 'Yaar Ka Sataya Hua Hai',
        artist: 'B Praak',
        artistImage: 'https://i.pinimg.com/736x/0b/bd/f2/0bbdf29cf0089705f3ee65f17b662431.jpg',
        file: 'assets/B Praak/Yaar_Ka_Sataya_Hua_Hai_-_B_Praak___Nawazuddin_Siddiqui___Shehnaaz_Gill___Jaani___Arvindr_Khaira(0).mp3',
        cover: '',
        genre: 'Sad',
        tags: ['Heartbreak', 'Slow Songs', 'Emotional'] // Added a tags array
    },
    {
        id: 6,
        title: 'Aroma',
        artist: 'Sidhu Moose Wala',
        artistImage: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Sidhu_Moose_Wala.jpg',
        file: 'assets/Sidhu Moose Wala/AROMA__Official_Audio__Sidhu_Moose_Wala___The_Kidd___Moosetape(256k).mp3',
        cover: '',
        genre: 'Punjabi Rap',
        tags: ['Rap', 'Punjabi', 'Hip-Hop'] // Added a tags array
    },
    { 
        id: 7,
        title: 'Take It Easy', 
        artist: 'Karan Aujla', 
        imageUrl: 'https://cdns-images.dzcdn.net/images/artist/faae2718459c9fc1f848d308e17c554f/1900x1900-000000-80-0-0.jpg',
        file: 'assets/Karan Aujla/Take_It_Easy__Official_Video__Karan_Aujla.___Ikky___Four_You_EP___Latest_Punjabi_Songs_2023(0).mp3',
        cover: '',
        genre: 'Punjabi Pop', 
        tags: ['Feel-Good', 'Car Songs', 'Vibes']
    },
    

];


// Generate a list of unique artists dynamically
const artists = [...new Set(songs.map(song => song.artist))].map(artistName => {
    return {
        name: artistName,
        songs: songs.filter(song => song.artist === artistName).map(song => song.id)
    };
});

console.log(artists);


const playlists = [...new Set(songs.map(song => song.genre))].map(genre => {
    return {
        name: genre + " Songs",
        songs: songs.filter(song => song.genre === genre).map(song => song.id)
    };
});

console.log(playlists);


let likedSongs = [];

function likeSong(songId) {
    if (!likedSongs.includes(songId)) {
        likedSongs.push(songId);
    }
}

// Example Usage:
likeSong(2); // User likes "Blinding Lights"
likeSong(4); // User likes "Senorita"
console.log(likedSongs);


let recentlyPlayed = [];

function addToRecentlyPlayed(songId) {
    // Get song object
    const song = songs.find(s => s.id === songId);

    if (song) {
        // Remove duplicates & Keep latest 5 songs
        recentlyPlayed = [songId, ...recentlyPlayed.filter(id => id !== songId)].slice(0, 5);
    }
}

// Example Usage:
addToRecentlyPlayed(1); // Playing "Shape of You"
addToRecentlyPlayed(3); // Playing "Perfect"
addToRecentlyPlayed(2); // Playing "Blinding Lights"
console.log(recentlyPlayed);

// Creating "Just For You" playlist (Love Songs)
const justForYouPlaylist = {
    name: "Just For You",
    songs: songs.filter(song => song.tags.includes("love")).map(song => song.id)
};

// Creating "Gym Playlist" (Motivational Songs)
const gymPlaylist = {
    name: "Gym Playlist",
    songs: songs.filter(song => song.tags.includes("motivational")).map(song => song.id)
};

console.log(justForYouPlaylist);
console.log(gymPlaylist);
