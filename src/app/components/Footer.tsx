require('dotenv').config();

type FooterProps = {
  copyright: string,
  developerDescription: string}

const Footer: React.FC<FooterProps> = ({ copyright, developerDescription }) => {
  return (
    <footer className="bg-light-gray secondary-color-text p-5 mt-10 max-[460px]:py-7">
      <div className="w-11/12 flex my-0 mx-auto max-[460px]:flex-col max-[460px]:justify-center max-[460px]:items-center">
        <p className="w-1/2 text-start max-[460px]:text-center">{copyright}</p>
        <p className="w-1/2 text-end max-[460px]:text-center max-[460px]:pt-2">
          <a href={process.env.DEVELOPER_URL} className="primary-color-text">{developerDescription}</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;