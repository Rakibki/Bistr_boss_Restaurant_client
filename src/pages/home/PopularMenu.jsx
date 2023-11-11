import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuItem from "../../components/MenuItem";
import useMenu from "../../hooks/useMenu";

import { Link } from "react-router-dom";

const PopularMenu = () => {
  const [menu] = useMenu();
  const menuFilter = menu.filter((item) => item.category === "popular");

  return (
    <div className="px-16">
      <SectionTitle subTitle={"Check it out"} title={"FROM OUR MENU"} />
      <div className="grid gap-6 mt-16 grid-cols-2">
        {menuFilter.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>

      <div className="flex justify-center">
        <Link to={"/menu"}>
          <button className="px-6 border-b-4 font-Inter hover:bg-[#1F2937] hover:text-white transition-all mt-6 text-[#1F2937] border-[#1F2937] rounded-xl text-base py-2">
            View Full Menu
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PopularMenu;
