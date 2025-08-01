import React, { useState } from "react";
import {
  FaDownload,
  FaShoppingCart,
} from "react-icons/fa";
import OrderPopup from "../OrderPopup/OrderPopup";

// Importing book thumbnails
import Book1 from "../../assets/books/book1.jpg";
import Book2 from "../../assets/books/book2.jpg";
import Book3 from "../../assets/books/book3.jpg";
import Book4 from "../../assets/books/book4.jpg";
import Book5 from "../../assets/books/book5.jpg";
import Book6 from "../../assets/books/book6.jpg";
import Book7 from "../../assets/books/book7.jpg";
import Book8 from "../../assets/books/book8.jpg";
import Book9 from "../../assets/books/book9.jpg";
import Book10 from "../../assets/books/book10.jpg";
import Book11 from "../../assets/books/book11.jpg";
import Book12 from "../../assets/books/book12.jpg";
import Book13 from "../../assets/books/book13.jpg";
import Book14 from "../../assets/books/book14.jpg";
import Book15 from "../../assets/books/book15.jpg";
import Book16 from "../../assets/books/book16.jpg";
import Book17 from "../../assets/books/book17.jpg";
import Book18 from "../../assets/books/book18.jpg";
import Book19 from "../../assets/books/book19.jpg";
import Book20 from "../../assets/books/book20.jpg";
import Book21 from "../../assets/books/book21.jpg";
import Book22 from "../../assets/books/book22.jpg";
import Book23 from "../../assets/books/book23.jpg";
import Book24 from "../../assets/books/book24.jpg";

// Add Cloudinary PDF URLs here
const bookList = [
  { id: 1, title: "Sahih Bukhari", image: Book1, pdf: "https://drive.google.com/file/d/1LOR7uGAcZ2YjHs_1I6gSeL-s-Ha4JPMJ/view?usp=sharing" },
  { id: 2, title: "Deen o Duniya", image: Book2, pdf: "https://drive.google.com/file/d/1nHzV-bNPUT24vchOtuaWaDGP3YIwdaxj/view?usp=sharing" },
  { id: 3, title: "Usooli Hadees", image: Book3, pdf: "https://drive.google.com/file/d/155_PjMvUBOZPos8gZppAlPLm58nIt3ar/view?usp=sharing" },
  { id: 4, title: "Ahadees", image: Book4, pdf: "https://drive.google.com/file/d/18N4ysitpDbUBSJIx8FSjCKRCEnWa2eU1/view?usp=sharing" },
  { id: 5, title: "Firdos u bayan", image: Book5, pdf: "https://drive.google.com/file/d/1oZ1fZGeerSN_lhs9izSH-yRarFXHeY-F/view?usp=sharing" },
  { id: 6, title: "Darse Quran", image: Book6, pdf: "https://drive.google.com/file/d/1HHYn657Tklg9HlUjjgyPp8OJ0XWK2Gqd/view?usp=sharing" },
  { id: 7, title: "Tashilul sarf", image: Book7, pdf: "https://drive.google.com/file/d/1yAiGqbAe6ecuaBZtFhFykYvH7mQP0N6m/view?usp=sharing" },
  { id: 8, title: "Hadeesi Hedmat", image: Book8, pdf: "https://drive.google.com/file/d/13CJU8jvbIg4ResQ5_nEv1_eueVQWeZH7/view?usp=sharing" },
  { id: 9, title: "Imam-e-Masjid", image: Book9, pdf: "https://drive.google.com/file/d/1nIj6p-Kr2ItEErMitPbhkjkqFpwXJGgF/view?usp=sharing" },
  { id: 10, title: "Nijat ka Rasta", image: Book10, pdf: "https://drive.google.com/file/d/15xiCNLCcmW8EikILVNmln_BeJwJRkhMF/view?usp=sharing" },
  { id: 11, title: "Makha Madina", image: Book11, pdf: "https://drive.google.com/file/d/1FiNPU0Px3f5PBs9INUO2pbY8fIANASu3/view?usp=sharing" },
  { id: 12, title: "Tarikh-e-Islam", image: Book12, pdf: "https://drive.google.com/file/d/13aqG1PhTtgzZtiCpv8UACkbgiQqEYpL-/view?usp=sharing" },
  { id: 13, title: "Dastor-e-Madina", image: Book13, pdf: "https://drive.google.com/file/d/1IpWPhCRkcGkxAy9QYX_IXSkGDiF7VHmI/view?usp=sharing" },
  { id: 14, title: "Great Woman of Islam", image: Book14, pdf: "https://drive.google.com/file/d/1zKTKG33ohxQtttIzVPJQIAhmyjA7z7I-/view?usp=sharing" },
  { id: 15, title: "Islamic values for Children", image: Book15, pdf: "https://drive.google.com/file/d/1A6O4uYQH_ntXGa-CrJP4AdrBrr4012yW/view?usp=sharing" },
  { id: 16, title: "Islamic beliefs", image: Book16, pdf: "https://drive.google.com/file/d/1qD0rTuL_dNX1H5Q784ccV2vAr63kNbxs/view?usp=sharing" },
  { id: 17, title: "Muslim sharif", image: Book17, pdf: "https://drive.google.com/file/d/18N4ysitpDbUBSJIx8FSjCKRCEnWa2eU1/view?usp=sharing" },
  { id: 18, title: "Sirat-e-imam bukhari", image: Book18, pdf: "https://drive.google.com/file/d/1EfF_lF_-sQIOKhtFG2yenX3J6OiFZunA/view?usp=sharing" },
  { id: 19, title: "Child Education in Islam", image: Book19, pdf: "https://drive.google.com/file/d/1vZrn-swtufz5C6Lou89RuBmHZ1UXjAvQ/view?usp=sharing" },
  { id: 20, title: "The sacred path to Islam", image: Book20, pdf: "https://drive.google.com/file/d/1re0g96WdplWE5LqvoRfosAGb8jKF9hJj/view?usp=sharing" },
  { id: 21, title: "Islamic studies", image: Book21, pdf: "https://drive.google.com/file/d/1xuM5K-01-kk6YQHIks8v2yarLu4LiBsN/view?usp=sharing" },
  { id: 22, title: "Islami Aqeeda", image: Book22, pdf: "https://drive.google.com/file/d/1klWld6L3-CRq0pfPu4B9DOK_4KNR28eL/view?usp=sharing" },
  { id: 23, title: "Tasweeri Milat", image: Book23, pdf: "https://drive.google.com/file/d/1tbWBjyNuagXFfjMqSjdI8KMDYMyBClsi/view?usp=sharing" },
  { id: 24, title: "Namaz-e-Nabuwi", image: Book24, pdf: "https://drive.google.com/file/d/18eeq52nEyx1mcARh3mOcPy7NLq4siKKD/view?usp=sharing" }
];

