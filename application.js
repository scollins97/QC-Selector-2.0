/*The purpose of this application is to build upon a previously made prototype
and turn make something more user friendly.  It will randomly select an inspector
to perform a first piece inspection for any department that needs one.  If an
inspectors score (the amount of times they have done a first piece) gets too high
compared to the average score, they will not be selected that round.

List of things to be included in this version:
1) A way to save the scores after the program is shut off. This will ensure that if
someone gets selected a lot one day, their score will be high enough the next
session to prevent them being selected too many times again.
2) A way to easily reset all the scores might be necessary when there's a leave of
abscence.
3) An easy way to manually adjust scores or an option to skip somone.  Maybe they're
at lunch or in a meeting.  They'll just get selected again later.
4) Larger names need to appear on the screen. The first version just uses the 
browsers alert box.  It's functional, but not pretty or user friendly.*/

//this class defines what a inpsector is. Their name and their score
    //so we may not actually need this if we consider a reboot every day
class Inspector{
    constructor(name, score){
        this.name = name;
        this.score = score;
    }  
    //this method adds a point to the Inspectors score 
    scoreIncrementer(){
        this.score ++;
    } 
}
//this function is used to randomise an array
function getRandomSortValue() {
    return Math.floor(Math.random() * (3 + 1) - 2);
}
//document.write('word');

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
    isItAGoodName = true;
    document.write(theList[0]);
}
theList.forEach(element => {
    console.log(`${element} = ${parseInt(localStorage.getItem(element))}`);
});
console.log('------------------------------------------')
}