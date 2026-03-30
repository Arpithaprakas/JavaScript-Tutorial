// Example 1- Accessing DOM element

let hold = document.getElementById("changeTextButton").addEventListener("click", function(){
    let para = document.getElementById("myParagraph")
    para.textContent = "Paragraph Changed!"
})

// Example 2 - Traversing the DOM

let btn = document.getElementById("highlightFirstCity").addEventListener('click', function() {
    let cities = document.getElementById('citiesList')
    // console.log(cities.firstElementChild);
    cities.firstElementChild.classList.add('highlight')
    
})

// Example 3 - Manipulating DOM elements

let coffee = document.getElementById('changeOrder').addEventListener('click', function(){
    let coffeeType = document.getElementById('coffeeType')
    // console.log(coffeeType.textContent);

    coffeeType.textContent = 'Espresso';

    // Adding CSS

    coffeeType.style.backgroundColor = 'Red';
    coffeeType.style.padding = '10px';
    
})

// Example 4 - Creating and Inserting Element

document.getElementById('addNewItem').addEventListener('click', function(){
    let new_item1 = document.createElement('li')
    new_item1.textContent = 'Eggs'  //creating new element

    /* let new_item2 = document.createElement('li')
    new_item2.textContent = 'Beer' */ 

    //add new item
    document.getElementById('shoppingList').appendChild(new_item1)
        // document.getElementById('shoppingList').appendChild(new_item2)

})

// Example 5 - Removing element

document.getElementById('removeLastTask').addEventListener('click', function(){
    let taskList = document.getElementById('taskList')
    // taskList.remove();  removes everything

    taskList.lastElementChild.remove();
})

// Example 6 - Event handling in DOM

document.getElementById('clickMeButton').addEventListener("click", function(){
    // alert('Done!')
})

// Example 7 - Event Delegation

document.getElementById('teaList').addEventListener("click", function(event){
    // console.log(event);
    if (event.target && event.target.matches('.teaItem')) {
        alert('You selected: '+ event.target.textContent)
    }
})

// Example 8- Form Handling

document.getElementById('feedbackForm').addEventListener('submit', function(e){
    // alert('Submited!')
    e.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    let t = document.getElementById("feedbackDisplay");
    t.textContent = `Feedback is : ${feedback}`
    t.style.backgroundColor = "white"
    t.style.color = 'black'
    t.style.fontSize = '100px'
    t.style.padding = '10px'
})

// Example 9 - DOM Content loading

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('domStatus').textContent = 'DOM fully loaded'
})

// Example 10 - CSS classes Manipulation

document.getElementById('toggleHighlight').addEventListener('click', function(){
    let des = document.getElementById("description")
    des.classList.toggle("highlight");
})
