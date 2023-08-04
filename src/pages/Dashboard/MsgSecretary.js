import React from "react"
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap"
import { Link } from "react-router-dom"
import secretary from "../../assets/images/officers/secretary.JPG"
//i18n
import { withTranslation } from "react-i18next"


const MsgSecretary = props => {

  return (
    <React.Fragment>
      <Card>
        <CardBody>
          <Card className="overflow-hidden">
            <div className="bg-primary bg-soft">
              <Row>
                <Col xs="12">
                  <div className="text-primary p-3">
                    <h5 className="text-primary">{props.t("Message of the Secretary")}</h5>
                    <br></br>
                  </div>
                </Col>
              </Row>
            </div>
            <CardBody className="pt-0">
              <Row>
                <Col sm="4">
                  <div className="avatar-md profile-user-wid mb-4">
                    <img
                      src={secretary}
                      alt=""
                      className="img-thumbnail rounded-circle"
                    />
                  </div>

                </Col>

                <Col sm={12}>
                  <div className="pt-4">
                    <Row>
                      <Col xs="12">

                        <p className="text-muted mb-0 messages-justify">
                        {props.t("SecretaryMsgText")}
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

  )
}

export default withTranslation()(MsgSecretary)
