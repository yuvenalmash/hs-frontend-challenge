// App.jsx

import "./App.css";
import Header from "./components/Header";
import HeadlineSection from "./components/HeadlineSection";
import AboutSection from "./components/AboutSection";
import TestimonialsSlider from "./components/TestimonialsSlider";
import FAQSection from "./components/FAQSection";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, selectData } from "./app/habourSpaceSlice";

const App = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectData);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="App">
      {data ? (
        <>
          <Header />
          <main>
            <HeadlineSection />
            <AboutSection />
            <TestimonialsSlider />
            <FAQSection />
          </main>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default App;
