import PlayStore from "../assets/PlayStore.svg";
import AppStore from "../assets/AppStore.svg";
import Logo from "../assets/Logo.png";
import Insta from "../assets/Insta.png";
import TikTok from "../assets/TikTok.png";
import Twitter from "../assets/Twitter.png";
import Notification from "../assets/Notification.png";

const Footer = () => {
  return (
    <div className="border-t-2 border-white flex justify-center items-center py-8">
    
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 w-[90%] mt-16">
      <div className="md:col-span-6 block md:hidden flex justify-start md:justify-start mb-10">
          <img className="w-48" src={Logo} alt="Logo" />
        </div>
        <div className="md:col-span-8">
          <h2 className="text-white text-2xl md:text-5xl font-serif">
            Join us for an unforgettable experience
          </h2>
        </div>
        <div className="md:col-span-4 flex flex-col justify-center items-start md:items-end">
          <h3 className="text-white text-lg md:text-md font-serif">
            DOWNLOAD THE GROVES APP
          </h3>
          <div className="flex gap-3 mt-5">
            <img className="w-24 md:w-auto" src={PlayStore} alt="Play Store" />
            <img className="w-24 md:w-auto" src={AppStore} alt="App Store" />
          </div>
        </div>
        <div className="md:col-span-3 md:my-10">
          <h6 className="text-white text-md my-3 font-normal font-serif">
            LOCATION
          </h6>
          <p className="text-white font-light">Al-Hizam Park</p>
          <p className="text-white font-light">Al-Semairi, Yanbu Al Bahr 46455</p>
          <p className="text-white font-light">Riyadh Saudi Arabia</p>
        </div>
        <div className="md:col-span-4 md:my-10">
          <h6 className="text-white text-md my-3 font-normal font-serif">
            LOCATION
          </h6>
          <p className="text-white font-light">Al-Hizam Park</p>
          <p className="text-white font-light">Al-Semairi, Yanbu Al Bahr 46455</p>
          <p className="text-white font-light">Riyadh Saudi Arabia</p>
        </div>
        <div className="md:col-span-4 md:my-10">
          <h6 className="text-white text-md my-3 font-normal font-serif">
            LOCATION
          </h6>
          <p className="text-white font-light">Al-Hizam Park</p>
          <p className="text-white font-light">Al-Semairi, Yanbu Al Bahr 46455</p>
          <p className="text-white font-light">Riyadh Saudi Arabia</p>
        </div>
        <div className="md:col-span-6 hidden md:block flex justify-center md:justify-start mb-10">
          <img className="w-48" src={Logo} alt="Logo" />
        </div>
        <div className="md:col-span-6 flex gap-3 justify-start md:justify-end mb-10">
          <img className="w-8 h-8" src={Insta} alt="Instagram" />
          <img className="w-8 h-8" src={Notification} alt="Notification" />
          <img className="w-8 h-8" src={Twitter} alt="Twitter" />
          <img className="w-8 h-8" src={TikTok} alt="TikTok" />
        </div>
      </div>
    </div>
  );
};

export default  Footer;
