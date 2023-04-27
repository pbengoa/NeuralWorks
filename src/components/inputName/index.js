import Form from 'react-bootstrap/Form';

export default function InputName({setInput, phrase}){
  
  const changeInput = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  };


  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control onChange={changeInput} type="text" placeholder={phrase} />
      </Form.Group>
    </Form>
  );

}