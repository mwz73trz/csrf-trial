import { useNavigate } from "react-router-dom";
import notesAPI from "../api/notesAPI";

function LoginPage(props) {
  const navigate = useNavigate();
  const handleLogin = async (evt) => {
    evt.preventDefault();
    let userData = {
      username: evt.target.elements["username"].value,
      password: evt.target.elements["password"].value,
    };

    const data = await notesAPI.login(userData);
    if (data) {
      props.setUsername(data.username);
      navigate("/");
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <br />
      <form onSubmit={handleLogin} method="POST">
        <label>Username: </label>
        <input type="text" name="username" placeholder="Enter Your Username" />
        <br />
        <label>Password: </label>
        <input
          type="password"
          name="password"
          placeholder="Enter Your Password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
