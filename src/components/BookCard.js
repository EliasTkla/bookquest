import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/bookCard.css'

export default function BookCard(props) {

    const book = props.bookData;

    return (
        <Link className={'book-card'} key={book.id} to={'/bookdetail/' + book.volumeInfo.title.replace(/\s+/g, '-')} state={{ page: props.returnPage, data: book }}>
            <img className='background-theme' src={"https://books.google.com/books/publisher/content/images/frontcover/" + book.id + "?fife=w800-h1000&source=gbs_api"} alt='book cover' width={200} height={"auto"} loading="lazy" />
            <img className='cover' src={"https://books.google.com/books/publisher/content/images/frontcover/" + book.id + "?fife=w800-h1000&source=gbs_api"} alt='book cover' width={"auto"} height={"auto"} loading="lazy" />

            <div>
                <h1>{book.volumeInfo.title}</h1>
                <h2>By {book.volumeInfo.authors ? book.volumeInfo.authors : 'N/A'}</h2>
                {window.innerWidth > 425 ? <p>{book.volumeInfo.description ? book.volumeInfo.description : 'Not Available'}</p> : ''}
            </div>
        </Link>
    )
}