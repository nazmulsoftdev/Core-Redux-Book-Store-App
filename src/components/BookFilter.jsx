import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StatusChangeAc } from "../redux/filter/actionType";

function BookFilter() {
  const Filterstate = useSelector((state) => state.filterBook);
  const { status } = Filterstate;
  const dispatch = useDispatch();

  // Status Handler

  const StatusHandler = (value) => {
    dispatch(StatusChangeAc(value));
  };

  return (
    <div className="flex flex-col space-y-2 mb-5 md:flex md:flex-row md:justify-between md:m-3">
      <div>
        <p className="text-gray-700 font-bold">Book List</p>
      </div>
      <div className="flex items-center space-x-2">
        <div
          onClick={() => StatusHandler("All")}
          className={`px-5 py-1 border border-green-400 inline-block rounded-full cursor-pointer ${status === "All" && "bg-green-400"}`}
        >
          <p>All</p>
        </div>
        <div
          onClick={() => StatusHandler("Featured")}
          className={`px-5 py-1 border border-green-400 inline-block rounded-full cursor-pointer ${
            status === "Featured" && "bg-green-400"
          }`}
        >
          <p>Featured</p>
        </div>
      </div>
    </div>
  );
}

export default BookFilter;
