import { getCategories } from "@/notion/server/getCategories";
import { getNotes } from "@/notion/server/getNotes";

import { Divider } from "../../component/common/Divider";
import { Title } from "../../component/common/Title";
import { CategoryNav } from "../../component/note/CategoryNav";
import { NoteList } from "../../component/note/NoteList";

const Page = async () => {
  const categorys = await getCategories();

  const notes = (await getNotes()).map(({ notionId, ...props }) => ({
    ...props,
  }));

  return (
    <main className="w-full min-h-[500px]">
      <Title title="정리 노트" showHomeLink>
        <p className="mt-4">
          공부 했던 내용이나 진행했던 프로젝트 등을 정리해두는 공간입니다.
        </p>
      </Title>
      <Divider />
      <section className="relative">
        <CategoryNav categorys={categorys} />
        <hr className="border-contrast-200 my-8 lg:hidden" />
        <NoteList notes={notes} />
      </section>
    </main>
  );
};

export default Page;
