import React from "react";
import {Link} from 'react-router-dom'
import './navbar.css'

export default function navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <Link class="navbar-brand text-bold" id="navbar-brand" to="/">
          Xpense
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link class='nav-link' to="/">Dashobard</Link>
            <Link class='nav-link' to="/statistics">Statistics</Link>
            <Link class='nav-link' to="/stocks">Stocks</Link>
            <Link class='nav-link' to="/settings">Settings</Link>
            <Link class='nav-link' to="/profile">Profile</Link>
           
          </div>
        </div>
      </div>
    </nav>
  );
}
