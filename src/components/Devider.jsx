export default function Divider() {
    return (
      <div className="relative h-64 md:h-88">
        
        <div
          className="h-full w-full bg-cover bg-center"
          style={{ backgroundImage: "url('/mossresizedrockwalkjpg.jpg.webp')" }}
        />
  
        {/* sötétítés */}
        <div className="absolute inset-0 bg-black/50" />
  
      </div>
    );
  }