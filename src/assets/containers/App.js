import { useState, useEffect } from "react";
import { githubUsername } from "../../data.js";
import { AppLoading, AppError } from "../components/appLoadingError.js";
import About from "../components/About.js";
import Skills from "../components/Skills.js";
import Projects from "./Projects.js";
import Contact from "../components/Contact.js";
import Footer from "../components/Footer.js";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  // Change the defualt theme below ("dark" or "light")
  const [theme, setTheme] = useState("dark");

  const apiUrl = `https://api.github.com/users/${githubUsername}`;

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          setIsError(true);
          setIsLoading(false);
          setError(response.statusText);
          throw new Error(response.statusText);
        }
      })
      .then((data) => {
        setData(data);
        document.title = data.name;
       
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [apiUrl]);

  if (isLoading) {
    return <AppLoading theme={theme} />;
  }

  if (isError) {
    return <AppError theme={theme} error={error} />;
  }

  const homeData = {
    avatar: data.avatar_url,
    githubUrl: data.html_url,
    name: data.name,
    link: data.blog,
    bio: data.bio,
    twitter: data.twitter_username,
  };

  return (
    <>
      <About theme={theme} setTheme={setTheme} {...homeData} />
      <main>
        <Skills theme={theme} />
        <Projects theme={theme} githubUsername={githubUsername} />
        <Contact theme={theme} avatar={homeData.avatar} name={homeData.name} />
      </main>
      <Footer
        githubUrl={homeData.githubUrl}
        link={homeData.link}
        twitter={homeData.twitter}
      />
    </>
  );
};

export default App;
