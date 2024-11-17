import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";

type Props = {
  posts: Post[];
};

export function MoreStories({ posts }: Props) {
  return (
    <section>
      <h2 className="mb-4 text-5xl md:text-7xl font-bold tracking-tighter leading-tight dark:text-white">
        Pienso que
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-16 lg:gap-x-16 gap-y-10 md:gap-y-16 mb-16">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
