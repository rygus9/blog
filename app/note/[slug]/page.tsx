import { InferGetStaticPropsType } from "next";

import { BlocksRenderer } from "@/common/notion/components/NotionRenderer";
import { getNote } from "@/common/notion/getNote";
import { getNotes } from "@/common/notion/getNotes";

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
