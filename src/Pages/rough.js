import { useEffect, useState } from 'react'
import { signUp } from '../services/userService';
import Base from '../component/Base';
import { toast } from 'react-toastify';

import {Form, FormGroup, Input, Button, Card, CardBody, Container, CardHeader, Row, Col, FormFeedback } from 'reactstrap';

const Signup = () => {

  const [data,setData]=useState({

           name:'',
           email:'',
           password:'',
           about:'',

  })

  const [error, setError]=useState({
    error:{},
    isError:false
  })

  useEffect(()=>{
    console.log(data);
  },[data])

  // Handle Change
  const handleChange=(event, property)=>{
    //dynamic setting the values
    setData({...data,[property]: event.target.value })
  };

  // From Reset 
  const resetData=()=>{
    setData({
      name:'',
      email:'',
      password:'',
      about:'',
    })
  }

  const submitForn=(event)=>{
    event.preventDefault()

  
    console.log(data);
    //data validate

    //call server api for sending data
    signUp(data).then((response)=>{ 
      console.log(response)
      console.log('success log')
      toast.success('User is registered successfully !! user id' +response.id)
      setData({
        name:'',
        email:'',
        password:'',
        about:'',
      })
    }).catch((error)=>{
      console.log(error)
      console.log("Error log")
      //handle errors in proper way
      setError({
        errors:error,
        isError:true
      })
    });
  };

  return (
    <Base>

    <Container style={{paddingTop: '5%'}}>
         {/* {JSON.stringify(data)} */}
         <Row>
            <Col sm ={{size:6, offset:3}}>
            <Card color='dark' inverse >
           <CardHeader><h3>Fill Information to Register !!</h3></CardHeader>
           <CardBody>
            <Form onSubmit={submitForn}>

               <FormGroup>
                 <label for="name">Enter Name</label>
                 <Input type='text' placeholder='Enter the Name' id="name" onChange={(e)=>handleChange(e,'name')} value = {data.name}
                 invalid ={ error.errors?.response?.data?.name ? true: false } />
                 <FormFeedback>
                  { error.errors?.response?.data?.name }
                 </FormFeedback>
               </FormGroup>

               <FormGroup>
                 <label for="email">Enter Email</label>
                 <Input type='email' placeholder='Enter the Email' for="email" onChange={(e)=>handleChange(e,'email')} value = {data.email}
                 invalid ={ error.errors?.response?.data?.email ? true: false }/>
                  <FormFeedback>
                  { error.errors?.response?.data?.email }
                 </FormFeedback>
               </FormGroup>

               <FormGroup>
                 <label for="password">Enter Password</label>
                 <Input type='password' placeholder='Enter the Password' for="password" onChange={(e)=>handleChange(e,'password')} value = {data.password}
                 invalid ={ error.errors?.response?.data?.password ? true: false }/>
                 <FormFeedback>
                 { error.errors?.response?.data?.password }
                </FormFeedback>
               </FormGroup>

               <FormGroup>
                 <label for="about">About</label>
                 <Input type='textarea' placeholder='Enter the About' for="about" stype={{height:'150px'}} onChange={(e)=>handleChange(e,'about')} value = {data.about}
                 invalid ={ error.errors?.response?.data?.about ? true: false }/>
                 <FormFeedback>
                 { error.errors?.response?.data?.about }
                </FormFeedback>
               </FormGroup>

               <Container className='text-center'>
                  <Button color="primary"  outline style={{float:'right' }} className='m-6'>Register</Button>
                  <Button color="secondary"  outline type='reset' style={{float:'right',marginRight:'20px' }} onClick={resetData}>Reset</Button>
               </Container>

            </Form>
           </CardBody>
         </Card>
            </Col>
         </Row>
    </Container>
    </Base>
  )
}

export default Signup
