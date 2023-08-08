import {
  PostContent,
  PostContentHeading,
  PostContentParagraph,
  isPostContentHeading,
} from "@/common/interfaces";
import { logger } from "@/common/logger";
import { Banner } from "@/components/banner";
import { EmptyBanner } from "@/components/empty";
import { ErrorBanner } from "@/components/error";
import { getPostData } from "@/utils/postService";

export default async function PostsPage({
  params,
}: {
  params: { slug: string; postData: string };
}) {
  let postContent: Array<PostContent> = [];
  let fetchError: boolean = false;

  try {
    postContent = await getPostData(params.slug);
  } catch (error) {
    fetchError = true;
    logger.error(error);
  }

  const hasContent = postContent.length > 0;

  return (
    <main className="font-mono text-white">
      <Banner backButtonEnabled={true} />
      {fetchError && <ErrorBanner />}
      {!fetchError && !hasContent && (
        <EmptyBanner message="No content yet :)" />
      )}
      {!fetchError && hasContent && (
        <div className="m-auto sm:w-2/3 bg-zinc-700">
          <div className="py-4 px-8">
            {postContent.map((content, index) => (
              <PostContent key={index} content={content} />
            ))}
          </div>
        </div>
      )}
    </main>
  );
}

function PostContent({ content }: { content: PostContent }) {
  if (isPostContentHeading(content)) {
    return <PostHeading heading={content} />;
  }

  return <PostParagraph paragraph={content} />;
}

function PostParagraph({ paragraph }: { paragraph: PostContentParagraph }) {
  return (
    <div className="mb-4">
      <p>{paragraph.paragraph}</p>
    </div>
  );
}

function PostHeading({ heading }: { heading: PostContentHeading }) {
  return (
    <div className="mb-4 text-xl">
      <h3>{heading.heading}</h3>
    </div>
  );
}
