import About from "./components/About";
import Appointment from "./components/Appointment";
import Dentists from "./components/Dentists";
import Doctors from "./components/Doctors";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Price from "./components/Price";
import Reviews from "./components/Reviews";
import Services from "./components/Services";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Dentists />
      <Doctors />
      <Price />
      <Reviews />
      <Appointment />
      <Faq />
      <Footer />
    </>
  );
};

export default App;
