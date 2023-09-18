-- CreateTable
CREATE TABLE `_cursoTopersona` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_cursoTopersona_AB_unique`(`A`, `B`),
    INDEX `_cursoTopersona_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_cursoTopersona` ADD CONSTRAINT `_cursoTopersona_A_fkey` FOREIGN KEY (`A`) REFERENCES `curso`(`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_cursoTopersona` ADD CONSTRAINT `_cursoTopersona_B_fkey` FOREIGN KEY (`B`) REFERENCES `persona`(`ID`) ON DELETE CASCADE ON UPDATE CASCADE;
