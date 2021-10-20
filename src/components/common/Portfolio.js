import React, { Component } from "react";
import PortfolioItem from "./PortfolioItem";

import img1 from "../assets/img/portfolio/1.jpg"
import img2 from "../assets/img/portfolio/2.jpg"
import img3 from "../assets/img/portfolio/3.jpg"
import img4 from "../assets/img/portfolio/4.jpg"
import img5 from "../assets/img/portfolio/5.jpg"
import img6 from "../assets/img/portfolio/6.jpg"

const portfoliodetails = [
    {
        image: img1,
        heading: 'Threads',
        subheading: 'Illustrations'
    },
    {
        image: img2,
        heading: 'Explore',
        subheading: 'Graphic Design'
    },
    {
        image: img3,
        heading: 'FInish',
        subheading: 'Identity'
    },
    {
        image: img4,
        heading: 'Lines',
        subheading: 'Branding'
    },
    {
        image: img5,
        heading: 'Southwest',
        subheading: 'Website Design'
    },
    {
        image: img6,
        heading: 'Window',
        subheading: 'Photography'
    },
]

class Portfolio extends Component {
    render() {
        return (
            <div>
                <section className="page-section bg-light" id="portfolio">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">Portfolio</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                        <div className="row">

                            {portfoliodetails.map((portfolio, index) => {
                                return <PortfolioItem {...portfolio} key={index} />
                            })}

                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Portfolio;