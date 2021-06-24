

const addButton = document.getElementById("addButton")
const editSection = document.getElementById("editSection");
const bookSection = document.getElementById("books");
const form = document.createElement("form");

let unreadInput = document.createElement("input");
let readInput = document.createElement("input");
let pageInput = document.createElement("input");
let myLibrary = [];
let count = 0;


let submitButton = document.createElement("button");
editSection.appendChild(submitButton);
submitButton.classList.toggle("invisible");
submitButton.innerHTML = "Add Book";
submitButton.style.order = 3;

form.classList.toggle("invisible")
createForm();

// Toggles the entry form to its active state upon clicking the add book button
addButton.addEventListener('click', function () { form.classList.toggle("invisible"); submitButton.classList.toggle("invisible"); });


// call the addtolibrary function to add starter books to the library
addBookToLibrary("The Hail Mary", "Andy Weir", 497, "Read");
addBookToLibrary("The House in the Cerulean Sea", "TJ Klune", 393, "Unread");
addBookToLibrary("A Storm of Swords", "George R.R. Martin", 1008, "Read");

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

// Event listener changes value of new book button to canel on click
addButton.addEventListener("click", ()=>{

    if(addButton.innerText == "New Book")
    addButton.innerText = "cancel";

    else if(addButton.innerText == "cancel"){
        addButton.innerText = "New Book"
    }
});




// Function to add book to library
function addBookToLibrary(title, author, pages, read) {

    read = read.toUpperCase();

    if (title == "" || author == "" || pages == "" || read == "") {

        alert("Please fill in all fields.\n\nRead Status must be 'Read' or 'Unread'")
        form.classList.toggle("invisible")
        submitButton.classList.toggle("invisible");
    }
    else {
        // Add book object to the end of the array
        myLibrary.push(new Book(title, author, pages, read));

        // Create boxes to hold books
        createBookBox();
    }


}

// Create book boxes and append to books div
function createBookBox() {

    let box = document.createElement("div");
    bookSection.appendChild(box);
    box.classList.add("boxes")
    box.setAttribute("data-number", count);
    box.innerText = (myLibrary[count].info())

    let buttonContainer = document.createElement("div");
    box.appendChild(buttonContainer);
    buttonContainer.classList.add("buttonContainer");

    // add remove button
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButton");
    deleteButton.innerText = "Remove";
    buttonContainer.appendChild(deleteButton);
    deleteButton.addEventListener('click', function () { bookSection.removeChild(box) });

    // add read status button
    let readStatusButton = document.createElement("button");
    readStatusButton.classList.add("changeStatus");
    readStatusButton.innerText = "Change Read Status";
    buttonContainer.appendChild(readStatusButton);

    // add event listener. * still need to get it working with multiple clicks*
    readStatusButton.addEventListener('click', function () {

        changeStatus(box.dataset.number);

        box.innerText = myLibrary[parseInt(box.dataset.number)].info();

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

    });
    
    count++;

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
        clearFields();

        //uncheck();
        form.classList.toggle("invisible"); // keep

    })
    //End

}

function clearFields() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("read").value = "";
}

function changeStatus(number) {
    if (myLibrary[parseInt(number)].read == "UNREAD") {
        myLibrary[parseInt(number)].read = "READ"
    }

    else if (myLibrary[parseInt(number)].read == "READ") {
        myLibrary[parseInt(number)].read = "UNREAD"
    };

}






