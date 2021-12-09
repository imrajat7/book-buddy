import { useState } from "react";
import "./App.css";

const bookDB = {
    horror: [
        { name: "Carrie", rating: "4/5" },
        { name: "The Haunting of Hill House", rating: "4/5" },
        { name: "Bird Box", rating: "5/5" },
    ],
    fiction: [
        {
            name: "Where the Crawdads sing",
            rating: "4/5",
        },
        {
            name: "1984",
            rating: "4.5/5",
        },
    ],
    suspense: [
        {
            name: "Gone Girl",
            rating: "4/5",
        },
        {
            name: "The 19th Christmas",
            rating: "5/5",
        },
        {
            name: "The Guardians",
            rating: "4/5",
        },
    ],
    history: [
        { name: "John Adams", rating: "4/5" },
        { name: "1776", rating: "5/5" },
        { name: "The Six Wives of Henry VIII", rating: "4/5" },
    ],
};

function App() {
    const [genreSelected, setGenreSelected] = useState(Object.keys(bookDB)[0]);
    const genreClickHandler = (genre) => {
        setGenreSelected(genre);
    };
    return (
        <div className="App">
            <h2>Book Buddy</h2>
            <p> Select a genre to get started </p>
            <div>
                {Object.keys(bookDB).map((key) => (
                    <button
                        className="genre-button"
                        onClick={() => genreClickHandler(key)}
                    >
                        {key}
                    </button>
                ))}
            </div>
            <hr />
            <div>
                <div className="results-list">
                    {bookDB[genreSelected].map((book) => (
                        <div className="result-item">
                            <img
                                src="./assets/bookBack.jpg"
                                className="cover-image"
                                alt="nothing"
                            />{" "}
                            <div className="book-name"> {book.name} </div>
                            <div className="book-rating"> {book.rating} </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
