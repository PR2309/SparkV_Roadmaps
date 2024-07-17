import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('loggedUser');
    if (user) {
      setLoggedInUser(user);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loggedUser');
    setLoggedInUser('');
    navigate('/'); // Redirect to home page after logout
  };


  return (
    <div className='navbartop'>
       <div className="navebarpage">
    <nav className="navbar p-4 py-2 d-flex flex-row items-center justify-content-between">
      
      <img id="nav_img" src="/logo.png" alt="Logo"/>

      <div className="div1 d-flex gap-3 borderXwidth">

        <a id="opt1" className="opt btn text-light mt-3 mb-3" href="/home">Home</a>
        <a id="opt2" className="opt btn text-light mt-3 mb-3" href="/language">Roadmaps</a>
        <a id="opt3" className="opt btn text-light mt-3 mb-3" href="/about">About Us</a>
        {loggedInUser ? (
        <a href="/" id="opt4" className="opt btn text-light mt-3 mb-3" data-bs-toggle="modal"
          data-bs-target="#exampleModal">Logout</a>
          ) : null}
        <a id="opt5" className="opt btn text-light mt-3 mb-3" href="/ai"><span id="navbar_ai">֍</span></a>
       
      </div>

      <div className="p-2">
        <input type="checkbox" id="toggle"/>
        <label className="hamburger" for="toggle">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </label>

        <nav className="menu">
          <ul className="side_menu vh-99">
            <li className="nav_li"><a id="op1" className="op text-center" href="/home">Home</a></li>
            <li><a id="op2" className="op text-center" href="/language">Roadmaps</a></li>
            <li><a id="op3" className="op text-center" href="/about">About Us</a></li>
            {loggedInUser ? (
            <li><a href="/"id="op4" className="op text-center" data-bs-toggle="modal" data-bs-target="#exampleModal">Log Out</a>
            </li>
            ) : null}
            <li><a id="op5" className="opt btn text-light mt-3 mb-3" href="/ai">Ask Ai ֍ </a></li>
          </ul>
        </nav>
      </div>
    </nav>

  
    <div className="modal" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
        
            <i className="bi bi-box-arrow-right"></i>
            <h2 className="modal-title" id="exampleModalLabel">&nbsp;Log Out</h2>
            <button className="btn-close px-3 " data-bs-dismiss="modal" aria-label="Cancel"></button>
          </div>
          <div className="modal-body text-danger">
              <p>Are you sure you want to log out?</p>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button className="btn btn-danger" data-bs-dismiss="modal" onClick={handleLogout}>Logout</button>
            </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  );
}

export default Navbar;
