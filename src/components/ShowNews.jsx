import React, { Component } from 'react';
import axios from 'axios';
import newsbanner from '../newsbanner.jpg'
import './ShowNews.css'
import image1 from '../image1.jpg'

export default class ShowNews extends Component {

    state = {
        news: [{ id: "", title: "", description: "", category: "" }]
    }

    componentDidMount() {
        axios.get('http://localhost:3333/news')
            .then(res => {
                this.setState({ news: res.data })
                console.log(this.state.news);
            })
    }


    render() {
        return (
            <div className="my-news-section">
                <div className="container-fluid p-0 img-container">
                    <img src={newsbanner} className="my-img" alt="" />
                </div>
                <p className="h2 pl-5 pr-5 pt-3 pb-3 mr-0 bg-light text-dark mb-0">News</p>
                <div className="container-fluid my-main-shownews">
                    <div className="blur p-5">
                    <div className="row pt-5 pl-5">
                        {
                            this.state.news.map(item =>
                                <div className="col-md-6">
                                    <div className=" p-3 m-0">
                                        <div className="card my-card mt-4 mb-4">
                                        <img src={image1} class="card-img-top my-img-card" alt="..."/>
                                            <div className="card-body shadow">
                                                <p className="">{item.id}</p>
                                                <p className="h5 text-center mb-3">{item.title}</p>
                                                <small className="">{item.description}</small>
                                                <footer className="text-secondary mt-1">Category : {item.category}</footer>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    </div>

                </div>
            </div>
        )
    }
}
