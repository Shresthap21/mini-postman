function HeadersEditor({ headers, setHeaders }) {
  const addHeader = () => {
    setHeaders([
      ...headers,
      {
        id: crypto.randomUUID(),
        key: "",
        value: "",
      },
    ]);
  };

  const updateHeader = (id, field, value) => {
    setHeaders(
      headers.map((header) =>
        header.id === id
          ? { ...header, [field]: value }
          : header
      )
    );
  };

  const removeHeader = (id) => {
    setHeaders(
      headers.filter((header) => header.id !== id)
    );
  };

  return (
    <section className="section">
      <div className="section-title">
        <h2>Headers</h2>

        <button
          className="secondary-button"
          onClick={addHeader}
        >
          + Add Header
        </button>
      </div>

      {headers.map((header) => (
        <div className="header-row" key={header.id}>
          <input
            placeholder="Key"
            value={header.key}
            onChange={(event) =>
              updateHeader(
                header.id,
                "key",
                event.target.value
              )
            }
          />

          <input
            placeholder="Value"
            value={header.value}
            onChange={(event) =>
              updateHeader(
                header.id,
                "value",
                event.target.value
              )
            }
          />

          <button
            className="remove-button"
            onClick={() => removeHeader(header.id)}
          >
            ×
          </button>
        </div>
      ))}
    </section>
  );
}

export default HeadersEditor;