import { DarkToggle } from "./_common/components/DarkToggle";

const Page = () => {
  return (
    <main className="pt-16">
      <div className="w-[800px] m-auto pb-10">
        <DarkToggle />
      </div>
      <p className="font-noto text-2xl w-[800px] m-auto">
        안녕하세요 반갑습니다. hello
      </p>
      <p className="font-blackHan text-3xl w-[800px] m-auto">
        안녕하세요 반갑습니다. hello
      </p>
      <p className="font-arita text-2xl w-[800px] m-auto">
        안녕하세요 반갑습니다. hello
      </p>
      <p className="font-arita text-2xl w-[800px] m-auto font-extrabold">
        안녕하세요 반갑습니다. hello
      </p>
    </main>
  );
};

export default Page;
