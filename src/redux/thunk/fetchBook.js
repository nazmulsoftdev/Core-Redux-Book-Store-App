import { BookLoadedAc } from "../book/action";

const fetchBook = async(dispatch) => {
    let response = await fetch("http://localhost:9000/books");

    let data = await response.json();

    dispatch(BookLoadedAc(data));
};

export default fetchBook;