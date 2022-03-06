import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import { Form, Button } from 'react-bootstrap';

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = { color: '#4cb96b' };
        this.subject = null;
        this.author = null;
        this.message = null;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit() {
        const subject = this.subject.value;
        const author = this.author.value;
        const message = this.message.value;
        await axios.post('http://localhost:3001/post', { subject, author, message });
        this.subject.value = '';
        this.author.value = '';
        this.message.value = '';
    }

    render() {
        return (
            <div>
                <Form.Group controlId="formPost">
                    <Form.Label className="text-white">Subject</Form.Label>
                    <Form.Control type="text" placeholder="Enter post subject" ref={(c) => this.subject = c}/>
                    <Form.Label className="text-white">Author</Form.Label>
                    <Form.Control type="text" placeholder="Enter post author" ref={(c) => this.author = c}/>
                    <Form.Label className="text-white">Message</Form.Label>
                    <Form.Control as="textarea" rows={3} ref={(c) => this.message = c}/>
                </Form.Group>
                <Button variant="primary" onClick={this.handleSubmit}>
                    Submit
                </Button>
            </div>
        )
    }
}

// Exporting the component 
export default PostForm; 