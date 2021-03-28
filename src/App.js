import "../src/assets/style.css";
import "../src/assets/responsive.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header/header";
import AboutUs from "./components/aboutUs/aboutUs";
import Expertise from "./components/aboutUs/expertise";
import Services from "./components/services/services";
import ContactUs from "./components/contactUs/contactUs";
import Footer from "./components/footer/footer";
function App() {
  return (
    <Router>
      <Header />
      <AboutUs />
      <Expertise />
      <Services />
      <ContactUs />
      <Footer />
    </Router>
  );
}

export default App;
