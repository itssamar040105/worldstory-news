import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons/faCalendarDays";
import { faSun, faBars, faRss } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faYoutube,
  faWhatsapp,
  faPinterestP,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const Header = () => {
  const navLinks = ["#News", "#Fashion", "#Lifestyle", "#Travel"];
  const icons = [
    faFacebookF,
    faTwitter,
    faYoutube,
    faPinterestP,
    faRss,
    faWhatsapp,
  ];
  return (
    <div>
      <div className="flex h-14 w-full items-center justify-between bg-[#ce0393] px-44">
        <div className="flex gap-20">
          <div className="flex items-center justify-center gap-4">
            <FontAwesomeIcon
              icon={faCalendarDays}
              color="white"
              className="text-2xl"
            />
            <p className="font-lato text-sm font-normal uppercase tracking-widest text-white">
              03. JUNE 2019
            </p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <FontAwesomeIcon icon={faSun} color="white" className="text-2xl" />
            <p className="font-lato text-sm font-normal uppercase tracking-widest text-white">
              New york 55.f
            </p>
          </div>
        </div>
        <nav className="h-full">
          <ul className="flex h-full">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className={`${
                  index == 0 ? "border-x" : "border-r"
                } flex h-full items-center justify-center border-white px-5 text-white`}
              >
                <a href={link.toLowerCase().substring()}>{link.substring(1)}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex h-20 w-full items-center justify-between bg-white px-44 drop-shadow-lg">
        <div className="flex items-center gap-4">
          <FontAwesomeIcon
            icon={faBars}
            color="black"
            className="cursor-pointerx text-4xl "
          />
          <h1 className="font-lato text-3xl font-black uppercase tracking-wider text-black">
            <span className="text-[#ce0393]">World</span>story
          </h1>
        </div>
        <div className="h-full">
          <ul className="flex h-full gap-8">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className={`flex h-full items-center justify-center font-lato text-lg font-bold uppercase tracking-wider text-black`}
              >
                <a href={link.toLowerCase().substring()}>{link.substring(1)}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="flex h-full gap-6">
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
      <div className="mt-1 flex w-full items-center justify-center bg-[#f1f1f1] object-cover">
        <img src="/src/assets/Images/hero-img.png" alt="" />
      </div>
      <div className="mt-5 flex w-full items-center justify-center">
        <p className="font-lato text-xl font-bold">
          <span className="text-[#ce0393]">Breaking News</span> : Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut
        </p>
      </div>
    </div>
  );
};

export default Header;
