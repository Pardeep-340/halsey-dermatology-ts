import { useEffect, useState } from "react";
import Icons from "../homepage/common/Icons";

interface PopupProps {
  isOpen: boolean;
  className?: string;
  onClose: () => void;
  children: React.ReactNode;
}

const Popup: React.FC<PopupProps> = ({
  isOpen,
  onClose,
  children,
  className,
}) => {
  const [visible, setVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    setVisible(isOpen);

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!visible) return null;

  return (
    <>
      <div
        className={`fixed inset-0 top-1/2 -translate-y-1/2 max-h-[90vh] p-4 sm:p-6 bg-white left-1/2 min-h-max max-w-[1046px] w-[90vw] -translate-x-1/2 overflow-y-auto popup-scrollbar z-[999] ${className}`}
      >
        <div className="bg-white mx-auto z-30 max-h-max h-full relative">
          <span
            onClick={onClose}
            className="absolute top-0 right-0 cursor-pointer z-50"
          >
            <Icons icon="crossIcon" />
          </span>
          {children}
        </div>
      </div>
      <div
        onClick={onClose}
        className="bg-black/20 w-full h-screen fixed top-0 left-0 z-[998]"
      ></div>
    </>
  );
};

export default Popup;
