import {useState, useEffect} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



export default function InputName({setName}){
  
  const changeName = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  };


  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control onChange={changeName} type="text" placeholder="Ingresa nombre" />
      </Form.Group>
    </Form>
  );

}