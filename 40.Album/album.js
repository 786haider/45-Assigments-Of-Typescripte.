// Function to create a music album object
function make_album(artist, album_title, tracks) {
    var album = {
        artist: artist,
        album_title: album_title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Calling the function to create album objects
console.log(make_album("Taylor Swift", "Folklore"));
console.log(make_album("Ed Sheeran", "Divide", 16)); // Including number of tracks
console.log(make_album("Adele", "25"));
