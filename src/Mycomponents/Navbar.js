import PropTypes from "prop-types";
import "../App.css";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${
        props.mode === "purple" ? "purple" : props.mode
      } bg-${props.mode === "purple" ? "purple" : props.mode}`}
    >
      <div className="container-fluid d-flex gap-5">
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.about}
              </Link>
            </li> */}
          </ul>
        </div>
        <div className="d-flex gap-2">
          <button
            type="button"
            className="btn"
            style={{ color: props.mode === "light" ? "black" : "white" }}
          >
            Modes
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={props.greenMode}
          >
            Green
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={props.blueMode}
          >
            Blue
          </button>
          <button
            type="button"
            className="btn btn-purple"
            onClick={props.purpleMode}
          >
            Purple
          </button>
        </div>
        <div className="d-flex align-items-center gap-2">
          <i
            className={`fa-solid fa-moon fa-lg text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          ></i>
          <div className="form-check form-switch ">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="switchCheckDefault"
              onClick={props.toggleMode}
              checked={props.checked}
            />
            <label
              className={`form-check-label text-${
                props.mode === "light" ? "dark" : "light"
              }`}
              htmlFor="switchCheckDefault"
            >
              Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
};
