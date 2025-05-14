
import React from "react";
import { Lock } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const rank = 250;
const category = "Open";
const round = "Round 1 (AIQ - All India Quota)";
const courses = ["MBBS", "BDS"];
const quotas = [
  "Aligarh Muslim University (AMU) Quota",
  "All India",
  "Delhi University Quota",
  "Open Seat Quota",
  "Internal - Puducherry UT Domicile",
  "…and more", // last item triggers tooltip
];
const quotasTooltip = [
  "Internal - Puducherry UT Domicile",
  "…and more",
];
const quotasTooltipRest = [
  "Other Minority/Special Quotas",
  "NRI/OCI Quota",
  "Management/Institutional Quota",
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

const MedicalCollegeSummaryCard = () => (
  <section className="bg-white shadow-lg rounded-2xl px-6 md:px-10 py-7 md:py-10 mb-8 border border-gray-100 max-w-3xl mx-auto">
    <TooltipProvider>
      {/* User Info Section */}
      <div className="mb-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="block text-lg font-medium text-gray-800 mb-2">
              Hello User, based on your selected preferences, here is a personalized list of colleges you may get:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
              {/* Left: Rank, Category, Round */}
              <div>
                <div className="flex items-center mb-1 text-base font-semibold">
                  <span className="mr-2">Rank:</span>
                  <span className="bg-purple-50 text-purple-700 rounded px-2 py-0.5 font-bold shadow-sm">{rank}</span>
                </div>
                <div className="flex items-center mb-1 text-base font-semibold">
                  <span className="mr-2">Category:</span>
                  <span className="bg-blue-50 text-blue-700 rounded px-2 py-0.5 font-bold shadow-sm">{category}</span>
                </div>
                <div className="flex items-center text-base font-semibold">
                  <span className="mr-2">Round:</span>
                  <span className="bg-pink-100 text-pink-700 rounded px-2 py-0.5 font-semibold shadow-sm">
                    {round}
                  </span>
                </div>
              </div>
              {/* Right: Courses */}
              <div>
                <div className="flex items-center mb-1 text-base font-semibold">
                  <span>Courses Selected:</span>
                  <div className="ml-2 flex gap-2">
                    {courses.map((c, i) => (
                      <span
                        key={c}
                        className="bg-green-50 text-green-700 rounded px-3 py-0.5 font-bold border border-green-100 shadow-sm"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quota Types Considered */}
      <div className="mb-4">
        <div className="font-semibold text-gray-700 mb-1">Quota Types Considered:</div>
        <div className="flex flex-wrap gap-2">
          {quotas.slice(0, 5).map((quota, i) =>
            quota === "…and more" ? (
              <Tooltip key={i}>
                <TooltipTrigger asChild>
                  <span
                    className="px-3 py-1 text-xs rounded-full bg-yellow-50 text-yellow-800 border border-yellow-200 cursor-pointer shadow-sm"
                  >
                    {quota}
                  </span>
                </TooltipTrigger>
                <TooltipContent className="bg-white shadow px-4 py-2 rounded">
                  <div className="text-sm text-yellow-800">
                    {quotasTooltipRest.map((q, idx) => (
                      <div key={idx}>{q}</div>
                    ))}
                  </div>
                </TooltipContent>
              </Tooltip>
            ) : (
              <span
                key={i}
                className="px-3 py-1 text-xs rounded-full bg-yellow-50 text-yellow-800 border border-yellow-200 shadow-sm"
              >
                {quota}
              </span>
            )
          )}
        </div>
      </div>

      {/* States Included */}
      <div className="mb-4">
        <div className="font-semibold text-gray-700 mb-1">States Included:</div>
        <span className="inline-block px-3 py-1 text-xs rounded bg-gray-100 text-gray-700 border border-gray-200 shadow-sm">{statesIncluded}</span>
      </div>

      {/* College Types Considered */}
      <div className="mb-7">
        <div className="font-semibold text-gray-700 mb-1">College Types Considered:</div>
        <div className="flex flex-wrap gap-2">
          {collegeTypes.map((type, i) => (
            <span
              key={type}
              className="px-3 py-1 text-xs rounded-full bg-blue-50 text-blue-800 border border-blue-200 shadow-sm"
            >
              {type}
            </span>
          ))}
        </div>
      </div>

      {/* Warning Card: Filter Access Limited */}
      <div className="bg-orange-50 border border-orange-200 px-4 py-4 rounded-lg mb-2 flex flex-col sm:flex-row gap-3 items-start sm:items-center shadow-[0_3px_10px_0_rgba(255,183,77,0.08)]">
        <div className="flex items-center font-semibold text-orange-700 text-base mb-2 sm:mb-0">
          <Lock className="h-5 w-5 mr-2 inline-block" />
          Filter Access Limited
        </div>
        <div className="text-sm text-orange-800 flex-1">
          <span className="block font-semibold mb-1">Note:</span>
          Filter options (like course or quota selection) are <b>not available</b> in the <b>Free Plan</b>.
          <br />
          To unlock advanced filtering features and get even more accurate college predictions, please upgrade your plan.
        </div>
      </div>
    </TooltipProvider>
  </section>
);

export default MedicalCollegeSummaryCard;
