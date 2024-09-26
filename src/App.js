import "./App.css";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

function App() {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();

      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 2,
        delay: 0.3,
      })
        .from(["#title1", "#title2", "#title3"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to(["#title1", "#title2", "#title3"], {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.5,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 1.3,
        })
        .from("#main-page", {
          opacity: 0,
          duration: 0.5,
        });
    }, comp);

    return () => ctx.revert();
  }, []);

  function removeSkipButton() {
    let element = document.getElementById("button");
    if (element != null) {
      element.remove();
    }
  }

  function handleButton() {
    removeSkipButton();
    gsap.globalTimeline.timeScale(999);
  }

  setTimeout(() => {
    removeSkipButton();
  }, 7000);

  return (
    <div className="container" ref={comp}>
      <div className="intro" id="intro-slider">
        <h1 id="title1">Portraits</h1>
        <h1 id="title2">Artwork</h1>
        <h1 id="title3">Prints</h1>
      </div>

      <div className="main" id="main-page">
        <h1>Welcome to Andrius site</h1>
      </div>

      <button id="button" className="button" onClick={handleButton}>
        Skip intro
      </button>
    </div>
  );
}

export default App;
