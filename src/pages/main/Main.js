import { useState } from "react";
import { RenderAfterNavermapsLoaded, NaverMap } from "react-naver-maps";

export default function Main() {
  return (
    <RenderAfterNavermapsLoaded
      ncpClientId={"1m4n9csh9r"}
      error={<p>Maps Load Error</p>}
      loading={<p>Maps Loading...</p>}
    >
      <NaverMap
        mapDivId="react-naver-map"
        style={{
          width: "100%",
          height: "100vh",
        }}
        defaultCenter={{ lat: 37.3595704, lng: 127.105399 }}
        defaultZoom={16}
      />
    </RenderAfterNavermapsLoaded>
  );
}