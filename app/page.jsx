"use client"
import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import handleSubmit from "@/actions/handleSubmit"; // Adjust the import path based on your project structure

export default function Home(){
  const [input, setInput] = useState("");
  const [downloadUrl, setDownloadUrl] = useState(""); // State to store the download URL

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(input);
    const url = await handleSubmit(input); // Call the handleSubmit function and wait for the result
    console.log("Download URL:", url);
    setDownloadUrl(url); // Set the download URL in the state
  };

  useEffect(() => {
    if (downloadUrl) {
      // Redirect to the download URL after downloadUrl state is updated
      window.location.href = downloadUrl;
    }
  }, [downloadUrl]);

  return (
    <div className="max-w-6xl mx-auto p-2 flex flex-col min-h-screen items-center justify-start">
        <h1 className="text-blue-700">Download any video</h1>
      <form className="flex gap-3" onSubmit={onSubmit}>
        <TextField
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          id="outlined-basic"
          label="Video Link"
          variant="outlined"
          size="small"
        />
        <Button type="submit" variant="contained">
          Search
        </Button>
      </form>
      {downloadUrl && ( // Render the download URL if available
        <div>
          <p>Download URL:</p>
          <a href={downloadUrl} target="_blank" rel="noopener noreferrer">
            {downloadUrl}
          </a>
        </div>
      )}
    </div>
  );
}
