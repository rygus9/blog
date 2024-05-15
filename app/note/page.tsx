import { CategoryNav } from "@/component/note/CategoryNav";
import { getCategories } from "@/notion/server/getCategories";
import { getNotes } from "@/notion/server/getNotes";

import { Title } from "../../component/common/Title";
import { NoteList } from "../../component/note/NoteList";

const Page = async () => {
  const notes = (await getNotes()).map(({ notionId, ...props }) => ({
    ...props,
  }));

  const categoryInfos = (await getCategories()).map((category) => {
    return {
      category,
      pages: notes.filter(
        ({ category: noteCategory }) => noteCategory === category,
      ).length,
    };
  });

  return (
    <main className="w-full min-h-[500px]">
      <Title title="정리 노트" showHomeLink />
      <CategoryNav categoryInfos={categoryInfos} />
      <hr className="border-contrast-300 mt-8 mb-4" />
      <section className="relative">
        <NoteList notes={notes} />
      </section>
    </main>
  );
};

export default Page;
