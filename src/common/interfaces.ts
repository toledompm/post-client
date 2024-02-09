export type PostInfo = {
  title: string;
  published: boolean;
  tags: string[];
  id: string;
  date: Date;
  slug: string;
  tweet: string;
  imageUrl: string;
  imageAlt: string;
};

export type PostContentHeading = {
  heading: string;
};

export type PostContentParagraph = {
  paragraph: (string | { url: string; text: string })[];
};

export type PostContentImage = {
  image: {
    url: string;
    caption: string;
  };
};

export type PostContent =
  | PostContentHeading
  | PostContentParagraph
  | PostContentImage;

export function isPostContentHeading(
  content: PostContent,
): content is PostContentHeading {
  return Object.keys(content).includes("heading");
}

export function isPostContentParagraph(
  content: PostContent,
): content is PostContentParagraph {
  return Object.keys(content).includes("paragraph");
}

export function isPostContentImage(
  content: PostContent,
): content is PostContentImage {
  return Object.keys(content).includes("image");
}
