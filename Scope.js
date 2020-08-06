let bonus = 20;
function sum(first, second) {
    let result = first + second + bonus;
    //console.log(result);
    //console.log(bonus);
    if (result > 9) {
        var mood = "happy"; //let/const use korla bahara thaka console log dakaba na kintu var dela bahara thaka dakaba
        mood = "fishy";
        mood = "funky";
        mood = "cranky"
        console.log(mood);
    }
    console.log(mood);
    return result;
}
const output = sum(3, 4);
//console.log(bonus);
//console.log(output);