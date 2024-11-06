import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Section from "./components/layout/Layout";
import Recent from "./components/layout/Recent";
import Works from "./components/layout/Works";

function App() {
  return (
    <div className="App">
      <Header />
      <Section />
      <Recent />
      <Works />
      <Footer />
    </div>
  );
}

export default App;
