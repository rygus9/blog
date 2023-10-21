import { existsSync, mkdirSync } from "fs";
import { writeFile } from "fs/promises";
import { resolve } from "path";
import { inspect } from "util";

export const log = (obj: any) => {
  if (typeof window === "undefined") {
    // eslint-disable-next-line no-console
    console.log(inspect(obj, { depth: null, colors: true }));
    return;
  }
  // eslint-disable-next-line no-console
  console.log(obj);
};

export const saveLog = ({
  content,
  filename,
}: {
  content: any;
  filename: string;
}) => {
  const ext = "json";
  const tempDirectoryPath = resolve(".", "temp");

  if (!existsSync(tempDirectoryPath)) {
    mkdirSync(tempDirectoryPath);
  }

  writeFile(
    resolve(tempDirectoryPath, `${filename}.${ext}`),
    JSON.stringify(content),
  );
};
