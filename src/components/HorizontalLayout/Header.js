import React, { useState } from "react";
import PropTypes from 'prop-types';

import { connect } from "react-redux";

import { Link } from "react-router-dom";

// Redux Store
import { showRightSidebarAction, toggleLeftmenu } from "../../store/actions";
// reactstrap
import { Row, Col, Dropdown, DropdownToggle, DropdownMenu } from "reactstrap";

// Import menuDropdown
import LanguageDropdown from "../CommonForBoth/TopbarDropdown/LanguageDropdown";


import logo from "../../assets/images/Banner.png";
import logoLight from "../../assets/images/logo-light.png";
import logoLightSvg from "../../assets/images/logo-light.svg";
import logoDark from "../../assets/images/logo-dark.png";



//i18n
import { withTranslation } from "react-i18next";

const Header = props => {
  const [menu, setMenu] = useState(false);
  const [isSearch, setSearch] = useState(false);
  const [socialDrp, setsocialDrp] = useState(false);

  function toggleFullscreen() {
    if (
      !document.fullscreenElement &&
      /* alternative standard method */ !document.mozFullScreenElement &&
      !document.webkitFullscreenElement
    ) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }
  return (
    <React.Fragment>
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            <div className="navbar-brand-box">
              

              <Link to="/" className="logo logo-light">
                <span className="logo-sm">                  
                <img src={logo} alt="" height="45" />           
                </span>
               
                <span className="logo-lg">
                <img src={logo} alt="" height="82" />            
                </span>
                
              </Link>
            </div>

            <button
              type="button"
              className="btn btn-sm px-3 font-size-16 d-lg-none header-item"
              data-toggle="collapse"
              onClick={() => {
                props.toggleLeftmenu(!props.leftMenu);
              }}
              data-target="#topnav-menu-content"
            >
              <i className="fa fa-fw fa-bars" />
            </button>
          </div>

          <div className="d-flex">
            
            <LanguageDropdown />
            
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

Header.propTypes = {
  leftMenu: PropTypes.any,
  showRightSidebar: PropTypes.any,
  showRightSidebarAction: PropTypes.func,
  t: PropTypes.any,
  toggleLeftmenu: PropTypes.func
};

const mapStatetoProps = state => {
  const { layoutType, showRightSidebar, leftMenu } = state.Layout;
  return { layoutType, showRightSidebar, leftMenu };
};

export default connect(mapStatetoProps, {
  showRightSidebarAction,
  toggleLeftmenu,
})(withTranslation()(Header));
