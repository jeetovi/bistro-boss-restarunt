import { useEffect, useState } from "react";
import SectionTaitle from "../../../../../Components/Sections/SectionTaitle";
import MenuItems from "../../../../../Shared/MenuItem/MenuItems";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  });
  return (
    <section className="mb-12" >
      <SectionTaitle
        heading={"From Our Menu"}
        subHeading={"Popular Items"}
      ></SectionTaitle>
      {/* Menue items section  */}
      <div className="grid md:grid-cols-2 gap-10">
        {menu.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>
      <button className="btn   flex btn-outline border-0 border-b-4 mt-4">View full menu</button>
    </section>
  );
};

export default PopularMenu;
