import React, { useContext,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContextAPI } from "../context/Context";
import fetchBook from "../redux/thunk/fetchBook";
import BookFilter from "./BookFilter";
import BookList from "./BookList";

function Book() {
  const books = useSelector((state) => state.books);
  const Filterstate = useSelector((state) => state.filterBook);

  const { search } = useContext(ContextAPI);

    const dispatch =  useDispatch();


  useEffect(()=>{
     dispatch(fetchBook);
  },[dispatch]);


  //  search by name

  const filterSearch = books.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  // filter books

  const FilterByTitle = (bookdev) => {
    const { status } = Filterstate;
    switch (status) {
      case "Featured":
        return bookdev.featured;
      default:
        return true;
    }
  };

  return (
    <div>
      <BookFilter />
      <div className="h-screen overflow-scroll scrollSection">
        {books.length > 0 ? (
          <>
            {filterSearch.filter(FilterByTitle).map((book, index) => (
              <BookList key={index} book={book} />
            ))}
          </>
        ) : (
          <>
            <p>Book Not Found</p>
          </>
        )}
      </div>
    </div>
  );
}

export default Book;
