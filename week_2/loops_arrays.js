// console.log(shoppingList);
// console.log("First item:", shoppingList[0]);
// console.log("Last item:", shoppingList[3]);

// console.log("🛒 Today's Shopping List:");


function printList(items, title = "list") {

    console.log(`\n${title}:`)

    for (let i = 0; i < items.length; i++) {

        console.log(` ${i + 1}. ${items[i]}`);


    }

}


let shoppingList = ["milk", "bread", "eggs", "butter"];

let books = ['forty rules', 'gems', 'polo caulo'];

let movies = ["Inception", "Spider-Man", "Titanic"];





printList(shoppingList, "Shopping List");

printList(books, "Books to read");

printList(movies, "sFavorite Movies");