import { DeleteBookAc } from "../book/action";

const fetchDelete = (bookId) => {
    return async(dispatch) => {
        await fetch(`http://localhost:9000/books/${bookId}`, {
            method: "DELETE",
        });

        dispatch(DeleteBookAc(bookId));
    };
};



export default fetchDelete;