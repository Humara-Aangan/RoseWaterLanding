// Client Component (e.g., components/MyVideoPlayer.tsx)
"use client"; // Important: Mark this as a Client Component
import React from "react";

interface MyVideoPlayerProps {
  src: string;
  poster: string;
}

const MyVideoPlayer: React.FC<MyVideoPlayerProps> = ({ src, poster }) => {
  const handlePlay = () => {
    console.log("Video is playing!");
    // Add your custom logic here
  };

  return (
    <video
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      className="my-video-class"
      onPlay={handlePlay} // Defined inside the Client Component
    />
  );
};

export default MyVideoPlayer;
