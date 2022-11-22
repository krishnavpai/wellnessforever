import axios from "axios";
import { useState, useEffect } from "react";

export default function handler(coordinates, res) {
  var config = {
    method: "get",
    url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=19.119589364223636%2C72.89400549769186&radius=4500&type=pharmacy&key=AIzaSyC69VEBLArHFjdhyiTsMnD0O_iCkAoIUkI`,
    headers: {},
  };
  // url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${coordinates.latitude}%2C${coordinates.longitude}&radius=4500&type=pharmacy&key=AIzaSyC69VEBLArHFjdhyiTsMnD0O_iCkAoIUkI`,



  /* 
  axios(config).then(function (response) {
    console.log(JSON.stringify(response.data));
    res
      .status(200)
      .json({
        data: response.data.results.map((item) => {
          return {
            name: item.name,
            address: item.vicinity,
          };
        }),
      })
      .catch(function (error) {
        console.log(error);
      });
  });
  */

  axios(config).then(function (response) {
    console.log(JSON.stringify(response.data));
    res
      .status(200)
      .json({
        data: response.data.results}).catch(function (error) {
        console.log(error);
      });
  });
}



