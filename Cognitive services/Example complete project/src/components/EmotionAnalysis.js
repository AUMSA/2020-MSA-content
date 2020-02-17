import React from 'react';
import { useState } from 'react';
import MyWebcam from './MyWebcam'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Alert from 'react-bootstrap/Alert'
import {Container, Row, Col} from 'react-bootstrap';
import Draggable from 'react-draggable';


function EmotionAnalysis() {
    const [result, updateResult] = useState(0);
    return (
        <div>
            <Draggable>
                <div>
                    <MyWebcam onReceivedResult={updateResult} />
                    <Result result={result} />
                </div>
            </Draggable>
        </div>
    );
}

function getProgressBarColour(percent) {
    var variant = "";
        if (percent <= 50) {
            variant = "success";
        } else if (percent <= 90) {
            variant = "warning";
        } else {
            variant = "danger";
        }
        return variant;
    }

function Result(props) {
    return (
        <div>
            <Container>
                <Row>
                    <Col />
                    <Col xs={5}>
                        <h1>{props.result < 100 ? props.result + '%' : <GameOver />}</h1>
                        <ProgressBar animated now={props.result} variant={getProgressBarColour(props.result)} />
                    </Col>
                    <Col />
                </Row>
            </Container>
        </div>
    );
}



function GameOver() {
    return (
        <div>
            <Alert variant="danger">
                <Alert.Heading>Game Over!</Alert.Heading>
            </Alert>
        </div>
    );
}


export default EmotionAnalysis;