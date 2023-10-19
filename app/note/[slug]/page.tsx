import { InferGetStaticPropsType } from "next";

export const generateStaticParams = async () => {
  return [{ slug: "notion-api" }, { slug: "frontend-build" }];
};

const Page = async ({
  params: { slug },
}: InferGetStaticPropsType<typeof generateStaticParams>) => {
  return <div>{slug}</div>;
};

export default Page;
