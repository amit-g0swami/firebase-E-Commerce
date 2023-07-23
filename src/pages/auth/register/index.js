import { Form } from "../../../generic-components/form/Form";
import { FormInput } from "../../../generic-components/input/FormInput";
import { useDispatch } from "react-redux";
import { SignupUser } from "../../../redux/actions/auth-action";
import { Link } from "react-router-dom";

export const Register = () => {
  const dispatch = useDispatch();
  const handleRegister = (data) => {
    const { name, email, password } = data;
    dispatch(SignupUser(name, email, password));
  };
  return (
    <div className="center column">
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
        <button>Register</button>
        <div>
          <Link className="txt" to="/login">
            Already Registered ?
          </Link>
        </div>
      </Form>
    </div>
  );
};
