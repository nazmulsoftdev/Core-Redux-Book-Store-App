import { ADDBOOK, DELETEBOOK, EDITBOOK, LOADBOOK } from "./actionType";

// create book action

/* Load Book action */

export const BookLoadedAc = (value) => {
    return {
        type: LOADBOOK,
        paylod: value,
    };
};

/* ADD Book action */
export const AddBookAc = (name, author, image, price, rating, featured) => {
    return {
        type: ADDBOOK,
        paylod: {
            name,
            author,
            image,
            price,
            rating,
            featured,
        },
    };
};

/* Update Books */

export const EditBookAc = (
    bookId,
    Uname,
    Uauthor,
    Uprice,
    Urating,
    Uimage,
    Ufeatured
) => {
    return {
        type: EDITBOOK,
        paylod: {
            bookId,
            Uname,
            Uauthor,
            Uprice,
            Urating,
            Uimage,
            Ufeatured,
        },
    };
};

/* Delete Book action */

export const DeleteBookAc = (bookId) => {
    return {
        type: DELETEBOOK,
        paylod: bookId,
    };
};