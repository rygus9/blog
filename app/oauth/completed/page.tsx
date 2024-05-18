"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    const redirect = window.localStorage.getItem("redirect");
    if (redirect) {
      window.localStorage.removeItem("redirect");
      router.replace(redirect);
    }
  });

  return <div />;
};

export default Page;
