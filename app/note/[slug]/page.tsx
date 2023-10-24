import { InferGetStaticPropsType } from "next";

import { BlocksRenderer } from "@/notion/components/NotionRenderer";
import { getNote } from "@/notion/getNote";
import { getNotes } from "@/notion/getNotes";

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