const Allbooks = ({ setOrderCount }) => {
  const [search, setSearch] = useState("");
  const [orderPopup, setOrderPopup] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const filteredBooks = bookList.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-2">  All Islamic Books</h1>
        <p className="text-lg text-gray-500">
          Explore our handpicked collection and read or order the books that enlighten you.
        </p>
      </div>

      {/* Search Input + Upload Button */}
<div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
  <input
    type="text"
    placeholder="Search by title..."
    className="w-full sm:w-1/2 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />

         <label
           className="relative cursor-pointer bg-[#2aa6df] text-white px-4 py-2 rounded shadow hover:bg-[#1f8fc1] transition duration-300"
>
              Upload Book
            <input
               type="file"
               accept=".pdf"
               className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
               onChange={(e) => {
                const file = e.target.files[0];
                  if (file) {
                   console.log("Uploaded File:", file.name);
                    alert(`Uploaded: ${file.name}`);
                  // Add logic here to upload the file to server/cloud
      }
    }}
  />
          </label>
</div>


      {/* Books Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
       {filteredBooks.map((book) => (
  <div
    key={book.id}
    className="group bg-white border border-gray-100 rounded-xl shadow-md hover:shadow-xl transform hover:scale-[1.02] transition duration-300 ease-in-out p-4 flex flex-col items-center"
  >
    {/* Book Image with hover zoom */}
    <a
        href={book.pdf}
        target="_blank"
        rel="noopener noreferrer"
        
      >
    <div className="w-full h-[260px] overflow-hidden rounded-md mb-4">
      <img
        src={book.image}
        alt={book.title}
        className="w-full h-full  rounded-md transition-transform duration-300 group-hover:scale-105"
      />
    </div>
</a>
    {/* Book Title */}
    <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center group-hover:text-blue-600 transition">
      {book.title}
    </h3>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row justify-center gap-3 w-full">
      {/* Read Button */}
      
      

      {/* Order Button */}
      <button
        onClick={() => {
          setSelectedBook(book);
          setOrderPopup(true);
        }}
        className="w-full sm:w-auto text-center px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded hover:from-blue-600 hover:to-blue-700 shadow-md hover:shadow-lg transition"
      >
        🛒 Order
      </button>
    </div>
  </div>
))}

      </div>

      {/* Order Popup */}
      <OrderPopup
        orderPopup={orderPopup}
        setOrderPopup={setOrderPopup}
        selectedBook={selectedBook}
        setOrderCount={setOrderCount}
      />
    </div>
  );
};

export default Allbooks;