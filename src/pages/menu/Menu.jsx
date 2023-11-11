import React from "react";
import Cover from "../shared/cover/Cover";
import manuPageInage from "../../assets/menu/banner3.jpg";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuItem from "../../components/MenuItem";
import MenuGategory from "./MenuGategory";
import dessertimg from "../../assets/menu/dessert-bg.jpeg";
import saladImage from "../../assets/menu/salad-bg.jpg";
import supImage from "../../assets/menu/soup-bg.jpg";
import pizzaImage from "../../assets/menu/pizza-bg.jpg";

const Menu = () => {
  const [menu] = useMenu();
  const todayOffered = menu.filter(
    (menuItem) => menuItem.category === "offered"
  );
  const dessert = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");

  return (
    <>
      {/* page title */}
      <div>
        <Cover
          title={"OUR MENU"}
          desc={"Would you like to try a dish?"}
          image={manuPageInage}
        />
      </div>

      {/* todayOffered */}
      <div className="p-10">
        <SectionTitle subTitle={"Don't miss"} title={"TODAY'S OFFER"} />
        <div className="grid gap-6 mt-10 grid-cols-2">
          {todayOffered.map((item) => (
            <MenuItem item={item} key={item._id} />
          ))}
        </div>
      </div>

      {/* dessert */}
      <div className="p-10">
        <MenuGategory
          items={dessert}
          image={dessertimg}
          title={"DESSERTS"}
          desc={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        />
      </div>

      {/* Salads */}
      <div className="p-10">
        <MenuGategory
          items={salad}
          image={saladImage}
          title={"SALADS"}
          desc={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        />
      </div>

      {/* sops */}
      <div className="p-10">
        <MenuGategory
          items={soup}
          image={supImage}
          title={"SOUPS"}
          desc={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        />
      </div>
      {/* pizza */}
      <div className="p-10">
        <MenuGategory
          items={pizza}
          image={pizzaImage}
          title={"PIZZA"}
          desc={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        />
      </div>
    </>
  );
};

export default Menu;
