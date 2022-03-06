import React, {Component} from 'react'; 

import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col } from 'react-bootstrap';

import './App.css';

import PostForm from './components/Form/Form';
import Display from './components/Display/Display';

class App extends Component { 
    constructor(props) {
        super(props);
        this.state = { force: false };
    }

    render() { 
        return (
            <div className="App">
                <Container fluid>
                    <Row>
                        <Col className="text-center">
                            <h1 className="text-white">Fake Twitter</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center">
                            <PostForm></PostForm>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center">
                            <Display></Display>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    } 
} 

export default App;
