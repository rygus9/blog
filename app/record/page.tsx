import { getRecords } from "@/notion/server/getRecords";

import { Title } from "../../component/common/Title";
import { RecordCard } from "../../component/record/RecordCard";

const Page = async () => {
  const records = await getRecords();

  return (
    <main className="w-full min-h-[500px]">
      <Title title="나의 일기" showHomeLink />
      <hr className="border-contrast-300 mt-8" />
      <div className="divide-y divide-contrast-200">
        {records.map((props) => (
          <RecordCard {...props} key={props.id} />
        ))}
      </div>
    </main>
  );
};

export default Page;
