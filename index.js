let myLibrary = [];

class Book{
  constructor(title, author, num_pages ,read){
    this.title = title;
    this.author = author;
    this.num_pages = num_pages;
    this.read = read;
  }
  info() {
    let str;
    if(this.read === false){
       str = "not read yet";
    }
    else {
      str = "read already"
    }
    return `${title}\n${author}\n${num_pages} , ${str}`;
  };
}

function toggleForm() {
  document.getElementById("popupForm").classList.toggle("show");
}

function resetForm() {
  const form = document.querySelector('form');
  form.reset();
}

function add() {
  toggleForm();

  const cards = document.querySelector(".cards");
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const numPages = document.getElementById("numPages").value;
  const read = document.getElementById("read").checked;
  const book = new Book(title, author, numPages, read);
  myLibrary.push(book);

  const card = document.createElement("div");
  const titleElem = document.createElement("div");
  const authorElem = document.createElement("div");
  const numPagesElem = document.createElement("div");
  const readButton = document.createElement("button");
  const removeButton = document.createElement("button");
  
  card.classList.add("card");
  titleElem.classList.add("title");
  authorElem.classList.add("author");
  numPagesElem.classList.add("numPages")
  if(read === true) {
    readButton.classList.add("read");
  }
  readButton.setAttribute("id", "readButton");
  readButton.addEventListener("click", toggleRead);
  removeButton.setAttribute("id", "removeButton");
  removeButton.addEventListener("click", removeCard);

  titleElem.textContent = title;
  authorElem.textContent = author;
  numPagesElem.textContent = numPages;
  readButton.textContent = "Read";
  removeButton.textContent = "Remove";

  card.appendChild(titleElem);
  card.appendChild(authorElem);
  card.appendChild(numPagesElem);
  card.appendChild(readButton);
  card.appendChild(removeButton);
  cards.appendChild(card);

  resetForm();
}

function removeCard(e) {
  const cards = e.path[2];
  const card = e.path[1];
  cards.removeChild(card);
}

function toggleRead(e) {
  const readButton = e.srcElement;
  readButton.classList.toggle("read");
}


