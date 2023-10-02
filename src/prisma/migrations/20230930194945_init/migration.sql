/*
  Warnings:

  - You are about to drop the `_cursoTopersona` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_cursoTopersona` DROP FOREIGN KEY `_cursoTopersona_A_fkey`;

-- DropForeignKey
ALTER TABLE `_cursoTopersona` DROP FOREIGN KEY `_cursoTopersona_B_fkey`;

-- DropTable
DROP TABLE `_cursoTopersona`;
