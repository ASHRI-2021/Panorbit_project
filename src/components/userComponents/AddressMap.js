import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => (
  <div
    style={{
      color: "white",
      background: "grey",
      // padding: "15px 10px",
      display: "inline-flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
      transform: "translate(-50%, -50%)",
    }}
  >
    {text}
  </div>
);

function AddressMap(props) {
  const defaultProps = {
    center: {
      lat: isNaN(props.lat) ? null : props.lat,
      lng: isNaN(props.lng) ? null : props.lng,
    },
    zoom: 11,
  };
  
  return (
    <GoogleMapReact
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      <AnyReactComponent
        lat={isNaN(props.lat) ? null : props.lat }
        lng={isNaN(props.lng) ? null : props.lng}
        text={props.name}
      />
    </GoogleMapReact>
  );
}

export default AddressMap;
