require('dotenv').config();

type FooterProps = {
  copyright: string,
  developerDescription: string}

const Footer: React.FC<FooterProps> = ({ copyright, developerDescription }) => {
  return (
    <footer className="bg-light-gray secondary-color-text p-5 mt-10">
      <div className="w-11/12 flex my-0 mx-auto">
        <p className="w-1/2 text-start">{copyright}</p>
        <p className="w-1/2 text-end">
          <a href={process.env.DEVELOPER_URL} className="primary-color-text">{developerDescription}</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;