export function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString("ar-SA", options);
}

export function getCategoryCounts(posts, categories) {
  const counts = {};
  posts.forEach((post) => {
    counts[post.category] = (counts[post.category] || 0) + 1;
  });
  return categories.map((category) => ({
    ...category,
    count: counts[category.name] || 0,
  }));
}

export function filterPosts(posts, query, category) {
  return posts.filter((post) => {
    const matchesQuery =
      !query ||
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()));
    const matchesCategory = !category || post.category === category;
    return matchesQuery && matchesCategory;
  });
}

export function sortPostsByDate(posts) {
  return [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getAdjacentPosts(posts, currentSlug, category) {
  const categoryPosts = posts.filter((post) => post.category === category);
  const currentIndex = categoryPosts.findIndex((post) => post.slug === currentSlug);
  const prev = currentIndex > 0 ? categoryPosts[currentIndex - 1] : null;
  const next =
    currentIndex < categoryPosts.length - 1 ? categoryPosts[currentIndex + 1] : null;
  return { prev, next };
}
