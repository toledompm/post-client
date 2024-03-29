import type { PostInfo } from "@/common/interfaces";
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
        <div className="rounded-xl mb-2 overflow-hidden relative pb-40 sm:pb-80 bg-white">
          <Image
            fill
            src={post.imageUrl}
            alt={post.imageAlt}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="flex">{post.tags.map((tag) => TagBubble({ tag }))}</div>
      </div>
    </Link>
  );
}

function TagBubble({ tag }: { tag: string }) {
  return (
    <div className="text-gray-400 mr-2 text-sm my-2 hover:underline">
      #{tag}
    </div>
  );
}
