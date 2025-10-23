import { useRef } from "react";
import "./vbanner.css";
import useIntersectionObserver from "@react-hook/intersection-observer";

export default function VidBanner() {
  const containerRef = useRef();
  const lockRef = useRef(false);
  const { isIntersecting } = useIntersectionObserver(containerRef);
  if (isIntersecting) {
    lockRef.current = true;
  }

  return (
    <div className="vbanw" >
      <header>
        <h1 className="vh1">About Lectrobar</h1>
        <div className="vvid" ref={containerRef}>
          <img loading="lazy" src="/btw.webp" alt="" />
          {lockRef.current && (
            // <video autoPlay muted loop>
            //the video is available on google drive
            //   <source src="/lectro.webm" type="video/mp4"></source>
            // </video>
                        <video autoPlay muted loop>
              <source src="https://drive.google.com/file/d/1PsDD_wcxt4bcSWPFmFQo3RpsPrybNqVw/view?usp=drive_link" type="video/webm"></source>
            </video>
          )}
            </div>
      </header>
    </div>
  );
};
