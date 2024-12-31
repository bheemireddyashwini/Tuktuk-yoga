import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import ContactForm from "./components/ContactForm";

import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import "./styles/App.css";
import PriceDetails from "./components/PriceDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
  
      <Gallery />
      <br /> <br />
      <PriceDetails />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
