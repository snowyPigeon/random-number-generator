import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Generator() {

    const [maxNum, setMaxNum] = useState("");

    const [result, setResult] = useState("");

    function handleChange(event) {
            setMaxNum(event.target.value);
    }

    function generateNumber() {
        if (isNaN(maxNum) || maxNum === "" || maxNum <= 1) {
            setResult("Please enter a number greater than 1");
        }
        else {
            setResult(Math.floor((Math.random() * maxNum) + 1));
        }
        
    }

    return (
        <React.Fragment>
            <Form>
                <Form.Group className="mb-3" controlId="formSetNumberRange">
                    <Form.Label className="mb-2" >Set maximum number range from 1</Form.Label>
                    <Form.Control className="mb-2" type="number" placeholder={maxNum} value={maxNum} onChange={handleChange} />
                    <Button className="mb-2" onClick={() => generateNumber()}>Generate number</Button>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formShowResult">
                    <Form.Label className="mb-2" >Result</Form.Label>
                    <Form.Control className="mb-2" value={result} readOnly />
                </Form.Group>
            </Form>
        </React.Fragment>
    );
}

export default Generator;