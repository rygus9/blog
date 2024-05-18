"use client";

import { useQuery } from "@tanstack/react-query";
import { ReactNode } from "react";

import { getUserMe } from "@/apis";

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

export const Comment = () => {
  return (
    <div>
      <Input />
    </div>
  );
};

const Input = () => {
  const { isError } = useQuery({
    queryKey: ["authorize"],
    queryFn: getUserMe,
  });

  return (
    <div>
      <h2 className="text-lg font-bold pt-4 pb-2">Comment</h2>
      <textarea
        className="flex h-28 w-full rounded-md border border-contrast-500 bg-white p-3 text-sm shadow-sm placeholder:text-contrast-300 focus-visible:outline-none focus:ring-1 focus:ring-contrast-500 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
        placeholder="댓글을 입력하세요."
        spellCheck="false"
        disabled={isError}
      />
      <div className="flex items-center justify-between pt-2">
        <div className="flex justify-start items-center gap-3">
          <span>닉네임 </span>
          <input
            placeholder="닉네임을 입력하세요."
            className="py-2 px-2 border border-contrast-500 text-sm rounded-md placeholder:text-contrast-300 focus:outline-contrast-500 disabled:cursor-not-allowed disabled:opacity-50"
            disabled={isError}
          />
        </div>
        {isError ? (
          <LoginButton>
            <Button size="sm">로그인 하기</Button>
          </LoginButton>
        ) : (
          <Button size="sm">댓글 입력</Button>
        )}
      </div>
      <Content />
    </div>
  );
};

const LoginButton = ({ children }: { children: ReactNode }) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>로그인 선택하기</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

const comments = [
  { id: 1, name: "gugu", content: "안녕하세요!" },
  { id: 2, name: "", content: "안녕하세요!" },
  { id: 3, name: "kuku", content: "안녕하세요!" },
];

const Content = () => (
  <div className="divide-y divide-dashed border-y border-y-contrast-500 mt-4">
    {comments.map(({ id, name, content }) => (
      <div key={id} className="py-2 px-2 flex items-start gap-2">
        <h3 className="w-24 text-contrast-500 text-ellipsis">
          {name || "익명"}
        </h3>
        <div className="min-h-[48px]">{content}</div>
      </div>
    ))}
  </div>
);
