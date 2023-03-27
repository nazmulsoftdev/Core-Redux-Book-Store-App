import { ADDBOOK, DELETEBOOK, EDITBOOK, LOADBOOK } from "./actionType";

// create unique id for each book item

const nextId = (state) =>
    state.reduce((maxId, item) => Math.max(maxId, item.id), -1) + 1;

//  create a initialState for book

const initialState = [];

//  create book reducer

const bookReducer = (state = initialState, action) => {
    switch (action.type) {

        case LOADBOOK:
            return action.paylod

        case ADDBOOK:
            const { name, author, image, price, rating, featured } = action.paylod;

            return [
                ...state,
                {
                    id: nextId(state),
                    name: name,
                    author: author,
                    image: image,
                    price: price,
                    rating: rating,
                    featured: featured,
                },
            ];

        case EDITBOOK:
            const { bookId, Uname, Uauthor, Uprice, Urating, Uimage, Ufeatured } =
            action.paylod;
            return state.map((item) =>
                item.id === bookId ? {
                    ...item,
                    name: Uname,
                    author: Uauthor,
                    price: Uprice,
                    image: Uimage,
                    rating: Urating,
                    featured: Ufeatured,
                } :
                item
            );

        case DELETEBOOK:
            return state.filter((item) => item.id !== action.paylod);

        default:
            return state;
    }
};

export default bookReducer;