import { getNotes } from "./getNotes";

export const getNote = async (slug: string) => {
  const notes = await getNotes();
  const note = notes.filter((noteMeta) => noteMeta.slug === slug)[0];
  return note;
};
