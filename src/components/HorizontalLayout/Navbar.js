import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { Row, Col, Collapse } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import classname from "classnames";

//i18n
import { withTranslation } from "react-i18next";

import { connect } from "react-redux";

const Navbar = props => {

  const [dashboard, setdashboard] = useState(false);
  const [ui, setui] = useState(false);
  const [app, setapp] = useState(false);
  const [email, setemail] = useState(false);
  const [ecommerce, setecommerce] = useState(false);
  const [crypto, setcrypto] = useState(false);
  const [project, setproject] = useState(false);
  const [task, settask] = useState(false);
  const [contact, setcontact] = useState(false);
  const [blog, setBlog] = useState(false);
  const [job, setJob] = useState(false);
  const [candidate, setCandidate] = useState(false);
  const [component, setcomponent] = useState(false);
  const [form, setform] = useState(false);
  const [table, settable] = useState(false);
  const [chart, setchart] = useState(false);
  const [icon, seticon] = useState(false);
  const [map, setmap] = useState(false);
  const [extra, setextra] = useState(false);
  const [invoice, setinvoice] = useState(false);
  const [auth, setauth] = useState(false);
  const [utility, setutility] = useState(false);

  useEffect(() => {
    var matchingMenuItem = null;
    var ul = document.getElementById("navigation");
    var items = ul.getElementsByTagName("a");
    for (var i = 0; i < items.length; ++i) {
      if (props.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      activateParentDropdown(matchingMenuItem);
    }
  });

  function activateParentDropdown(item) {
    item.classList.add("active");
    const parent = item.parentElement;
    if (parent) {
      parent.classList.add("active"); // li
      const parent2 = parent.parentElement;
      parent2.classList.add("active"); // li
      const parent3 = parent2.parentElement;
      if (parent3) {
        parent3.classList.add("active"); // li
        const parent4 = parent3.parentElement;
        if (parent4) {
          parent4.classList.add("active"); // li
          const parent5 = parent4.parentElement;
          if (parent5) {
            parent5.classList.add("active"); // li
            const parent6 = parent5.parentElement;
            if (parent6) {
              parent6.classList.add("active"); // li
            }
          }
        }
      }
    }
    return false;
  }

  return (
    <React.Fragment>
      <div className="topnav">
        <div className="container-fluid">
          <nav
            className="navbar navbar-light navbar-expand-lg topnav-menu"
            id="navigation"
          >
            <Collapse
              isOpen={props.leftMenu}
              className="navbar-collapse"
              id="topnav-menu-content"
            >
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle arrow-none" 
                    to="/home"
                  >
                    <i className="bx bx-home-circle me-2"></i>
                    {props.t("Home")} {props.menuOpen}                   
                  </Link>
                </li>


                <li className="nav-item dropdown">
                  <Link
                    to="/#"
                    onClick={e => {
                      e.preventDefault();
                      setapp(!app);
                    }}
                    className="nav-link dropdown-togglez arrow-none"
                  >
                    <i className="bx bx-group"></i>
                    {props.t("About Us")} <div className="arrow-down"></div>
                  </Link>
                  <div className={classname("dropdown-menu", { show: app })}>
                    <div className="dropdown">
                      <Link
                        to="/member"
                        className="dropdown-item dropdown-toggle arrow-none"                    
                      >
                        {props.t("Members")} 
                      </Link>                     
                    </div>
                    <div className="dropdown">
                      <Link
                        to="/officer"
                        className="dropdown-item dropdown-toggle arrow-none"                       
                      >
                        {props.t("Officers")} 
                      </Link>                     
                    </div>                    
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    to="/#"
                    onClick={e => {
                      e.preventDefault();
                      setapp(!app);
                    }}
                    className="nav-link dropdown-togglez arrow-none"
                  >
                    <i className="bx bx-customize me-2"></i>
                    {props.t("Services")} <div className="arrow-down"></div>
                  </Link>
                  <div className={classname("dropdown-menu", { show: app })}>
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault();
                          setemail(!email);
                        }}
                      >
                        {props.t("Get Approvals")} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", { show: email })}
                      >
                        <Link to="/services" className="dropdown-item">
                          {props.t("Water Bowser")}
                        </Link>
                        <Link to="/services" className="dropdown-item">
                          {props.t("Water Supply")}
                        </Link>
                        <Link to="/services" className="dropdown-item">
                          {props.t("Tree Cutting")}
                        </Link>
                        <Link to="/services" className="dropdown-item">
                          {props.t("Road Excavation")}
                        </Link>
                      </div>
                    </div>

                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault();
                          setecommerce(!ecommerce);
                        }}
                      >
                        {props.t("License")}{" "}
                        <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", {
                          show: ecommerce,
                        })}
                      >
                        <Link to="/services" className="dropdown-item">
                          {props.t("Trade License")}
                        </Link>
                        <Link
                          to="/services"
                          className="dropdown-item"
                        >
                          {props.t("Environment Protection")}
                        </Link>                                               
                      </div>
                    </div>

                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault();
                          setecommerce(!ecommerce);
                        }}
                      >
                        {props.t("Garbage Management")}{" "}
                        <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", {
                          show: ecommerce,
                        })}
                      >
                        <Link to="/services" className="dropdown-item">
                          {props.t("Garbage Transport")}
                        </Link>
                        <Link
                          to="/services"
                          className="dropdown-item"
                        >
                          {props.t("Garbage Disposal")}
                        </Link>                                               
                      </div>
                    </div>

                    <div className="dropdown">
                      <Link
                        to="/services"
                        className="dropdown-item dropdown-toggle arrow-none"                       
                      >
                        {props.t("Projects")} 
                      </Link>                    
                    </div>

                    <div className="dropdown">
                      <Link
                        to="/services"
                        className="dropdown-item dropdown-toggle arrow-none"                       
                      >
                        {props.t("Threewheeler Registration")} 
                      </Link>                    
                    </div>

                    <div className="dropdown">
                      <Link
                        to="/services"
                        className="dropdown-item dropdown-toggle arrow-none"                    
                      >
                        {props.t("Ayurveda Medical Service")} 
                      </Link>                     
                    </div>
                    <div className="dropdown">
                      <Link
                        to="/services"
                        className="dropdown-item dropdown-toggle arrow-none"                       
                      >
                        {props.t("Street Lights")} 
                      </Link>                     
                    </div>                    
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    to="/#"
                    onClick={e => {
                      e.preventDefault();
                      setapp(!app);
                    }}
                    className="nav-link dropdown-togglez arrow-none"
                  >
                    <i className="bx bx-download me-2"></i>
                    {props.t("Downloads")} <div className="arrow-down"></div>
                  </Link>
                  <div className={classname("dropdown-menu", { show: app })}>
                    <div className="dropdown">
                      <Link
                        to="/download-application"
                        className="dropdown-item dropdown-toggle arrow-none"                    
                      >
                        {props.t("Applications")} 
                      </Link>                     
                    </div>
                    <div className="dropdown">
                      <Link
                        to="/download-gazette"
                        className="dropdown-item dropdown-toggle arrow-none"                       
                      >
                        {props.t("Gazette")} 
                      </Link>                     
                    </div>                    
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle arrow-none" 
                    to="/complain"
                  >
                    <i className="mdi mdi-account-question-outline me-2"></i>
                    {props.t("Complains")} {props.menuOpen}                   
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    to="/#"
                    onClick={e => {
                      e.preventDefault();
                      setapp(!app);
                    }}
                    className="nav-link dropdown-togglez arrow-none"
                  >
                    <i className="mdi mdi-air-filter me-2"></i>
                    {props.t("Tender")} <div className="arrow-down"></div>
                  </Link>
                  <div className={classname("dropdown-menu", { show: app })}>
                    <div className="dropdown">
                      <Link
                        to="/tender-calling"
                        className="dropdown-item dropdown-toggle arrow-none"                    
                      >
                        {props.t("Tender Calling")} 
                      </Link>                     
                    </div>
                    <div className="dropdown">
                      <Link
                        to="/supplier-register"
                        className="dropdown-item dropdown-toggle arrow-none"                       
                      >
                        {props.t("Supplier Registration")} 
                      </Link>                     
                    </div>        
                    <div className="dropdown">
                      <Link
                        to="/tender-bidding"
                        className="dropdown-item dropdown-toggle arrow-none"                       
                      >
                        {props.t("Bidding")} 
                      </Link>                     
                    </div>                    
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle arrow-none" 
                    to="/gallery"
                  >
                    <i className="bx bx-images me-2"></i>
                    {props.t("Gallery")}               
                  </Link>
                </li>
          
              </ul>
            </Collapse>
          </nav>
        </div>
      </div>
    </React.Fragment>
  );
};

Navbar.propTypes = {
  leftMenu: PropTypes.any,
  location: PropTypes.any,
  menuOpen: PropTypes.any,
  t: PropTypes.any,
};

const mapStatetoProps = state => {
  const { leftMenu } = state.Layout;
  return { leftMenu };
};

export default withRouter(
  connect(mapStatetoProps, {})(withTranslation()(Navbar))
);
