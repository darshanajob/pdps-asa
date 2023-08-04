import React, { useState, useEffect } from "react"
import { Link, withRouter } from "react-router-dom"
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col,
  Container,
  Input,
  Label,
  Table,
  Row,
  TabContent,
  TabPane,
  Nav,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  NavItem,
  NavLink,
  FormFeedback,
  Form,
} from "reactstrap"
import Select from "react-select"
// Formik validation
import * as Yup from "yup"
import { useFormik } from "formik"
import Swal from "sweetalert2"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
//i18n
import { withTranslation } from "react-i18next"

const WaterSupplyApplication = props => {
  //meta title
  document.title = "PDPS"

  //---------------------------------------------
  const [selectedMulti2, setselectedMulti2] = useState(null)

  function handleMulti2(selectedMulti2) {
    setselectedMulti2(selectedMulti2)
  }
  const optionGroup1 = [
    {
      label: "Water Projects",
      options: [
        { label: "Punchibodhiya", value: "Punchibodhiya" },
        { label: "Doragamuwa", value: "Doragamuwa" },
        { label: "Girakaduwa", value: "Girakaduwa" },
      ],
    },
  ]
  // Form validation
  const validationType = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      scheme: "",
      aname: "",
      address: "",
      tele: "",
      distance: "",
      username: "",
      password: "",
      password1: "",
      email: "",
      digits: "",
      number: "",
      alphanumeric: "",
    },

    validationSchema: Yup.object().shape({
      scheme: Yup.string().required("Water Scheme is required"),
      aname: Yup.string().required("Name is required"),
      address: Yup.string().required("Address is required"),
      username: Yup.string().required("User name is required"),
      password: Yup.string().required("Password is required"),
      password1: Yup.string().when("password", {
        is: val => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("password")],
          "Both password need to be the same"
        ),
      }),

      tele: Yup.string()
        .required("Telephone number is required")
        .matches(/^[0-9]{10}$/, "Incorrect Telephone number"),
      distance: Yup.number().required("Distance is required"),
      email: Yup.string()
        .email("Must be a valid Email")
        .max(255)
        .required("Email is required"),
      url: Yup.string()
        .matches(
          /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
          "Enter correct url!"
        )
        .required("Please enter correct Url"),
      digits: Yup.number().required("Please Enter Your Digits"),
      number: Yup.number().required("Please Enter Your Number"),
      alphanumeric: Yup.string()
        .matches(/^[a-z0-9]+$/i, "Enter correct Alphanumeric!")
        .required("Please Enter Your Alphanumeric"),
      textarea: Yup.string().required("Please Enter Your Textarea"),
    }),
    onSubmit: values => {
      console.log("values", values)
    },
  })
  const regExp = /\b\d{5}\b/
  // Form validation
  const rangeValidation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      min_Length: "",
      max_Length: "",
      range_Length: "",
      min_Value: "",
      max_Value: "",
      range_Value: "",
      regular_Exp: "",
    },
    validationSchema: Yup.object().shape({
      min_Length: Yup.string()
        .min(6, "Must be exactly 6 digits")
        .required("Min 6 chars"),
      max_Length: Yup.string()
        .max(6, "Must be exactly 6 digits")
        .required("Max 6 chars"),
      range_Length: Yup.string()
        .required("range between 5 to 10")
        .min(5, "This value should be between 5 and 10")
        .max(10, "This value should be between 5 and 10"),
      min_Value: Yup.string()
        .required("Min Value 6")
        .test(
          "val",
          "This value should be greater than or equal to 6",
          val => val >= 6
        ),
      max_Value: Yup.string()
        .required("Max Value 6")
        .matches(/^[0-6]+$/, "This value should be lower than or equal to 6."),
      range_Value: Yup.string()
        .required("range between 5 to 10")
        .min(5, "This value should be between 5 and 10")
        .max(10, "This value should be between 5 and 10"),
      regular_Exp: Yup.string()
        .matches(/^[#0-9]+$/, "Only Hex Value")
        .required("Only Hex Value"),
    }),
    onSubmit: values => {
      console.log("values", values)
    },
  })

  //--------------------------------------------------
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs
            title={props.t("Services")}
            breadcrumbItem={props.t("Water Supply")}
          />

          <Row>
            <Col xs="12">
              <Card>
                <CardBody>
                  <CardTitle className="h4">
                    {props.t("Water Supply")}
                  </CardTitle>

                  <Form
                    onSubmit={e => {
                      console.log(e.target)
                      e.preventDefault()
                      validationType.handleSubmit()
                      return false
                    }}
                  >
                    <div className="mb-3">
                      <Label className="form-label">
                        {props.t("Service you want")} :{" "}
                      </Label>
                      <select defaultValue="0" className="form-select">
                        <option value="0"> {props.t("New supply")} </option>
                        <option value="1">
                          {props.t("Change existing supply")}
                        </option>
                        <option value="2">
                          {props.t("Change name of the applicant")}
                        </option>
                      </select>
                    </div>
                    <div className="mb-3 ">
                      <Label className="form-label">
                        {props.t("Water Scheme")} :
                      </Label>
                      <Select
                        name="scheme"
                        options={optionGroup1}
                        className="select2-selection"
                        isLoading={true}
                        onChange={validationType.handleChange}
                        onBlur={validationType.handleBlur}
                        value={validationType.values.scheme || ""}
                        invalid={
                          validationType.touched.scheme &&
                          validationType.errors.scheme
                            ? true
                            : false
                        }
                      />
                      {validationType.touched.scheme &&
                      validationType.errors.scheme ? (
                        <FormFeedback type="invalid">
                          {validationType.errors.scheme}
                        </FormFeedback>
                      ) : null}
                    </div>

                    <div className="mb-3">
                      <Label className="form-label">
                        {props.t("Applicant Name")} :
                      </Label>
                      <Input
                        name="aname"
                        placeholder="Type your name"
                        type="text"
                        onChange={validationType.handleChange}
                        onBlur={validationType.handleBlur}
                        value={validationType.values.aname || ""}
                        invalid={
                          validationType.touched.aname &&
                          validationType.errors.aname
                            ? true
                            : false
                        }
                      />
                      {validationType.touched.aname &&
                      validationType.errors.aname ? (
                        <FormFeedback type="invalid">
                          {validationType.errors.aname}
                        </FormFeedback>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <Label className="form-label">
                        {props.t("Address where water service is required")} :
                      </Label>
                      <Input
                        name="address"
                        placeholder="Type your Home Address"
                        type="text"
                        onChange={validationType.handleChange}
                        onBlur={validationType.handleBlur}
                        value={validationType.values.address || ""}
                        invalid={
                          validationType.touched.address &&
                          validationType.errors.address
                            ? true
                            : false
                        }
                      />
                      {validationType.touched.address &&
                      validationType.errors.address ? (
                        <FormFeedback type="invalid">
                          {validationType.errors.address}
                        </FormFeedback>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <Label className="form-label">
                        {props.t("Phone Number")} :
                      </Label>
                      <Input
                        name="tele"
                        placeholder="Type your Home Address"
                        type="text"
                        onChange={validationType.handleChange}
                        onBlur={validationType.handleBlur}
                        value={validationType.values.tele || ""}
                        invalid={
                          validationType.touched.tele &&
                          validationType.errors.tele
                            ? true
                            : false
                        }
                      />
                      {validationType.touched.tele &&
                      validationType.errors.tele ? (
                        <FormFeedback type="invalid">
                          {validationType.errors.tele}
                        </FormFeedback>
                      ) : null}
                    </div>

                    <div className="mb-3">
                      <Label className="form-label">
                        {props.t("Purpose of obtaining water service")} :
                      </Label>
                      <div className="form-check form-checkbox-outline form-check-primary mb-3 form-controller-distance">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="purpose"
                          id="homeUse"
                          value="Home"
                          defaultChecked
                        />
                        <label className="form-check-label" htmlFor="homeUse">
                          {props.t("Household consumption")}
                        </label>
                      </div>
                      <div className="form-check form-checkbox-outline form-check-primary mb-3 form-controller-distance">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="purpose"
                          id="businessUse"
                          value="Business"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="businessUse"
                        >
                          {props.t("For business")}
                        </label>
                      </div>
                      <div className="form-check form-checkbox-outline form-check-primary mb-3 form-controller-distance">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="purpose"
                          id="officeUse"
                          value="Office"
                        />
                        <label className="form-check-label" htmlFor="officeUse">
                          {props.t("For office work")}
                        </label>
                      </div>
                      <div className="form-check form-checkbox-outline form-check-primary mb-3 form-controller-distance">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="purpose"
                          id="otherUse"
                          value="Other"
                        />
                        <label className="form-check-label" htmlFor="otherUse">
                          {props.t("Other")}
                        </label>
                      </div>
                    </div>

                    <div className="mb-3">
                      <Label className="form-label">
                        {props.t(
                          "Distance from the water main to the point of water intake"
                        )}{" "}
                        :
                      </Label>
                      <Input
                        name="distance"
                        placeholder="Type distance from main water supply"
                        type="number"
                        onChange={validationType.handleChange}
                        onBlur={validationType.handleBlur}
                        value={validationType.values.distance || ""}
                        invalid={
                          validationType.touched.distance &&
                          validationType.errors.distance
                            ? true
                            : false
                        }
                      />
                      {validationType.touched.distance &&
                      validationType.errors.distance ? (
                        <FormFeedback type="invalid">
                          {validationType.errors.distance}
                        </FormFeedback>
                      ) : null}
                    </div>

                    <div className="mb-3">
                      <Label className="form-label">
                        {props.t("Nature of residence")} :
                      </Label>
                      <div className="form-check mb-3 mb-3 form-controller-distance">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="residence"
                          id="owner"
                          value="Owner"
                          defaultChecked
                        />
                        <label className="form-check-label" htmlFor="owner">
                          {props.t("Owner")}
                        </label>
                      </div>
                      <div className="form-check mb-3 mb-3 form-controller-distance">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="residence"
                          id="tenant"
                          value="Tenant"
                        />
                        <label className="form-check-label" htmlFor="tenant">
                          {props.t("Tenant")}
                        </label>
                      </div>
                    </div>

                    <div className="mb-3">
                      <Label className="form-label">
                        {props.t("Assessment no")} :
                      </Label>
                      <Input
                        name="taxNo"
                        placeholder="Type your assessment no"
                        type="text"
                        onChange={validationType.handleChange}
                        onBlur={validationType.handleBlur}
                        value={validationType.values.taxNo || ""}
                        invalid={
                          validationType.touched.taxNo &&
                          validationType.errors.taxNo
                            ? true
                            : false
                        }
                      />
                      {validationType.touched.taxNo &&
                      validationType.errors.taxNo ? (
                        <FormFeedback type="invalid">
                          {validationType.errors.taxNo}
                        </FormFeedback>
                      ) : null}
                    </div>

                    <div className="mb-3">
                      <Label className="form-label"> {props.t("Email")} :</Label>
                      <Input
                        name="email"
                        placeholder="Enter Valid Email"
                        type="email"
                        onChange={validationType.handleChange}
                        onBlur={validationType.handleBlur}
                        value={validationType.values.email || ""}
                        invalid={
                          validationType.touched.email &&
                          validationType.errors.email
                            ? true
                            : false
                        }
                      />
                      {validationType.touched.email &&
                      validationType.errors.email ? (
                        <FormFeedback type="invalid">
                          {validationType.errors.email}
                        </FormFeedback>
                      ) : null}
                    </div>

                    <div className="mb-3">
                      <Label>{props.t("Password")}:</Label>
                      <Input
                        name="password"
                        type="password"
                        placeholder="Password"
                        onChange={validationType.handleChange}
                        onBlur={validationType.handleBlur}
                        value={validationType.values.password || ""}
                        invalid={
                          validationType.touched.password &&
                          validationType.errors.password
                            ? true
                            : false
                        }
                      />
                      {validationType.touched.password &&
                      validationType.errors.password ? (
                        <FormFeedback type="invalid">
                          {validationType.errors.password}
                        </FormFeedback>
                      ) : null}
                    </div>

                    <div className="mb-3">
                      <Input
                        name="password1"
                        type="password"
                        placeholder="Re-type Password"
                        onChange={validationType.handleChange}
                        onBlur={validationType.handleBlur}
                        value={validationType.values.password1 || ""}
                        invalid={
                          validationType.touched.password1 &&
                          validationType.errors.password1
                            ? true
                            : false
                        }
                      />
                      {validationType.touched.password1 &&
                      validationType.errors.password1 ? (
                        <FormFeedback type="invalid">
                          {validationType.errors.password1}
                        </FormFeedback>
                      ) : null}
                    </div>

                    <div className="d-flex flex-wrap gap-2">
                      <Button type="submit" color="primary">
                        Submit
                      </Button>{" "}
                      <Button type="reset" color="secondary">
                        Cancel
                      </Button>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default withTranslation()(WaterSupplyApplication)
