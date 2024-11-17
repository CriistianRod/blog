import Container from "@/app/_components/container";
import SocialMedia from "./social-media"
import { EXAMPLE_PATH } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-neutral-50 dark:bg-slate-900">
      <Container>
        <div className="py-10 flex flex-col lg:flex-row items-center justify-center">
          <SocialMedia />
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
