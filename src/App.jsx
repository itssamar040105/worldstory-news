import Authors from "./components/Authors";
import Footer from "./components/Footer";
import Header from "./components/Header";
import News from "./components/News";

const App = () => {
  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <Header />
      <News />
      <Authors />
      <Footer />
    </div>
  );
};

export default App;
