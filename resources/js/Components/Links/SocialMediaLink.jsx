import { useState, useEffect } from "react";
import {
    faInstagram,
    faTiktok,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialMediaLink = ({ socialMedia }) => {
    const [href, setHref] = useState("");
    const [icon, setIcon] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        if (socialMedia === "instagram") {
            setHref("https://www.instagram.com/gretabrat/");
            setIcon(faInstagram);
        } else if (socialMedia === "tiktok") {
            setHref("https://www.tiktok.com/@gretabrat?");
            setIcon(faTiktok);
        } else if (socialMedia === "twitter") {
            setHref("https://twitter.com/gretabrat_");
            setIcon(faTwitter);
        }
        setIsLoaded(true);
    }, [socialMedia]);
    if (!isLoaded) {
        return null; // Render nothing until the component is loaded
    }
    return (
        <a href={href}>
            <FontAwesomeIcon icon={icon} />
        </a>
    );
};

export default SocialMediaLink;
