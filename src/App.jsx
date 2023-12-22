// App component

import './App.css';
import Header from './components/Header';
import HeadlineSection from './components/HeadlineSection';
import AboutSection from './components/AboutSection';
import TestimonialsSlider from './components/TestimonialsSlider';
import FAQSection from './components/FAQSection';

function App() {
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
};

export default App;