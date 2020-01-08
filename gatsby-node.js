const path = require(`path`)
const queryAll = require(`./gatsby/queryAll.js`)
const {
  makeArtistPath,
  makeRecordPath,
  makeReviewPath,
} = require(`./src/utils`)

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(queryAll)

  data.vb.allArtists.forEach(artist => {
    actions.createPage({
      path: makeArtistPath(artist),
      component: path.resolve(`./src/templates/artist-detail.js`),
      context: {
        artistID: artist.id,
      },
    })
  })

  data.vb.allRecords.forEach(record => {
    actions.createPage({
      path: makeRecordPath(record),
      component: path.resolve(`./src/templates/record-detail.js`),
      context: {
        recordID: record.id,
      },
    })
  })

  data.vb.allReviews.forEach(review => {
    actions.createPage({
      path: makeReviewPath(review),
      component: path.resolve(`./src/templates/review-detail.js`),
      context: {
        reviewID: review.id,
      },
    })
  })
}
