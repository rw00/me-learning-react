import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onDismiss={() => setAlertVisible(false)}>Test</Alert>
      )}
      <Button onClick={() => setAlertVisible(true)}>Click me</Button>
    </div>
  );
}

export default App;
