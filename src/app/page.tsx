import { PostInfo } from "@/common/interfaces";
import { logger } from "@/common/logger";
import { Banner } from "@/components/banner";
import { EmptyBanner } from "@/components/empty";
import { ErrorBanner } from "@/components/error";
import { PostCard } from "@/components/postCard";
import { getPostList } from "@/services/postService";

export default async function Home() {
  let postList: Array<PostInfo> = [];
  let fetchError: boolean = false;

  try {
    postList = await getPostList();
  } catch (error) {
    fetchError = true;
    logger.error(error);
  }

  const hasPosts = postList.length > 0;

  return (
    <main>
      <Banner />
      {fetchError && <ErrorBanner />}
      {!fetchError && !hasPosts && <EmptyBanner message="No posts yet :)" />}
      {!fetchError && hasPosts && (
        <div className="m-auto sm:w-2/3 bg-zinc-700">
          {postList.map((post, index) => (
            <div key={index}>
              <PostCard post={post} />
              {index !== postList.length - 1 &&<div className="border-b border-zinc-800" />}
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
