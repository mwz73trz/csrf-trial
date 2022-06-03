import { useNavigate } from "react-router-dom";
import notesAPI from "../api/notesAPI";

function SignUpPage(props) {
  const navigate = useNavigate();

  const handleSignUp = async (evt) => {
    evt.preventDefault();

    let signupData = {
      username: evt.target.elements["username"].value,
      password: evt.target.elements["password"].value,
    };

    const data = await notesAPI.signup(signupData);
    if (data) {
      navigate("/login");
    }
  };

  return (
    <div>
      <h2>Sign Up Page</h2>
      <br />
      <form onSubmit={handleSignUp} method="POST">
        <label>Username: </label>
        <input type="text" name="username" placeholder="Enter a Username" />
        <br />
        <label>Password: </label>
        <input type="password" name="password" placeholder="Enter a Password" />
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpPage;
