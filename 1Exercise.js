function Book (title, author, pages, read){
    this.title = title, 
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.info = function(){
        console.log(title , author , pages , read)
        //return title + author + pages + read
    }
}

const b1 = new Book("The Hobbit","J.R.R Tolkien",295,"Not Read Yet")
b1.info()