import slugify from "slugify";

export const capitalize = (text: string): string => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const getFolder = (slug: string): string => {
  return slug.split("/")[0];
};

export const getFile = (slug: string): string => {
  return slug.split("/").pop() ?? "";
};

export const getFolders = (docs: any): string[] => {
  return [...new Set(docs.map((doc: any) => getFolder(doc.slug)))] as string[];
};

export const slug = (text: string): string => {
  return slugify(text, { lower: true, trim: true });
};
