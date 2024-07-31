import React, { useState } from 'react';
import Book from './Book';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchFilter from './SearchFilter'


const getRandomDueDate = () => {
    const today = new Date();
    const randomDays = Math.floor(Math.random() * 30);
    const dueDate = new Date(today);
    dueDate.setDate(today.getDate() + randomDays);
    return dueDate.toISOString().split('T')[0];
};

const getRandomAuthor = () => {
    const authors = ['John', 'Jane', 'Mike', 'Lisa'];
    const randomIndex = Math.floor(Math.random() * authors.length);
    return authors[randomIndex];
};

const Books = () => {
    const [books] = useState([
        { title: 'Book of Life', author: getRandomAuthor(), dueDate: getRandomDueDate(), status: 'Checked Out' },
        { title: 'Book of Car', author: getRandomAuthor(), dueDate: getRandomDueDate(), status: 'Checked Out' },
        { title: 'Book of Things', author: getRandomAuthor(), dueDate: getRandomDueDate(), status: 'Checked Out' },
        { title: 'Book of Air', author: getRandomAuthor(), status: 'Available' },
        { title: 'Book of Ship', author: getRandomAuthor(), dueDate: getRandomDueDate(), status: 'Checked Out' },
        { title: 'Book of Sand', author: getRandomAuthor(), dueDate: getRandomDueDate(), status: 'Checked Out' },
        { title: 'Book of Death', author: getRandomAuthor(), status: 'Available' },
        { title: 'Book of Money', author: getRandomAuthor(), dueDate: getRandomDueDate(), status: 'Checked Out' },
        { title: 'Book of Plants', author: getRandomAuthor(), status: 'Available' },
        { title: 'Book of Animals', author: getRandomAuthor(), status: 'Available' },
    ]);

    const [filteredBooks, setFilteredBooks] = useState(books);

    const toggleStatus = (title) => {
        setFilteredBooks(prevBooks => prevBooks.map(book =>
            book.title === title ? { ...book, status: book.status === 'Checked Out' ? 'Available' : 'Checked Out' } : book
        ));
    };

    return (
        <div className="container mt-4">
          <h1 className="high">Books List</h1>
            <SearchFilter books={books} setFilteredBooks={setFilteredBooks} />
            <table className="table table-striped table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Author</th>
                        <th scope="col">Due Date</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredBooks.map((book, index) => (
                        <Book key={book.title} book={book} index={index} toggleStatus={toggleStatus} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Books;
