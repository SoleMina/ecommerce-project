import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto">
      <h1 className="mb-4 mt-6 text-center text-3xl tracking-tight font-extrabold lg:text-4xl text-blue-600 dark:text-blue-700">
        Welcome to Karianka Shop
      </h1>
      <Image
        src="https://images.falabella.com/v3/assets/bltf4ed0b9a176c126e/bltde73eecdb42d2214/66abb747bc6ec2037ef9b70d/hh-020824-venta-final.png?disable=upscale&auto=webp&quality=70&width=1920"
        alt="Banner"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
}
