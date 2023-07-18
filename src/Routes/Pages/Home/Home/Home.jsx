import Banner from "../Banner/Banner";
import Catagory from "./Catagory/Catagory";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu.jsx/PopularMenu";
import Tastymonial from "./Tastymonial/Tastymonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Catagory></Catagory>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
      <Tastymonial></Tastymonial>
    </div>
  );
};

export default Home;
