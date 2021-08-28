import React from "react";
import Header from "./components/header.component";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreateStudent from "./components/create-student.component";
import EditStudent from "./components/edit-student.component";
import StudentList from "./components/student-list.component";

function App() {
  return (
    <Router>
      <div >
        <Header />
        <Route exact path='/' component={StudentList} />
        <Route path="/create-student" component={CreateStudent} />
        <Route path="/edit-student/:id" component={EditStudent} />
        <Route path="/student-list" component={StudentList} />
        

      </div>
    </Router>);
}

export default App;

