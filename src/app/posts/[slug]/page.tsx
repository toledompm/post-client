import {
  PostContent,
  PostContentHeading,
  PostContentImage,
  PostContentParagraph,
  isPostContentHeading,
  isPostContentImage,
  isPostContentParagraph,
} from "@/common/interfaces";
import { logger } from "@/common/logger";
import { Banner } from "@/components/banner";
import Image from "next/image";
import { EmptyBanner } from "@/components/empty";
import { ErrorBanner } from "@/components/error";
import { buildImageUri } from '@/utils/helpers';
import { getPostData } from "@/utils/postService";

export const revalidate = 0;

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
  } else if (isPostContentParagraph(content)) {
    return <PostParagraph paragraph={content} />;
  } else if (isPostContentImage(content)) {
    return <PostImage content={content} />;
  } else {
    logger.error(`Unknown post content type: ${content}`);
    return <></>;
  }
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

function PostImage({ content: { image } }: { content: PostContentImage }) {
  const imageSrc = buildImageUri(image.url);

  return (
    <div className="my-4 pb-40 sm:pb-80 md:pb-120 lg:pb-160 relative overflow-hidden">
      <Image fill src={imageSrc} alt={image.caption} style={{ objectFit: "cover" }} />
    </div>
  );
}
