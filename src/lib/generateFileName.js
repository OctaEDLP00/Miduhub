/** @type {Array<string>} */
export const OMIT_URLS = [
  'https://noticias.dev',
  'https://midu.dev',
  'https://miduconf.com',
  'https://midufest.com',
  'https://adventjs.dev',
  'https://2022.adventjs.dev',
  'https://2021.adventjs.dev',
  'https://midu.dev',
]

/** @type {Array<string>} */
const OMIT_URLS_WITH_CDN = ['https://cdn.lavelada.dev']

/**
 * @param {string} hostname
 * @param {string} pathname
 * @param {string} origin
 * @returns {string}
 */
export function generateFilename(hostname, pathname, origin) {
  if (OMIT_URLS_WITH_CDN.includes(origin)) {
    const nameHost = hostname.replace('cdn.', '').replace('.', '-')
    const fileExtension = pathname.split('.').pop()
    const renamedFile = `${nameHost}-open-graph.${fileExtension}`
    return renamedFile
  }

  if (OMIT_URLS.includes(origin)) {
    const nameHost = hostname.replace('.', '-')
    const fileExtension = pathname.split('.').pop()
    const renamedFile = `${nameHost}-open-graph.${fileExtension}`
    return renamedFile
  }

  const [nameHost, _] = hostname.split('.')

  const fileExtension = pathname.split('.').pop()
  const renamedFile = `${nameHost}-open-graph.${fileExtension}`
  return renamedFile
}
