
import React from "react";
import { Lock, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
  "…and more", // triggers tooltip
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
  <section className="bg-white rounded-xl shadow-lg px-4 md:px-6 py-4 mb-5 border border-gray-100 max-w-2xl mx-auto">
    <TooltipProvider>
      {/* Top - Always shown */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1">
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-700 font-medium hidden sm:block">Your Selection:</span>
          <span className="font-semibold text-base text-gray-800 flex items-center gap-2">
            Rank:
            <span className="bg-purple-100 border border-purple-200 text-purple-700 rounded-full px-2 py-0.5 text-base font-bold shadow-sm ml-1">
              {rank}
            </span>
          </span>
          <span className="font-semibold text-base text-gray-800 flex items-center gap-1">
            Category:
            <span className="bg-blue-100 border border-blue-200 text-blue-700 rounded-full px-2 py-0.5 text-base font-semibold ml-1">
              {category}
            </span>
          </span>
        </div>
        {/* Courses Pills */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-base text-gray-700 font-semibold">Courses:</span>
          {courses.map((c) => (
            <span
              key={c}
              className="bg-green-100 border border-green-200 text-green-800 rounded-full px-3 py-0.5 text-sm font-bold"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
      {/* Accordion - Show more */}
      <Accordion type="single" collapsible className="w-full mt-2">
        <AccordionItem value="details" className="border-b-0">
          <AccordionTrigger className="group px-0 hover:no-underline text-[15px] py-2 font-semibold text-primary flex gap-2 items-center">
            <span className="flex items-center gap-1">
              More Details
            </span>
            <ChevronDown className="h-4 w-4 ml-1 transition-transform duration-200 group-data-[state=open]:rotate-180" />
          </AccordionTrigger>
          <AccordionContent>
            {/* Round */}
            <div className="flex items-center mb-2 gap-2 text-base">
              <span className="text-gray-700 font-medium">Round:</span>
              <span className="bg-pink-100 border border-pink-200 text-pink-700 rounded-full px-3 py-0.5 text-base font-semibold shadow-sm">
                {round}
              </span>
            </div>
            {/* Quota Types */}
            <div className="mb-1">
              <span className="text-gray-600 font-semibold mr-2">Quota Types:</span>
              <div className="flex flex-wrap gap-2 mt-1">
                {quotas.slice(0, 5).map((quota, i) =>
                  quota === "…and more" ? (
                    <Tooltip key={i}>
                      <TooltipTrigger asChild>
                        <span className="px-3 py-1 text-xs rounded-full bg-yellow-50 border border-yellow-200 text-yellow-800 shadow-sm cursor-pointer">
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
            <div className="my-2">
              <span className="text-gray-600 font-semibold mr-2">States Included:</span>
              <span className="inline-block px-3 py-1 text-xs rounded bg-gray-100 text-gray-700 border border-gray-200 shadow-sm mt-1">
                {statesIncluded}
              </span>
            </div>
            {/* College Types */}
            <div className="mb-1">
              <span className="text-gray-600 font-semibold mr-2">College Types:</span>
              <div className="flex flex-wrap gap-2 mt-1">
                {collegeTypes.map((type) => (
                  <span
                    key={type}
                    className="px-3 py-1 text-xs rounded-full bg-blue-50 text-blue-800 border border-blue-200 shadow-sm"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      {/* Warning Card Below */}
      <div className="bg-orange-50 border border-orange-200 px-4 py-3 rounded-lg mt-4 flex gap-3 items-start shadow-sm">
        <Lock className="h-5 w-5 text-orange-500 mt-0.5" />
        <div className="flex-1 text-sm text-orange-800">
          <span className="font-semibold block mb-1">Filter Access Limited</span>
          Note: Filter options (like course or quota selection) are <b>not available</b> in the <b>Free Plan</b>.<br />
          To unlock advanced filtering features and get even more accurate college predictions, please upgrade your plan.
        </div>
      </div>
    </TooltipProvider>
  </section>
);

export default MedicalCollegeSummaryCard;

