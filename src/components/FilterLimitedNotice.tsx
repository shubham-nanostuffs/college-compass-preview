
import React from "react";
import { Lock } from "lucide-react";

export default function FilterLimitedNotice() {
  return (
    <section className="w-full max-w-3xl mx-auto mt-0 mb-6">
      <div className="bg-orange-50 border border-orange-200 px-5 py-4 rounded-xl flex gap-3 items-start shadow">
        <Lock className="h-6 w-6 text-orange-400 mt-0.5" />
        <div className="flex-1 text-orange-800">
          <span className="font-semibold block mb-1 text-base">Filter Access Limited</span>
          <span className="text-sm block">
            Note: Filter options (like course or quota selection) are <b>not available</b> in the <b>Free Plan</b>.<br />
            To unlock advanced filtering features and get even more accurate college predictions, please upgrade your plan.
          </span>
        </div>
      </div>
    </section>
  );
}
