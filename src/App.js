import "./styles.css";
import Dictionary from "./Dictionary";
import GithubLink from "./GithubLink.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary defaultKeyword="Coffee" />
        </main>
      </div>
      <br />
      <GithubLink />
    </div>
  );
}
