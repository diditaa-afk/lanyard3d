import Lanyard from "@/components/ui/Lanyard"; 

export default function Home() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-transparent">
      <div className="w-full h-[600px] flex items-center justify-center bg-transparent">
        <Lanyard transparent={true} />
      </div>
    </div>
  );
}