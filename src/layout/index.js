import { Footer } from "../components/footer";
import { Container } from "../generic-components/container/Container";
import { Navigation } from "../components/nav-bar";

export const RootLayout = ({ children }) => {
  return (
    <Container>
      <Navigation />
      {children}
      <Footer />
    </Container>
  );
};
