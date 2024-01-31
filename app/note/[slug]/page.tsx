import { InferGetStaticPropsType } from "next";

import { BlockRenderer } from "@/notion/component/BlockRenderer";
import { getChildrenBlock } from "@/notion/component/BlocksRenderer";
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
  const blocks = await getChildrenBlock({ block_id: String(note.notionId) });
  return (
    <div>
      {blocks.map((block) => (
        <BlockRenderer block={block} />
      ))}
    </div>
  );
};

export default Page;
