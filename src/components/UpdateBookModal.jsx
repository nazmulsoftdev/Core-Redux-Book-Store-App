import React, { useState, useEffect } from "react";
import { Button, Modal, Label, TextInput, Checkbox } from "flowbite-react";
import { useDispatch } from "react-redux";
import fetchUpdate from "../redux/thunk/fecthUpdate";

function UpdateBookModal({
  updateBox,
  CloseUpdateModalBox,
  id,
  name1,
  author1,
  image1,
  price1,
  rating1,
  featured1,
}) {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [featured, setFeatured] = useState(false);

  useEffect(() => {
    setName(name1);
    setAuthor(author1);
    setImage(image1);
    setPrice(price1);
    setRating(rating1);
    setFeatured(featured1);
  }, [author1, featured1, image1, name1, price1, rating1]);

  const dispatch = useDispatch();

  // Update Request Handler

  const UpdateRequestHandler = (
    bookId,
    Uname,
    Uauthor,
    Uprice,
    Urating,
    Uimage,
    Ufeatured
  ) => {
    dispatch(
      fetchUpdate(bookId, Uname, Uauthor, Uprice, Urating, Uimage, Ufeatured)
    );

    CloseUpdateModalBox();

  };

  return (
    <div>
      <React.Fragment>
        <Modal
          dismissible={true}
          show={updateBox}
          onClose={CloseUpdateModalBox}
        >
          <Modal.Header>Update Book</Modal.Header>
          <Modal.Body>
            <div>
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
                  <Label
                    htmlFor="author"
                    value="Author"
                    className="text-green-400"
                  />
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
                    <Label
                      htmlFor="Price"
                      value="Price"
                      className="text-green-400"
                    />
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
                <Checkbox
                  value={featured}
                  onChange={() => setFeatured(!featured)}
                />
                <Label
                  htmlFor="featured"
                  value="This is Featured Books"
                  className="text-green-400"
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={() =>
                UpdateRequestHandler(
                  id,
                  name,
                  author,
                  price,
                  rating,
                  image,
                  featured
                )
              }
            >
              Update
            </Button>
            <Button onClick={CloseUpdateModalBox} color="gray">
              Decline
            </Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    </div>
  );
}

export default UpdateBookModal;
