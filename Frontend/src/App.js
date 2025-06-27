import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [url, setUrl] = useState("");
  const [shortcode, setShortcode] = useState("");
  const [validity, setValidity] = useState(30);
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("");
    setError("");

    try {
      const res = await fetch("http://localhost:5000/shorturls", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, shortcode, validity }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Unknown error");

      setResult(data.shortLink);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container">
      <h1>URL Shortener</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter URL (e.g. https://google.com)"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Custom shortcode (optional)"
          value={shortcode}
          onChange={(e) => setShortcode(e.target.value)}
        />
        <input
          type="number"
          placeholder="Validity (minutes)"
          value={validity}
          onChange={(e) => setValidity(e.target.value)}
        />
        <button type="submit">Shorten URL</button>
      </form>

      {result && (
        <p className="success">
          Short URL: <a href={result}>{result}</a>
        </p>
      )}
      {error && <p className="error">Error: {error}</p>}
    </div>
  );
};

export default App;
