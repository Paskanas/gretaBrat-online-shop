import SocialMediaLink from "./Links/SocialMediaLink";

const Footer = () => {
    return (
        <div className="flex justify-center gap-16 mt-5 mb-10 text-xl">
            <SocialMediaLink socialMedia="instagram" />
            <SocialMediaLink socialMedia="twitter" />
            <SocialMediaLink socialMedia="tiktok" />
        </div>
    );
};

export default Footer;
