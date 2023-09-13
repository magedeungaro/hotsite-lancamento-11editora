type DisclaimerProps = {
  description: string;
}

const Disclaimer: React.FC<DisclaimerProps> = ({ description }) => {
  return (
    <p className='px-3 pt-10 italic secondary-color-text opacity-90 max-[1024px]:pt-2'>
      <small className='max-[1024px]:text-xs'>
        {description}
      </small>
    </p>
  );
};

export default Disclaimer;