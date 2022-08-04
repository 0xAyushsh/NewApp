import React from 'react'
import './ContactUs.css'

export default function ContactUs() {
    return (
        <div class="jumbotron jumbotron-fluid contact-main d-flex align-items-center">
            <div class="container text-center">
                <h1 class="display-4 ">Contact Us?</h1>
                <p class="lead">Tell us your email and we will contact you instead!</p>
                <input type="email" name="" id="" placeholder="email@email.com" />
                <button className="btn btn-success btn-sm ml-2 mb-1">Submit</button>
            </div>
        </div>
    )
}
