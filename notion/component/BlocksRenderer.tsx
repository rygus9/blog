import {
  BlockObjectResponse,
  PartialBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

import { notion } from "..";
// eslint-disable-next-line import/no-cycle
import { BlockObject } from "./BlockRenderer";

export const getChildrenBlock = async ({ block_id }: { block_id: string }) => {
  let next_cursor;
  const blocksResponse: (BlockObjectResponse | PartialBlockObjectResponse)[] =
    [];

  /**
   * 불러오는 block이 많으면 중간에 끊길 수 있음.
   * 그런 경우를 대비해서 계속 요청하게 만듬.
   */
  do {
    // eslint-disable-next-line no-await-in-loop
    const result = await notion.blocks.children.list({
      block_id,
      start_cursor: next_cursor ?? undefined,
    });
    blocksResponse.push(...result.results);
  } while (next_cursor);

  return generateListBlock(blocksResponse as BlockObjectResponse[]);
};

/**
 * notion block에는 리스트를 감싸는 요소 타입은 존재하지 않음.
 * 그래서 직접 리스트가 나오면 리스트를 감싸주는 요소를 만들어줌.
 *
 * @param blocks
 * @returns BlockObjectResponse[]
 */
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
