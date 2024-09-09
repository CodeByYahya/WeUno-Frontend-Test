import PlayStore from "../assets/PlayStore.svg";
import AppStore from "../assets/AppStore.svg";
import Logo from "../assets/Logo.png";
import Insta from "../assets/Insta.png";
import TikTok from "../assets/TikTok.png";
import Twitter from "../assets/Twitter.png";
import Notification from "../assets/Notification.png";

const Footer = () => {
  return (
    <div className="border-t-[1px] border-white py-8 flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 w-[90%]">
        {/* Logo (Mobile) */}
        <div className="md:col-span-6 flex justify-start mb-10 md:hidden">
          <img className="w-48" src={Logo} alt="Logo" />
        </div>

        {/* Join us section */}
        <div className="md:col-span-8 flex justify-start items-center">
          <h2 className="text-white w-[70%] md:w-full text-4xl font-serif text-start md:text-left">
            Join us for an unforgettable experience
          </h2>
        </div>

        {/* Download section */}
        <div className="md:col-span-4 flex flex-col justify-center items-start md:items-end">
          <h3 className="text-white text-lg md:text-md font-serif text-center md:text-left">
            DOWNLOAD THE GROVES APP
          </h3>
          <div className="flex gap-3 mt-5 justify-start w-full md:justify-end">
            <img className="w-24" src={PlayStore} alt="Play Store" />
            <img className="w-24" src={AppStore} alt="App Store" />
          </div>
        </div>

        {/* Location sections */}
        <div className="md:col-span-3 flex flex-col">
          <h6 className="text-white text-md my-3 font-normal font-serif">
            LOCATION
          </h6>
          <p className="text-white font-light">Al-Hizam Park</p>
          <p className="text-white font-light">Al-Semairi, Yanbu Al Bahr 46455</p>
          <p className="text-white font-light">Riyadh Saudi Arabia</p>
        </div>
        <div className="md:col-span-4 flex flex-col">
          <h6 className="text-white text-md my-3 font-normal font-serif">
            LOCATION
          </h6>
          <p className="text-white font-light">Al-Hizam Park</p>
          <p className="text-white font-light">Al-Semairi, Yanbu Al Bahr 46455</p>
          <p className="text-white font-light">Riyadh Saudi Arabia</p>
        </div>
        <div className="md:col-span-4 flex flex-col">
          <h6 className="text-white text-md my-3 font-normal font-serif">
            LOCATION
          </h6>
          <p className="text-white font-light">Al-Hizam Park</p>
          <p className="text-white font-light">Al-Semairi, Yanbu Al Bahr 46455</p>
          <p className="text-white font-light">Riyadh Saudi Arabia</p>
        </div>

        {/* Logo (Desktop) */}
        <div className="md:col-span-6 hidden md:flex md:justify-start mb-10">
          <img className="w-48" src={Logo} alt="Logo" />
        </div>

        {/* Social media icons */}
        <div className="md:col-span-6 flex justify-start md:justify-end gap-3 mb-10">
          <img className="w-8 h-8" src={Insta} alt="Instagram" />
          <img className="w-8 h-8" src={Notification} alt="Notification" />
          <img className="w-8 h-8" src={Twitter} alt="Twitter" />
          <img className="w-8 h-8" src={TikTok} alt="TikTok" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
