import Lanyard from "@/components/ui/Lanyard"; 

export default function Home() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-transparent overflow-hidden">
      <div className="w-full h-full flex items-center justify-center bg-transparent">
        <Lanyard transparent={true} />
      </div>
    </div>
  );
}