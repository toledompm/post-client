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
  paragraph: string;
};

export type PostContentImage = {
  image: {
    url: string;
    caption: string;
  }
}

export type PostContent = PostContentHeading | PostContentParagraph | PostContentImage;

export function isPostContentHeading(
  content: PostContent,
): content is PostContentHeading {
  if (Object.keys(content).includes("heading")) {
    return true;
  }
  return false;
}

export function isPostContentParagraph(
  content: PostContent,
): content is PostContentParagraph {
  if (Object.keys(content).includes("paragraph")) {
    return true;
  }
  return false;
}

export function isPostContentImage(
  content: PostContent,
): content is PostContentImage {
  if (Object.keys(content).includes("image")) {
    return true;
  }
  return false;
}
