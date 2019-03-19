import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/layout";
import StarRatingComponent from "react-star-rating-component";

export default ({ data }) => {
  const artists = data.vb.artists;
  const records = data.vb.records;
  const reviews = data.vb.reviews;
  return (
    <Layout>
      <div style={{ marginBottom: `5rem` }}>
        <section className="intro">
          <p>
            Welcome to the{` `}
            <a href="https://github.com/rdela/gatsby-graphcms-rd">
              Vinylbase Gatsby example site
            </a>
            {` `}using{` `}
            <a href="https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-source-graphql">
              gatsby-source-graphql
            </a>
            {` `}and{` `}
            <a href="https://graphcms.com/">GraphCMS</a>.
          </p>
        </section>
        <section className="artists">
          <h2>
            <Link to="/artists">Artists</Link>
          </h2>
          <nav>
            <ul
              style={{
                listStyle: `none`,
                margin: `0 0 2rem`,
                display: `flex`,
                flexWrap: `wrap`,
                alignItems: `center`,
                justifyContent: `center`,
                width: `100%`
              }}
            >
              {artists.map((artist, i) => (
                <li
                  key={i}
                  style={{
                    marginBottom: `0.5rem`,
                    width: `128px`,
                    flexBasis: `128px`
                  }}
                >
                  <Link
                    to={`/artists/` + artist.slug}
                    style={{
                      textDecoration: `none`
                    }}
                  >
                    <figure>
                      <img
                        src={`https://media.graphcms.com/resize=w:224,h:224,a:top,fit:crop/${
                          artist.picture.handle
                        }`}
                        alt={artist.name}
                        title={artist.name}
                        width="112"
                        style={{
                          marginBottom: `0`,
                          marginTop: `0.125rem`
                        }}
                      />
                      <figcaption>
                        <h6
                          style={{
                            marginBottom: `0.125rem`,
                            marginTop: `0`,
                            fontSize: `0.5675rem`
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
        <section className="records">
          <h2>
            <Link to="/records">Records</Link>
          </h2>
          <nav>
            <ul
              style={{
                listStyle: `none`,
                margin: `0 0 2rem`,
                display: `flex`,
                flexWrap: `wrap`,
                alignItems: `center`,
                justifyContent: `center`,
                width: `100%`
              }}
            >
              {records.map((record, i) => (
                <li
                  key={i}
                  style={{
                    marginBottom: `0.5rem`,
                    width: `128px`,
                    flexBasis: `128px`
                  }}
                >
                  <Link
                    to={`/records/` + record.slug}
                    style={{
                      textDecoration: `none`
                    }}
                  >
                    <figure>
                      <img
                        src={`https://media.graphcms.com/resize=w:512,h:512,a:top,fit:crop/${
                          record.cover.handle
                        }`}
                        alt={record.title}
                        title={record.title}
                        width="112"
                        style={{
                          marginBottom: `0`,
                          marginTop: `0.125rem`
                        }}
                      />
                      <figcaption>
                        <h6
                          style={{
                            marginBottom: `0.125rem`,
                            marginTop: `0`,
                            fontSize: `0.5675rem`
                          }}
                        >
                          {record.title}
                        </h6>
                      </figcaption>
                    </figure>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </section>
        <section className="reviews">
          <h2>
            <Link to="/reviews">Reviews</Link>
          </h2>
          <nav>
            <ul
              style={{ listStyle: `none`, margin: `0 0 2rem`, width: `100%` }}
            >
              {reviews.map((review, i) => (
                <li
                  key={i}
                  style={{
                    marginBottom: `2rem`
                  }}
                >
                  <h3
                    style={{
                      marginBottom: `0.125rem`,
                      marginTop: `0`
                    }}
                  >
                    <Link
                      to={`/reviews/` + review.slug}
                      style={{
                        textDecoration: `none`
                      }}
                    >
                      {review.title}
                    </Link>
                  </h3>

                  <p>
                    for{" "}
                    <Link to={`/records/${review.record.slug}`}>
                      <em>{review.record.title}</em>
                    </Link>
                    {` `}
                    by
                    {` `}
                    <Link to={`/artists/${review.record.artist.slug}`}>
                      <strong>{review.record.artist.name}</strong>
                    </Link>
                  </p>
                  {review.rating && (
                    <div
                      className="star-wrapper small"
                      style={{ fontSize: `0.5rem`, marginBottom: `2rem` }}
                    >
                      <StarRatingComponent
                        name="Rating"
                        className="rating"
                        starCount={5}
                        value={review.rating}
                        editing={false}
                      />
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </section>
      </div>
    </Layout>
  );
};

export const indexPageQuery = graphql`
  query getAllArtistsRecordsReviews {
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
`;
