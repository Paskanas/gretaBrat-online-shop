import {
    faInstagram,
    faTiktok,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <div className="flex justify-center gap-5 mt-1 mb-10">
            <a href="https://www.instagram.com/" className="p-3">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://twitter.com/gretabrat_" className="p-3">
                <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.tiktok.com/@gretabrat?" className="p-3">
                <FontAwesomeIcon icon={faTiktok} />
            </a>
        </div>
    );
};

export default Footer;
