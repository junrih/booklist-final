import React from 'react';

const Book = ({ book, toggleStatus }) => {
    return (
        <tr>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.status === 'Checked Out' ? book.dueDate : ''}</td>
            <td>{book.status}</td>
            <td>
                <button className="btn btn-primary btn-sv" onClick={() => toggleStatus(book.title)}>
                    Toggle Status
                </button>
            </td>
        </tr>
    );
};

export default Book;
