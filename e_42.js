/*
Start with a copy of your program from Exercise 41. Write a function called make_great() that
modifies the array of magicians by adding the phrase the Great to each magician’s name. Call
show_magicians() to see that the list has actually been modified.
*/
var magicianNames1 = ["Salman", "Rauf", "Kashif", "Babar"];
function show_magicians(greet) {
    for (var _i = 0, magicianNames1_1 = magicianNames1; _i < magicianNames1_1.length; _i++) {
        var magicianName = magicianNames1_1[_i];
        console.log(greet, magicianName);
    }
}
;
show_magicians("Hello, How are you Mr.");
