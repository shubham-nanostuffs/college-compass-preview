
import React from "react";
import { ArrowLeft } from "lucide-react";
import ResponsiveResultTable from "@/components/ResponsiveResultTable";
import FilterLimitedNotice from "@/components/FilterLimitedNotice";
import { Button } from "@/components/ui/button";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#FDFCFD] pb-16 w-full">
      {/* Top Navigation and Header */}
      <div className="w-full flex flex-col items-center relative max-w-6xl mx-auto">
        {/* Topbar */}
        <div className="w-full flex items-center mt-7 mb-2 px-2 max-w-6xl">
          <Button
            variant="outline"
            size="icon"
            className="mr-4"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="text-[#9b87f5] h-5 w-5" />
          </Button>
          {/* Logo Placeholder */}
          <span className="w-9 h-9 bg-gradient-to-br from-[#9b87f5] to-[#7347d6] rounded-full flex-shrink-0 mr-3 flex items-center justify-center font-bold text-white text-lg">
            {/* Could add logo here */}
            C
          </span>
          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-[#432076]">
            NEET College Predictor
          </h1>
        </div>

        {/* Subheading */}
        <div className="w-full px-2 flex md:items-center flex-col md:flex-row md:justify-between max-w-4xl mb-4">
          <div>
            <p className="text-gray-800 text-base md:text-lg font-normal">
              <span className="font-semibold">Hello User</span>, based on your <span className="font-bold text-[#432076]">NEET rank of <span className="bg-yellow-100 px-2 rounded text-[#1A1F2C]">250</span></span> category as <span className="font-bold text-[#432076]">Open</span> and <span className="font-bold text-[#432076]">Round 1</span>, here is the list of colleges you may get:
            </p>
          </div>
          <div className="flex items-center justify-end mt-3 md:mt-0">
            <Button variant="outline" className="border-2 border-[#9B87F5] text-[#9B87F5] hover:bg-[#e5deff] transition font-semibold px-5 py-2">
              <span className="mr-2">🔄</span> Predict again
            </Button>
          </div>
        </div>

        {/* Search Filters */}
        <div className="w-full px-2 flex flex-col md:flex-row gap-3 mb-3 max-w-4xl">
          <select className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-72 focus:border-[#9B87F5]">
            <option value="">Select Courses</option>
            <option value="mbbs">MBBS</option>
            <option value="bds">BDS</option>
          </select>
          <select className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-72 focus:border-[#9B87F5]">
            <option value="">Select Quotas</option>
            <option value="open-seats">Open Seat Quota</option>
            <option value="internal-domicile">Internal Domicile</option>
          </select>
        </div>
      </div>

      {/* Filter Access Limited Card */}
      <div className="w-full max-w-4xl mb-5 px-2">
        <FilterLimitedNotice />
      </div>

      {/* Responsive College Table */}
      <div className="w-full flex flex-col items-center max-w-6xl px-2">
        <ResponsiveResultTable />
        {/* Show More button */}
        <Button className="mt-8 rounded-3xl text-base font-semibold bg-gradient-to-r from-[#9b87f5] via-[#7347d6] to-[#432076] py-3 px-8 shadow-md hover:opacity-90 text-white mx-auto transition">
          Show More
        </Button>
      </div>
    </div>
  );
}
