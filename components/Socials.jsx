import Link from "next/link";
import { FaGithub,FaLinkedin,FaFacebook,FaWhatsapp } from "react-icons/fa";
const social = [
    {
        icon: <FaGithub></FaGithub>,
        path: "https://github.com/rizowan-rafi",
    },
    {
        icon: <FaLinkedin></FaLinkedin>,
        path: "https://www.linkedin.com/in/rizowan-mahmud-rafi-b92800317",
    },
    {
        icon: <FaFacebook></FaFacebook>,
        path: "https://www.facebook.com/rizowan.mahmud.rafi",
    },
    {
        icon: <FaWhatsapp></FaWhatsapp>,
        path: "https://wa.link/6ebfnj",
    },
];
const Socials = ({containerStyles,iconStyles}) => {
    return <div className={containerStyles}>
        {social.map((social, idx) => {
            return <Link target="_blank" key={idx} href={social.path} className={iconStyles}>{ social.icon}</Link>
        })}
    </div>;
};

export default Socials;
