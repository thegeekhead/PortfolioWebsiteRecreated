import React, { Component } from "react";
import Field from "../common/Field";

const fields = {
    section: [
        [
            { name: 'name', elementName: 'input', type: 'text', placeholder: 'Your Name*' },
            { name: 'email', elementName: 'input', type: 'email', placeholder: 'Your Email*' },
            { name: 'phone', elementName: 'input', type: 'text', placeholder: 'Your Phone*' },
        ],
        [
            { name: 'message', elementName: 'textarea', placeholder: 'Type your message.*' },
        ]
    ]
}

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            message: ''
        }
    }
    render() {
        return (
            <div>
                <section className="page-section" id="contact">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">Contact Us</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                        <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                            <div className="row align-items-stretch mb-5">

                                {fields.section.map((section, sectionIndex) => {
                                    return (
                                        <div className="col-md-6" key={sectionIndex}>

                                            {section.map((field, i) => {
                            
                                                return <Field
                                                    {...field}
                                                    key={i}
                                                    value={this.state[field.name]}
                                                    onChange={e => {
                                                        this.setState({
                                                        [field.name]: e.target.value
                                                    })}}
                                                />
                                            })}
                                        </div>
                                    )
                                })}
                            </div>
                            {/* <!-- Submit success message-->
                            <!---->
                            <!-- This is what your users will see when the form-->
                            <!-- has successfully submitted--> */}
                            <div className="d-none" id="submitSuccessMessage">
                                <div className="text-center text-white mb-3">
                                    <div className="fw-bolder">Form submission successful!</div>
                                    To activate this form, sign up at
                                    <br />
                                    <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                </div>
                            </div>
                            {/* <!-- Submit error message-->
                            <!---->
                            <!-- This is what your users will see when there is-->
                            <!-- an error submitting the form--> */}
                            <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                            {/* <!-- Submit Button--> */}
                            <div className="text-center"><button className="btn btn-primary btn-xl text-uppercase disabled" id="submitButton" type="submit">Send Message</button></div>
                        </form>
                    </div>
                </section>
            </div>
        )
    }
}
export default Contact;