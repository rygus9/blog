import { InferGetStaticPropsType } from "next";

import { BlocksRenderer } from "@/notion/component/BlocksRenderer";
import { getNote } from "@/notion/server/getNote";
import { getNotes } from "@/notion/server/getNotes";

export const generateStaticParams = async () => {
  const notes = await getNotes();
  return notes.map(({ slug }) => ({ slug }));
};

const Page = async ({
  params: { slug },
}: InferGetStaticPropsType<typeof generateStaticParams>) => {
  const note = await getNote(slug);
  return (
    <div>
      <BlocksRenderer block_id={note.notionId} />
    </div>
  );
};

export default Page;
