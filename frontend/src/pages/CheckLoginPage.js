import { Link } from "react-router-dom";

function CheckLoginPage(props) {
  if (props.username === "") {
    return (
      <p>
        You are not currently loggin in. Please <Link to="/login">Login</Link>
      </p>
    );
  }
  return <div>{props.actualPage()}</div>;
}

export default CheckLoginPage;
