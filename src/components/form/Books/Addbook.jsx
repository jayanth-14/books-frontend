import React, { useContext, useState } from "react";
import ButtonPrimary from "../../buttons/buttonPrimary";
import AddBookInput from "./AddBookInput";
import AddBookDrop from "./AddBookDrop";
import ImageUpload from "./ImageUpload";
import { Context } from "../../../data/states";

function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [condition, setCondition] = useState("");
  const [edition, setEdition] = useState("");
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
      setAlert([{ type: "success", message: "Book added successfully!" }]);
      return;
    }
    setAlert([{ type: "error", message: "Failed to add book!" }]);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Add New Book
        </h1>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            handleForm();
          }}
          className="space-y-5"
        >
          <AddBookInput
            title="Book Name"
            placeholder="Ex: The Hard Way Of Living"
            handler={setTitle}
          />
          <AddBookInput
            title="Author Name"
            placeholder="Ex: Isaac Newton"
            handler={setAuthor}
          />
          <AddBookInput
            title="Publisher"
            placeholder="Ex: Falcone Publishers"
            handler={setPublisher}
          />
          <div>
            <label className="text-lg font-medium text-gray-700 block mb-2">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              className="w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:ring focus:ring-blue-200"
              rows="4"
              onChange={(event) => setDescription(event.target.value)}
            ></textarea>
          </div>
          <AddBookDrop
            conditionHandler={setCondition}
            categoryHandler={setCategory}
          />
          <div className="grid grid-cols-2 gap-5">
            <AddBookInput
              title="Quantity"
              type="number"
              handler={setQuantity}
              placeholder="Ex: 1"
            />
            <AddBookInput
              title="Price"
              type="number"
              handler={setPrice}
              placeholder="Ex: 250"
            />
          </div>
          <div className="grid grid-cols-2 gap-5">
            <AddBookInput
              title="Edition"
              type="number"
              handler={setEdition}
              placeholder="Ex: 1 for Edition 1"
            />
            <ImageUpload handler={setImage} />
          </div>
          <div className="flex justify-end">
            <ButtonPrimary className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700 transition">
              Add Book
            </ButtonPrimary>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddBook;
