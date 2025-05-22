"use client"

import { useRef, useEffect } from "react"

const VideoHoverPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null)

  // Set up the video to show its first frame as a poster on component mount
  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current

      // Load the video and pause it at the first frame
      video.load()
      video.currentTime = 0

      // Once the video has loaded enough to display the first frame
      video.addEventListener("loadeddata", () => {
        // Ensure it's paused at the first frame
        video.currentTime = 0
        video.pause()
      })
    }
  }, [])

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play().catch((e) => console.log("Autoplay prevented:", e))
    }
  }

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause()
    }
  }

  return (
    <div className="relative group max-w-[180px] md:max-w-[250px] mx-auto my-8 overflow-hidden rounded-xl border-3 border-[#f9c63b] font-semibold shadow-lg transition-all duration-300 hover:shadow-[0_0_15px_1px_rgba(249,198,59,0.7)] ease-in-out">
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="auto"
        className="w-full h-auto rounded-xl transition-all duration-300 group-hover:shadow-[0_0_25px_8px_rgba(249,198,59,0.4)]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        // For touch devices, add click to play/pause functionality
        onClick={() => {
          if (videoRef.current) {
            if (videoRef.current.paused) {
              videoRef.current.play().catch((e) => console.log("Play prevented:", e))
            } else {
              videoRef.current.pause()
            }
          }
        }}
      >
        <source src="/HeroVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default VideoHoverPlayer
