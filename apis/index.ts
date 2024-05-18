import axios from "axios";

export const client = axios.create({
  baseURL: "http://localhost:4040",
});

export const getUserMe = () => client.get("/api/v1/user/me");

interface GetLoginUrlProps {
  provider: "kakao" | "naver";
}
export const getLoginUrl = ({ provider }: GetLoginUrlProps) =>
  `http://localhost:4040/api/v1/auth/oauth2/${provider}`;
