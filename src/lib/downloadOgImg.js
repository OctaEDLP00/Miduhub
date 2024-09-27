import { writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { getFilenameFromUrl } from './getFilenameFromUrl.js'
import { UrlOgImgProjects } from './projects.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

/**
 * @param {string} imgUrl
 */
export async function downloadOgImg(imgUrl) {
  try {
    const response = await fetch(imgUrl)
    if (!response.ok) {
      throw new Error(`Error al descargar la imagen: ${response.statusText}`)
    }

    const buffer = await response.arrayBuffer()
    const filename = getFilenameFromUrl(imgUrl)
    const outputPath = join(
      __dirname,
      '..',
      '..',
      'public',
      'opengraph',
      filename
    )

    await writeFile(outputPath, Buffer.from(buffer))
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error: ${error.message}`)
    }
    console.error(error)
  }
}

for (let i = 0; i <= 8; i++) {
  /** @type {string} */
  const url = UrlOgImgProjects[i]?.urlOgImg
  await downloadOgImg(url)
  console.log(`\n ${i + 1}. ${new URL(url).hostname} imagen descargada \n`)
}
