import Container from "@/app/_components/container";
import SocialMedia from "./social-media"
import { EXAMPLE_PATH } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800">
      <Container>
        <div className="py-10 flex flex-col lg:flex-row items-center w-full">
          <SocialMedia />
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
