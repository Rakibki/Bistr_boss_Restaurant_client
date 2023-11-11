import React from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="flex gap-2 bg-neutral text-neutral-content">
        <div className="mx-auto bg-[#1F2937] flex justify-end p-10 flex-1">
          <div className="text-center font-Inter">
            <h2 className="text-center text-2xl font-bold font-Inter mb-1">
              CONTACT US
            </h2>
            <p>123 ABS Street, Uni 21, Bangladesh</p>
            <p>+88 123456789</p>
            <p>Mon - Fri: 08:00 - 22:00</p>
            <p>Sat - Sun: 10:00 - 23:00</p>
          </div>
        </div>
        <div className="mx-auto flex justify-start p-10 flex-1 text-center bg-[#111827]">
          <div>
            <h2 className="text-2xl font-bold font-Inter mb-1">Follow US</h2>
            <p className="font-Inter">Join us on social media</p>

            <div className="flex gap-3 text-3xl mt-4  text-white">
              <BiLogoFacebook />
              <AiFillInstagram />
              <AiOutlineTwitter />
            </div>
          </div>
        </div>
      </div>
      <div className="footer footer-center text-white p-4 bg-[#151515]">
        <aside>
          <p>Copyright © CulinaryCloud. All rights reserved.</p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
