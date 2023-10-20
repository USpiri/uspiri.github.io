import type { CollectionEntry } from "astro:content";

interface SortOptions {
  filterDrafts?: boolean;
  filterFurutePosts?: boolean;
  sortByDate?: boolean;
  randomize?: boolean;
  limit?: number;
}

/**
 * Ordena y filtra una colección de publicaciones.
 * @param posts - La colección de publicaciones a ordenar y filtrar.
 * @param options - Opciones de orden y filtrado (opcional). Si no se proporciona, se utilizan los valores por defecto:
 *   - filterDrafts: true
 *   - filterFurutePosts: true
 *   - sortByDate: true
 *   - randomize: false
 *   - limit: undefined
 * @returns La colección de publicaciones ordenada y filtrada.
 */
export function sortPosts(
  posts: CollectionEntry<"posts">[],
  options?: SortOptions
) {
  const { filterDrafts, filterFurutePosts, sortByDate, randomize, limit } = {
    ...{
      filterDrafts: true,
      filterFurutePosts: true,
      sortByDate: true,
      randomize: false,
    },
    ...options,
  };

  // Filters
  const filteredPosts = posts.reduce(
    (acc: CollectionEntry<"posts">[], post) => {
      const { pubDate: date, draft } = post.data;

      //Drafts
      if (filterDrafts && draft) return acc;

      // Future posts
      if (filterFurutePosts && new Date(date) > new Date()) return acc;

      acc.push(post);

      return acc;
    },
    []
  );

  // Sort Date
  if (sortByDate) {
    filteredPosts.sort(
      (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
    );
  } else if (!sortByDate && randomize) {
    filteredPosts.sort(() => Math.random() - 0.5);
  }

  // Limit
  if (limit) {
    return filteredPosts.slice(0, limit);
  }

  return filteredPosts;
}
