import { generateFilename } from './generateFileName.js'
/**
 * @param {string} url
 * @return {string}
 */
export function getFilenameFromUrl(url) {
  const { hostname, pathname, origin } = new URL(url)
  const filename = generateFilename(hostname, pathname, origin)
  return filename
}
