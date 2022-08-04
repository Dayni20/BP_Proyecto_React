import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import useUser from "./User";
//import useUser from "../Context/LoginContext/Hooks/useContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState();

  const { onLogin } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handleSubmit");
    console.log(email, password);
  };
  

  return (
    <div>
      <br></br>
      <h1>Login</h1>
      <br></br>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>USERNAME</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter username"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
           
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <br></br>
        <Button onClick={() => onLogin({ user: email, password: password })}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Login;
