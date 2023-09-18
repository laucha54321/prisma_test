/*
  Warnings:

  - You are about to drop the `cursos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `cursos`;

-- CreateTable
CREATE TABLE `curso` (
    `ID` INTEGER NOT NULL AUTO_INCREMENT,
    `descripcion` VARCHAR(255) NOT NULL,
    `nombre` VARCHAR(25) NOT NULL,

    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `persona` (
    `ID` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(15) NOT NULL,
    `apellido` VARCHAR(15) NOT NULL,
    `email` VARCHAR(15) NOT NULL,
    `fecha_nacimiento` DATE NOT NULL,
    `fecha_creacion` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
