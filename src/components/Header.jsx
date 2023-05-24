// ./components/SiteHeader.jsx
const { default: Link } = require("next/link");
import Navigation from "./Navigation";

const SiteHeader = () => {
  return (
    <header className="site-header">
      <div className="wrapper">
        <Link href={"/"} className="text-2xl">
          <span>attentē</span>
        </Link>
        <Navigation />
      </div>
    </header>
  );
};

export default SiteHeader;
