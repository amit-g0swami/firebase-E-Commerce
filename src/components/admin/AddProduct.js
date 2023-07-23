import { Form } from "../../generic-components/form/Form";
import { FormInput } from "../../generic-components/input/FormInput";
import { Modal } from "../../generic-components/modal";
import { addAProduct } from "../../services/product-service";

export const AddProduct = ({ modalOpen, setModalOpen, formHeader }) => {
  const addNewProduct = async (data) => {
    setModalOpen(!modalOpen);
    addAProduct(data);
  };
  return (
    <Modal
      isModalOpen={modalOpen}
      closeModal={setModalOpen}
      formHeader={formHeader}
    >
      <Form className="form" getFormData={addNewProduct}>
        <FormInput placeholder="Category" name="category" required />
        <FormInput placeholder="Description" name="description" required />
        <FormInput placeholder="Id" name="id" required />
        <FormInput placeholder="Image" name="image" required />
        <FormInput placeholder="Price" name="price" required />
        <button>Submit</button>
      </Form>
    </Modal>
  );
};
