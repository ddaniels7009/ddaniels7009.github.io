

const addButton = document.getElementById("addButton")


const editSection = document.getElementById("editSection");
const bookSection = document.getElementById("books");

let unreadInput = document.createElement("input");
let readInput = document.createElement("input");
let pageInput = document.createElement("input");
let submitButton = document.createElement("button");

let form = document.createElement("form");////

editSection.appendChild(submitButton);
submitButton.classList.toggle("invisible");
submitButton.innerHTML = "Add Book";
submitButton.style.order = 3;

let myLibrary = [];

let count = 0;

readInput.classList.toggle("input,input[type='radio'][value='Unread']");

// Constructor for Book Objects
function Book(title, author, numPages, read) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read;

    this.info = function () {

        let output = "Title: " + this.title + "\n" +
            "Author: " + this.author + "\n" +
            "Pages: " + this.numPages + "\n" +
            "Status: " + this.read;
        return output;

    }


}

// Function to add book to library
function addBookToLibrary(title, author, pages, read) {

    // Add book object to the end of the array
    myLibrary.push(new Book(title, author, pages, read));

    // Create boxes to hold books
    createBookBox();
    

}

// Create book boxes and append to books div
function createBookBox(){

    let box = document.createElement("div");
    bookSection.appendChild(box);
    box.classList.add("boxes")
    box.setAttribute("data-number", count);
    box.innerText = (myLibrary[count].info())
    //count++;

    let buttonContainer = document.createElement("div");
    box.appendChild(buttonContainer);
    buttonContainer.classList.add("buttonContainer");

    // Just need to add remove button
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButton");
    deleteButton.innerText = "Remove";
    buttonContainer.appendChild(deleteButton);
    deleteButton.addEventListener('click', function () { bookSection.removeChild(box) });

    let readStatusButton = document.createElement("button");
    readStatusButton.classList.add("changeStatus");
    readStatusButton.innerText = "Change Read Status";
    buttonContainer.appendChild(readStatusButton);

    
    readStatusButton.addEventListener('click', function () { myLibrary[parseInt(box.dataset.number)].read = "Unread"; box.innerText = myLibrary[parseInt(box.dataset.number)].info();
    });
    //myLibrary[count].read = "kill"
    count++;
    
    
}

//*Needs Implemented **
function removeBook(number) {

    number = parseInt(number);

    myLibrary.splice(number, number+1);
    
    }
    

// Bring up a form when the add book button is pressed
function createForm() {



    editSection.appendChild(form);///////
    form.classList.add("form");

    //Begin
    let label1 = document.createElement("label");
    form.appendChild(label1);

    label1.setAttribute("for", "title"); //* update id
    label1.innerHTML = "Book Title:"

    let titleInput = document.createElement("input");
    form.appendChild(titleInput);
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("id", "title"); ///* update id
    titleInput.setAttribute("name", "title");
    titleInput.setAttribute("value", "");
    //End


    //Begin
    let label2 = document.createElement("label");
    form.appendChild(label2);

    label2.setAttribute("for", "author");
    label2.innerHTML = "Book Author:"

    let authorInput = document.createElement("input");
    form.appendChild(authorInput);
    authorInput.setAttribute("type", "text");
    authorInput.setAttribute("id", "author");
    authorInput.setAttribute("name", "author");
    authorInput.setAttribute("value", "");
    //End


    //Begin
    let label3 = document.createElement("label");
    form.appendChild(label3);

    label3.setAttribute("for", "pages");
    label3.innerHTML = "Number of Pages:"


    form.appendChild(pageInput);
    pageInput.setAttribute("type", "text");
    pageInput.setAttribute("id", "pages");
    pageInput.setAttribute("name", "pages");
    pageInput.setAttribute("value", "");
    //End


    //Begin
    let readOption = document.createElement("label");
    form.appendChild(readOption);

    readOption.setAttribute("for", "read");
    readOption.innerHTML = "Read Status";

    form.appendChild(readInput);
    readInput.setAttribute("type", "text");
    readInput.setAttribute("id", "read");
    readInput.setAttribute("name", "read");
    readInput.setAttribute("value", "")
    //End



    //Begin
    submitButton.addEventListener('click', function () { // Submit the book to be added
        addBookToLibrary((document.getElementById("title").value),
            document.getElementById("author").value,
            document.getElementById("pages").value,
            document.getElementById("read").value);
        submitButton.classList.toggle("invisible");
        readInput.classList.toggle("input,input[type='radio'][value='Unread']");
        
        
        //uncheck();
        form.classList.toggle("invisible"); // keep

    })
    //End


}



// Create a new book entry
addButton.addEventListener('click', function () { form.classList.toggle("invisible"); submitButton.classList.toggle("invisible"); });

form.classList.toggle("invisible")
createForm();

//addButton.addEventListener('click', function () { createForm(); editSection.removeChild(form)});

//viewButton.addEventListener('click', function() { clearDisplay(); myLibrary.forEach(display); })

// call the addtolibrary function to add a book to the library
addBookToLibrary("The Hail Mary", "Andy Weir", 497, "not read yet");
addBookToLibrary("The House in the Cerulean Sea", "TJ Klune", 393, "not read yet");
addBookToLibrary("A Storm of Swords", "George R.R. Martin", 1008, "not read yet");


