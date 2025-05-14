
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
      <div className="bg-[hsl(47,88%,96%)] shadow-md rounded-xl border border-yellow-200 p-0 max-w-6xl w-full mb-8 overflow-x-auto">
        <Table className="min-w-[720px]">
          <TableHeader>
            <TableRow className="bg-[hsl(47,93%,89%)]">
              <TableHead className="w-[260px] text-gray-700">College</TableHead>
              <TableHead className="w-[80px] text-gray-700">Course</TableHead>
              <TableHead className="w-[170px] text-gray-700">Quota</TableHead>
              <TableHead className="w-[80px] text-gray-700">Category</TableHead>
              <TableHead className="w-[65px] text-purple-800 text-center">2024</TableHead>
              <TableHead className="w-[65px] text-purple-800 text-center">2023</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockColleges.map((college) =>
              college.quotas.map((q, idx) => (
                <TableRow key={`${college.code}-${q.quota}`}>
                  {idx === 0 ? (
                    <TableCell rowSpan={college.quotas.length} className="align-top min-w-[260px]">
                      <div>
                        <div className="font-semibold text-[15px] text-purple-900 leading-snug">{college.name}</div>
                        <div className="text-xs text-gray-500 mt-1">College Code: {college.code}</div>
                      </div>
                    </TableCell>
                  ) : null}
                  <TableCell className="text-[15px]">{college.course}</TableCell>
                  <TableCell>
                    <span className="block text-xs font-medium text-yellow-900 px-2 py-1 rounded bg-yellow-50 border border-yellow-100 w-fit">{q.quota}</span>
                  </TableCell>
                  <TableCell>
                    <span className="inline-block text-xs font-medium bg-blue-50 text-blue-700 px-2 py-1 rounded">{q.category}</span>
                  </TableCell>
                  <TableCell className="text-center font-bold text-purple-800">{q.rank2024}</TableCell>
                  <TableCell className="text-center text-purple-600">{q.rank2023}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
        {/* Mobile Table alternative */}
        <div className="md:hidden flex flex-col gap-4 p-3">
          {mockColleges.map((college) =>
            college.quotas.map((q, idx) => (
              <div key={`${college.code}-${q.quota}`} className="bg-white rounded-md border border-yellow-100 shadow-sm p-3 flex flex-col text-sm">
                <div className="font-semibold text-purple-900 mb-1">{college.name}</div>
                <div className="text-xs text-gray-500 mb-2">Code: {college.code}</div>
                <div className="flex flex-wrap gap-1 mb-2">
                  <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded">{college.course}</span>
                  <span className="bg-yellow-50 text-yellow-900 border border-yellow-100 px-2 py-0.5 rounded">{q.quota}</span>
                  <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded">{q.category}</span>
                </div>
                <div>
                  <span className="inline-block mr-2 font-bold text-xs text-purple-800">2024:</span>
                  <span className="inline-block mr-2">{q.rank2024}</span>
                  <span className="inline-block font-bold text-xs text-purple-600">2023:</span>
                  <span className="inline-block">{q.rank2023}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
