/*
  Warnings:

  - Added the required column `hashContrasena` to the `persona` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `persona` ADD COLUMN `hashContrasena` VARCHAR(191) NOT NULL;
