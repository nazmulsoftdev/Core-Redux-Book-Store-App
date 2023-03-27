import React,{useState} from "react";
import { AiFillStar as StarIcon } from "react-icons/ai";
import { FiEdit as EditIcon } from "react-icons/fi";
import { AiOutlineDelete as DeleteIcon } from "react-icons/ai";
import { useDispatch } from "react-redux";
import UpdateBookModal from "./UpdateBookModal";
import fetchDelete from "../redux/thunk/fetchDelete";

function BookList({ book }) {
  const { id, name, author, image, price, rating, featured } = book;

   const [updateBox,setUpdateBox] = useState(false);

  const dispatch = useDispatch();

  // Delete Book UI Handler

  const DeleteBookHandler = (bookId) => {
    dispatch(fetchDelete(bookId));
  };

  // This is StarIcon function which is got from props
  const drawStart = () => {
    let output = [];
    for (let a = 0; a < rating; a++) {
      output.push(<StarIcon color="gold" />);
    }
    return output;
  };



  // Open Modal update box handler

  const OpenUpdateBoxHanlder = ()=>{
     setUpdateBox(!updateBox)
  }


  // Close Modal update box handler

  const CloseUpdateModalBox = ()=>{
    setUpdateBox(false)
  }

  return (
    <>
      <div className="w-[400px] m-2 shadow-2xl rounded-sm">
        <div>
          <div className="grid grid-cols-5">
            <div
              className="col-span-2 bg-cover bg-center h-[200px]"
              style={{
                backgroundImage: `url(${image})`,
                width: "100%",
              }}
            ></div>
            <div className="col-span-3  flex flex-col justify-center ">
              <div className="flex justify-end space-x-2">
                <EditIcon
                  onClick={OpenUpdateBoxHanlder}
                  size={15}
                  color="green"
                  className="cursor-pointer"
                />
                <DeleteIcon
                  onClick={() => DeleteBookHandler(id)}
                  size={18}
                  color="red"
                  className="cursor-pointer"
                />
              </div>
              <div className="m-2 space-y-1">
                <p className=" font-bold text-base">{name}</p>
                <p className="flex">{author}</p>
                <p className="flex space-x-1">{drawStart()}</p>
                <p className="text-base text-green-400 font-bold">
                  BDT: {price} Taka
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <UpdateBookModal
        updateBox={updateBox}
        CloseUpdateModalBox={CloseUpdateModalBox}
        id={id}
        name1={name}
        author1={author}
        image1={image}
        rating1={rating}
        price1={price}
        featured1={featured}
      />
    </>
  );
}

export default BookList;
