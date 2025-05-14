
import SummaryAccordionCard from "@/components/SummaryAccordionCard";
import FilterLimitedNotice from "@/components/FilterLimitedNotice";
import ResponsiveResultTable from "@/components/ResponsiveResultTable";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 pt-7 pb-16 px-2">
      {/* Summary Card - accordion style */}
      <SummaryAccordionCard />
      {/* Filter Access Limited Notice - separate */}
      <FilterLimitedNotice />
      {/* Results Table */}
      <ResponsiveResultTable />
    </div>
  );
}
