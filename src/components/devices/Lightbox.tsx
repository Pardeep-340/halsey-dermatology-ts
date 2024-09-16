import Image from 'next/image';

interface LightboxProps {
    imageSrc: string;
    alt: string;
    isOpen: boolean;
    onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ imageSrc, alt, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 top-0 left-0 flex items-center justify-center bg-black/75">
            <div className="relative z-20">
                <Image className='w-full max-w-[90vw]' src={imageSrc} width={600} height={600} alt={alt} />
            </div>
            <div
                onClick={onClose}
                className="bg-black/20 w-full h-screen fixed top-0 left-0 z-10"
            ></div>
        </div>
    );
};

export default Lightbox;
