import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";

// import Nav from './components/NavBar';
import Home from './pages/Home';
import Saved from './pages/Saved';

// import logo from './logo.svg';
// import './App.css';

class App extends Component {

  render() {
    return (
      <div>
          <Router>
            <switch>
              <Route exact path="/" component={Home}/>
              <Route path="/Saved" component={Saved}/>
            </switch>
          </Router>
      </div>
    );
  }
}

export default App

// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Nav from "./components/nav";
// import Header from "./components/header";
// import Form from "./components/form";
// import BookList from "./components/bookList";


// class App extends Component {
//   state = {
//     books: [],
//     format: "" 
//   };

  
//   getBooks = async e => {
    
//     let formSearch = e.target.elements.formSearch.value;
//     e.preventDefault();
//     e.target.reset();

    
//     this.setState({ books: [] });

//     // make API request
//     const nytApiCall = await fetch(
//       "https://api.nytimes.com/svc/books/v3/lists.json?list=" +
//         formSearch + "&api-key=" + "AIzaSyAhgXlVrlB9e-NiLtRlNM3rMkrtiu1bDvQ"
//     );

//     const data = await nytApiCall.json();

    
//     this.setState({ books: data.results });

    
//     if (formSearch === "hardcover-fiction") {
//       formSearch = "Hardcover Fiction";
//     }
//     if (formSearch === "hardcover-nonfiction") {
//       formSearch = "Hardcover Nonfiction";
//     }
//     if (formSearch === "combined-print-and-e-book-fiction") {
//       formSearch = "Combined Print & E-Book Fiction";
//     }
//     if (formSearch === "combined-print-and-e-book-nonfiction") {
//       formSearch = "Combined Print & E-Book Nonfiction";
//     }
//     if (formSearch === "paperback-nonfiction") {
//       formSearch = "Paperback Nonfiction";
//     }
//     if (formSearch === "advice-how-to-and-miscellaneous") {
//       formSearch = "Advice, How-To & Miscellaneous";
//     }
//     if (formSearch === "childrens-middle-grade-hardcover") {
//       formSearch = "Children's Middle Grade Hardcover";
//     }
//     if (formSearch === "young-adult-hardcover") {
//       formSearch = "Young Adult Hardcover";
//     }

//     this.setState({ format: formSearch });
//     console.log("this.state.books", this.state.books);
//     console.log("format", this.state.format);
//   };

//   render() {
//     return (
//       <div className="container">
//         <Nav />
//         <Form getBooks={this.getBooks} />
//         <Header format={this.state.format} />
//         <BookList books={this.state.books} />
//       </div>
//     );
//   }
 
// }

// export default App;
