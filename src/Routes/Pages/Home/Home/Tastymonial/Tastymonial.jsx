import SectionTaitle from "../../../../../Components/Sections/SectionTaitle";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import '@smastrom/react-rating/style.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

const Tastymonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('reviews.json')
      .then((res) => res.json())
      .then((data) => setReviews(data));
  });
  return (
    <section className="my-20">
      <SectionTaitle
        subHeading="What Our client say"
        heading={"Tastymonials"}
      ></SectionTaitle>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
     
        {reviews.map((reviews) => (
          <SwiperSlide key={reviews._id}>
            <div className="my-16 mx-24 flex flex-col items-center ">
                {/* rating */}
            <Rating
      style={{ maxWidth: 180 }}
      value={reviews.rating}
      readOnly
    />
                <p className="py-6">{reviews.details}</p>
                <h3 className="text-2xl text-orange-400">{reviews.name}</h3>
            </div>
             </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Tastymonial;
