/**
 * ANIMATED BACKGROUND - Mesh gradient animado
 *
 * Blobs de color que se mueven lentamente
 * Usa colores de marca: navy, cyan, magenta
 */

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Blob 1 - Navy */}
      <div
        className="absolute h-96 w-96 rounded-full blur-3xl opacity-30 dark:opacity-35"
        style={{
          background: "radial-gradient(circle, #1B1093 0%, transparent 70%)",
          animation: "float1 20s ease-in-out infinite",
          top: "10%",
          left: "10%",
        }}
      />

      {/* Blob 2 - Cyan */}
      <div
        className="absolute h-96 w-96 rounded-full blur-3xl opacity-30 dark:opacity-25"
        style={{
          background: "radial-gradient(circle, #06EAD6 0%, transparent 70%)",
          animation: "float2 25s ease-in-out infinite",
          top: "60%",
          right: "20%",
        }}
      />

      {/* Blob 3 - Magenta */}
      <div
        className="absolute h-96 w-96 rounded-full blur-3xl opacity-30 dark:opacity-15"
        style={{
          background: "radial-gradient(circle, #EC22F2 0%, transparent 70%)",
          animation: "float3 30s ease-in-out infinite",
          bottom: "10%",
          left: "50%",
        }}
      />
    </div>
  );
}
