/*The purpose of this application is to help evenly spread the work load in QC by 
randomly selecting an Inspector to perform first piece inspection.  Because this is 
at random and not in any particular order, there is a failsafe to prevent someone
from being selected too many times compared to average score of the rest.  The scores
are stored locally and can be reset by running the reset.html file.   

List of things that currently need to be added in.
1) confetti effect
*/

//this function is used to randomise an array
function getRandomSortValue() {
    return Math.floor(Math.random() * (3 + 1) - 2);
}

//making a list of all the inspectors
let theList = ['Amanda','Judy','Alicia','Amelia','Deanna','Darlene'];
/*This if statement will check to see if there is any local storage. if there isn't
it will add them all and set their scores to zero*/
if(localStorage.getItem(`${theList[0]}`) == null) {
    theList.forEach(element => {
        localStorage.setItem(element.toString(), 0);
    });   
}
let isItAGoodName = false;
while(isItAGoodName == false){
//now to shuffles the list of Inspectors names (those are also my local storage keys)
theList.sort(getRandomSortValue);
/*before i actually use this person and add a point i need to add up the total and 
compare the average to the selected persons score*/
let totalScore = 0;
theList.forEach(element => totalScore += (parseInt(localStorage.getItem(element))));
if(parseInt(localStorage.getItem(theList[0])) <= (totalScore/theList.length) + 1) {
    //if they meet the criteria they'll have a point added
    let data = parseInt(localStorage.getItem(theList[0]));
    localStorage.setItem(theList[0], data + 1);
    //and now we can exit this while loop
    isItAGoodName = true;
    //and this sends the string name back to the html doc
    document.write('<p id="nameStyle">' + theList[0] + '</p>');
    /*now i want to make a placeholder for the skip function.  this local storage will save the selected
    person's (index 0 of theList) name.  If the skip link is clicked, it will use the saved data to deduct
    a point from the inspectors score before shuffling all of them again.*/
    localStorage.setItem("selectedInspector", theList[0]);
}
//this prints the score of everyone even if no one was selected.  its also a good way to see how many times
//the while loop looped before settling on someone
theList.forEach(element => {
    console.log(`${element} = ${parseInt(localStorage.getItem(element))}`);
});
console.log('------------------------------------------')
}