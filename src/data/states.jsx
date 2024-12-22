import { createContext, useContext, useState } from "react";

const userData = [
  { id: 1, email: "admin@rebook.com", name: "admin", password: "admin", profile_img: "" },
  { id: 2, email: "jayanthpetchetti@gmail.com", name: "jayanth", password: "jayanth", profile_img: "" },
  { id: 3, email: "vamsi@gmail.com", name: "vamsi", password: "vamsi", profile_img: "" },
  { id: 4, email: "swaroop@gmail.com", name: "swaroop", password: "swaroop123", profile_img: "" },
  { id: 5, email: "balu@gmail.com", name: "balu", password: "balu143", profile_img: "" },
  { id: 6, email: "hemanthkumarvilluri@gmail.com", name: "hemanth", password: "hemanthkumar", profile_img: "" },
  { id: 7, email: "hemanth@gmail.com", name: "hemanth", password: "hemanth", profile_img: "" },
];
const bookData = [
  { id: 1, title: "Book 1", author: "Author", year: "2024", price: 100, quantity: 10, status: "Available", user_id: 1, image_url: "../images/dummy_data/book_1.jpg"  , description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
  { id: 2, title: "Book 1", author: "Author", year: "2024", price: 100, quantity: 10, status: "Available", user_id: 5, image_url: "../images/dummy_data/book_2.jpg" , description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
  { id: 3, title: "Book 4", author: "Author", year: "2024", price: 100, quantity: 10, status: "Available", user_id: 6, image_url: "../images/dummy_data/book_3.jpg" , description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
  { id: 4, title: "The Hard Way", author: "Author", year: "2024", price: 100, quantity: 10, status: "Available", user_id: 7, image_url: "../images/dummy_data/book_4.jpg" , description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
  { id: 5, title: "Book 4", author: "Author", year: "2024", price: 100, quantity: 10, status: "Available", user_id: 7, image_url: "../images/dummy_data/book_5.jpg" , description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
  { id: 6, title: "Book 1", author: "Author", year: "2024", price: 100, quantity: 10, status: "Available", user_id: 7, image_url: "../images/dummy_data/book_6.jpg" , description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
  { id: 7, title: "Book 1", author: "Author", year: "2024", price: 100, quantity: 10, status: "Available", user_id: 2, image_url: "../images/dummy_data/book_7.jpg" , description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
  { id: 8, title: "Book 1", author: "Author", year: "2024", price: 100, quantity: 10, status: "Available", user_id: 2, image_url: "../images/dummy_data/book_8.jpg" , description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
  { id: 9, title: "Book 1", author: "Author", year: "2024", price: 100, quantity: 10, status: "Available", user_id: 3, image_url: "../images/dummy_data/book_9.jpg" , description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
  { id: 10, title: "Book 1", author: "Author", year: "2024", price: 100, quantity: 10, status: "Available", user_id: 4, image_url: "../images/dummy_data/book_10.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
];

export const Context = createContext(null);


function StatesProvider(params) {
  const [isLogined, setIsLogined] = useState(false);
  const [user, setUser] = useState({ id: 7, username: "hemanth", password: "hemanth", profile_img: "" });
  const [users, setUsers] = useState(userData);
  const [cart, setCart] = useState([]);
  const [books, setBooks] = useState(bookData);
  return (
    <Context.Provider value={{ isLogined, setIsLogined, user, setUser, users, setUsers, books, setBooks, cart, setCart }}>
      {params.children}
    </Context.Provider>
  )
}

export default StatesProvider;