export default function Divider() {
  return (
    <div className="relative h-28 md:h-40">
      <div
        className="h-full w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/mossresizedrockwalkjpg.jpg.webp')" }}
      />

      <div className="absolute inset-0 bg-black/50" />
    </div>
  );
}
