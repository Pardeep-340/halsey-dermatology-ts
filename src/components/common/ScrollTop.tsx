"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const ScrollTop = () => {
    const [scrollValue, setScrollValue] = useState(0);
    const [showScrollTop, setShowScrollTop] = useState(false);
    useEffect(() => {
        const HANDLE_SCROLL = () => {
            setScrollValue(window.scrollY);
        };
        window.addEventListener("scroll", HANDLE_SCROLL);
        return () => {
            window.removeEventListener("scroll", HANDLE_SCROLL);
        };
    }, []);
    useEffect(() => {
        if (scrollValue > 200) {
            setShowScrollTop(true);
        } else {
            setShowScrollTop(false);
        }
    }, [scrollValue]);
    const SCROLL_TOP_HANDLER = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div
            className={`bottom-4 border-0 fixed z-20 right-5 2xl:right-[calc((100vw-1500px)/2)] common-transition ${showScrollTop ? "scale-100 translate-y-0" : "scale-0 translate-y-20"
                }`}
        >
            <div
                onClick={SCROLL_TOP_HANDLER}
                className="h-10 w-10 sm:h-12 border border-white bg-laurel sm:w-12 rounded-full overflow-hidden cursor-pointer flex justify-center items-center common-transition hover:scale-95 z-10"
            >
                <Image
                    src="/assets/images/common/svg/back-to-top.svg"
                    alt="backToTop"
                    width={48}
                    height={48}
                    sizes="100vw"
                />
            </div>
        </div>
    );
};

export default ScrollTop;