import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
config.autoAddCss = false;

export function Banner({ backButtonEnabled = false }) {
  return (
    <div className="flex justify-center sticky top-0 z-50 p-8 bg-zinc-800 bg-opacity-90 backdrop-blur-sm text-white font-mono">
      <div className="flex flex-col">
        <div className="text-2xl md:text-6xl">
          <h1>Don&apos;t try this at work</h1>
        </div>
        <div className="mt-4">
          <div className="border-b border-zinc-200 w-1/6 mb-1" />
          {backButtonEnabled && (
            <Link href={"/"} className="font-light hover:underline">
              <FontAwesomeIcon icon={faArrowLeft} /> Back Home
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
