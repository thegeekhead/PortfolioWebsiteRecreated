import React, { Component } from "react";

class Field extends Component {
    render() {
        return (
            <>
                {this.props.elementName === 'textarea' ?
                    <div className="form-group form-group-textarea mb-md-0">
                        <textarea
                            className="form-control"
                            id={this.props.name}
                            placeholder={this.props.placeholder}
                            data-sb-validations="required"
                            value={this.props.value}
                            onChange={e => this.props.onChange(e)} />
                        <div className="invalid-feedback"
                            data-sb-feedback="message:required">A {this.props.name} is required.</div>
                    </div>
                    :
                    <>
                        {this.props.name === 'email' ?
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    id={this.props.name}
                                    type={this.props.type}
                                    placeholder={this.props.placeholder}
                                    data-sb-validations="required,email"
                                    value={this.props.value}
                                    onChange={e => this.props.onChange(e)} />
                                <div className="invalid-feedback"
                                    data-sb-feedback="email:required">An email is required.
                                </div>
                                <div className="invalid-feedback"
                                    data-sb-feedback="email:email">Email is not valid.
                                </div>
                            </div>
                            :
                            <div className="form-group">
                                <input
                                className="form-control"
                                id={this.props.name}
                                type={this.props.type}
                                placeholder={this.props.placeholder}
                                data-sb-validations="required"
                                value={this.props.value}
                                onChange={e => this.props.onChange(e)} />
                                <div className="invalid-feedback"
                                    data-sb-feedback={`${this.props.name}:required`}>A {this.props.name} is required.
                                </div>
                            </div>
                        }
                    </>
                }
            </>
        )
    }
}
export default Field;