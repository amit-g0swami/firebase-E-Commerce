import { Form } from "../../generic-components/form/Form";
import { FormInput } from "../../generic-components/input/FormInput";

export const AddressForm = ({ address }) => {
  const shippingAddress = address?.shippingAddress;
  return (
    <div style={{ margin: "10px" }}>
      {address === null ? (
        "Change Shipping Address While Checkout"
      ) : (
        <div className="center">
          <Form initialValues={shippingAddress} className="form">
            <FormInput name="city" disabled />
            <FormInput name="address" disabled />
            <FormInput name="name" disabled />
            <FormInput name="pinCode" disabled />
          </Form>
        </div>
      )}
    </div>
  );
};
