const SocialLink = ({ Icon, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-white w-[30px] h-[30px] inline-flex items-center justify-center rounded-full bg-[#002F51]"
    >
      <Icon />
    </a>
  );
};

export default SocialLink;
