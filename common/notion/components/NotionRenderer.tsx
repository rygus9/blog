import {
  BlockObjectResponse,
  RichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";
import Link from "next/link";

import { notion } from "..";

export const BlocksRenderer = async ({ block_id }: { block_id: string }) => {
  let next_cursor;
  const elements: (JSX.Element | string)[] = [];
  do {
    // eslint-disable-next-line no-await-in-loop
    const result = await notion.blocks.children.list({
      block_id,
      start_cursor: next_cursor ?? undefined,
    });
    const blocks = result.results;
    elements.push(
      ...blocks.map((block) => (
        <BlockRenderer block={block as BlockObjectResponse} />
      )),
    );
  } while (next_cursor);

  return <>{elements.map((element) => element)}</>;
};

const BlockRenderer = ({ block }: { block: BlockObjectResponse }) => {
  const { type } = block;

  switch (type) {
    case "paragraph":
      return (
        <p>
          <RichText texts={block.paragraph.rich_text} />
        </p>
      );
    case "heading_1":
      return (
        <h1>
          <RichText texts={block.heading_1.rich_text} />
        </h1>
      );
    case "heading_2":
      return (
        <h2>
          <RichText texts={block.heading_2.rich_text} />
        </h2>
      );
    case "heading_3":
      return (
        <h3>
          <RichText texts={block.heading_3.rich_text} />
        </h3>
      );
    default:
      return <p />;
  }
};

const RichText = ({ texts }: { texts: RichTextItemResponse[] }) => {
  return texts.map(
    ({
      annotations: { bold, italic, strikethrough, underline, code },
      plain_text,
      href,
    }) => {
      let element: JSX.Element | string = plain_text;

      if (bold) element = <strong>{element}</strong>;
      if (italic) element = <i>{element}</i>;
      if (strikethrough)
        element = <span className="line-through">{element}</span>;
      if (underline) element = <span className="underline">{element}</span>;
      if (code) element = <code>{element}</code>;
      if (href) element = <Link href={href}>{element}</Link>;

      return element;
    },
  );
};
