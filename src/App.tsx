import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Service";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Customers from "./components/Customers";
function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Customers />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
