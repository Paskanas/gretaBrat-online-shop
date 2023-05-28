import {
    faInstagram,
    faTiktok,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <div className="flex justify-center gap-16 mt-5 mb-10 text-xl">
            <a href="https://www.instagram.com/gretabrat/">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://twitter.com/gretabrat_">
                <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.tiktok.com/@gretabrat?">
                <FontAwesomeIcon icon={faTiktok} />
            </a>
        </div>
    );
};

export default Footer;
