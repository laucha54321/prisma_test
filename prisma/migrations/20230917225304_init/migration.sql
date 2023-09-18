/*
  Warnings:

  - The primary key for the `curso` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `nota` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `descripcion` on the `nota` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(20)`.
  - The primary key for the `persona` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE `_cursoTopersona` DROP FOREIGN KEY `_cursoTopersona_A_fkey`;

-- DropForeignKey
ALTER TABLE `_cursoTopersona` DROP FOREIGN KEY `_cursoTopersona_B_fkey`;

-- AlterTable
ALTER TABLE `_cursoTopersona` MODIFY `A` VARCHAR(191) NOT NULL,
    MODIFY `B` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `curso` DROP PRIMARY KEY,
    MODIFY `ID` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`ID`);

-- AlterTable
ALTER TABLE `nota` DROP PRIMARY KEY,
    MODIFY `ID` VARCHAR(191) NOT NULL,
    MODIFY `descripcion` VARCHAR(20) NOT NULL,
    ADD PRIMARY KEY (`ID`);

-- AlterTable
ALTER TABLE `persona` DROP PRIMARY KEY,
    MODIFY `ID` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`ID`);

-- AddForeignKey
ALTER TABLE `_cursoTopersona` ADD CONSTRAINT `_cursoTopersona_A_fkey` FOREIGN KEY (`A`) REFERENCES `curso`(`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_cursoTopersona` ADD CONSTRAINT `_cursoTopersona_B_fkey` FOREIGN KEY (`B`) REFERENCES `persona`(`ID`) ON DELETE CASCADE ON UPDATE CASCADE;
