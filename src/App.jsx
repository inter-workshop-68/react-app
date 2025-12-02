import "./App.css";
import { useState } from "react";

function App() {
  const birthYear = 1982;
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;

  const [count, setCount] = useState(0);

  // Send discord webhook
  function sendWebhook() {
    const webhookUrl = ""; // Replace with your webhook URL

    const message = document.getElementById("message").value ?? "Hello!";
    const corsProxy = "https://cors.iecmu.com";
    fetch(corsProxy + "/" + webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: message,
      }),
    });
  }

  return (
    <>
      <h1>My Awesome Website</h1>
      <p>My name is Nirand Pisutha-Arnond and I am {age} years old.</p>
      <h2>My Favorite Food</h2>
      <ul>
        <li>Pizza</li>
        <li>Rice</li>
      </ul>
      <h2>My Pet</h2>
      <img
        src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg"
        width="300px"
      />
      {/* <h2>Click Me</h2> */}
      {/* <button onClick={() => alert("Button clicked!")}>Click me!</button> */}
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Click me!</button>

      <h2>Contact Me</h2>
      <input type="text" id="message" />
      <button onClick={sendWebhook}>Poke Me</button>
    </>
  );
}
export default App;
