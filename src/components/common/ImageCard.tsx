"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CardTitle from "./CardTitle";
interface ImageCardProps {
  title: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  cardClass?: string;
  pageTitle: string;
  imageSize?: string;
  titleClass?: string;
  isLink?: boolean;
}

const ImageCard: React.FC<ImageCardProps> = ({
  title,
  image,
  imageWidth,
  imageHeight,
  pageTitle,
  imageSize = "",
  cardClass,
}) => {
  const pathname = usePathname();
  return (
    <>
      <Link
        href={`${pageTitle}/${title.toLowerCase().split(" ").join("-")}`}
        className={`max-w-[150px] md:max-w-[200px] w-full group ${cardClass}`}
      >
        <div
          className={`rounded-2.5 overflow-hidden ${
            pathname === "/devices"
              ? "border-[4.5px] border-white-rock"
              : "border border-black"
          }`}
        >
          <Image
            src={image}
            width={imageWidth}
            height={imageHeight}
            alt={title
              .toLowerCase()
              .split(" ")
              .slice(0, 2)
              .join("-")
              .replace(",", " ")}
            className={`group-hover:scale-105 common-transition w-[150px] h-[150px] md:w-[200px] md:h-[200px] ${imageSize}`}
          />
        </div>
        <CardTitle className="md:!w-[202px]">{title}</CardTitle>
      </Link>
    </>
  );
};

export default ImageCard;
