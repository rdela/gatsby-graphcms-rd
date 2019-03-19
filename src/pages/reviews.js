import React from "react";
import { graphql, Link } from "gatsby";
import StarRatingComponent from "react-star-rating-component";

import Layout from "../components/layout";
import BackToIndex from "../components/back-to-index";

export default ({ data }) => {
  const reviews = data.vb.reviews;
  return (
    <Layout>
      <section className="reviews">
        <h1>Reviews</h1>
        <nav>
          <ul style={{ listStyle: `none`, margin: `0 0 2rem`, width: `100%` }}>
            {reviews.map((node, i) => (
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
                    to={`/reviews/` + node.slug}
                    style={{
                      textDecoration: `none`
                    }}
                  >
                    {node.title}
                  </Link>
                </h3>

                <p>
                  for{" "}
                  <Link to={`/records/${node.record.slug}`}>
                    <em>{node.record.title}</em>
                  </Link>
                  {` `}
                  by
                  {` `}
                  <Link to={`/artists/${node.record.artist.slug}`}>
                    <strong>{node.record.artist.name}</strong>
                  </Link>
                </p>
                {node.rating && (
                  <div
                    className="star-wrapper small"
                    style={{ fontSize: `0.5rem`, marginBottom: `2rem` }}
                  >
                    <StarRatingComponent
                      name="Rating"
                      className="rating"
                      starCount={5}
                      value={node.rating}
                      editing={false}
                    />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </section>
      <BackToIndex />
    </Layout>
  );
};

export const reviewPageQuery = graphql`
  query getAllReviews {
    vb {
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
        rating
      }
    }
  }
`;
