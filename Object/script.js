// ------- Lista de carti din biblioteca ------- //

const listOfBooks = [
    {title: 'Sangele Sfant si Sfantul Graal', author: ['Michael Baigent', 'Richard Leigh','Henry Lincoln'], readed: true},
    {title:'Codul lui Da Vinci', author: 'Dan Brown', readed: true},
    {title: 'Al cincelea munte', author: 'Paolo Coelho', readed: false},
    {title: 'Conspiratia', author: 'Dan Brown', readed: false},
    {title: 'Ingeri si demoni', author: 'Paolo Coelho', readed: true},
    {title: 'Iezuitii', author: 'Johnatan Wright', readed: true},
    {title: 'Aleph', author: 'Paolo Coelho', readed: true},
    {title: 'Fortareata Digitala', author: 'Dan Brown', readed: false},
    {title: 'Adolescentul', author: 'Fyodor Dostoevsky ', readed: true}
];

// ------- Titlurile si autorii cartilor ------- //

for (i = 0; i < listOfBooks.length; i++){
    if (listOfBooks[i].readed){
        console.log(listOfBooks[i].title + ' de ' + listOfBooks[i].author + '. Cartea a fost citita. Keep Going!');
    }
    else{
        console.log(listOfBooks[i].title + ' de ' + listOfBooks[i].author + '. Cartea nu este citita. Ce mai astepiti?');
    }
}

