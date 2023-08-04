import React from "react";
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap"
import { Link } from "react-router-dom"

//i18n
import { withTranslation } from "react-i18next"

const VisionMision = props => {
  return (
    <React.Fragment>
      <Card>
        <CardBody>
          <Card className="overflow-hidden">
            <div className="bg-primary bg-soft">
              <Row>
                <Col xs="12">
                  <div className="text-primary p-3 messages-center">
                    <h5 className="text-primary">{props.t("Vision")}</h5>
                  </div>
                </Col>
              </Row>
            </div>
            <CardBody className="pt-0">
              <Row>
                <Col sm={12}>
                  <div className="pt-4">
                    <Row>
                      <Col xs="12">

                        <p className="messages-center">
                        {props.t("VisionText")}
                        </p>
                      </Col>

                    </Row>

                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>

          <Card className="overflow-hidden">
            <div className="bg-primary bg-soft">
              <Row>
                <Col xs="12">
                  <div className="text-primary p-3 messages-center">
                    <h5 className="text-primary">{props.t("Mission")}</h5>
                  </div>
                </Col>
              </Row>
            </div>
            <CardBody className="pt-0">
              <Row>
                <Col sm={12}>
                  <div className="pt-4">
                    <Row>
                      <Col xs="12">

                        <p className="messages-center">
                        {props.t("MissionText")}
                        </p>
                      </Col>

                    </Row>

                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default withTranslation()(VisionMision);
