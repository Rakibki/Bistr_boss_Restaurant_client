import React from "react";
import Cover from "../shared/cover/Cover";
import pageTileImage from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";
import TabPanelItems from "../../components/TabPanel/TabPanelItems";

const Shop = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div>
      <Cover
        image={pageTileImage}
        desc={"Would you like to try a dish?"}
        title={"OUR SHOP"}
      />

      <div>
        <Tabs>
          <TabList>
            <Tab>dessert</Tab>
            <Tab>salad</Tab>
            <Tab>soup</Tab>
            <Tab>pizza</Tab>
            <Tab>drinks</Tab>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-8">
              <div className="col-span-2"></div>
              <div className="col-span-6 grid ">
                <TabPanelItems items={dessert} />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-8">
              <div className="col-span-2"></div>
              <div className="col-span-6 grid ">
                <TabPanelItems items={salad} />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-8">
              <div className="col-span-2"></div>
              <div className="col-span-6 grid ">
                <TabPanelItems items={soup} />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-8">
              <div className="col-span-2"></div>
              <div className="col-span-6 grid ">
                <TabPanelItems items={pizza} />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-8">
              <div className="col-span-2"></div>
              <div className="col-span-6 grid ">
                <TabPanelItems items={drinks} />
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Shop;
