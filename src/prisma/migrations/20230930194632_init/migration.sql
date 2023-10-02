-- CreateTable
CREATE TABLE `cursoPersona` (
    `ID_Persona` VARCHAR(191) NOT NULL,
    `ID_Curso` VARCHAR(191) NOT NULL,
    `categoria` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `cursoPersona_ID_Persona_key`(`ID_Persona`),
    UNIQUE INDEX `cursoPersona_ID_Curso_key`(`ID_Curso`),
    PRIMARY KEY (`ID_Persona`, `ID_Curso`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `cursoPersona` ADD CONSTRAINT `cursoPersona_ID_Persona_fkey` FOREIGN KEY (`ID_Persona`) REFERENCES `persona`(`ID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cursoPersona` ADD CONSTRAINT `cursoPersona_ID_Curso_fkey` FOREIGN KEY (`ID_Curso`) REFERENCES `curso`(`ID`) ON DELETE RESTRICT ON UPDATE CASCADE;
