import type { PostContent, PostInfo } from "@/common/interfaces";
import { config } from "@/config/config";

const baseURL = config().api.url;

async function request<T>(url: string): Promise<T> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = (await response.json()) as T;

  return data;
}

export async function getPostList(): Promise<Array<PostInfo>> {
  return request<Array<PostInfo>>(`${baseURL}/api/posts`);
}

export async function getPostData(slug: string): Promise<Array<PostContent>> {
  return request<Array<PostContent>>(`${baseURL}/api/posts/${slug}`);
}
