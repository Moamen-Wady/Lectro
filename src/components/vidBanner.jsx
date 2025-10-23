//ORIGINAL LECTRO COMMENTED
// import { useRef } from "react";
// import "./vbanner.css";
// import useIntersectionObserver from "@react-hook/intersection-observer";

// export default function VidBanner() {
//   const containerRef = useRef();
//   const lockRef = useRef(false);
//   const { isIntersecting } = useIntersectionObserver(containerRef);
//   if (isIntersecting) {
//     lockRef.current = true;
//   }

//   return (
//     <div className="vbanw" >
//       <header>
//         <h1 className="vh1">About Lectrobar</h1>
//         <div className="vvid" ref={containerRef}>
//           <img loading="lazy" src="/btw.webp" alt="" />
//           {lockRef.current && (
//             <video autoPlay muted loop>
//             the video is available on google drive
//               <source src="/lectro.webm" type="video/webm"></source>
//             </video>
//           )}
//             </div>
//       </header>
//     </div>
//   );
// };

import "./vbanner.css";

export default function Blogb() {
  return (
    <div className="vbanw">
      <img src="/btw.webp" alt="" className="vshade" />
      <header>
        <h1 className="vh1">About Lectrobar</h1>
        <div className="vvid">
          <img src="/blogb.webp" alt="" />
        </div>
      </header>
    </div>
  );
}
