import { useState } from "react";
import { withAdminOnly } from "../../utils/withAdminOnly";
import { ShowUsers } from "../../components/admin/ShowUsers";
import { ShowProduct } from "../../components/admin/ShowProduct";
import { AdminBar } from "../../components/admin/AdminBar";
import { Container } from "../../generic-components/container/Container";
import { Tabs } from "../../generic-components/tabs";
import Panel from "../../generic-components/tabs/panel";

const Admin = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  return (
    <Container>
      <AdminBar
        setModalOpen={setModalOpen}
        modalOpen={modalOpen}
        setProducts={setProducts}
        setUsers={setUsers}
      />
      <Tabs>
        <Panel title="Products">
          {products.length > 0 && <ShowProduct products={products} />}
        </Panel>
        <Panel title="Users">
          {users.length > 0 && <ShowUsers users={users} />}
        </Panel>
      </Tabs>
    </Container>
  );
};

export default withAdminOnly(Admin);
