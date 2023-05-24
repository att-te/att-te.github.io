// ./components/SiteHeader.jsx
const { default: Link } = require("next/link");

const SiteFooter = () => {
  return (
    <footer className="site-footer">
      <div className="wrapper">
        <span>
          2023 | CC BY-SA
        </span>
        <div>
          <a href="https://instagram.com" rel="noopener noreferrer" target="_blank">link</a> |
          <a href="https://twitter.com/" rel="noopener noreferrer" target="_blank">link</a>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
