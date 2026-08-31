import { useState } from "react";
import "./App.css";

import HeadersEditor from "./components/HeadersEditor";

function App() {
  const [method, setMethod] = useState("GET");
  const [url, setUrl] = useState("");
  const [body, setBody] = useState("");
  const [headers, setHeaders] = useState([]);

  const sendRequest = async () => {
  const requestConfig = {
    method,
    url,
    headers,
    body: body || null,
  };

  const response = await fetch(
    "http://localhost:5000/api/request",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestConfig),
    }
  );

  const data = await response.json();

  console.log(data);
};

  return (
    <div className="app">
      <header className="header">
        <h1>⚡ MiniPost</h1>
        <p>Build and test APIs from scratch.</p>
      </header>

      <main className="container">
        <div className="request-bar">
          <select
            value={method}
            onChange={(event) =>
              setMethod(event.target.value)
            }
          >
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="PATCH">PATCH</option>
            <option value="DELETE">DELETE</option>
          </select>

          <input
            type="text"
            placeholder="Enter API URL..."
            value={url}
            onChange={(event) =>
              setUrl(event.target.value)
            }
          />

          <button onClick={sendRequest}>Send</button>
        </div>

        <HeadersEditor
          headers={headers}
          setHeaders={setHeaders}
        />

        <section className="section">
          <h2>Request Body</h2>

          <textarea
            value={body}
            onChange={(event) =>
              setBody(event.target.value)
            }
            placeholder='{
  "name": "John"
}'
            rows="10"
          />
        </section>
      </main>
    </div>
  );
}

export default App;