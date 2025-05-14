
import React from "react";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";

const mockColleges = [
  {
    name: "JIPMER PUDUCHERRY, Dhanvantari Nagar Gorimedu Puducherry, Puducherry, 605006",
    code: "200521",
    course: "MBBS",
    quotas: [
      { quota: "Open Seat Quota", category: "Open", rank2024: 350, rank2023: 277 },
      { quota: "Internal - Puducherry UT Domicile", category: "Open", rank2024: 22602, rank2023: 10667 }
    ]
  },
  {
    name: "AIIMS, Jodhpur, BASNI PHASE - II, JODHPUR-342005, Rajasthan, 342005",
    code: "200505",
    course: "MBBS",
    quotas: [
      { quota: "Open Seat Quota", category: "Open", rank2024: 374, rank2023: 497 }
    ]
  },
  {
    name: "University College of Medical Sciences, New Delhi, Dilshad Garden, Delhi (NCT), 110095",
    code: "200460",
    course: "MBBS",
    quotas: [
      { quota: "All India", category: "Open", rank2024: 390, rank2023: 304 },
      { quota: "Delhi University Quota", category: "Open", rank2024: 3275, rank2023: 3022 },
      { quota: "Delhi NCR Children/Widows of Personnel of the Armed Forces (CW) Quota", category: "Open", rank2024: 212964, rank2023: 299994 }
    ]
  },
  {
    name: "AIIMS-Bhopal, SAKET NAGAR BHOPAL, Madhya Pradesh, 462020",
    code: "200653",
    course: "MBBS",
    quotas: [
      { quota: "Open Seat Quota", category: "Open", rank2024: 510, rank2023: 558 }
    ]
  },
  {
    name: "AIIMS, Bhubaneswar, AT - Sijua, POST - DUMUDUMA, BHUBANESWAR-751019, Odisha, 751019",
    code: "200564",
    course: "MBBS",
    quotas: [
      { quota: "Open Seat Quota", category: "Open", rank2024: 594, rank2023: 491 }
    ]
  }
];

export default function ResponsiveResultTable() {
  return (
    <section className="w-full flex flex-col items-center mt-2">
      {/* Desktop Table */}
      <div className="hidden md:block bg-[#FEF7CD] shadow rounded-xl border border-yellow-200 p-0 max-w-6xl w-full mb-3 overflow-auto">
        <Table className="min-w-[860px]">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[310px] border-r border-yellow-300 text-gray-700 bg-[#FEF7CD] font-semibold text-[15px]">
                College
              </TableHead>
              <TableHead className="w-[90px] border-r border-yellow-300 text-gray-700 bg-[#FEF7CD] font-semibold text-[15px]">
                Course
              </TableHead>
              <TableHead className="w-[190px] border-r border-yellow-300 text-gray-700 bg-[#FEF7CD] font-semibold text-[15px]">
                Quota
              </TableHead>
              <TableHead className="w-[80px] border-r border-yellow-300 text-gray-700 bg-[#FEF7CD] font-semibold text-[15px]">
                Category
              </TableHead>
              <TableHead className="w-[70px] text-purple-900 text-center bg-[#FEF7CD] font-semibold">
                2024
              </TableHead>
              <TableHead className="w-[70px] text-purple-900 text-center bg-[#FEF7CD] font-semibold">
                2023
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockColleges.map((college) =>
              college.quotas.map((q, idx) => (
                <TableRow key={`${college.code}-${q.quota}`}>
                  {idx === 0 ? (
                    <TableCell rowSpan={college.quotas.length} className="align-top min-w-[260px] border-r border-yellow-200 bg-white">
                      <div>
                        <div className="font-semibold text-[15px] text-[#1A1F2C] leading-snug">{college.name}</div>
                        <div className="text-xs text-gray-500 mt-1">College Code: {college.code}</div>
                      </div>
                    </TableCell>
                  ) : null}
                  <TableCell className="text-[15px] border-r border-yellow-100 bg-white">{college.course}</TableCell>
                  <TableCell className="border-r border-yellow-100 bg-white">
                    <span className="block text-xs font-medium text-yellow-900 px-2 py-1 rounded bg-yellow-50 border border-yellow-200 w-fit">{q.quota}</span>
                  </TableCell>
                  <TableCell className="bg-white">
                    <span className="inline-block text-xs font-medium bg-blue-50 text-blue-700 px-2 py-1 rounded">{q.category}</span>
                  </TableCell>
                  <TableCell className="text-center font-bold text-purple-900 bg-white">{q.rank2024}</TableCell>
                  <TableCell className="text-center text-purple-700 bg-white">{q.rank2023}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
      {/* Mobile Table alternative */}
      <div className="md:hidden grid gap-4 w-full px-0">
        {mockColleges.map((college) =>
          college.quotas.map((q, idx) => (
            <div
              key={`${college.code}-${q.quota}`}
              className="bg-white border border-yellow-200 rounded-lg shadow-sm p-3 flex flex-col space-y-0.5"
            >
              <div className="font-semibold text-purple-900 text-sm mb-1 leading-tight">{college.name}</div>
              <div className="text-xs text-gray-500 mb-1">Code: {college.code}</div>
              <div className="flex flex-wrap gap-1 mb-1">
                <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded text-xs">{college.course}</span>
                <span className="bg-yellow-50 text-yellow-900 border border-yellow-100 px-2 py-0.5 rounded text-xs">{q.quota}</span>
                <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded text-xs">{q.category}</span>
              </div>
              <div className="flex gap-3 mt-2">
                <span className="inline-block font-bold text-xs text-purple-800">2024:</span>
                <span className="inline-block text-xs text-purple-900 mr-3">{q.rank2024}</span>
                <span className="inline-block font-bold text-xs text-purple-700">2023:</span>
                <span className="inline-block text-xs text-purple-700">{q.rank2023}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
