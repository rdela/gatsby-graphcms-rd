import React from "react";
import { Link } from "gatsby";

const BackToIndex = () => (
  <div
    style={{
      margin: `0 auto 1.45rem`,
      maxWidth: 960,
      padding: `1.45rem 1.0875rem`,
      textAlign: `center`
    }}
  >
    <nav>
      <h4>
        <Link to="/">Back to Index</Link>
      </h4>
    </nav>
  </div>
);

export default BackToIndex;
