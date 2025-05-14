
import React from "react";
import { Check, Lock } from "lucide-react";

const quotas = [
  "Aligarh Muslim University (AMU) Quota",
  "All India",
  "Delhi University Quota",
  "Open Seat Quota",
  "Internal - Puducherry UT Domicile",
  "…and more",
];

const statesIncluded =
  "35 states/UTs (e.g., Maharashtra, Rajasthan, Delhi, Tamil Nadu, etc.)";

const collegeTypes = [
  "Central University",
  "AIIMS",
  "JIPMER",
  "Deemed University",
  "Employees State Insurance Scheme",
];

const SelectionSummary = () => (
  <section className="bg-white shadow rounded-xl md:p-8 p-4 mb-8 border border-gray-200 max-w-3xl mx-auto">
    <div className="mb-4 flex items-center gap-2">
      <span className="text-2xl">🎯</span>
      <h2 className="text-xl font-semibold tracking-wide">Your Selection Summary</h2>
    </div>
    <p className="text-gray-700 mb-6">
      Hello User, based on your selected preferences, here is a personalized list of colleges you may get:
    </p>
    <div className="grid sm:grid-cols-2 gap-4 mb-6">
      <div>
        <div className="flex flex-wrap gap-2 text-base">
          <b>Rank:</b>
          <span className="px-2 rounded bg-purple-50 text-purple-700 font-semibold">250</span>
        </div>
        <div className="flex flex-wrap gap-2 text-base mt-1">
          <b>Category:</b>
          <span className="px-2 rounded bg-blue-50 text-blue-700 font-semibold">Open</span>
        </div>
        <div className="flex flex-wrap gap-2 text-base mt-1">
          <b>Round:</b>
          <span className="px-2 rounded bg-pink-50 text-pink-700 font-semibold">Round 1 (AIQ - All India Quota)</span>
        </div>
      </div>
      <div>
        <div className="flex flex-wrap gap-2 text-base">
          <b>Courses Selected:</b>
          <span className="px-2 rounded bg-green-50 text-green-700 font-semibold">MBBS</span>
          <span className="px-2 rounded bg-green-50 text-green-700 font-semibold">BDS</span>
        </div>
      </div>
    </div>
    <div className="mb-4">
      <div className="font-medium mb-1 text-gray-700">Quota Types Considered:</div>
      <div className="flex flex-wrap gap-2">
        {quotas.map((quota, i) => (
          <span key={i} className="px-2 py-1 text-xs rounded-full bg-yellow-50 text-yellow-800 border border-yellow-100">
            {quota}
          </span>
        ))}
      </div>
    </div>
    <div className="mb-4">
      <div className="font-medium mb-1 text-gray-700">States Included:</div>
      <span className="px-2 py-1 text-xs rounded bg-gray-100 text-gray-800">{statesIncluded}</span>
    </div>
    <div className="mb-6">
      <div className="font-medium mb-1 text-gray-700">College Types Considered:</div>
      <div className="flex flex-wrap gap-2">
        {collegeTypes.map((type, i) => (
          <span key={i} className="px-2 py-1 text-xs rounded-full bg-indigo-50 text-indigo-800 border border-indigo-100">
            {type}
          </span>
        ))}
      </div>
    </div>

    {/* Filter Locked Notice */}
    <div className="bg-orange-50 border border-orange-200 px-4 py-4 rounded-lg mb-4 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
      <div className="flex items-center font-semibold text-orange-700 text-base mb-2">
        <Lock className="h-5 w-5 mr-1 inline-block" />
        Filter Access Limited
      </div>
      <div className="text-sm text-orange-700 flex-1">
        <div>
          <b>Note:</b> Filter options (like course or quota selection) are not available in the <b>Free Plan</b>.<br />
          To unlock advanced filtering features and get even more accurate college predictions, please upgrade your plan.
        </div>
      </div>
    </div>

    {/* Paid Features */}
    <div className="bg-violet-50 border border-violet-200 px-4 py-3 rounded-lg flex flex-col gap-2 mb-2">
      <div className="text-base font-semibold text-violet-800 flex items-center gap-2">
        <Check className="inline-block h-5 w-5 text-green-500" />
        With a paid subscription, you can:
      </div>
      <ul className="list-disc ml-7 text-sm text-violet-700">
        <li>Select specific courses and quotas</li>
        <li>Apply category-based filters</li>
        <li>View college cut-offs based on state &amp; seat pool</li>
        <li>Get personalized insights for better decision-making</li>
      </ul>
      <div className="mt-1 flex gap-2 items-center">
        <span className="text-lg" role="img" aria-label="unlock">🔓</span>
        <span className="text-violet-700 font-medium">Unlock the full experience by <a href="#" className="underline hover:text-violet-900 transition">subscribing</a> today!</span>
      </div>
    </div>
  </section>
);

export default SelectionSummary;
