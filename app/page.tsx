import Lanyard from "@/components/ui/Lanyard"; 

export default function Home() {
  return (
    // Ubah bagian ini menjadi bg-transparent agar latar belakangnya hilang
    <div className="flex flex-col flex-1 items-center justify-center bg-transparent min-h-screen">
      <div className="w-full h-[500px] max-w-md flex items-center justify-center">
        <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} transparent={true} />
      </div>
    </div>
  );
}