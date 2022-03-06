import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import { Card, Container, Row, Col } from 'react-bootstrap';

class Display extends Component {
    constructor(props) {
        super(props);
        this.state = { posts: [] };
        this.interval = null;
    }

    componentDidMount() {
        this.reloadData();
        this.interval = setInterval(() => {
            this.reloadData();
        }, 2000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    async reloadData() {
        const res = await axios.get('http://localhost:3001/posts');
        this.setState({ posts: res.data });
    }

    renderData() {
        const rows = this.state.posts.map((row) => {
            return (
                <Card key={row.postid}>
                    <Card.Body>
                        <Card.Title>#{row.postid} - Subject: {row.subject}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Author: {row.author}</Card.Subtitle>
                        <Card.Text>Message: {row.message}</Card.Text>
                    </Card.Body>
                </Card>
            )
        });
        return rows;
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col className="text-center mt-2 mb-1 text-white">
                        <h1>Posts</h1>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center mb-3">
                        {this.renderData()}
                    </Col>
                </Row>
            </Container>
        )
    }
}

// Exporting the component 
export default Display;
