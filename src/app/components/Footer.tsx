type FooterProps = {
  copyright: string,
  developerDescription: string,
  developerURL: string
}

const Footer: React.FC<FooterProps> = ({ copyright, developerDescription, developerURL }) => {
  return (
    <footer className="bg-light-gray secondary-color-text p-5">
      <div className="container">
        <span>{copyright}</span>
        <span>
          <a href={developerURL} className="primary-color-text">{developerDescription}</a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;