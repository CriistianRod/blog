import InstagramIcon from './social-media-icons/instagram-icon';
import GithubIcon from './social-media-icons/github-icon';
import LinkedInIcon from './social-media-icons/linkedin-icon';

export function SocialMedia() {
    return (
        <div className="flex flex-row items-center justify-around w-full">
            <a href="https://www.linkedin.com/in/cristian-rodr%C3%ADguez-713bb3173/" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon />
            </a>
            <a href="https://github.com/CriistianRod" target="_blank" rel="noopener noreferrer">
                <GithubIcon />
            </a>
            <a href="https://instagram.com/CriistiianRod" target="_blank" rel="noopener noreferrer">
                <InstagramIcon />
            </a>
        </div>
    )
}

export default SocialMedia