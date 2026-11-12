import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import { readFile, rm, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const distDirectory = resolve('dist')
const ssrDirectory = resolve('dist-ssr')
const htmlPath = resolve(distDirectory, 'index.html')
const serverEntryPath = resolve(ssrDirectory, 'App.js')

try {
  const [{ default: App }, html] = await Promise.all([
    import(pathToFileURL(serverEntryPath).href),
    readFile(htmlPath, 'utf8'),
  ])
  const rootMarker = '<div id="root"></div>'

  if (!html.includes(rootMarker)) {
    throw new Error('Could not find the empty React root in the generated index.html.')
  }

  const renderedApp = renderToString(createElement(App))
  await writeFile(htmlPath, html.replace(rootMarker, `<div id="root">${renderedApp}</div>`))
} finally {
  await rm(ssrDirectory, { recursive: true, force: true })
}
