import Image from "next/image";

type ProfileImageProps = {
  className?: React.HTMLAttributes<HTMLDivElement>[`className`];
  imgSrc: string;
  imgAlt: string;
  delay: number | string;
};

const ProfileImage: React.FC<ProfileImageProps> = ({
  className,
  imgSrc,
  imgAlt,
}) => {
  return (
    <div className={`relative w-full h-[94px] ${className} flex justify-center`}>
      <Image
        alt={imgAlt}
        src={imgSrc}
        className="absolute w-[94px] h-[94px] rounded-full"
        width={50}
        height={50}
      />
    </div>
  );
};

export default ProfileImage;
