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
                  <div className="text-primary p-3">
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

                        <p className="text-muted mb-0">
                        {props.t("Local governance from village to village door to door")}
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
                  <div className="text-primary p-3">
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

                        <p className="text-muted mb-0">
                        {props.t("Putting forward the basic objective of preserving the identity and beauty of the Dumbara valley and making the best use of the limited resources available in the area to fulfill the wishes of the general public, putting forward the objective of securing the future of the people and making a collective effort")}
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
