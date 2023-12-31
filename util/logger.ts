import { existsSync, mkdirSync } from "fs";
import { writeFile } from "fs/promises";
import stringify from "json-stringify-pretty-compact";
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

// !! For Debug
export const saveObj = ({ obj, filename }: { obj: any; filename: string }) => {
  const ext = "json";
  const tempDirectoryPath = resolve(".", "temp");

  if (!existsSync(tempDirectoryPath)) {
    mkdirSync(tempDirectoryPath);
  }

  writeFile(resolve(tempDirectoryPath, `${filename}.${ext}`), stringify(obj));
};
