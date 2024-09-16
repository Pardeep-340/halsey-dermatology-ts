"use client"
import { useEffect, useState } from 'react';
import Cta from '@/components/common/Cta';
import GreenHeading from '@/components/common/GreenHeading';
import SubHeading from '@/components/common/SubHeading';
import { HELIX_AFTER_BEFORE_LIST } from '@/utils/Helper';
import Image from 'next/image';
import Icons from './Icons';
import Lightbox from './Lightbox';

interface Device {
    title: string;
    image: string;
}

const AfterBefore: React.FC = () => {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const openLightbox = (imageSrc: string) => {
        setSelectedImage(imageSrc);
        setIsLightboxOpen(true);
    };

    const closeLightbox = () => {
        setIsLightboxOpen(false);
        setSelectedImage(null);
    };

    useEffect(() => {
        if (isLightboxOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isLightboxOpen]);

    return (
        <div className="container xl:max-w-[1188px] pt-16 md:pt-20 lg:pt-24 xl:pt-[100px]">
            <GreenHeading color="laurel" className="justify-center text-laurel">
                Before And After
            </GreenHeading>
            <SubHeading className="text-center max-w-[738px] mx-auto mt-2.5">
                Patient Image Gallery
            </SubHeading>
            <div className="pt-8 lg:pt-9 flex flex-wrap gap-5 md:gap-6 justify-center">
                {HELIX_AFTER_BEFORE_LIST.map((obj: Device, index: number) => (
                    <div key={index} className="group !max-w-[224px] lg:!max-w-[309px] xl:!max-w-[364px] border border-black/10 hover:shadow-md common-transition">
                        <div className="overflow-hidden relative group-hover:after:h-full after:w-full after:h-0 after:top-0 after:bg-black/65 after:left-0 after:absolute after:content-[''] after:common-transition after:z-20">
                            <Image
                                src={obj.image}
                                width={364}
                                height={384}
                                alt={obj.title.toLowerCase().split(' ').slice(0, 2).join('-').replace(",", " ")}
                                className="group-hover:scale-105 common-transition w-[224px] !h-[224px] lg:!w-[309px] lg:!h-[309px] xl:!w-[364px] xl:!h-[384px]"
                            />
                            <Icons
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 pointer-events-none group-hover:scale-100 group-hover:pointer-events-auto z-30 common-transition cursor-pointer"
                                icon="topRightLeft"
                                onClick={() => openLightbox(obj.image)}
                            />
                        </div>
                        <SubHeading className="!text-xl md:!text-custom-lg xl:!text-2xl text-center mt-2 sm:my-3 lg:my-4 xl:pb-[18px]">
                            {obj.title}
                        </SubHeading>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center gap-3 mt-8 md:mt-[50px]">
                <Cta>See all before and after photos</Cta>
            </div>
            <Lightbox
                imageSrc={selectedImage || ''}
                alt="Lightbox Image"
                isOpen={isLightboxOpen}
                onClose={closeLightbox}
            />
        </div>
    );
};

export default AfterBefore;
