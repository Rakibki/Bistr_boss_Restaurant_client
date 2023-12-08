import Cover from "../shared/cover/Cover";
import pageTileImage from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";
import TabPanelItems from "../../components/TabPanel/TabPanelItems";
import { useState } from "react";
import Loadding from "../shared/loadding/Loadding";

const Shop = () => {
  const [sortText, setSortText] = useState("");
  const [serch, setSerch] = useState("");
  const [maxPrice, setMaxPrice] = useState(null);
  const [minPrice, setMinPrice] = useState(null);
  const [menu, loadding, refetch] = useMenu(sortText, maxPrice, minPrice, serch);

  const handleSerch = e => {
    // e.preventDefault();
    e.preventDefault()
    setSerch(e.target.serch.value)
    console.log(serch);
  };

  const dessert = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");

  if (loadding) {
    return <Loadding />;
  }

  return (
    <div>
      <Cover
        image={pageTileImage}
        desc={"Would you like to try a dish?"}
        title={"OUR SHOP"}
      />

      <div className="grid mt-8 gap-3 grid-cols-12">
        <div className="col-span-3">
          <div className="collapse mb-1 rounded-none collapse-arrow bg-[#D1A054]">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-[#EEFF25] text-xl font-medium">
              Sort by Price
            </div>
            <div className="collapse-content">
              <select
                onChange={(e) => {
                  setSortText(e.target.value);
                  refetch();
                }}
                className="select select-bordered w-full max-w-xs"
              >
                <option disabled selected>
                  Who shot first?
                </option>
                <option value={"LowToHigh"}>Price, Low To High</option>
                <option value={"HighToLow"}>Price, High To Low</option>
              </select>
            </div>
          </div>

          <div className="collapse mb-1 collapse-arrow rounded-none bg-[#D1A054]">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-[#EEFF25] text-xl font-medium">
              Serch Menu
            </div>
            <div className="collapse-content">
              <form onSubmit={handleSerch}>
                <input
                  type="text"
                  name="serch"
                  placeholder="Type here"
                  className="input w-full input-bordered"
                />
                <button
                  type="submit"
                  className="btn bg-[#EEFF25] text-black w-full mt-1 btn-xs btn-primary"
                >
                  Serch
                </button>
              </form>
            </div>
          </div>

          <div className="collapse rounded-none collapse-arrow bg-[#D1A054]">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-[#EEFF25] text-xl font-medium">
              Price Pange
            </div>
            <div className="collapse-content grid grid-cols-3">
              <div>
                <input
                  onChange={(e) => setMinPrice(e.target.value)}
                  type="text"
                  placeholder="$"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="mx-auto font-semibold text-white">Form</div>
              <div>
                <input
                  type="text"
                  onChange={(e) => setMaxPrice(e.target.value)}
                  placeholder="$"
                  className="input input-bordered w-full "
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-9">
          <Tabs className="text-base font-semibold uppercase text-[#151515]">
            <TabList>
              <Tab>dessert</Tab>
              <Tab>salad</Tab>
              <Tab>soup</Tab>
              <Tab>pizza</Tab>
              <Tab>drinks</Tab>
            </TabList>

            <TabPanel>
              <div className="grid ">
                <div className="col-span-2"></div>
                <div className="col-span-6 grid ">
                  <TabPanelItems items={dessert} />
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid ">
                <div className="col-span-2"></div>
                <div className="col-span-6 grid ">
                  <TabPanelItems items={salad} />
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid ">
                <div className="col-span-2"></div>
                <div className="col-span-6 grid ">
                  <TabPanelItems items={soup} />
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid ">
                <div className="col-span-2"></div>
                <div className="col-span-6 grid ">
                  <TabPanelItems items={pizza} />
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid ">
                <div className="col-span-2"></div>
                <div className="col-span-6 grid ">
                  <TabPanelItems items={drinks} />
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Shop;
