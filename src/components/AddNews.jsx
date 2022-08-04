import React, { Component } from 'react'
import axios from 'axios'
import './AddNews.css'
import formbanner from '../formbanner.jpg'


export default class AddNews extends Component {

    state = {
        id: "",
        title: "",
        category: "",
        description: ""
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    addNews = (event) => {
        event.preventDefault();
        console.log(this.state);

        axios.post('http://localhost:3333/news', {
            "id": this.state.id,
            "title": this.state.title,
            "category": this.state.category,
            "description": this.state.description
        })

    }

    render() {
        return (
            <div>
                <div className="container-fluid p-0 ">
                    <img src={formbanner} className="newsformbanner-img mb-5" alt="" />
                </div>
                <div className="d-flex justify-content-center m-5">
                    <div className="card my-newsform-card shadow-lg p-3 mb-5 rounded">
                        <div className="card-body text-center">
                            <form>
                                <div class="form-group">
                                    <label for="id">Id : </label>
                                    <input type="text" class="form-control" id="id" name="id" onChange={this.handleChange.bind(this)} />
                                </div>
                                <div class="form-group">
                                    <label for="title">Title : </label>
                                    <input type="text" class="form-control" id="title" name="title" onChange={this.handleChange.bind(this)} />
                                </div>
                                <div class="form-group">
                                    <label for="category">Category</label>
                                    <select class="form-control" id="category" name="category" onChange={this.handleChange.bind(this)}>
                                        <option></option>
                                        <option>Politics</option>
                                        <option>Business</option>
                                        <option>Sports</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="description">Description : </label>
                                    <textarea class="form-control" id="description" name="description" rows="3" onChange={this.handleChange.bind(this)}></textarea>
                                </div>
                            </form>
                            <button className="btn btn-primary" onClick={this.addNews.bind(this)}>Click me</button>

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
