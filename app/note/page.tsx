import { Divider } from "../../common/components/Divider";
import { categorys, notes } from "../../common/mock";
import { Title } from "../_feature/components/Title";
import { CategoryNav } from "./_feature/components/CategoryNav";
import { NoteList } from "./_feature/components/NoteList";

const Page = () => {
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
