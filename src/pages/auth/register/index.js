import { Form } from "../../../generic-components/form/Form";
import { FormInput } from "../../../generic-components/input/FormInput";
import { useDispatch } from "react-redux";
import { SignupUser } from "../../../redux/actions/auth-action";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { Container } from "../../../generic-components/container/Container";

export const Register = () => {
  const dispatch = useDispatch();
  const handleRegister = (data) => {
    const { name, email, password } = data;
    dispatch(SignupUser(name, email, password));
  };
  return (
    <Container className="center column">
      <h2>Register</h2>
      <Form getFormData={handleRegister} className="form column">
        <FormInput placeholder="User Name" name="name" type="name" required />
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
        <Button>Register</Button>
        <Container>
          <Link className="txt" to="/login">
            Already Registered ?
          </Link>
        </Container>
      </Form>
    </Container>
  );
};
