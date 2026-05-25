import { PrismaClient, CarTier } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.car.upsert({
    where: { slug: "bmw-m3-g80" },
    update: {},
    create: {
      slug: "bmw-m3-g80",
      name: "BMW M3 G80",
      description: "Sedán deportivo de alto rendimiento.",
      tier: CarTier.A,
      featured: true,
      imageUrl: "/uploads/cars/bmw-m3.jpg",
      topSpeed: 290,
      acceleration: 8.5,
    },
  });
  console.log("Seed completed.");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
