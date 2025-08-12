import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
    <nav className="navbar">
       <div className="navbar-container">
        <span className="navbar-1">Layout 3</span>
        <a href="#" className="navbar-a">About</a>
        <a href="#" className="navbar-a">Services</a>
        <a href="#" className="navbar-a">Contact</a>
      </div>
    </nav>
    <div className="grid-container">
      <div className="grid-container-1">
      <div className="heading">
      <h1 className="main-heading">Blog Post Title</h1>
      <p className="secondary-heading">by <span>Test</span></p>
        </div>
      <div className="publish-date">
        <p>Posted on: <span>August 24, 2013 at 9:00 PM</span></p>
      </div>
      <div className="card">
        <div className="img">
          <span>900 x 300</span>
        </div>
        <div className="body">
          <p className="text">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            . Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi?
          </p>
          <p className="text1">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            . Ut enim ad minim veniam, quis nostrud exercitation ullamco
          </p>
          <p className="text1">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            . Ut enim ad minim veniam, quis nostrud exercitation ullamco
          </p>
          <p className="text1">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            . Ut enim ad minim veniam, quis nostrud exercitation ullamco
          </p>
          <p className="text1">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            . Ut enim ad minim veniam, quis nostrud exercitation ullamco
          </p>
          
        </div>
      </div>
      </div>
      <div className="grid-container-2">
      
<div className="blog-search">
  <span>Blog Search</span>
  <div className="blog-search-box">
    <input type="text" />
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 50 50">
      <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125
      L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
    </svg>
  </div>
</div>

  <div className="blog-categories">
  <span>Blog Categories</span>
  <div className="categories-list">
    <ul>
      <li>Category Name</li>
      <li>Category Name</li>
      <li>Category Name</li>
      <li>Category Name</li>
    </ul>
    <ul>
      <li>Category Name</li>
      <li>Category Name</li>
      <li>Category Name</li>
      <li>Category Name</li>
    </ul>
  </div>
</div>
        <div className="side-widget">
          <span>Side Widget Well</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            . Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
        </div>
     
    </div>
    </div>

     <footer className="footer">
      Copyright  Your Website 2014
    </footer>
    </>
  );
}
