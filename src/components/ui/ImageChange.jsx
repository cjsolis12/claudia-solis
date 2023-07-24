import React, {useState, useEffect } from "react";
import me1 from "../../assets/me1.jpg";
import me2 from "../../assets/me2.jpg";
import me3 from "../../assets/me3.jpg";
import me4 from "../../assets/me4.jpg";
import me5 from "../../assets/me4.jpg";

const ImageSlideshow = () => {
    const [currentImageIndex, setCurrentImageIndex ] = useState(0);
    const images = [
        me1,
        me2,
        me3,
        me4,
        me5,
    ]

    useEffect(()=> {
        const nextImage = () => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
        }

        const intervalId = setInterval(nextImage, 500);

        return () => clearInterval(intervalId);
    }, [images.length])

    return(
        <div style={{ width: "100%", height: "300px", overflow: "hidden", boxShadow: "6px 6px 7px -2px rgba(151, 155, 154, 1)" }}>
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "opacity 0.3s ease-in-out",
            opacity: 1,
          }}
        />
      </div> 
    )
}

export default ImageSlideshow;