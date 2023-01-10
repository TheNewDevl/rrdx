import chaticon from "../assets/icon-chat.png";
import securityicon from "../assets/icon-security.png";
import moneyIcon from "../assets/icon-money.png";
import bankTree from "../assets/bank-tree.jpeg";

export const features = [
  {
    imgSrc: chaticon,
    imgAlt: "Chat Icon",
    tittleText: "You are our #1 priority",
    desc: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
  },
  {
    imgSrc: moneyIcon,
    imgAlt: "Money Icon",
    tittleText: "More savings means higher rates",
    desc: "The more you save with us, the higher your interest rate will be!",
  },
  {
    imgSrc: securityicon,
    imgAlt: "Security Icon",
    tittleText: "Security you can trust",
    desc: " We use top of the line encryption to make sure your data and money is always safe.",
  },
];

export const hero = {
  heroBg: bankTree,
  title: "Promoted Content",
  subtitles: ["No fees.", "No minimum deposit.", "High interest rates."],
  text: ["Open a savings account with Argent Bank today!"],
};
