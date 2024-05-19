import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export const client = axios.create({
  baseURL: "http://localhost:4040",
  withCredentials: true,
  headers: {
    "Content-Type": `application/json`,
  },
});

const onSuccess = (response: AxiosResponse) => response?.data ?? response;
client.interceptors.response.use(onSuccess);

const request = <T>(options: AxiosRequestConfig): Promise<T> =>
  client.request(options);

export const getUserMe = () => client.get("/api/v1/user/me");

export const getLoginUrl = (provider: "kakao" | "naver") =>
  `http://localhost:4040/api/v1/auth/oauth2/${provider}`;

interface PostCommentProps {
  content: string;
  name: string | undefined;
  pageId: string;
}

interface Comment {
  commentId: number;
  pageId: string;
  name: string | undefined;
  content: string;
}

export const postComment = (data: PostCommentProps) =>
  request({
    method: "post",
    url: "/api/v1/comment",
    data,
  });

export const getComments = (pageId: string) => () =>
  request<{ comments: Comment[] }>({
    method: "get",
    url: "/api/v1/comment",
    params: { pageId },
  });
