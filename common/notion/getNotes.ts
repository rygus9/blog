import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { memoize } from "lodash-es";

import { notion } from ".";
import { plainText } from "./plainText";

export interface NoteMeta {
  notionId: string;
  id: number;
  short: string;
  created: string;
  slug: string;
  category: string;
  title: string;
}

export const getNotes = memoize(async () => {
  const notes = [];
  let next_cursor;

  do {
    // eslint-disable-next-line no-await-in-loop
    const result = await notion.databases.query({
      database_id: process.env.BLOG_NOTION_DB_ID,
      start_cursor: next_cursor ?? undefined,
    });
    notes.push(...result.results);
    next_cursor = result.next_cursor;
  } while (next_cursor);

  return (notes as PageObjectResponse[]).map(({ id: notionId, properties }) => {
    const { short, created, category, slug, title, id } = properties;

    return {
      notionId,
      short: short.type === "rich_text" ? plainText(short.rich_text) : "",
      created: created.type === "date" ? (created.date?.start as string) : "",
      category:
        category.type === "select" ? (category.select?.name as string) : "",
      slug: slug.type === "rich_text" ? plainText(slug.rich_text) : "",
      title: title.type === "title" ? plainText(title.title) : "",
      id: id.type === "unique_id" ? (id.unique_id.number as number) : 0,
    };
  });
});
