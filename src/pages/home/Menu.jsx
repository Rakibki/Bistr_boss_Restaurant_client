import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuItem from "../../components/MenuItem";
import useMenu from "../../hooks/useMenu";

const Menu = () => {
  const [menu] = useMenu();
  const menuFilter = menu.filter((item) => item.category === "popular");

  return (
    <div>
      <SectionTitle subTitle={"Check it out"} title={"FROM OUR MENU"} />
      <div className="grid gap-6 mt-16 grid-cols-2">
        {menuFilter.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>

      <div className="flex justify-center">
        <button className="px-6 border-b-4 font-Inter mt-6 text-[#1F2937] border-[#1F2937] rounded-xl text-base py-2">
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default Menu;
