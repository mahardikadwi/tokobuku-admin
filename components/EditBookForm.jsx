import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function editBookForm({
  _id,
  title: currentTitle,
  description: currentDescription,
  price: currentPrice,
  images,
}) {
  const [title, setTitle] = useState(currentTitle || "");
  const [description, setDescription] = useState(currentDescription || "");
  const [price, setPrice] = useState(currentPrice || "");
  const [resetDisplay, setResetDisplay] = useState(false);
  const router = useRouter();
  async function createBook(ev) {
    ev.preventDefault();
    const data = { title, description, price };
    if (_id) {
      // update
      await axios.put("/api/booklist", { ...data, _id });
    } else {
      // create
      await axios.post("/api/booklist", data);
    }
    setResetDisplay(true);
  }
  if (resetDisplay) {
    router.push("/books");
  }
 
  return (
    <form onSubmit={createBook}>
      <label>Book Name</label>
      <input
        type="text"
        placeholder="Add Book Name"
        value={title}
        onChange={(ev) => setTitle(ev.target.value)}
      />
      <label>Book Description</label>
      <textarea
        placeholder="Book Description"
        value={description}
        onChange={(ev) => setDescription(ev.target.value)}
      ></textarea>
      <label>Price (in IDR)</label>
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(ev) => setPrice(ev.target.value)}
      />
      <button type="submit" className="btn-primary">
        Save
      </button>
    </form>
  );
}
