import { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";
import Link from "next/link";
import { Fragment } from "react";

export const RichText = ({ texts }: { texts: RichTextItemResponse[] }) => {
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
        element = (
          <strong className="font-bold text-contrast-700">{element}</strong>
        );
      if (italic) element = <i>{element}</i>;
      if (strikethrough)
        element = <span className="line-through">{element}</span>;
      if (underline) element = <span>{element}</span>;
      if (code)
        element = (
          <code className="inline-block px-1.5 mx-0.5 bg-contrast-200 rounded-md text-contrast-700">
            {element}
          </code>
        );
      if (href)
        element = (
          <Link
            href={href}
            target="_blank"
            className="text-contrast-500 underline underline-offset-4 hover:text-contrast-600"
          >
            {element}
          </Link>
        );

      return element;
    },
  );
};
