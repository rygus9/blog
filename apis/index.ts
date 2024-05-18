import axios from "axios";

export const client = axios.create({
  baseURL: "http://localhost:4040",
  withCredentials: true,
});

export const getUserMe = () => client.get("/api/v1/user/me");

export const getLoginUrl = (provider: "kakao" | "naver") =>
  `http://localhost:4040/api/v1/auth/oauth2/${provider}`;
