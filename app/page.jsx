"use client";
import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import handleSubmit from "@/actions/handleSubmit"; // Adjust the import path based on your project structure

export default function Home() {
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
    <div className="bg-gradient-to-br from-sky-500 via-pink-400 to-rose-500  max-w-6xl mx-auto p-2 flex flex-col  border rounded-xl container h-[85vh] items-center justify-center">
      <h1 className="text-2xl my-1 md:text-6xl md:my-3 text-blue-700">
        Download Any Youtube Video
      </h1>
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
      <div className="max-w-md text-md p-2 bg-gradient-to-br from-blue-600 via-purple-400 to-pink-300 rounded-lg text-center border  my-5 ">
        After searching you will be redirected to the video and after clicking
        on ':' button you will be able to download it
      </div>
    </div>
  );
}
