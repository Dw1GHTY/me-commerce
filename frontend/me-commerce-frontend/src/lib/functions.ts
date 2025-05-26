export async function getCategories() {
  const res = await fetch("http://localhost:3000/api/categories");
  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }
  return res.json();
}
