import { Form } from "../../../generic-components/form/Form";
import { FormInput } from "../../../generic-components/input/FormInput";
import { useDispatch } from "react-redux";
import { SigninUser } from "../../../redux/actions/auth-action";
import { Link } from "react-router-dom";
import { Button } from "../../../generic-components/button/Button";
import { Container } from "../../../generic-components/container/Container";

export const Login = () => {
  const dispatch = useDispatch();
  const handleLogin = (data) => {
    const { email, password } = data;
    dispatch(SigninUser(email, password));
  };
  return (
    <Container className="center column">
      <h2>Login</h2>
      <Form getFormData={handleLogin} className="form column">
        <FormInput
          placeholder="User Email"
          name="email"
          type="email"
          required
        />
        <FormInput
          placeholder="Password"
          name="password"
          type="password"
          required
        />
        <Button>Login</Button>
        <Container>
          <Link className="txt" to="/register">
            New here? Register
          </Link>
        </Container>
      </Form>
    </Container>
  );
};
