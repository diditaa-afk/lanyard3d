import Lanyard from "@/components/ui/Lanyard";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-950 min-h-screen text-zinc-50 font-sans">
      {/* Container wajib dengan tinggi pasti agar objek 3D Lanyard dapat merender */}
      <div className="w-full h-[500px] max-w-md flex items-center justify-center">
        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
      </div>
    </div>
  );
}