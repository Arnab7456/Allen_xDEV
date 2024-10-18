import { useEffect, useState } from "react";

const Hero = () => {
  const img1 =
    "https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1729249760%2Fu_c_1_t79muq.webp&w=640&q=75";
  const img2 =
    "https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1729249954%2Fu_c_2_tjpr1s.webp&w=640&q=75";
  const img3 =
    "https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1729249955%2Fu_c_3_jqpb6o.webp&w=640&q=75";

  const images = [img1, img2, img3];
  const [imgId, setImgId] = useState(images[0]); // Initialize with the first image

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * images.length);
      setImgId(images[randomIndex]); // Set to a random image from the array
    }, 1000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="flex flex-col md:flex-row justify-center items-center  md:gap-60 gap-10 px-5 py-4 m-5 mr-5">
      <div className="flex flex-col items-center gap-10 ">
        <div className="font-bold text-4xl flex flex-col items-center gap-1">
          <span>Your Dream.</span>
          <span>Our Expertise.</span>
        </div>

        <div className="flex flex-col gap-4 items-center">
          <div className="font-semibold text-center">
            What brings you to us today?
          </div>

          <div className="flex  gap-4 items-center cursor-pointer">
            <div
              className="rounded-full border-2 px-4 py-2 font-bold"
              style={{ borderColor: "#3f8dfd" }}
            >
              NEET
            </div>
            <div
              className="rounded-full border-2 px-4 py-2 font-bold"
              style={{ borderColor: "#3f8dfd" }}
            >
              JEE
            </div>
            <div
              className="rounded-full border-2 px-4 py-2 font-bold"
              style={{ borderColor: "#3f8dfd" }}
            >
              Grade 6-10
            </div>
          </div>
        </div>
      </div>

      <div className="flex-shrink-0">
        <img src={imgId} width="450px" alt="Hero images" />
      </div>
    </div>
  );
};

export default Hero;
