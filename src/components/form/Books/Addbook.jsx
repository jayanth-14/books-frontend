import React, { useContext, useEffect, useState } from "react";
import ButtonPrimary from "../../buttons/buttonPrimary";
import AddBookInput from "./AddBookInput";
import AddBookDrop from "./AddBookDrop";
import ImageUpload from "./ImageUpload";
import { Context } from "../../../data/states";
import SearchDropDown from "../../search/SearchDropDown";
function Addbook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [condition, setCondition] = useState("");
  const [edition, setedition] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState();
  const { setAlert } = useContext(Context);

  const handleForm = async () => {
    const requestBody = new FormData();
    requestBody.append("title", title);
    requestBody.append("author", author);
    requestBody.append("publisher", publisher);
    requestBody.append("description", description);
    requestBody.append("category", category);
    requestBody.append("condition", condition);
    requestBody.append("edition", edition);
    requestBody.append("quantity", quantity);
    requestBody.append("price", price);
    requestBody.append("image", image);

    const url = import.meta.env.VITE_BACKEND + "addbook";
    const response = await fetch(url, {
      method: "POST",
      credentials: "include",
      body: requestBody,
    });
    const data = await response.json();
    if (data.status === "success") {
      setAlert([{ type: "success", message: "Book is added Successfully!" }]);
      return;
    }
    setAlert([{ type: "error", message: "Book is not added! Successfully!" }]);
  };

  return (
    <div className="p-20 flex flex-col justify-center items-center">
      <div className="m-10 w-screen max-w-screen-md">
        <div className="flex flex-col">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
            <div className="relative mb-10 w-full flex  items-center justify-between border-b-4">
              <label className="h-12 w-full py-4 pr-40 pl-1 flex flex-row justify-center items-center">
                <h1 className="text-2xl font-semibold mx-auto">Add New Book</h1>
              </label>
            </div>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                handleForm();
              }}
            >
              <AddBookInput
                title="BOOK NAME"
                placehoder="Ex: The Hard Way Of Living"
                handler={setTitle}
              />
              <AddBookInput
                title="AUTHOR NAME"
                placehoder="Ex: Isaac MewTon"
                handler={setAuthor}
              />
              <AddBookInput
                title="PUBLISHER"
                placehoder="Ex: Falcone Publishers"
                handler={setPublisher}
              />
              <div className="relative mb-10 w-full flex items-start justify-between rounded-md">
                <label className="text-lg font-medium text-black-600 w-56 after:content-['*'] after:text-red-500">
                  DESCRIPTION :{" "}
                </label>
                <textarea
                  type="textbox"
                  className="h-32 w-full cursor-text rounded-md border border-gray-100 bg-gray-100 py-4 pl-5 shadow-sm outline-none"
                  name="description"
                  onChange={(event) => {
                    setDescription(event.target.value);
                  }}
                >
                  {" "}
                </textarea>
              </div>
              <AddBookDrop
                conditionHandler={setCondition}
                categoryHandler={setCategory}
              />
              <div className="grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-2">
                <AddBookInput
                  title="QUANTITY"
                  type="number"
                  handler={setQuantity}
                  placehoder="Ex: 1"
                />
                <AddBookInput
                  title="PRICE"
                  type="number"
                  handler={setPrice}
                  placehoder="Ex: 250"
                />
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-2">
                <AddBookInput
                  title="Edition"
                  type="number"
                  handler={setedition}
                  className=" w-40"
                  placehoder="Ex: 1 for Edition 1"
                />
                {/* <SearchDropDown name={"type"} options={["education", "story", "auto-biography", "biography"]} className={" flex"}  /> */}

              <ImageUpload handler={setImage} />
              </div>
              <div className="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
                <ButtonPrimary className=" w-full rounded-lg bg-blue-600 px-8 py-2 font-medium text-white outline-none hover:opacity-80 focus:ring">
                  {" "}
                  Add Book
                </ButtonPrimary>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Addbook;
