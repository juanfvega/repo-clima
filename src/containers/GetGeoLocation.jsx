import React, { useEffect, useState } from "react";

export const GetGeoLocation = () => new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      position => {
        resolve(position);
      },
      error => {
        reject(error);
      },
      {
        enableHighAccuracy: true,
      }
    );
  });
