// import React from "react";
// import PropTypes from "prop-types";

// export default function Alert(props) {
//   return (
//     <>
//       <div className="alert alert-success " role="alert">
//         <strong>{props.alert.type}</strong>&nbsp;&nbsp;{props.alert.msg}
//       </div>
//     </>
//   );
// }
import React from "react";
import PropTypes from 'prop-types';


export default function Alert(props) {
  if (!props.alert) return null; // render nothing if alert is null

  return (
    <div
      className={`alert alert-${props.alert.type} `}
      role="alert"
    >
      <strong>{props.alert.type}</strong>: {props.alert.msg}
    </div>
  );
}
