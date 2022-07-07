import logo from "./logo.svg";
import "./App.css";
import NavBar from "./component/NavBar/NavBar";
import PageContent from "./component/Page/PageContent";

function App() {
  return (
    <div className="relative flex flex-col sm:flex-row justify-center w-screen h-screen flex-none ease-in-out">
      <NavBar />
      <PageContent />
    </div>
  );
}

export default App;
