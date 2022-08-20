import http from "./httpService";
import config from "../config.json";

async function getCategories() {
  const { data: categories } = await http.get(config.apiCategory);
  return categories;
}

export { getCategories };
