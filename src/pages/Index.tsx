
import SelectionSummary from "@/components/SelectionSummary";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-8">
      {/* Selection Summary */}
      <SelectionSummary />

      {/* Result Table Placeholder */}
      <section className="w-full flex flex-col items-center mt-4">
        <div className="bg-yellow-50 shadow-md rounded-xl border border-yellow-200 p-4 md:p-8 max-w-5xl w-full mb-8">
          {/* This can be replaced with your dynamic result table component */}
          <div className="text-center text-yellow-800 text-lg font-semibold mb-2">[Predicted Colleges Result Table Here]</div>
          <div className="text-sm text-yellow-600 mb-2">(This is a placeholder - replace with your dynamic result component!)</div>
        </div>
      </section>
    </div>
  );
};

export default Index;
