import { memoize } from "lodash-es";

import { notion } from ".";

export const getCategories = memoize(async () => {
  const {
    properties: { category },
  } = await notion.databases.retrieve({
    database_id: process.env.BLOG_NOTION_DB_ID,
  });

  return category.type === "select"
    ? category.select.options.map(({ name }) => name)
    : [];
});
