import React from "react";
import "./GithubLink.css";

export default function GitHubLink() {
  return (
    <div>
      <span id="link-github">
        {" "}
        <a
          href="https://github.com/DoraJFriedman/FindMyWord"
          rel="noreferrer"
          target="_blank"
        >
          Open-source code on Github.
        </a>{" "}
        Hosted by Netlify. By Dora J. Friedman.
      </span>
    </div>
  );
}
