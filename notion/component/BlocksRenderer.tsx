import {
  BlockObjectResponse,
  PartialBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

import { notion } from "..";
import { BlockObject, BlockRenderer } from "./BlockRenderer";

export const BlocksRenderer = async ({ block_id }: { block_id: string }) => {
  let next_cursor;
  const blocksResponse: (BlockObjectResponse | PartialBlockObjectResponse)[] =
    [];
  do {
    // eslint-disable-next-line no-await-in-loop
    const result = await notion.blocks.children.list({
      block_id,
      start_cursor: next_cursor ?? undefined,
    });
    blocksResponse.push(...result.results);
  } while (next_cursor);

  const blocks = generateListBlock(blocksResponse as BlockObjectResponse[]);

  return (
    <>
      {blocks.map((block) => (
        <BlockRenderer block={block} />
      ))}
    </>
  );
};

const generateListBlock = (blocks: BlockObjectResponse[]) => {
  return blocks.reduce<BlockObject[]>((acc, cur) => {
    const lastAcc = acc[acc.length - 1];

    if (cur.type === "bulleted_list_item") {
      if (lastAcc?.type === "bulleted_list") {
        lastAcc.bulleted_list.push(cur);
        return acc;
      }
      const newBlock: BlockObject = {
        type: "bulleted_list",
        bulleted_list: [cur],
      };
      acc.push(newBlock);
      return acc;
    }

    if (cur.type === "numbered_list_item") {
      if (lastAcc?.type === "numbered_list") {
        lastAcc.numbered_list.push(cur);
        return acc;
      }
      const newBlock: BlockObject = {
        type: "numbered_list",
        numbered_list: [cur],
      };
      acc.push(newBlock);
      return acc;
    }

    acc.push(cur);
    return acc;
  }, []);
};
