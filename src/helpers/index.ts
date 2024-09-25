export function getIdFromUrl(url: string): string | null {
  // Create a URL object
  let urlObj = new URL(url);
  // Get the value of the 'id' parameter
  let idValue = urlObj.searchParams.get("id");
  return idValue;
}
