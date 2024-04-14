/*
Write a function called make_album() that builds an Object describing a music album. The 
function should take in an artist name and an album title, and it should return a Object containing 
these two pieces of information. Use the function to make three dictionaries representing different
albums. Print each return value to show that Objects are storing the album information correctly.
Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make 
at least one new function call that includes the number of tracks on an album.
*/

function myAlbum(artistName: string, albumTitle: string){
   return {artistName, albumTitle}
}

let album1 = myAlbum("Atif Aslam", "Aadat");
let album2 = myAlbum("Abida Parveen", "Raqs-e-Bismil");
let album3 = myAlbum("Sonu Nigam", "Dil Se");

console.log(album1);
console.log(album2);
console.log(album3);

// Number of tracks
function myAlbum2(artistName: string, albumTitle: string, numberOfTracks?: number){
    return {artistName, albumTitle, numberOfTracks}
 }
 
 let album4 = myAlbum2("Atif Aslam", "Aadat", 30);
 let album5 = myAlbum2("Abida Parveen", "Raqs-e-Bismil", 55);
 let album6 = myAlbum2("Sonu Nigam", "Dil Se");
 
 console.log(album4);
 console.log(album5);
 console.log(album6);