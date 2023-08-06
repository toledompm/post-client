import { PostContent, PostInfo } from "@/common/interfaces";
import { config } from "@/config/config";
import axios from "axios";

const baseURL = config().api.url;

const axiosInstance = axios.create({
  baseURL,
});

export async function getPostList(): Promise<Array<PostInfo>> {
  const response = await axiosInstance.get<Array<PostInfo>>("/posts");
  return response.data;
}

export async function getPostData(slug: string): Promise<Array<PostContent>> {
  const response = await axiosInstance.get<Array<PostContent>>(
    `/posts/${slug}`,
  );
  return response.data;
}
