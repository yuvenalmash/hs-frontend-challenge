// App.jsx

import "./App.css";
import Header from "./components/Header";
import HeadlineSection from "./components/HeadlineSection";
import AboutSection from "./components/AboutSection";
import TestimonialsSlider from "./components/TestimonialsSlider";
import FAQSection from "./components/FAQSection";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "./app/habourSpaceSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <main>
        <HeadlineSection />
        <AboutSection />
        <TestimonialsSlider />
        <FAQSection />
      </main>
    </div>
  );
}

export default App;
