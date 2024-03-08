import fLogo from "@/assets/f-logo.png";
import googlePlay from "@/assets/googlePlay.png";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#111926]">
      <div className="xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md max-w-screen-sm mx-auto px-4">
        <div className="grid md:grid-cols-4 grid-cols-1 gap-14 py-12 text-white">
          <div className="space-y-4">
            <Image src={fLogo} alt="Footer Logo" />
            <p>
              Largest product search engine, maximum categorized online shopping
              mall and quickest home delivery system.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-xl">Follow Us</span>
              <div className="flex items-center space-x-4 text-2xl">
                <FaFacebook />
                <FaInstagram />
                <FaYoutube />
              </div>
            </div>
          </div>
          <div>
            <p className="text-xl font-bold mb-6">Contact Us</p>
            <p>House #8, Road # 14,</p>
            <p>Dhanmondi, Dhaka-1209.</p>
            <p className="mt-4">Email: support@e-valy.com</p>
          </div>
          <div>
            <p className="text-xl font-bold mb-6">Let Us Help You</p>
            <ul>
              <li>Your Account</li>
              <li>Your Order</li>
              <li>Terms & Conditions</li>
              <li>Return & Refund Policy</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div>
            <p className="text-xl font-bold mb-6">Get Evaly App</p>
            <Image src={googlePlay} alt="Google Play" />
          </div>
        </div>
      </div>
      <div className="bg-[#222836] text-gray-400 text-center py-8">
        <p> &copy; 2024 E-valy.com Limited. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
