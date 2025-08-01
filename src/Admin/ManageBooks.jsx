import React, { useEffect, useState } from "react";
import axios from "../API/axiosConfig";

const ManageBooks = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [publishedDate, setPublishedDate] = useState("");
  const [pdfFile, setPdfFile] = useState(null);
  const [books, setBooks] = useState([]);

  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [authorId, setAuthorId] = useState("");

  const fetchBooks = () => {
    axios.get("/books")
      .then(res => setBooks(res.data))
      .catch(err => console.error("Fetch books error:", err));
  };

  const fetchMeta = () => {
    axios.get("/categories").then(res => setCategories(res.data)).catch(console.error);
    axios.get("/authors").then(res => setAuthors(res.data)).catch(console.error);
  };

  const handleAdd = async (e) => {
    e.preventDefault();

    if (!title || !description || !publishedDate || !pdfFile || !categoryId || !authorId) {
      alert("Please fill all fields");
      return;
    }

    const requestObj = {
      title,
      description,
      publishedDate,
      categoryId,
      authorId
    };

    const formData = new FormData();
    formData.append("request", new Blob([JSON.stringify(requestObj)], { type: "application/json" }));
    formData.append("file", pdfFile);

    try {
      await axios.post("/books/create", formData);
      alert("Book uploaded successfully");
      setTitle("");
      setDescription("");
      setPublishedDate("");
      setPdfFile(null);
      setCategoryId("");
      setAuthorId("");
      fetchBooks();
    } catch (error) {
      console.error("Upload failed:", error.response?.data || error.message);
      alert("Failed to upload book");
    }
  };

  useEffect(() => {
    fetchBooks();
    fetchMeta(); // get categories and authors
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Upload New Book</h2>
      <form onSubmit={handleAdd} className="space-y-4 mb-6">
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 border rounded"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="date"
          value={publishedDate}
          onChange={(e) => setPublishedDate(e.target.value)}
          className="w-full px-4 py-2 border rounded"
        />

        {/* Author Dropdown */}
        <select
          value={authorId}
          onChange={(e) => setAuthorId(e.target.value)}
          className="w-full px-4 py-2 border rounded"
        >
          <option value="">Select Author</option>
          {authors.map(author => (
            <option key={author.id} value={author.id}>
              {author.name}
            </option>
          ))}
        </select>

        {/* Category Dropdown */}
        <select
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          className="w-full px-4 py-2 border rounded"
        >
          <option value="">Select Category</option>
          {categories.map(category => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>

        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => setPdfFile(e.target.files[0])}
          className="w-full px-4 py-2 border rounded"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Upload Book
        </button>
      </form>

      <h3 className="text-xl font-bold mb-3">Uploaded Books</h3>
      <ul className="space-y-2">
        {books.map((book) => (
          <li key={book.id} className="bg-white p-4 border rounded shadow">
            <p><strong>{book.title}</strong></p>
            <p>{book.description}</p>
            <p className="text-sm text-gray-500">Published: {book.publishedDate}</p>
            {book.fileUrl && (
              <a href={book.fileUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                Read PDF
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageBooks;
