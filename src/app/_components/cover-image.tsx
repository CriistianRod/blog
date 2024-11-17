import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  slug?: string;
  preview?: boolean;
};

const CoverImage = ({ title, src, slug, preview }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn(`shadow-sm rounded-lg ${preview ? "max-h-48" : "max-h-96"} object-cover`, {
        "hover:shadow-lg transition-shadow duration-200": slug,
      })}
      width={800}
      height={420}
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
