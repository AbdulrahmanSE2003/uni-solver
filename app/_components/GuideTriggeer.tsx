"use client";
import { CircleQuestionMark } from "lucide-react";
import { useState } from "react";
import ApiGuideModal from "./ApiGuideModal";

const GuideTriggeer = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div
        className={`bg-amber-200/40 dark:bg-amber-500/10 w-full rounded-xl border border-amber-200 dark:border-amber-500/20 p-6 `}
      >
        <h2 className="text-lg font-medium text-amber-600 dark:text-amber-400/90 mb-1">
          How to Get Your Key?
        </h2>
        <p className="text-sm text-amber-500/80 mb-4">
          Once you log out, you will need to sign in again to access your
          projects.
        </p>
        <button
          onClick={() => setShowModal((prev) => !prev)}
          className={`flex items-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-600/70 text-white rounded-md cursor-pointer text-sm font-medium transition-all shadow-sm shadow-amber-500/20`}
        >
          <CircleQuestionMark size={16} />
          Show Guide
        </button>
      </div>

      <ApiGuideModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default GuideTriggeer;
