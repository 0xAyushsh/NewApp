import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand ml-4" href="#">Newz</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/addnews">Add News</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/shownews">Show News</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/about">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                 
                </div>
            </nav>
        )
}
