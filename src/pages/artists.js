import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import BackToIndex from '../components/back-to-index'

export default ({ data }) => {
  const artists = data.vb.artists
  return (
    <Layout>
      <div style={{ marginBottom: `5rem` }}>
        <section className="artists">
          <h1>Artists</h1>
          <nav>
            <ul
              style={{
                listStyle: `none`,
                margin: `0 0 2rem`,
                display: `flex`,
                flexWrap: `wrap`,
                alignItems: `center`,
                justifyContent: `center`,
                width: `100%`,
              }}
            >
              {artists.map((artist, i) => (
                <li
                  key={i}
                  style={{
                    marginBottom: `0.5rem`,
                    width: `128px`,

                    flexBasis: `128px`,
                  }}
                >
                  <Link
                    to={`/artists/` + artist.slug}
                    style={{
                      textDecoration: `none`,
                    }}
                  >
                    <figure>
                      <img
                        src={`https://media.graphcms.com/resize=w:224,h:224,a:top,fit:crop/${artist.picture.handle}`}
                        alt={artist.name}
                        title={artist.name}
                        width="112"
                        style={{
                          marginBottom: `0`,
                          marginTop: `0.125rem`,
                        }}
                      />
                      <figcaption>
                        <h6
                          style={{
                            fontSize: `0.5675rem`,
                            marginBottom: `0.125rem`,
                            marginTop: `0`,
                          }}
                        >
                          {artist.name}
                        </h6>
                      </figcaption>
                    </figure>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </section>
      </div>
      <BackToIndex />
    </Layout>
  )
}

export const artistPageQuery = graphql`
  query getAllArtists {
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
      }
    }
  }
`
