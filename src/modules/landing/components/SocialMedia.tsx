import React from "react";
import { BiLogoTelegram } from "react-icons/bi";
import { BsLinkedin } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import {
  FaFacebookF,
  FaInstagram,
  FaTelegram,
  FaXTwitter,
} from "react-icons/fa6";

const SocialMedia = () => {
  const socialLinks = [
    {
      name: "facebook",
      link: "https://www.facebook.com/profile.php?id=100090081681422",
      icon: <FaFacebookF color="#111827" fontSize={15} />,
    },
    {
      name: "twitter",
      link: "https://x.com/Svs_coins",
      icon: <FaXTwitter color="#111827" fontSize={15} />,
    },
    {
      name: "telegram",
      link: "https://t.me/svscoin2",
      icon: <BiLogoTelegram color="#111827" fontSize={15} />,
    },
    {
      name: "instagram",
      link: "https://www.instagram.com/svscoins/",
      icon: <FaInstagram color="#111827" fontSize={15} />,
    },
  ];

  return (
    <div className="flex flex-col fixed left-0 top-1/2 -translate-y-1/2 bg-white/50 z-50 hover:bg-white">
      {socialLinks.map(({ name, link, icon }) => (
        <a
          href={link}
          key={name}
          className="p-2 hover:scale-125 transition-all"
          target="_blanck"
        >
          {icon}
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
