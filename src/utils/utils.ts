export const capitalize = (text: string): string => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const getFolder = (slug: string): string => {
  return slug.split("/")[0];
};

export const getFolders = (docs: any): string[] => {
  return [...new Set(docs.map((doc: any) => getFolder(doc.slug)))] as string[];
};
