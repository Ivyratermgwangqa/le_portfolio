"use client";

import PropTypes from "prop-types";
import Image from "next/image";
import Contact from "./Contact";
interface FooterProps {
    devDotTo?: string;
    email?: string;
    gitHub?: string;
    instagram?: string;
    linkedIn?: string;
    medium?: string;
    name?: string;
    twitter?: string;
    youTube?: string;
    facebook?: string;
    whatsapp?: string;
}

const Footer: React.FC<FooterProps> = ({
    devDotTo,
    email = "",
    gitHub,
    instagram,
    linkedIn,
    medium,
    name = "Your Name",
    twitter,
    youTube,
    facebook,
    whatsapp,
}) => {
    return (
        <footer
            id="footer"
            style={{
                display: "flex",
                flexDirection: "column",
                borderTop: "1px solid #02e0fd",
                alignItems: "center",
                gap: "2.5rem",
                padding: "5rem 0 3rem",
                backgroundColor: "#000000",
                width: "100vw",
                textAlign: "center",
                animation: "fadeIn 1s ease-in-out",
            }}
        >
            {/* <Contact email={email} /> */}

            <p>Follow me on social media:</p>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "2.5rem",
                    flexWrap: "wrap",
                }}
            >
                {email && (
                    <a href={`mailto:${email}`}>
                        <Image
                            src="/images/socials/envelope.svg"
                            alt="email"
                            width={24}
                            height={24}
                            style={{ transition: "transform 0.3s" }}
                        />
                    </a>
                )}
                {devDotTo && (
                    <a href={`https://dev.to/${devDotTo}`} target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/images/socials/medium.svg"
                            alt="Dev.to"
                            width={24}
                            height={24}
                            style={{ transition: "transform 0.3s" }}
                        />
                    </a>
                )}
                {gitHub && (
                    <a href={`https://github.com/${gitHub}`} target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/images/socials/github.svg"
                            alt="GitHub"
                            width={24}
                            height={24}
                            style={{ transition: "transform 0.3s" }}
                        />
                    </a>
                )}
                {instagram && (
                    <a href={`https://www.instagram.com/${instagram}`} target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/images/socials/instagram.svg"
                            alt="Instagram"
                            width={24}
                            height={24}
                            style={{ transition: "transform 0.3s" }}
                        />
                    </a>
                )}
                {linkedIn && (
                    <a href={`https://www.linkedin.com/in/${linkedIn}`} target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/images/socials/linkedin.svg"
                            alt="LinkedIn"
                            width={24}
                            height={24}
                            style={{ transition: "transform 0.3s" }}
                        />
                    </a>
                )}
                {medium && (
                    <a href={`https://medium.com/@${medium}`} target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/images/socials/medium.svg"
                            alt="Medium"
                            width={24}
                            height={24}
                            style={{ transition: "transform 0.3s" }}
                        />
                    </a>
                )}
                {twitter && (
                    <a href={`https://twitter.com/${twitter}`} target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/images/socials/twitter.svg"
                            alt="Twitter"
                            width={24}
                            height={24}
                            style={{ transition: "transform 0.3s" }}
                        />
                    </a>
                )}
                {youTube && (
                    <a href={`https://www.youtube.com/c/${youTube}`} target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/images/socials/youtube.svg"
                            alt="YouTube"
                            width={24}
                            height={24}
                            style={{ transition: "transform 0.3s" }}
                        />
                    </a>
                )}
                {facebook && (
                    <a href={`https://www.facebook.com/${facebook}`} target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/images/socials/facebook.svg"
                            alt="Facebook"
                            width={24}
                            height={24}
                            style={{ transition: "transform 0.3s" }}
                        />
                    </a>
                )}
                {whatsapp && (
                    <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/images/socials/whatsapp.svg"
                            alt="WhatsApp"
                            width={24}
                            height={24}
                            style={{ transition: "transform 0.3s" }}
                        />
                    </a>
                )}
            </div>
            <p className="small" style={{ marginTop: "2rem", color: "white" }}>
                &copy; 2024 {name}. All rights reserved.
            </p>
        </footer>
    );
};

Footer.propTypes = {
    devDotTo: PropTypes.string,
    email: PropTypes.string,
    gitHub: PropTypes.string,
    instagram: PropTypes.string,
    linkedIn: PropTypes.string,
    medium: PropTypes.string,
    name: PropTypes.string,
    twitter: PropTypes.string,
    youTube: PropTypes.string,
    facebook: PropTypes.string,
    whatsapp: PropTypes.string,
};

export default Footer;
