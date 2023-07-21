import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
} from "reactstrap";

// Pages Components
import ImageSlider from "./imageslider";
import MsgPresident from "./MsgPresident";
import MsgSecretary from "./MsgSecretary";
import VisionMision from "./VisionMision";



//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//i18n
import { withTranslation } from "react-i18next";

const Dashboard = props => {

  //meta title
  document.title = "PDPS";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs
            title={props.t("Home")}
            breadcrumbItem={props.t("Home")}
          />
          <Row>
            <Col xl="12">
              <Card>
                <CardBody>
                  <ImageSlider />
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            
            <Col xl="12">
              <Card body>
                <CardTitle className="mt-0">{props.t("Latest News")} </CardTitle>
                <Marquee delay={4} direction="right">{props.t("The tenure of all local councils and municipal councils will end from today")} </Marquee>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl="4">
              <MsgPresident />
            </Col>
            <Col xl="4">
              <VisionMision />
            </Col>

            <Col xl="4">
              <MsgSecretary />
            </Col>
          </Row>

          
        </Container>
      </div>


      
        
    </React.Fragment>
  );
};



export default withTranslation()(Dashboard);
