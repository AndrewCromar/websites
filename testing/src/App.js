import "./App.css";
import Page from "./Components/Page";

function App() {
  var current_page = "Home";
  
  if (current_page === "Home")
  return <Page page_title="Home" />;

  else if (current_page === "About")
  return <Page page_title="Test" />;
}

export default App;
