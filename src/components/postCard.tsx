import { PostInfo } from "@/common/interfaces";
import Image from "next/image";
import Link from "next/link";

export function PostCard({ post }: { post: PostInfo }) {
  return (
    <Link href={`/posts/${post.id}`} className="cursor-pointer">
      <div className="py-4 px-8">
        <div className="mb-4 text-xl hover:underline">
          <h3>{post.title}</h3>
        </div>
        <div className="mb-4">
          <p>{post.tweet}</p>
        </div>
        <PostImage url={post.imageUrl} alt={post.imageAlt} />
        <div className="flex">{post.tags.map((tag) => TagBubble({ tag }))}</div>
      </div>
    </Link>
  );
}

function PostImage({ url, alt }: { url: string; alt: string }) {
  return (
    <div className="rounded-xl mb-2 pb-40 sm:pb-80 md:pb-120 lg:pb-160 relative overflow-hidden">
      <Image fill src={url} alt={alt} style={{ objectFit: "cover" }} />
    </div>
  );
}

function TagBubble({ tag }: { tag: string }) {
  return (
    <div className="text-gray-400 mr-2 text-sm my-2 hover:underline">
      #{tag}
    </div>
  );
}
