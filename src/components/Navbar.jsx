import { TreePalm } from "lucide-react";
function Navbar() {
  return (
    <>
      <div className="flex justify-between items-center p-3">
        <div className="flex gap-10 items-center">
          <div className="flex gap-2 items-center">
            <div className="text-2xl">
              <TreePalm />
            </div>
            <div className="text-2xl font-semibold">Clause</div>
          </div>
          <div className="flex gap-5 items-center">
            <div className="font-medium">Solution</div>
            <div className="font-medium">Customer</div>
            <div className="font-medium">Pricing</div>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <button className="bg-white px-5 py-2 rounded-xl font-medium text-emerald-950">
            Login
          </button>
          <button className="bg-emerald-950 px-5 py-2 rounded-xl text-teal-500">
            Start Now
          </button>
        </div>
      </div>
    </>
  );
}
export default Navbar;