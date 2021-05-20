/*
  Warnings:

  - The `clinicId` column on the `Appointment` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Clinic` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Clinic` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `clinicId` column on the `Doctor` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `clinicId` column on the `Patient` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `clinicId` on the `Adminstration` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Adminstration" DROP CONSTRAINT "Adminstration_clinicId_fkey";

-- DropForeignKey
ALTER TABLE "Appointment" DROP CONSTRAINT "Appointment_clinicId_fkey";

-- DropForeignKey
ALTER TABLE "Doctor" DROP CONSTRAINT "Doctor_clinicId_fkey";

-- DropForeignKey
ALTER TABLE "Patient" DROP CONSTRAINT "Patient_clinicId_fkey";

-- AlterTable
ALTER TABLE "Adminstration" DROP COLUMN "clinicId",
ADD COLUMN     "clinicId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Appointment" DROP COLUMN "clinicId",
ADD COLUMN     "clinicId" INTEGER;

-- AlterTable
ALTER TABLE "Clinic" DROP CONSTRAINT "Clinic_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Doctor" DROP COLUMN "clinicId",
ADD COLUMN     "clinicId" INTEGER;

-- AlterTable
ALTER TABLE "Patient" DROP COLUMN "clinicId",
ADD COLUMN     "clinicId" INTEGER;

-- AddForeignKey
ALTER TABLE "Adminstration" ADD FOREIGN KEY ("clinicId") REFERENCES "Clinic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD FOREIGN KEY ("clinicId") REFERENCES "Clinic"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Doctor" ADD FOREIGN KEY ("clinicId") REFERENCES "Clinic"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Patient" ADD FOREIGN KEY ("clinicId") REFERENCES "Clinic"("id") ON DELETE SET NULL ON UPDATE CASCADE;
