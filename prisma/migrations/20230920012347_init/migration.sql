/*
  Warnings:

  - You are about to drop the column `hashContrasena` on the `persona` table. All the data in the column will be lost.
  - Added the required column `hash_contrasena` to the `persona` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `persona` DROP COLUMN `hashContrasena`,
    ADD COLUMN `hash_contrasena` VARCHAR(191) NOT NULL;
