import { useState } from "react";
import "./App.css";
import HeadersEditor from "./components/HeadersEditor";

function App() {
  const [method, setMethod] = useState("GET");
  const [url, setUrl] = useState("");
  const [body, setBody] = useState("");
  const [headers, setHeaders] = useState([]);

  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const sendRequest = async () => {
    if (!url.trim()) {
      alert("Please enter a URL");
      return;
    }

    setLoading(true);
    setResponse(null);

    const requestConfig = {
      method,
      url,
      headers,
      body: body || null,
    };

    try {
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

      setResponse(data);
    } catch (error) {
      setResponse({
        error: "Could not connect to MiniPost server",
        message: error.message,
      });
    } finally {
      setLoading(false);
    }
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

          <button onClick={sendRequest} disabled={loading}>
            {loading ? "Sending..." : "Send"}
          </button>
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

        {response && (
          <section className="section response-section">
            <div className="response-header">
              <h2>Response</h2>

              {response.status && (
                <div className="response-meta">
                  <span>
                    {response.status} {response.statusText}
                  </span>

                  <span>{response.time} ms</span>
                </div>
              )}
            </div>

            {response.error && (
              <div className="error-box">
                <strong>{response.error}</strong>

                {response.message && (
                  <p>{response.message}</p>
                )}
              </div>
            )}

            {response.body !== undefined && (
              <pre className="response-body">
                {typeof response.body === "object"
                  ? JSON.stringify(
                      response.body,
                      null,
                      2
                    )
                  : response.body}
              </pre>
            )}
          </section>
        )}
      </main>
    </div>
  );
}

export default App;