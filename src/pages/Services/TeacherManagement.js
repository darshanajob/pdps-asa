/*
import React, { useEffect, useState } from "react"
import AdminService from "../../peo-eye-services/AdminService"
import { Formik, Field, Form, ErrorMessage } from "formik"
import Swal from "sweetalert2"

import {
  Card,
  Col,
  Container,
  Row,
  CardBody,
  CardTitle,
  Label,
  Button,
  Input,
  InputGroup,
  CardSubtitle,
  Table,
  FormFeedback,
  Alert,
} from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import { useDispatch } from "react-redux"
import {
  getCategories as onGetCategories,
  getEvents as onGetEvents,
} from "../../store/calendar/actions"
import { Draggable } from "@fullcalendar/interaction"
import { useFormik } from "formik"
import * as Yup from "yup"
import ReactLoading from "react-loading"
import TeacherService from "peo-eye-services/TeacherService"

const TeacherManagement = props => {
  //meta title
  document.title = "Teacher Management | Peo Eye Admin Panel"
  const dispatch = useDispatch()
  const [admins, setAdmins] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const SignupSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(5, "Too Short!")
      .max(50, "Too Long!")
      .required(" Name is required"),
    address: Yup.string()
      .min(5, "Too Short!")
      .max(50, "Too Long!")
      .required("Address is required"),
    email: Yup.string()
      .email("Must be a valid Email")
      .max(255)
      .required("Email is required"),
    mobileNo: Yup.string()
      .max(9, "Invalid  mobile number!")
      .min(9, "Invalid  mobile number!")
      .required("Mobile number is required"),
    nic: Yup.string().required("NIC is required"),
    /!*password: Yup.string()
      .required("Password is required"),
    password_confirmation: Yup.string().when("password", {
      is: val => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Both password need to be the same"
      )
    }).required("Password confirmation is required")*!/
  })

  useEffect(() => {
    retrieveAdmins()
  }, [])

  const retrieveAdmins = () => {

  }

  const updateStatus = async (id, status) => {
    // loading
    Swal.fire({
      title: "Please Wait !",
      allowEscapeKey: false,
      allowOutsideClick: false,
      showConfirmButton: false,
      imageUrl: "loader.gif",
      onOpen: () => {
        Swal.showLoading()
      },
    })
    console.log(id, "id")
    console.log(status, "status")
    const myData = {
      id: id,
      status: status,
      dob: "2022-11-01",
      empNo: "001",
    }
    await AdminService.updateAdmin(myData)
      .then(agent => {
        console.log(agent, "data")
        if (agent.status === 0) {
          Swal.close()
          Swal.fire("Teacher Activated!", "", "success")
        } else {
          Swal.close()
          Swal.fire("Successfully Changed!", "", "success")
        }
        retrieveAdmins()
      })
      .catch(e => {
        Swal.close()
        if (e.response.data.message === "Unauthenticated.") {
          Swal.fire({
            icon: "error",
            text: "Unauthenticated User!",
          })
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          })
        }
      })
  }

  return (
    <React.Fragment>
      <Formik
        initialValues={{
          fullName: "",
          address: "",
          email: "",
          mobileNo: "",
          nic: "",
          /!* requesttype:1,
           age:20,
           dob:"2022-11-01"*!/
        }}
        validationSchema={SignupSchema}
        onSubmit={async values => {
          setError(null)
          Swal.fire({
            title: "Please Wait !",
            allowEscapeKey: false,
            allowOutsideClick: false,
            showConfirmButton: false,
            imageUrl: "loader.gif",
            onOpen: () => {
              Swal.showLoading()
            },
          })
          // same shape as initial values
          console.log(values)
          alert("error")
          const adminData = {
            fullName: values.fullName,
            nic: values.nic,
            email: values.email,
            address: values.address,
            mobileNo: values.mobileNo,
            subject: values.subject,
            grade: values.grade,
            age: 23,
            requesttype: 4,
          }
          console.log(adminData, "adminData")
          await TeacherService.addNewTeacher(adminData)
            .then(r => {
              setError(null)
              retrieveAdmins()
              Swal.close()
              Swal.fire("New Teacher Has Added!", "", "success")
            })
            .catch(e => {
              Swal.close()
              console.log(e.response.data)
              if (e.response.data.message) {
                setError("Unauthenticated User!")
                if (e.response.data.errors.nic) {
                  console.log(e.response.data.errors.nic[0])
                  setError(e.response.data.errors.nic[0])
                } else if (e.response.data.errors.email) {
                  console.log(e.response.data.errors.email[0])
                  setError(e.response.data.errors.email[0])
                }
              }
            })
        }}
      >
        {({ handleChange, handleBlur, values, errors, touched }) => (
          <div className="page-content">
            <Container fluid={true}>
              <Breadcrumbs title="Forms" breadcrumbItem="Teacher Management" />
              <Row>
                <Col xl={6}>
                  <Card>
                    <CardBody>
                      {error && (
                        <Alert color="danger" role="alert">
                          {error}
                        </Alert>
                      )}
                      <CardTitle className="mb-4">Register Teacher</CardTitle>
                      <Form>
                        <div className="mb-3">
                          <Label htmlFor="formrow-firstname-Input">
                            Full Name
                          </Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="fullName"
                            name="fullName"
                            placeholder="Enter Your Full Name"
                            onChange={handleChange}
                            value={values?.fullName}
                            invalid={
                              errors?.fullName && touched?.fullName
                                ? true
                                : false
                            }
                            onBlur={handleBlur}
                          />
                          {errors?.fullName && touched?.fullName ? (
                            <FormFeedback type="invalid">
                              {errors?.fullName}
                            </FormFeedback>
                          ) : null}
                        </div>
                        <div className="mb-3">
                          <Label htmlFor="formrow-firstname-Input">
                            Address
                          </Label>
                          <Input
                            type="text"
                            id="address"
                            name="address"
                            className="form-control"
                            onBlur={handleBlur}
                            placeholder="Enter Your Address"
                            onChange={handleChange}
                            invalid={
                              errors?.address && touched?.address ? true : false
                            }
                            value={values?.address}
                          />
                          {errors?.address && touched?.address ? (
                            <FormFeedback type="invalid">
                              {errors?.address}
                            </FormFeedback>
                          ) : null}
                        </div>
                        <Row>
                          <Col md={6}>
                            <div className="mb-3">
                              <Label htmlFor="formrow-email-Input">Email</Label>
                              <Input
                                type="email"
                                id="email"
                                name="email"
                                className="form-control"
                                onBlur={handleBlur}
                                placeholder="Enter Your Email"
                                onChange={handleChange}
                                invalid={
                                  errors?.email && touched?.email ? true : false
                                }
                                value={values?.email}
                              />
                              {errors?.email && touched?.email ? (
                                <FormFeedback type="invalid">
                                  {errors?.email}
                                </FormFeedback>
                              ) : null}
                            </div>
                          </Col>
                          <Col md={6}>
                            <div className="mb-3">
                              <Label htmlFor="formrow-email-Input">
                                Subject
                              </Label>
                              <Input
                                type="text"
                                id="subject"
                                name="subject"
                                className="form-control"
                                onBlur={handleBlur}
                                placeholder="Enter Your Subject"
                                onChange={handleChange}
                                invalid={
                                  errors?.subject && touched?.subject
                                    ? true
                                    : false
                                }
                                value={values?.subject}
                              />
                              {errors?.email && touched?.email ? (
                                <FormFeedback type="invalid">
                                  {errors?.subject}
                                </FormFeedback>
                              ) : null}
                            </div>
                          </Col>
                          <Col md={6}>
                            <div className="mb-3">
                              <Label htmlFor="formrow-email-Input">Grade</Label>
                              <Input
                                type="text"
                                id="grade"
                                name="grade"
                                className="form-control"
                                onBlur={handleBlur}
                                placeholder="Enter Your Grade"
                                onChange={handleChange}
                                invalid={
                                  errors?.grade && touched?.grade ? true : false
                                }
                                value={values?.grade}
                              />
                              {errors?.email && touched?.email ? (
                                <FormFeedback type="invalid">
                                  {errors?.grade}
                                </FormFeedback>
                              ) : null}
                            </div>
                          </Col>
                          <Col md={6}>
                            <div className="mb-3">
                              <Label htmlFor="formrow-InputCity">NIC</Label>
                              <Input
                                type="text"
                                id="nic"
                                name="nic"
                                className="form-control"
                                onBlur={handleBlur}
                                placeholder="Enter Your NIC"
                                onChange={handleChange}
                                invalid={
                                  errors?.nic && touched?.nic ? true : false
                                }
                                value={values?.nic}
                              />
                              {errors?.nic && touched?.nic ? (
                                <FormFeedback type="invalid">
                                  {errors?.nic}
                                </FormFeedback>
                              ) : null}
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg={4}>
                            <div className="mb-3">
                              <Label htmlFor="formrow-email-Input">
                                Mobile
                              </Label>
                              <Input
                                type="number"
                                id="mobileNo"
                                name="mobileNo"
                                className="form-control"
                                onBlur={handleBlur}
                                placeholder="Enter Your Mobile Number"
                                onChange={handleChange}
                                invalid={
                                  errors?.mobileNo && touched?.mobileNo
                                    ? true
                                    : false
                                }
                                value={values?.mobileNo}
                              />
                              {errors?.mobileNo && touched?.mobileNo ? (
                                <FormFeedback type="invalid">
                                  {errors?.mobileNo}
                                </FormFeedback>
                              ) : null}
                            </div>
                          </Col>
                        </Row>
                        <div>
                          <button
                            type="submit"
                            className="btn btn-primary w-md"
                          >
                            Submit
                          </button>
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card>
                    {loading ? (
                      <>
                        <center>
                          <ReactLoading
                            type="bubbles"
                            color="#000"
                            height={"5%"}
                            width={"5%"}
                          />
                        </center>
                      </>
                    ) : (
                      <>

                      </>
                    )}
                  </Card>
                </Col>
              </Row>
            </Container>
            {/!* container-fluid *!/}
          </div>
        )}
      </Formik>
    </React.Fragment>
  )
}

export default TeacherManagement
*/
