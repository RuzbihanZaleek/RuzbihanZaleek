import React, { Component } from "react";
import axios from 'axios';

export default class CreateStudent extends Component {

    constructor(props) {
        super(props);

        //setting up functions
        this.onChangeStudentName = this.onChangeStudentName.bind(this);
        this.onChangeStudentAge = this.onChangeStudentAge.bind(this);
        this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
        this.onChangeStudentContact = this.onChangeStudentContact.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        //setting up state
        this.state = {
            name: '',
            age: '',
            email: '',
            contact: ''
        }
    }

    onChangeStudentName(e) {
        this.setState({ name: e.target.value })
    }

    onChangeStudentAge(e) {
        this.setState({ age: e.target.value })
    }

    onChangeStudentEmail(e) {
        this.setState({ email: e.target.value })
    }

    onChangeStudentContact(e) {
        this.setState({ contact: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const studentObject = {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email,
            contact: this.state.contact
        };
        axios.post('http://localhost:8070/students/create-student', studentObject)
            .then(() => {
                alert("Student Added!")
            }).catch((error) => {
                alert(error)
            });

        this.setState({ name: '', age: '', email: '', contact: '' });
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label for="name">Name</label>
                        <input type="text" class="form-control" id="name"
                            placeholder="Enter Student Name"
                            value={this.state.name}
                            onChange={this.onChangeStudentName}
                        />
                    </div>

                    <div className="form-group">
                        <label for="age"> Age</label>
                        <input type="text" class="form-control" id="age"
                            placeholder="Enter Student Age"
                            value={this.state.age}
                            onChange={this.onChangeStudentAge}
                        />
                    </div>

                    <div className="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" id="email"
                            placeholder="Enter Student Gender"
                            value={this.state.email}
                            onChange={this.onChangeStudentEmail}
                        />
                    </div>

                    <div className="form-group">
                        <label for="contact">Contact</label>
                        <input type="text" class="form-control" id="contact"
                            placeholder="Enter Contact Number"
                            value={this.state.contact}
                            onChange={this.onChangeStudentContact}
                        />
                    </div>

                    <div className="form-group">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>

        );
    }
}

