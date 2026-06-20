// Example 1

document.getElementById('changeTextButton').
addEventListener('click', function () {
    console.log(this);
    let paragraph = document.getElementById('myParagraph');
    console.log(paragraph);
    paragraph.innerText = 'The paragraph has been changed!';
});

// Example 2

document.getElementById('highlightFirstCity').
addEventListener('click', function () {
    let citiesList = document.getElementById('citiesList');
    citiesList.firstElementChild.classList.add('highlight');
});

//Example 3

document.getElementById('changeOrder').addEventListener
('click', function(){
   let coffeType = document.getElementById('coffeType');
   coffeType.textContent = "Espresso";
   coffeType.style.backgroundColor = "brown";
    coffeType.style.padding= "5px";
});

// Example 4

document.getElementById("addNewItem").addEventListener
('click', function(){
    let newItem = document.createElement('li');
    newItem.textContent = prompt("Enter a new item for the shopping list:");
    document.getElementById('shoppingList').appendChild
    (newItem);
});

document.getElementById("deleteItem").addEventListener
('click', function(){
    let list = document.getElementById('shoppingList');
    let item = prompt("Enter the name of the item to delete:");
   let items = list.children;
    for(let i = 0; i < items.length; i++){
        if(items[i].textContent === item){
            list.removeChild(items[i]);
            return;
        }
    }
    alert("Item not found in the shopping list.");
});

// Example 5

document.getElementById('removeLastTask').addEventListener
('click', function(){
    let taskList = document.getElementById('taskList');
    taskList.lastElementChild.remove();
});


//example 6
document.getElementById('clickMeButton').addEventListener
('dblclick', function() {
    confirm('Button was clicked!');
});

// example 7 event delegation

document.getElementById('teaList').addEventListener('click', function(event) {
    if(event.target.tagName === 'LI') {
        alert(`You clicked on ${event.target.textContent}`);
    }
});


// example 8

document.getElementById('feedbackForm').addEventListener(
    'submit', function(event){
        event.preventDefault();
        let feedback = document.getElementById("feedbackInput").value;
        console.log(feedback);
        document.getElementById("feedbackDisplay").textContent = 
        "Feedback submitted: " + feedback;
    }
);