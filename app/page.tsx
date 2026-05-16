import Lanyard from "@/components/ui/Lanyard"; 

export default function Home() {
  return (
    // 1. Mengembalikan "items-center" agar posisi horizontal kembali ke tengah layar
    <div className="flex flex-col flex-1 items-center justify-start bg-transparent min-h-screen w-full pt-4">
      
      {/* 2. Menambahkan pembungkus div dengan posisi relatif */}
      <div className="w-full h-[600px] max-w-md flex justify-center bg-transparent relative">
        
        {/* 3. Menghapus properti position kustom di sini agar menggunakan setelan default Lanyard.tsx yang stabil */}
        <Lanyard gravity={[0, -40, 0]} transparent={true} />
        
      </div>
    </div>
  );
}