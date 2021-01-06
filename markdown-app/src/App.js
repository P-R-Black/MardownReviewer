import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from 'react-bootstrap/Form';

let marked = require('marked');

class App extends React.Component {

state = {
    markdown: " "
}

updateMarkdown = function(markdown) {
    this.setState({markdown});
}
    render() {

    let { markdown } = this.state;
    console.log(markdown);
        return (
        <div className="App container">
            <div>
            <Form.Group controlId="exampleForm.ControlTextarea1"></Form.Group>
            <Form.Label>Markdown Input!</Form.Label>
            <Form.Control componentClass="textarea" placeholder="Enter Markdown" value={markdown} onChange={(event) =>this.updateMarkdown(event.target.value)}></Form.Control>
            </div>
            <div>
            <h1>Markdown Output</h1>
            </div>
            <div>
            {marked(markdown)}
            <div dangerouslySetInnerHTML = {{__html: marked(markdown)}}></div>
            </div>
        </div>
        )
    }
}
export default App;