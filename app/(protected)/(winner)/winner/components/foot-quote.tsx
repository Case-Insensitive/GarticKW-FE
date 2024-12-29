type FootQuoteProps = {
  className?: React.HTMLAttributes<HTMLDivElement>[`className`];
};

const FootQuote: React.FC<FootQuoteProps> = ({ className }) => {
  return (
    <div className={`flex justify-center ${className}`}>
      <q>Winners are made, not chosen</q>
    </div>
  );
};

export default FootQuote;
