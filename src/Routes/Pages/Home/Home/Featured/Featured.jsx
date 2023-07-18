import SectionTaitle from "../../../../../Components/Sections/SectionTaitle";
import featuredImg from "../../../../../assets/home/featured.jpg";
import './Featured.css'

const Featured = () => {
  return (
    <div className="featuerd-item bg-fixed pt-10 my-10    ">
      <SectionTaitle
        subHeading={"check it out"}
        heading={"Feature Items"}
      ></SectionTaitle>
      <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pt-12 pb-20 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
       
     
      <div className="md:ml-10">
        <p>Aug 20 , 2022</p>
        <p className="uppercase">Whwre can i get some</p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum nam
          itaque excepturi cupiditate omnis soluta repellendus provident dicta,
          sed animi, cum optio iste officia deserunt blanditiis tenetur natus id
          molestias obcaecati ad velit laboriosam? Omnis atque reprehenderit,
          quasi dicta a adipisci dolorem ex saepe iure hic vitae, non ipsam
          blanditiis!
        </p>
        <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
      </div>
    </div>
    </div>
  );
};

export default Featured;
