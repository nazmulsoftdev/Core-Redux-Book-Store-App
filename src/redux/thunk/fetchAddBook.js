import { AddBookAc } from "../book/action";

const fetchAddBook = (name, author, image, price, rating, featured) => {
    return async(dispatch) => {
        let response = await fetch("http://localhost:9000/books", {
            method: "POST",
            body: JSON.stringify({
                name: name,
                author: author,
                image: image,
                price: price,
                rating: rating,
                featured: featured,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });

        let data = await response.json();

        dispatch(AddBookAc(...data))
    };
};

export default fetchAddBook;