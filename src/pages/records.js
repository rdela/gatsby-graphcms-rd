import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/layout";
import BackToIndex from "../components/back-to-index";

export default ({ data }) => {
  const records = data.vb.records;
  return (
    <Layout>
      <section className="records">
        <h1>Records</h1>
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
            {records.map((node, i) => (
              <li
                key={i}
                style={{
                  marginBottom: `0.5rem`,
                  width: `128px`,
                  flexBasis: `128px`
                }}
              >
                <Link
                  to={`/records/` + node.slug}
                  style={{
                    textDecoration: `none`
                  }}
                >
                  <figure>
                    <img
                      src={`https://media.graphcms.com/resize=w:224,h:224,a:top,fit:crop/${
                        node.cover.handle
                      }`}
                      alt={node.title}
                      title={node.title}
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
                        {node.title}
                      </h6>
                    </figcaption>
                  </figure>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>
      <BackToIndex />
    </Layout>
  );
};

export const recordPageQuery = graphql`
  query getAllRecords {
    vb {
      records: allRecords {
        id
        slug
        title
        artist {
          id
          slug
          name
        }
        cover {
          handle
        }
      }
    }
  }
`;
