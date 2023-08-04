import axios from "axios"
import React, { useState } from "react"
import * as url from "./url.js"


const token = localStorage.getItem("auth-token")

const config = {
  xsrfHeaderName: "X-XSRF-TOKEN",
  withCredentials: true,
  Authorization: `Bearer ${token}`,
}


const addWaterSupplyApply = async admin => {
  let responseData
  await localStorage.getItem("auth-token")
  const response = await axios.get(url.SANCTUM_URL).then(async res => {
    await axios
      .post(url.ADD_CLASS, admin, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("auth-token")}`,
        },
      })
      .then(resp => {
        responseData = resp
      })
  })
  return responseData
}





const WaterSupplyService = {

    addWaterSupplyApply,
  
}
export default WaterSupplyService
