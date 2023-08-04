import React from "react"
import { Redirect } from "react-router-dom"

// Authentication related pages
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"

//  // Inner Authentication
import Login1 from "../pages/AuthenticationInner/Login"
import Login2 from "../pages/AuthenticationInner/Login2"
import Register1 from "../pages/AuthenticationInner/Register"
import Register2 from "../pages/AuthenticationInner/Register2"
import Recoverpw from "../pages/AuthenticationInner/Recoverpw"
import Recoverpw2 from "../pages/AuthenticationInner/Recoverpw2"
import ForgetPwd1 from "../pages/AuthenticationInner/ForgetPassword"
import ForgetPwd2 from "../pages/AuthenticationInner/ForgetPassword2"
import LockScreen from "../pages/AuthenticationInner/auth-lock-screen"
import LockScreen2 from "../pages/AuthenticationInner/auth-lock-screen-2"
import ConfirmMail from "../pages/AuthenticationInner/page-confirm-mail"
import ConfirmMail2 from "../pages/AuthenticationInner/page-confirm-mail-2"
import EmailVerification from "../pages/AuthenticationInner/auth-email-verification"
import EmailVerification2 from "../pages/AuthenticationInner/auth-email-verification-2"
import TwostepVerification from "../pages/AuthenticationInner/auth-two-step-verification"
import TwostepVerification2 from "../pages/AuthenticationInner/auth-two-step-verification-2"

// Dashboard
import Home from "../pages/Dashboard/index"
import CitizenCharter from "../pages/About/CitizenCharter"




import Pages404 from "../pages/Utility/pages-404"



import Gallery from "pages/Gallery/Gallery"
import TenderCalling from "pages/Tender/TenderCalling"
import SupplierRegister from "pages/Tender/SupplierRegister"
import Bidding from "pages/Tender/Bidding"
import Complain from "pages/Complain"
import Application from "pages/Download/Application"
import Gazette from "pages/Download/Gazette"

import Member from "pages/About/Member"
import Officer from "pages/About/Officer"
import Service from "pages/Services/service"
import WaterBowser from "pages/Services/WaterBowser"
import WaterSupply from "pages/Services/WaterSupply"
import WaterSupplyApplication from "pages/Services/WaterSupplyApplication"

const authProtectedRoutes  = [
  { path: "/logout", component: Logout },
  { path: "/pages-404", component: Pages404 },
  
  // Authentication Inner
  { path: "/pages-login", component: Login1 },
  { path: "/pages-login-2", component: Login2 },
  { path: "/pages-register", component: Register1 },
  { path: "/pages-register-2", component: Register2 },
  { path: "/page-recoverpw", component: Recoverpw },
  { path: "/page-recoverpw-2", component: Recoverpw2 },
  { path: "/pages-forgot-pwd", component: ForgetPwd1 },
  { path: "/auth-recoverpw-2", component: ForgetPwd2 },
  { path: "/auth-lock-screen", component: LockScreen },
  { path: "/auth-lock-screen-2", component: LockScreen2 },
  { path: "/page-confirm-mail", component: ConfirmMail },
  { path: "/page-confirm-mail-2", component: ConfirmMail2 },
  { path: "/auth-email-verification", component: EmailVerification },
  { path: "/auth-email-verification-2", component: EmailVerification2 },
  { path: "/auth-two-step-verification", component: TwostepVerification },
  { path: "/auth-two-step-verification-2", component: TwostepVerification2 },
]

const middleRoutes  = [
  { path: "/login", component: Login },
  { path: "/register", component: Register }, 
  { path: "/forgot-password", component: ForgetPwd },
]

const publicRoutes = [

  { path: "/home", component: Home },

  { path: "/citizen-charter", component: CitizenCharter },
  { path: "/view-officers", component: Officer },
  { path: "/view-members", component: Member },

  { path: "/services", component: Service },
  { path: "/water-bowser", component: WaterBowser },
  { path: "/water-supply", component: WaterSupply },
  { path: "/water-supply-application", component: WaterSupplyApplication },


  { path: "/download-application", component: Application },
  { path: "/download-gazette", component: Gazette },

  { path: "/complain", component: Complain },
  
  { path: "/tender-calling", component: TenderCalling},
  { path: "/supplier-register", component: SupplierRegister},
  { path: "/tender-bidding", component: Bidding},

  { path: "/gallery", component: Gallery },


  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  { path: "/", exact: true, component: () => <Redirect to="/home" /> },
]

export { authProtectedRoutes, publicRoutes,  middleRoutes}
