// ./layouts/SiteLayout.jsx
const { default: Header } = require("../components/Header")
const { default: Footer } = require("../components/Footer")

const SiteLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default SiteLayout;
