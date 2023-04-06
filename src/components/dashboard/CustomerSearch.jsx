import { useEffect } from 'react';
import {Button, Form} from 'react-bootstrap';
import {useForm} from 'react-hook-form';
import "./styles.css";

const CustomerSearch = ({name}) =>{

  useEffect(()=>{
    console.log("use Effect ran");
  },[name]);


  console.log("old name:", name);
  name = 'name is changed';
  console.log("new name:", name);
const saveDetails = (e) => {
  e.preventDefault();
  console.log("data Saved", e.target);
}

  const {register, handleSubmit} = useForm();

  const onSubmit= (data) => {
    console.log(data);
  }
return (
<div className="container">
  <h1>{name}</h1>
<Form onSubmit={handleSubmit(onSubmit)}>
<div style={{display: 'inline-grid'}}>
  <Form.Group className="FormElement" controlId="firstName">
    <Form.Label>First name</Form.Label>
    <Form.Control type="text"
      placeholder='enter the first name'
      {...register("firstName")}
    />
  </Form.Group>


    <Form.Group className="FormElement" controlId="lastName">
    <Form.Label>Last name</Form.Label>
    <Form.Control type="text"
      placeholder='enter the last name'
      {...register("lastName")}
    />
  </Form.Group>
  
  <Form.Group className="FormElement" controlId="gender">
    <Form.Label> select Gender</Form.Label>
    <Form.Check type="radio" label="male" value="male"
    {...register("gender")}
    />
    <Form.Check type="radio" label="female" value="female"
    {...register("gender")}/>
  </Form.Group>

    <Form.Group className="FormElement" controlId="dob">
    <Form.Label>Date of birth</Form.Label>
    <Form.Control type="date"
      placeholder='enter the date of birth'
      {...register("dob")}
    />
  </Form.Group>

    <Form.Group className="FormElement" controlId="reason">
    <Form.Label>Reason for visit</Form.Label>
    <Form.Control type="text"
      placeholder='Reason for visit'
      {...register("reason")}
    />
  </Form.Group>
  <Button type="submit" variant="primary">Submit</Button>
</div>


</Form>
</div>
)
}

export default CustomerSearch;