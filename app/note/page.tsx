import { getCategories } from "@/notion/server/getCategories";
import { getNotes } from "@/notion/server/getNotes";

import { Divider } from "../../components/common/Divider";
import { CategoryNav } from "../../components/note/CategoryNav";
import { NoteList } from "../../components/note/NoteList";
import { Title } from "../../components/Title";

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
        <hr className="border-back-em my-8 lg:hidden" />
        <NoteList notes={notes} />
      </section>
    </main>
  );
};

export default Page;
