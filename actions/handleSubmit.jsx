"use server"
import axios from "axios";
const extractVideoId = (url) => {
    // Regular expression pattern to match YouTube video IDs in both standard and shortened formats
    const pattern =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

    // Attempt to match the pattern in the URL
    const match = url.match(pattern);

    if (match) {
      return match[1]; // Return the captured group containing the video ID
    } else {
      return null; // Return null if no match is found
    }
  };

  const handleSubmit = async (input) => {
    // e.preventDefault();
    console.log(input);
    const videoId = extractVideoId(input); // Extract video ID from input URL
    console.log("Video ID:", videoId);

    const options = {
      method: "GET",
      url: "https://ytstream-download-youtube-videos.p.rapidapi.com/dl",
      params: { id: videoId },
      headers: {
        "X-RapidAPI-Key": "34076cdfc9msha18247edf88a100p1b0961jsn4674637916ec",
        "X-RapidAPI-Host": "ytstream-download-youtube-videos.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data.formats[0].url);
      return response.data.formats[0].url;
    } catch (error) {
      console.error(error);
    }
  };

  export default handleSubmit;