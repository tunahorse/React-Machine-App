import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import Image from 'react-bootstrap/Image';
import axios from 'axios';






export default class Test extends React.Component {

  constructor(props) {
    super(props);
    

    };


  
 
  render() 
  
  {
    const imageClick1 = () => {
      console.log('Click');
      axios.post('https://api.telegram.org/bot1003390479:AAHzEzSbHQsEKTPhRn1jjHIeI1gfnzcTS8Y/sendMessage?chat_id=-1001270050860&text=IMBROKEN!', )
      .then(res => console.log(res.data))
      alert("Machine has been reported down!");
      } 
    











return (
      <Container>

  <Row>
    <Col sm>      
    <Image src="tdp-1.5-main.jpg" onClick={() => imageClick1()} rounded />
</Col>
    <Col sm></Col>
  </Row>
</Container>
    )
  }
}


