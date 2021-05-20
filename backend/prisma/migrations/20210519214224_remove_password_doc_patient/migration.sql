/*
  Warnings:

  - You are about to drop the column `password` on the `Doctor` table. All the data in the column will be lost.
  - You are about to alter the column `crm` on the `Doctor` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to drop the column `password` on the `Patient` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('PATIENT', 'ADMIN', 'DOCTOR');

-- AlterTable
ALTER TABLE "Adminstration" ADD COLUMN     "role" "Role" NOT NULL DEFAULT E'ADMIN';

-- AlterTable
ALTER TABLE "Appointment" ADD COLUMN     "happened" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Doctor" DROP COLUMN "password",
ADD COLUMN     "role" "Role" NOT NULL DEFAULT E'DOCTOR',
ALTER COLUMN "crm" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "Patient" DROP COLUMN "password",
ADD COLUMN     "role" "Role" NOT NULL DEFAULT E'PATIENT';
