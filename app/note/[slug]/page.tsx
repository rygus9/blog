import { CalendarIcon } from "@heroicons/react/16/solid";
import { InferGetStaticPropsType } from "next";

import { Comment } from "@/component/note/Comment";
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
      <header className="pb-4">
        <h1 className="text-3xl font-bold">{note.title}</h1>
        <span className="mt-4 inline-flex flex-wrap gap-1 items-center text-sm text-contrast-500 align-middle">
          <CalendarIcon className="w-4 h-4" />
          <span className="font-arita">{note.created}</span>
        </span>
      </header>
      <div>
        {blocks.map((block) => (
          <BlockRenderer block={block} />
        ))}
      </div>
      <Comment pageId={slug} />
    </div>
  );
};

export default Page;
