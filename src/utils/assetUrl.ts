/**
 * Converteert een pad zoals "/images/foo.jpg" naar het correcte URL
 * rekening houdend met de Vite base-URL (/girlstrip/ in productie, / in dev).
 * Externe URL's (https://...) worden ongewijzigd teruggegeven.
 */
export function assetUrl(path: string): string {
  if (!path) return path;
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  // Verwijder leading slash en plak base ervoor
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
}
