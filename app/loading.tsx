import { FumeLoader } from "@/components/ui/fume-loader";

export const Loading = () => (
  <div className="grid min-h-[55vh] place-items-center bg-white px-4">
    <FumeLoader />
  </div>
);

// Next.js App Router requires a default export for route loading files.
export default Loading;
