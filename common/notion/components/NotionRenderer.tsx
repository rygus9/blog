import {
  BlockObjectResponse,
  PartialBlockObjectResponse,
  RichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";
import Link from "next/link";
import { Fragment } from "react";

import { notion } from "..";

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

const BlockRenderer = ({ block }: { block: BlockObjectResponse }) => {
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
      const splitedText = plain_text.split("\n");
      let element: JSX.Element = (
        <>
          {splitedText.map((line, idx) => (
            <Fragment key={line}>
              {line}
              {idx < splitedText.length - 1 && <br />}
            </Fragment>
          ))}
        </>
      );

      if (bold)
        element = <strong className="font-bold text-txt-700">{element}</strong>;
      if (italic) element = <i>{element}</i>;
      if (strikethrough)
        element = <span className="line-through">{element}</span>;
      if (underline) element = <span>{element}</span>;
      if (code)
        element = (
          <code className="inline-block px-1.5 mx-0.5 bg-back-em rounded-md text-txt-700">
            {element}
          </code>
        );
      if (href)
        element = (
          <Link
            href={href}
            className="text-txt-300 underline underline-offset-4 hover:text-txt-500"
          >
            {element}
          </Link>
        );

      return element;
    },
  );
};
