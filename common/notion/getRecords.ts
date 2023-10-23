import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { memoize } from "lodash-es";

import { notion } from ".";
import { plainText } from "./util/plainText";

export interface RecordMeta {
  id: number;
  title: string;
  created: string;
  content: string;
}

export const getRecords = memoize(async (): Promise<RecordMeta[]> => {
  const records = [];
  let next_cursor;

  do {
    // eslint-disable-next-line no-await-in-loop
    const result = await notion.databases.query({
      database_id: process.env.RECORD_NOTION_DB_ID,
      start_cursor: next_cursor ?? undefined,
    });
    records.push(...result.results);
    next_cursor = result.next_cursor;
  } while (next_cursor);

  return (records as PageObjectResponse[]).map(({ properties }) => {
    const { created, title, id, content } = properties;
    return {
      id: id.type === "unique_id" ? (id.unique_id.number as number) : 0,
      title: title.type === "title" ? plainText(title.title) : "",
      created: created.type === "date" ? (created.date?.start as string) : "",
      content: content.type === "rich_text" ? plainText(content.rich_text) : "",
    };
  });
});
