import { useEffect, useState } from "react";

const BackgroundSlider = () => {
  const images = [
    "bg/img-1.jpg",
    // "bg/img-2.jpg",

    // "bg/img-3.jpg",


    "https://assets.minted.com/image/upload/f_auto,q_auto/Minted_Onsite_Assets/2022/LP/IndianWeddingTraditions_220831_Image01.jpg",
    "https://images.herzindagi.info/image/2024/Feb/buffet-system.jpg",
    "https://5.imimg.com/data5/SELLER/Default/2024/5/419704740/PH/BG/SZ/56917177/wedding-catering-services.jpeg",
    // "https://5.imimg.com/data5/SELLER/Default/2024/5/419704740/PH/BG/SZ/56917177/wedding-catering-services.jpeg",
    "https://media-api.xogrp.com/images/f4570601-a1e6-4802-86fb-ad9e988066fe~rs_768.h",
    "https://content.jdmagicbox.com/comp/patna/p2/0612px612.x612.220119155024.l5p2/catalogue/pr-events-and-wedding-planner-kankarbagh-patna-banquet-halls-2vfq961262.jpg",
    "bg/img-4.jpg",
  ]; // Add paths to your images
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-[700px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          animation: "zoomEffect 6s infinite",
        }}
      ></div>
      <style jsx>{`
        @keyframes zoomEffect {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.2);
          }
        }
      `}</style>
    </div>
  );
};

export default BackgroundSlider;
