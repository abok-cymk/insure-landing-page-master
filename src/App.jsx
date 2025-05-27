import BlogCTA from "./BlogCTA"
import Footer from "./Footer"
import Header from "./Header"
import HowWeWork from "./HowWeWork"

function App() {
  return (
    <>
      <Header />
      <main className="px-6 mb-36">
        <HowWeWork />
        <BlogCTA />
      </main>
      <Footer />
    </>
  );
}

export default App
