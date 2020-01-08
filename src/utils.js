exports.makeArtistPath = ({ id, slug }) => {
  return `artists/${slug}`
}

exports.makeRecordPath = ({ id, slug }) => {
  return `records/${slug}`
}

exports.makeReviewPath = ({ id, slug }) => {
  return `reviews/${slug}`
}
