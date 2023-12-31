import {
  BlockObjectResponse,
  BulletedListItemBlockObjectResponse,
  NumberedListItemBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

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

export const BlockRenderer = ({ block }: { block: BlockObject }) => {
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

    default:
      return <p />;
  }
};
