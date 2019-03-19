module.exports = `
  {
    vb {
      allArtists {
        id
        name
        slug
        picture {
          id
          handle
          width
          height
        }
        records {
          id
          slug
          title
        }
      }
      allRecords {
        id
        slug
        title
        artist {
          id
          slug
          name
        }
        tracks {
          id
          title
          length
        }
        cover {
          handle
        }
        reviews {
          id
          slug
          title
        }
      }
      allReviews {
        id
        slug
        createdAt
        record {
          slug
          title
          artist {
            slug
            name
          }
        }
        title
        review
        rating
        comments {
          body
        }
      }
    }
  }
`
