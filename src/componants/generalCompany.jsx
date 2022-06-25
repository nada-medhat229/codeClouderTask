import React from "react";
import { Helmet } from "react-helmet";
import MasterForm from "./MasterForm";
import { Container, Row, Col } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Generalcompany = () => {
 
      return (<>
         <Helmet>
        <style>{"body { background-color: lightgray; }"}</style>
      </Helmet>
      <Container>
        <Row>
          <Col>
            <MasterForm />
          </Col>
        </Row>
      </Container>
      </>);
  }
  
  export default Generalcompany;