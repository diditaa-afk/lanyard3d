import Lanyard from "@/components/ui/Lanyard"; 

export default function Home() {
  return (
    // 1. Mengubah "items-center" menjadi "items-start" agar objek ditarik ke ujung atas container
    <div className="flex flex-col flex-1 items-start justify-center bg-transparent min-h-screen w-full">
      
      {/* 2. Menghilangkan "items-center" pada pembungkus Canvas */}
      <div className="w-full h-[500px] max-w-md flex justify-center bg-transparent">
        
        {/* 3. Menurunkan nilai Y kamera menjadi -5 agar objek lanyard terdorong naik ke atas layar */}
        <Lanyard position={[0, 4, 18]} gravity={[0, -40, 0]} transparent={true} />
        
      </div>
    </div>
  );
}