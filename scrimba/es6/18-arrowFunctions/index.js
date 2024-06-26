// function declaration
function breakfastMenu() {
    return "I'm going to scrambled eggs for breakfast";
}

// anonymous function
const lunchMenu = function() {
    return "I'm going to eat pizza for lunch";
}


// const dinnerMenu = (food) => {
//     return `I'm going to eat a ${food} for dinner`;
// }

// const dinnerMenu = (food) => `I'm going to eat a ${food} for dinner`;

const dinnerMenu = food => `I'm going to eat a ${food} for dinner`;    // for one parameter no paranthesis required

console.log(dinnerMenu("chicken salad"))