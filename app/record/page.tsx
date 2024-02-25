import { getRecords } from "@/notion/server/getRecords";

import { Divider } from "../../component/common/Divider";
import { Title } from "../../component/common/Title";
import { RecordCard } from "../../component/record/RecordCard";

const Page = async () => {
  const records = await getRecords();

  return (
    <main className="w-full min-h-[500px]">
      <Title title="나의 일기" showHomeLink />
      <Divider />
      <div className="divide-y divide-contrast-200">
        {records.map((props) => (
          <RecordCard {...props} key={props.id} />
        ))}
      </div>
    </main>
  );
};

export default Page;
