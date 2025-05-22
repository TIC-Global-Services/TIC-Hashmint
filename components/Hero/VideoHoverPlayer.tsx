"use client"

import { useRef, useEffect } from "react"

const VideoHoverPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null)

  // Set up the video to autoplay on component mount
  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current

      // Load the video
      video.load()

      // Once the video has loaded enough to play
      video.addEventListener("loadeddata", () => {
        // Attempt to autoplay the video
        video.play().catch((e) => {
          console.log("Autoplay prevented by browser:", e)
          // If autoplay is prevented, at least show the first frame
          video.currentTime = 0
          video.pause()
        })
      })
    }

    // Cleanup function
    return () => {
      if (videoRef.current) {
        videoRef.current.pause()
        videoRef.current.removeEventListener("loadeddata", () => {})
      }
    }
  }, [])

  const handleMouseEnter = () => {
    if (videoRef.current && videoRef.current.paused) {
      videoRef.current.play().catch((e) => console.log("Play prevented:", e))
    }
  }

  const handleMouseLeave = () => {
    // Optional: You can comment this out if you want the video to keep playing
    // when the mouse leaves, since it's autoplaying anyway
    /*
    if (videoRef.current) {
      videoRef.current.pause()
    }
    */
  }

  return (
    <div className="relative group max-w-[180px] md:max-w-[250px] mx-auto my-8 overflow-hidden rounded-xl border-3 border-[#f9c63b] font-semibold shadow-lg transition-all duration-300 hover:shadow-[0_0_15px_1px_rgba(249,198,59,0.7)] ease-in-out">
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        autoPlay
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
