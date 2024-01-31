import {
  BlockObjectResponse,
  BulletedListItemBlockObjectResponse,
  NumberedListItemBlockObjectResponse,
  TableRowBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

// eslint-disable-next-line import/no-cycle
import { getChildrenBlock } from "./BlocksRenderer";
import { RichText } from "./RichText";

export type BlockObject =
  | BlockObjectResponse
  | {
      type: "bulleted_list";
      bulleted_list: BulletedListItemBlockObjectResponse[];
    }
  | {
      type: "numbered_list";
      numbered_list: NumberedListItemBlockObjectResponse[];
    };

export const BlockRenderer = async ({ block }: { block: BlockObject }) => {
  const { type } = block;

  switch (type) {
    case "paragraph":
      return (
        <p className="my-6 leading-7">
          <RichText texts={block.paragraph.rich_text} />
        </p>
      );
    case "heading_1":
      return (
        <h1 className="mt-14 mb-6 text-txt-700">
          <RichText texts={block.heading_1.rich_text} />
        </h1>
      );
    case "heading_2":
      return (
        <h2 className="mt-10 mb-6 text-2xl font-semibold text-txt-700">
          <RichText texts={block.heading_2.rich_text} />
        </h2>
      );
    case "heading_3":
      return (
        <h3 className="mt-8 mb-6 text-xl font-semibold text-txt-700">
          <RichText texts={block.heading_3.rich_text} />
        </h3>
      );
    case "quote":
      return (
        <div className="border-l-4 border-txt-500 px-4 py-2 bg-back-em bg-opacity-60 leading-7">
          <RichText texts={block.quote.rich_text} />
        </div>
      );
    case "bulleted_list":
      return (
        <ul className="my-6 list-disc">
          {block.bulleted_list.map((bulletedListItem) => (
            <BlockRenderer block={bulletedListItem} key={bulletedListItem.id} />
          ))}
        </ul>
      );
    case "numbered_list":
      return (
        <ol className="my-6 list-decimal">
          {block.numbered_list.map((numberedListItem) => (
            <BlockRenderer block={numberedListItem} key={numberedListItem.id} />
          ))}
        </ol>
      );
    case "bulleted_list_item":
      return (
        <li className="my-3 ml-4">
          <RichText texts={block.bulleted_list_item.rich_text} />
        </li>
      );
    case "numbered_list_item":
      return (
        <li className="my-3 ml-4">
          <RichText texts={block.numbered_list_item.rich_text} />
        </li>
      );
    /**
     * 테이블은 자식이 존재 + 부모 블록 값이 자식 블록 렌더링에 영향을 줌.
     * 그래서 해당 블록 안에서 자식 요소도 불러서 처리함.
     * 부모와 연관이 없는 자식 블록이라면 재귀를 사용하는걸 추천. (현재는 그런 니즈가 없어서 해당 로직 없음.)
     */
    case "table": {
      const {
        has_children,
        id,
        table: { has_row_header, has_column_header },
      } = block;

      if (!has_children) {
        return <table />;
      }

      const childrenBlock = (await getChildrenBlock({
        block_id: id,
      })) as TableRowBlockObjectResponse[];

      return (
        <table className="my-6 table-auto border-collapse border border-border">
          {childrenBlock.map((tableRowBlock, row_idx) => (
            <tr>
              {tableRowBlock.table_row.cells.map((col, col_idx) =>
                /**
                 * 헷갈리지 말기. row에 헤더 있음 = 해당 헤더는 column_header임.
                 */
                (row_idx === 0 && has_column_header) ||
                (col_idx === 0 && has_row_header) ? (
                  <th className="border border-border p-2 pr-6 bg-back-em text-left">
                    <RichText texts={col} />
                  </th>
                ) : (
                  <td className="border border-border p-2 pr-6">
                    <RichText texts={col} />
                  </td>
                ),
              )}
            </tr>
          ))}
        </table>
      );
    }

    default:
      return <p />;
  }
};
