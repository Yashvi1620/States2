import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Screen from "./components/Screen";

function App() {
  const [markdownlang, setMarkuplang] = useState("");

  return (
    <div style={{ display: "flex" }}>
      <Input setdatafn={setMarkuplang} />
      <Screen markdowndata={markdownlang} />
    </div>
  );
}

export default App;
