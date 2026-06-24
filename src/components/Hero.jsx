import { Flame } from "lucide-react";
function Heros() {
  return (
    <>
      <div className="bg-[#f6f6f4] h-auto flex justify-center items-center py-16">
        <div>
          <div className="flex justify-center mb-4">
            <button className="bg-white px-4 py-2 rounded-lg border border-gray-300 text-emerald-950 font-medium text-sm flex items-center gap-2">
              <Flame /> CREATE FOR FAST
            </button>
          </div>
          <div className="text-5xl font-bold text-center max-w-2xl">
            One tool to manage all your contracts and team
          </div>
          <div className="text-lg text-gray-600 mt-4 text-center max-w-3xl">
            Clause helps legal teams work faster, smarter and more efficiently,
            delivering the visibility and data-driven insights to mitigate risk
            and ensure compliance.
          </div>
          <div className="flex gap-4 justify-center mt-8">
            <button className="bg-emerald-950 px-8 py-3 rounded-2xl text-white font-medium">
              Start for Free
            </button>
            <button className="px-8 py-3 rounded-2xl text-emerald-950 border-2 border-emerald-950 font-medium">
              Get a Demo
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Heros;