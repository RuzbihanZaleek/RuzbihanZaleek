import React from "react";
import { Link, link } from "react-router-dom";

function Header() {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">MERN Stack</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        {/* to avoid refreshing when go to home we use link */}
                        <Link to="/student-list" className="nav-link">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/create-student" className="nav-link">Create Student</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;