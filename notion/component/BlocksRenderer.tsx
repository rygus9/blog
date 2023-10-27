import {
  BlockObjectResponse,
  PartialBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

import { notion } from "..";
import { BlockRenderer } from "./BlockRenderer";

export const BlocksRenderer = async ({ block_id }: { block_id: string }) => {
  let next_cursor;
  const blocks: (BlockObjectResponse | PartialBlockObjectResponse)[] = [];
  do {
    // eslint-disable-next-line no-await-in-loop
    const result = await notion.blocks.children.list({
      block_id,
      start_cursor: next_cursor ?? undefined,
    });
    blocks.push(...result.results);
  } while (next_cursor);

  return (
    <>
      {blocks.map((block) => (
        <BlockRenderer block={block as BlockObjectResponse} />
      ))}
    </>
  );
};
