import { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

export const plainText = (texts: RichTextItemResponse[]) =>
  texts.map((text) => text.plain_text).join("");
