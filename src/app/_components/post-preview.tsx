import { type Author } from "@/interfaces/author";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <div className="rounded hover:bg-slate-800 hover:cursor-pointer hover:transition-colors hover:bg-gradient-radial hover:from-slate-800 hover:from-10% hover:to-slate-900 hover:to-50%">
    <div className="mb-2">
      <CoverImage slug={slug} title={title} src={coverImage} preview={true} />
    </div>
      <h3 className="text-2xl mb-1 leading-snug dark:text-white">
        <Link href={`/posts/${slug}`}>
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-2">
        <DateFormatter dateString={date} />
      </div>
      <p className=" leading-relaxed mb-2 italic">"{excerpt}"</p>
      {/* <Avatar name={author.name} picture={author.picture} /> */}
    </div>
  );
}
