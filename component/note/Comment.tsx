"use client";

import { useQuery } from "@tanstack/react-query";
import { ReactNode, useState } from "react";

import { getComments, getLoginUrl, getUserMe, postComment } from "@/apis";

import { Button } from "../common/Button";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../common/Dialog";

interface CommonProps {
  pageId: string;
}

export const Comment = ({ pageId }: CommonProps) => {
  return (
    <div>
      <Input pageId={pageId} />
      <Content pageId={pageId} />
    </div>
  );
};

const useComment = (pageId: string) => {
  return useQuery({
    queryKey: ["comment", pageId],
    queryFn: getComments(pageId),
  });
};

const Input = ({ pageId }: CommonProps) => {
  const { isError } = useQuery({
    queryKey: ["authorize"],
    queryFn: getUserMe,
  });

  const { refetch } = useComment(pageId);

  const [content, setContent] = useState("");
  const [name, setName] = useState("");

  const [isPosting, setIsPosting] = useState(false);

  const onSubmit = async () => {
    setIsPosting(true);
    await postComment({ content, name, pageId });
    setIsPosting(false);
    refetch();
  };

  return (
    <div>
      <h2 className="text-lg font-bold pt-4 pb-2">Comment</h2>
      <textarea
        className="flex h-28 w-full rounded-md border border-contrast-500 p-3 text-sm shadow-sm placeholder:text-contrast-500 focus-visible:outline-none focus:ring-1 focus:ring-contrast-500 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
        placeholder="댓글을 입력하세요."
        spellCheck="false"
        disabled={isError}
        value={content}
        onChange={(e) => setContent(e.currentTarget.value)}
      />
      <div className="flex items-center justify-between pt-2">
        <div className="flex justify-start items-center gap-3">
          <span>닉네임</span>
          <input
            placeholder="닉네임을 입력하세요."
            className="py-2 px-2 border border-contrast-500 text-sm rounded-md placeholder:text-contrast-500 focus:outline-contrast-500 disabled:cursor-not-allowed disabled:opacity-50"
            disabled={isError}
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
          />
        </div>
        {isError ? (
          <LoginButton>
            <Button size="sm">로그인 하기</Button>
          </LoginButton>
        ) : (
          <Button size="sm" onClick={onSubmit} disabled={!content || isPosting}>
            {isPosting ? "댓글 등록중" : "댓글 입력"}
          </Button>
        )}
      </div>
    </div>
  );
};

const LoginButton = ({ children }: { children: ReactNode }) => {
  const handleLogin = (provider: "kakao" | "naver") => () => {
    const loginUrl = getLoginUrl(provider);
    localStorage.setItem("redirect", window.location.pathname);
    return window.location.replace(loginUrl);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger>{children}</AlertDialogTrigger>
      <AlertDialogContent className="w-96">
        <AlertDialogHeader>
          <AlertDialogTitle>로그인 선택하기</AlertDialogTitle>
          <AlertDialogDescription className="py-4 space-y-2">
            <Button size="lg" className="w-full" onClick={handleLogin("kakao")}>
              카카오 로그인
            </Button>
            <Button size="lg" className="w-full" onClick={handleLogin("naver")}>
              네이버 로그인
            </Button>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>취소</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

const Content = ({ pageId }: CommonProps) => {
  const { data, isLoading } = useComment(pageId);

  return (
    <div className="divide-y divide-dashed divide-contrast-500 border-y border-y-contrast-500 mt-4 min-h-[100px]">
      {data && data.comments.length !== 0 ? (
        data.comments.map(({ commentId, name, content }) => (
          <div key={commentId} className="py-2 px-2 flex items-start gap-2">
            <h3 className="w-24 text-contrast-500 truncate">
              {name || "익명"}
            </h3>
            <div className="min-h-[48px]">{content}</div>
          </div>
        ))
      ) : (
        <div className="flex items-center justify-center h-[100px] text-lg text-contrast-500">
          {isLoading ? "로딩중" : "댓글이 없습니다!"}
        </div>
      )}
    </div>
  );
};
