import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneVolume,
  faLocationDot,
  faRss,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebookF,
  faYoutube,
  faWhatsapp,
  faPinterestP,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  const aboutData = [
    {
      text: "123, Main Street, Your City,\nNew York 789456",
      icon: faLocationDot,
    },
    { text: "+01 2345 67890\n+01 2345 67890", icon: faPhoneVolume },
    { text: "free@psdfreebies.com\nwww.psdfreebies.com", icon: faEnvelope },
  ];
  const icons = [
    faFacebookF,
    faTwitter,
    faYoutube,
    faPinterestP,
    faRss,
    faWhatsapp,
  ];
  const footerImages = ["footer-img-1", "footer-img-2", "footer-img-3"];
  return (
    <div className="bg-[#242424] pt-8 text-white">
      <div className="item flex justify-center gap-4">
        <div>
          <div className="flex flex-col gap-6">
            <h1 className="font-lato text-3xl font-black uppercase">
              About us
            </h1>
            <img src="/src/assets/Images/underline-img-4.png" alt="" />
          </div>
          <p className="mb-8 mt-12 font-lato text-xl font-normal text-[#8e8e8e]">
            Lorem ipsum dolor sit amet, consectetur
            <br />
            adipiscing elit, sed do eiusmod tempor incididunt
            <br />
            ut labore et dolore magna aliqua. Ut enim ad
            <br /> minim veniam, quis nostrud exercitation
          </p>
          <div className="flex flex-col gap-4 border-b-2 border-[#454545] pb-5">
            {aboutData.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-start gap-4"
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className="text-2xl text-[#ce0393]"
                />
                <p className="whitespace-pre-line font-lato text-sm font-normal uppercase text-white">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          <div>
            <ul className="flex h-full gap-6 pt-4">
              {icons.map((icon, index) => (
                <li key={index}>
                  <FontAwesomeIcon
                    icon={icon}
                    className="text-2xl text-[#ce0393]"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-6">
            <h1 className="font-lato text-3xl font-black uppercase">
              Popular Posts
            </h1>
            <img src="/src/assets/Images/underline-img-4.png" alt="" />
          </div>
          <div>
            {footerImages.map((img, index) => (
              <div
                key={index}
                className={`flex ${index === 0 ? "mt-12 pb-8" : "py-8"} gap-5 ${
                  index !== footerImages.length - 1
                    ? "border-b-2 border-[#454545]"
                    : ""
                }`}
              >
                <img src={`/src/assets/Images/${img}.png`} alt="" />
                <div className="flex flex-grow flex-col justify-between gap-2">
                  <h4 className="font-lato text-lg font-bold uppercase text-white">
                    Latest From the Web for
                    <br />
                    you
                  </h4>
                  <div className="norm flex h-5 w-[76px] items-center justify-center rounded-xl bg-[#ce0393] font-lato text-xs uppercase text-white">
                    Fashion
                  </div>
                  <p className="font-lato text-sm font-normal uppercase tracking-wider text-white">
                    03. June 2019
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-16">
          <div>
            <div className="flex flex-col gap-6">
              <h1 className="font-lato text-3xl font-black uppercase">
                NewsLetter
              </h1>
              <img src="/src/assets/Images/underline-img-4.png" alt="" />
            </div>
            <div className="mt-12">
              <form
                action=""
                className="flex flex-col items-start justify-center gap-4"
              >
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Enter Your Email Address"
                  className="h-12 w-[424px] rounded-3xl pl-5"
                />
                <button
                  className="h-12 w-44 rounded-3xl bg-[#ce0393]"
                  type="submit"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div>
            <div className="mb-16 flex flex-col gap-6">
              <h1 className="font-lato text-3xl font-black uppercase">
                Categories
              </h1>
              <img src="/src/assets/Images/underline-img-4.png" alt="" />
            </div>
            <div className="grid grid-cols-2 gap-8 font-lato text-sm font-normal uppercase text-white">
              <p>Business</p>
              <p>Sport</p>
              <p>Entertainment</p>
              <p>Tech</p>
              <p>Food & Cuisine</p>
              <p>Travel</p>
              <p>Lifestyle</p>
              <p>Urban</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
