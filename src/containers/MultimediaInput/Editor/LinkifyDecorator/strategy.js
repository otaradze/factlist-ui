import { extractUrlsWithIndices } from 'twitter-text'

export default (contentBlock, callback, contentState) => {
  const text = contentBlock.getText()
  const urls = extractUrlsWithIndices(text, {
    extractUrlsWithoutProtocol: false,
  })

  urls.forEach(url => callback(url.indices[0], url.indices[1]))
}
