import React from "react";

export default function StaticMap() {
  const searchParams = new URLSearchParams(window.location.search);
  const renderedLat = searchParams.get("lat") || 37.348159275838256;
  const renderedLng = searchParams.get("lng") || 127.09817774825865;

  console.log("STATIC");
  return (
    <div>
      <img
        alt="static map"
        src={`https://naveropenapi.apigw.ntruss.com/map-static/v2/raster-cors?w=400&h=400&center=${renderedLng},${renderedLat}&level=16&X-NCP-APIGW-API-KEY-ID=1m4n9csh9r`}
      ></img>
    </div>
  );
}
