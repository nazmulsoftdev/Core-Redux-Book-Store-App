import { EditBookAc } from "../book/action";

const fetchUpdate = (bookId, name, author, price, rating, image, featured) => {

    return async(dispatch) => {
        let response = await fetch(`http://localhost:9000/books/${bookId}`, {
            method: "PATCH",
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

        dispatch(EditBookAc(...data));
    };
};


export default fetchUpdate;