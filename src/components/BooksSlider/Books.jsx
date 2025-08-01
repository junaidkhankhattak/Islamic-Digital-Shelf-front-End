import React from "react";
import book2 from "../../assets/books/book2.jpg";
import book1 from "../../assets/books/book1.jpg";
import book3 from "../../assets/books/book3.jpg";
import { FaStar } from "react-icons/fa6";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const booksData = [
  {
    id: 1,
    img: book1,
    title: " Trusted Source of Hadith",
    rating: 5.0,
    author: "Someone",
  },
  {
    id: 2,
    img: book2,
    title: "Balancing Faith and Life",
    rating: 4.5,
    author: "Some one",
  },
  {
    id: 3,
    img: book3,
    title: " Science Behind Hadith",
    rating: 4.7,
    author: "Some one",
  },
 
];

const Books = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="mt-14 mb-12">
        <div className="container">
          {/* header */}
          <div className="text-center mb-10 max-w-[600px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Top Books for you
            </p>
            <h1 className="text-3xl font-bold">Top Books</h1>
            <p className="text-xs text-gray-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perspiciatis delectus architecto error nesciunt,
            </p>
          </div>

          {/* Body section */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
              {/* Card */}
              {booksData.map(({ id, img, title, rating, author }) => (
                <div key={id} className="div space-y-3">
                  <img
                    src={img}
                    alt=""
                    className="h-[220px] w-[150px] object-cover rounded-md "
                  />
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="text-sm text-gray-700">{author}</p>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-500" />
                      <span>{rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
            <Link to="/all-books">
  <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
    View All Books
  </button>
</Link>
</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Books;
