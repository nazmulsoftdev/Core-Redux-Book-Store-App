import { TextInput, Label, Checkbox, Button } from "flowbite-react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import fetchAddBook from "../redux/thunk/fetchAddBook";

function AddBookForm() {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [featured, setFeatured] = useState(false);

  const dispatch = useDispatch();

  //   Book Store Form Submit Handler

  const BookFormHandler = (e) => {
    e.preventDefault();

    dispatch(
      fetchAddBook(name, author, image, Number(price), Number(rating), featured)
    );

    setName("");
    setAuthor("");
    setImage("");
    setPrice("");
    setRating("");
    setFeatured(false);
  };

  return (
    <div className="bg-white shadow-2xl p-5">
      <form onSubmit={BookFormHandler}>
        <div className="mb-4">
          <div className="mb-2 block">
            <Label
              htmlFor="name"
              value="Book Name"
              className="text-green-400"
            />
          </div>
          <TextInput
            type="text"
            required={true}
            sizing="sm"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="author" value="Author" className="text-green-400" />
          </div>
          <TextInput
            type="text"
            required={true}
            sizing="sm"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <div className="mb-2 block">
            <Label
              htmlFor="image"
              value="Image URL"
              className="text-green-400"
            />
          </div>
          <TextInput
            type="url"
            required={true}
            sizing="sm"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="mb-4">
            <div className="mb-2 block">
              <Label htmlFor="Price" value="Price" className="text-green-400" />
            </div>
            <TextInput
              type="number"
              required={true}
              sizing="sm"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <div className="mb-2 block">
              <Label
                htmlFor="rating"
                value="Rating"
                className="text-green-400"
              />
            </div>
            <TextInput
              type="number"
              required={true}
              sizing="sm"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox value={featured} onChange={() => setFeatured(!featured)} />
          <Label
            htmlFor="featured"
            value="This is Featured Books"
            className="text-green-400"
          />
        </div>
        <div className="mt-3">
          <Button type="submit" gradientMonochrome="success" className="w-full">
            Add Book
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AddBookForm;
