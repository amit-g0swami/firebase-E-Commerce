import { Modal } from "../../generic-components/modal";
import { Form } from "../../generic-components/form/Form";
import { FormInput } from "../../generic-components/input/FormInput";
import { useSelector } from "react-redux";
import { addShippingDetails } from "../../redux/actions/auth-action";

export const GetAddress = ({ modalOpen, setModalOpen, formHeader }) => {
  const { uid, shippingAddress } = useSelector((state) => ({
    uid: state.auth.user.uid,
    shippingAddress: state.auth.shippingAddress
  }));
  const address = shippingAddress?.shippingAddress;
  const handleAddress = (data) => {
    addShippingDetails(uid, data);
    setModalOpen(!modalOpen);
  };
  return (
    <Modal
      isModalOpen={modalOpen}
      closeModal={setModalOpen}
      formHeader={formHeader}
    >
      <Form
        className="form"
        initialValues={address}
        getFormData={handleAddress}
      >
        <FormInput placeholder="Name" name="name" required />
        <FormInput placeholder="City" name="city" required />
        <FormInput placeholder="Address" name="address" required />
        <FormInput placeholder="PinCode" name="pinCode" required />
        <button>Submit</button>
      </Form>
    </Modal>
  );
};
