import { Copy, Envelope, LinkOut, Location, Phone } from "akar-icons";
import { useState } from "react";
import { useGSAP } from "@gsap/react/src";
import gsap from "gsap";

export default function InfoCard({ data, type }) {
  const [isCopied, setIsCopied] = useState(false);

  // useGSAP(() => {
  //   gsap.to(".copyTool", { opacity: 1 });
  // }, []);

  const closeCopiedModal = () => {
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  if (typeof data === "object") {
    return (
      <a
        target="blank"
        href={
          type === "mail"
            ? `mailto:${data.mail}?subject=${data.subject}&body=${data.mailBody}`
            : "http://maps.google.com?q=23.829316, 90.417194"
        }
        className="cursor-pointer flex items-center gap-1 rounded-lg hover:bg-third w-fit p-1.5"
      >
        {type === "mail" ? (
          <Envelope strokeWidth={2} size={20} />
        ) : (
          <Location strokeWidth={2} size={20} />
        )}
        <span className="h-5 me-2">
          {type === "mail" ? data.mail : data.address}
        </span>
        <LinkOut size={18} />
      </a>
    );
  } else
    return (
      <>
        <div
          onClick={() => {
            navigator.clipboard.writeText(data);
            setIsCopied(true);
            closeCopiedModal();
          }}
          className="cursor-pointer flex items-center gap-1 relative rounded-lg hover:bg-third w-fit p-1.5"
        >
          <Phone size={20} />
          <span className="h-5 me-2">{data}</span>
          <Copy size={18} />
          {isCopied && (
            <span className="absolute -right-18 bg-third rounded-md px-2 py-1 text-sm copyTool z-1">
              Copied!
            </span>
          )}
        </div>
      </>
    );
}
