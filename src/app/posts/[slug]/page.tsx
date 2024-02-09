import type {
  PostContent,
  PostContentHeading,
  PostContentImage,
  PostContentParagraph,
} from "@/common/interfaces";
import {
  isPostContentHeading,
  isPostContentImage,
  isPostContentParagraph,
  isPostContentParagraphLink,
} from "@/common/interfaces";
import { logger } from "@/common/logger";
import { Banner } from "@/components/banner";
import { EmptyBanner } from "@/components/empty";
import { ErrorBanner } from "@/components/error";
import { getPostData } from "@/utils/postService";
import Image from "next/image";

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

function PostParagraph({
  paragraph: { paragraph },
}: {
  paragraph: PostContentParagraph;
}) {
  return (
    <div className="mb-4">
      <p>
        {paragraph.map((content, index) => {
          if (isPostContentParagraphLink(content)) {
            return (
              <ParagraphLink
                key={index}
                url={content.url}
                text={content.text}
              />
            );
          }
          return content;
        })}
      </p>
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
  return (
    <div className="my-4 pb-40 sm:pb-80 lg:pb-[500px] relative overflow-hidden bg-white">
      <Image
        fill
        src={image.url}
        alt={image.caption}
        style={{ objectFit: "contain" }}
      />
    </div>
  );
}

function ParagraphLink({ url, text }: { url: string; text: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="font-bold text-gray-300 underline underline-offset-2"
    >
      {text}
    </a>
  );
}
