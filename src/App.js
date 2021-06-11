import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <footer>
          Coded by{" "}
          <a
            href="https://github.com/evfsmart"
            target="_blank"
            rel="noreferrer"
          >
            Emma Smart
          </a>
          ,{" "}
          <a
            href="https://github.com/evfsmart/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
          , and{" "}
          <a
            href="https://quizzical-euclid-9b8f7e.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
          . Weather icons by{" "}
          <a
            href="https://www.flaticon.com/authors/dinosoftlabs"
            target="_blank"
            rel="noreferrer"
          >
            DinosoftLabs
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
