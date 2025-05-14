
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ChevronDown } from "lucide-react";

const mainQuotas = [
  "Aligarh Muslim University (AMU) Quota",
  "All India",
  "Delhi University Quota",
  "Open Seat Quota",
  "Internal - Puducherry UT Domicile",
];
const moreQuotas = [
  "NRI/OCI Quota",
  "Management/Institutional Quota",
  "Other Minority/Special Quotas"
];
const collegeTypes = [
  "Central University", "AIIMS", "JIPMER", "Deemed University", "Employees State Insurance Scheme"
];

export default function SummaryAccordionCard() {
  return (
    <section className="w-full max-w-3xl mx-auto bg-white rounded-2xl shadow-md border border-purple-100 mt-4 mb-4 overflow-hidden">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="summary">
          <div className="flex flex-col md:flex-row md:items-center justify-between px-5 py-4">
            <div className="flex flex-wrap items-center gap-2 md:gap-4">
              <span className="text-gray-900 font-medium text-sm">Rank:</span>
              <span className="bg-purple-100 text-purple-700 rounded-lg px-3 py-1 font-bold shadow text-base">
                250
              </span>
              <span className="hidden md:inline-block">|</span>
              <span className="text-gray-900 font-medium text-sm">Category:</span>
              <span className="bg-blue-50 text-blue-700 rounded-lg px-3 py-1 font-medium shadow text-base">
                Open
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2 mt-2 md:mt-0">
              <span className="text-gray-900 font-medium text-sm">Courses:</span>
              <span className="bg-green-100 text-green-700 font-bold px-3 py-1 rounded-lg text-sm">MBBS</span>
              <span className="bg-green-100 text-green-700 font-bold px-3 py-1 rounded-lg text-sm">BDS</span>
            </div>
            <AccordionTrigger className="flex-none ml-0 md:ml-3 group text-sm text-primary font-semibold hover:no-underline">
              <span className="flex items-center gap-1">
                <ChevronDown className="stroke-[2.5] h-4 w-4 ml-1 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                <span className="text-sky-800">Show Details</span>
              </span>
            </AccordionTrigger>
          </div>
          <AccordionContent className="bg-gray-50 border-t border-gray-200 px-5 py-4">
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <span className="text-gray-800 font-medium">Round:</span>
              <span className="bg-pink-100 text-pink-700 rounded-md px-3 py-1 font-semibold shadow text-sm">
                Round 1 (AIQ - All India Quota)
              </span>
            </div>
            {/* Quota Types */}
            <div className="mb-2">
              <span className="text-gray-700 font-medium">Quota Types:</span>
              <div className="flex flex-wrap gap-2 mt-1">
                {mainQuotas.map((quota) => (
                  <span key={quota} className="px-3 py-1 text-xs rounded-full bg-yellow-50 border border-yellow-100 text-yellow-800 shadow">
                    {quota}
                  </span>
                ))}
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="px-3 py-1 text-xs rounded-full bg-yellow-50 border border-yellow-100 text-yellow-800 shadow cursor-pointer">
                        ...and more
                      </span>
                    </TooltipTrigger>
                    <TooltipContent side="top">
                      {moreQuotas.map((q, idx) => <div key={idx}>{q}</div>)}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
            {/* States Included */}
            <div className="mb-2 flex flex-wrap gap-2 items-center">
              <span className="text-gray-700 font-medium">States Included:</span>
              <span className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-md border border-gray-200">
                35 states/UTs (e.g., Maharashtra, Rajasthan, Delhi, Tamil Nadu, etc.)
              </span>
            </div>
            {/* College Types */}
            <div className="mb-1">
              <span className="text-gray-700 font-medium">College Types:</span>
              <div className="flex flex-wrap gap-2 mt-1">
                {collegeTypes.map((type) => (
                  <span key={type} className="px-3 py-1 text-xs rounded-full bg-blue-50 text-blue-800 border border-blue-100 shadow">{type}</span>
                ))}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
