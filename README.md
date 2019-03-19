# gatsby-graphcms-rd

Example of [gatsby-source-graphql](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-source-graphql) with [GraphCMS](https://graphcms.com/)

## Install

1. `git clone https://github.com/rdela/gatsby-graphcms-rd.git && cd gatsby-graphcms-rd/`
1. `yarn && yarn develop`

## Graph<em>i</em>QL

For an kitchen sink Graph<em>i</em>QL query you can run on Gatsby’s
graphql debugger at <http://localhost:8000/___graphql> and try this
link to preload a query with `gatsby develop` running:

[Preload kitchen sink Graph<em>i</em>QL query](http://localhost:8000/___graphql?query=%7B%20%20vb%0A%20%20%7B%20%20%20%20artists%3A%20allArtists%20%7B%20%20%20%20%20%20id%20%20%20%20%20%20name%20%20%20%20%20%20slug%20%20%20%20%20%20picture%20%7B%20%20%20%20%20%20%20%20id%20%20%20%20%20%20%20%20handle%20%20%20%20%20%20%20%20width%20%20%20%20%20%20%20%20height%20%20%20%20%20%20%7D%20%20%20%20%20%20records%20%7B%20%20%20%20%20%20%20%20id%20%20%20%20%20%20%20%20slug%20%20%20%20%20%20%20%20title%20%20%20%20%20%20%7D%20%20%20%20%7D%20%20%20%20records%3A%20allRecords%20%7B%20%20%20%20%20%20id%20%20%20%20%20%20slug%20%20%20%20%20%20title%20%20%20%20%20%20artist%20%7B%20%20%20%20%20%20%20%20id%20%20%20%20%20%20%20%20slug%20%20%20%20%20%20%20%20name%20%20%20%20%20%20%7D%20%20%20%20%20%20tracks%20%7B%20%20%20%20%20%20%20%20id%20%20%20%20%20%20%20%20title%20%20%20%20%20%20%20%20length%20%20%20%20%20%20%7D%20%20%20%20%20%20cover%20%7B%20%20%20%20%20%20%20%20handle%20%20%20%20%20%20%7D%20%20%20%20%20%20reviews%20%7B%20%20%20%20%20%20%20%20id%20%20%20%20%20%20%20%20slug%20%20%20%20%20%20%20%20title%20%20%20%20%20%20%7D%20%20%20%20%7D%20%20%20%20reviews%3A%20allReviews%20%7B%20%20%20%20%20%20id%20%20%20%20%20%20slug%20%20%20%20%20%20createdAt%20%20%20%20%20%20record%20%7B%20%20%20%20%20%20%20%20slug%20%20%20%20%20%20%20%20title%20%20%20%20%20%20%20%20artist%20%7B%20%20%20%20%20%20%20%20%20%20slug%20%20%20%20%20%20%20%20%20%20name%20%20%20%20%20%20%20%20%7D%20%20%20%20%20%20%7D%20%20%20%20%20%20title%20%20%20%20%20%20review%20%20%20%20%20%20rating%20%20%20%20%20%20comments%20%7B%20%20%20%20%20%20%20%20body%20%20%20%20%20%20%7D%20%20%20%20%7D%20%20%7D%7D)

Opening that link with `gatsby develop` running puts this query in the
Graph*i*QL console (click the Prettify button up top in Graph*i*QL to
see the whole query with line breaks):

```
{
  vb {
    artists: allArtists {
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
    records: allRecords {
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
    reviews: allReviews {
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
```

## Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/rdela/gatsby-graphcms-rd)

## Contributors

* [@redmega](https://github.com/redmega) Angel Piscola
* [@rafacm](https://github.com/rafacm) Rafael Cordones
* [@hmeissner](https://github.com/hmeissner) Hugo Meissner
* [@rdela](https://github.com/rdela) Ricky de Laveaga

…[and you](https://github.com/rdela/gatsby-graphcms-rd/issues)?

