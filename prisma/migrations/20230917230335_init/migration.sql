/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `persona` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `ID_Curso` to the `nota` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ID_Persona` to the `nota` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `nota` ADD COLUMN `ID_Curso` VARCHAR(191) NOT NULL,
    ADD COLUMN `ID_Persona` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `persona_email_key` ON `persona`(`email`);

-- CreateIndex
CREATE INDEX `persona_email_idx` ON `persona`(`email`);

-- AddForeignKey
ALTER TABLE `nota` ADD CONSTRAINT `nota_ID_Persona_fkey` FOREIGN KEY (`ID_Persona`) REFERENCES `persona`(`ID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `nota` ADD CONSTRAINT `nota_ID_Curso_fkey` FOREIGN KEY (`ID_Curso`) REFERENCES `curso`(`ID`) ON DELETE RESTRICT ON UPDATE CASCADE;
