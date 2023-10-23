import { getRecords } from "@/common/notion/getRecords";

import { Divider } from "../../common/components/Divider";
import { Title } from "../_feature/components/Title";
import { RecordCard } from "./_feature/components/RecordCard";

const Page = async () => {
  const records = await getRecords();

  return (
    <main className="w-full min-h-[500px]">
      <Title title="나의 일기" showHomeLink>
        <p className="mt-4">개인적인 생각, 고민 등을 가볍게 적어두었습니다.</p>
      </Title>
      <Divider />

      <div className="divide-y divide-back-em">
        {records.map((props) => (
          <RecordCard {...props} key={props.id} />
        ))}
      </div>
    </main>
  );
};

export default Page;
