import React, { Component } from "react";
import Header from "../common/Header";
import Services from "../common/Services";
import Portfolio from "../common/Portfolio";
import image from "../assets/img/header-bg.jpg"

class Home extends Component {
    render() {
        return (
            <div>
                <Header
                    title="Welcome To Our Studio!"
                    subTitle="It's Nice To Meet You"
                    buttonText="Tell Me More"
                    showButton={true}
                    link="/services"
                    image={image}
                />

                <Services />

                <Portfolio />
            </div>
        )
    }
}
export default Home;