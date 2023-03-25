// Code your solution here
function findMatching(drivers, name){
    let newArray = [];
    newArray = drivers.filter(function(element){
        if(name === element || name.toUpperCase() === element.toUpperCase()){
            return true;
        }else{
            return false;
        }
    })

    return newArray;

}

function fuzzyMatch(drivers, letters){
    let stringLength = letters.length;
    let newArray = drivers.filter(function(element){
        if(element.slice(0,stringLength) === letters){
            return true;
        }else{
            return false;
        }})

    return newArray;
}


function matchName(drivers, string){
    let newArray = drivers.filter(function(element){
        if(element.name === string){
            return true;
        }else{
            return false;
        }
    })

    return newArray;
}

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
console.log(fuzzyMatch(drivers, 'Sa'))