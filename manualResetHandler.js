/*This is like the reset file except it asks the user
what they want to set the scores of each inspector as.

There were a few times where we needed to reset but without score loss:
*People not understanding how it worked or accidently clicked too many times
*Switching the device
*/

//here is the list of current inspectors
let theList = ['Judy','Alicia','Amelia','Deanna','Darlene'];
//now lets check to make sure they have local storage if not, we'll declare them each at 0
theList.forEach(element => {
    if(localStorage.getItem(element) == null){
        localStorage.setItem(element.toString(), 0);
    }
});
//now lets set the scores manually
theList.forEach(element => {
    let placeholder = prompt(`Set the score for ${element}`);
    localStorage.setItem(element.toString(), placeholder);
});
//prints out the score of everyone just to make sure it worked
theList.forEach(element => {
    console.log(`${element} = ${parseInt(localStorage.getItem(element))}`);
});