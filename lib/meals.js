import slugify from "slugify";
import xss from "xss";
import {supabase} from "./supabase.js";

export async function getMeals() {
  const { data, error } = await supabase.from("meals").select("*");

  if (error) throw error;
  return data;
}

export async function getMeal(slug) {
  const { data, error } = await supabase
    .from("meals")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) throw error;
  return data;
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  // Handle image upload
  const { data: imageData, error: imageError } = await supabase.storage
    .from("meal-images")
    .upload(`${meal.slug}.${meal.image.name.split(".").pop()}`, meal.image);

  if (imageError) throw new Error("Saving image failed!");

  const { publicURL, error: urlError } = supabase.storage
    .from("meal-images")
    .getPublicUrl(imageData.path);

  if (urlError) throw new Error("Getting public URL failed!");

  meal.image = publicURL;

  const { data, error } = await supabase.from("meals").insert([
    {
      title: meal.title,
      summary: meal.summary,
      instructions: meal.instructions,
      creator: meal.creator,
      creator_email: meal.creator_email,
      image: meal.image,
      slug: meal.slug,
    },
  ]);

  if (error) throw error;
  return data;
}
