import React, { Component } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import StudentTableRow from "./StudentTableRow";

export default class StudentList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            students: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8070/students/')
            .then(res => {
                this.setState({
                    students: res.data
                });
            })
            .catch((err) => {
                console.log(err);
            })
    }

    DataTable() {
        return this.state.students.map((res, i) => {
            return <StudentTableRow obj={res} key={i} />;
        });
    }


    render() {
        return (
            <div className="container mt-3">

                <table className="table table-striped">

                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Email</th>
                            <th scope="col">Contact</th>
                            <th scope="col">Action</th>
                        </tr>

                    </thead>
                    <tbody>
                        {this.DataTable()}
                    </tbody>
                </table>
            </div>
        );
    }
}