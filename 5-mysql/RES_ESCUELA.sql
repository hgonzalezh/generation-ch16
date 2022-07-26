-- MySQL Script generated by MySQL Workbench
-- Mon Sep  5 13:25:19 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema escuela
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema escuela
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `escuela` DEFAULT CHARACTER SET utf8 ;
USE `escuela` ;

-- -----------------------------------------------------
-- Table `escuela`.`MATERIA`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `escuela`.`MATERIA` (
  `codigo` INT UNSIGNED NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `version` DECIMAL(2,1) NULL DEFAULT 1.0,
  `grado` INT NULL,
  PRIMARY KEY (`codigo`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `escuela`.`PROFESOR`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `escuela`.`PROFESOR` (
  `idProf` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `MATERIA_codigo` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`idProf`, `MATERIA_codigo`),
  INDEX `fk_PROFESOR_MATERIA1_idx` (`MATERIA_codigo` ASC) VISIBLE,
  CONSTRAINT `fk_PROFESOR_MATERIA1`
    FOREIGN KEY (`MATERIA_codigo`)
    REFERENCES `escuela`.`MATERIA` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `escuela`.`ALUMNO`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `escuela`.`ALUMNO` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `curso` VARCHAR(45) NULL DEFAULT 'ninguno',
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `escuela`.`PROFESOR_has_ALUMNO`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `escuela`.`PROFESOR_has_ALUMNO` (
  `PROFESOR_idProf` INT UNSIGNED NOT NULL,
  `ALUMNO_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`PROFESOR_idProf`, `ALUMNO_id`),
  INDEX `fk_PROFESOR_has_ALUMNO_ALUMNO1_idx` (`ALUMNO_id` ASC) VISIBLE,
  INDEX `fk_PROFESOR_has_ALUMNO_PROFESOR_idx` (`PROFESOR_idProf` ASC) VISIBLE,
  CONSTRAINT `fk_PROFESOR_has_ALUMNO_PROFESOR`
    FOREIGN KEY (`PROFESOR_idProf`)
    REFERENCES `escuela`.`PROFESOR` (`idProf`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_PROFESOR_has_ALUMNO_ALUMNO1`
    FOREIGN KEY (`ALUMNO_id`)
    REFERENCES `escuela`.`ALUMNO` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `escuela`.`ALUMNO_has_MATERIA`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `escuela`.`ALUMNO_has_MATERIA` (
  `ALUMNO_id` INT UNSIGNED NOT NULL,
  `MATERIA_codigo` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`ALUMNO_id`, `MATERIA_codigo`),
  INDEX `fk_ALUMNO_has_MATERIA_MATERIA1_idx` (`MATERIA_codigo` ASC) VISIBLE,
  INDEX `fk_ALUMNO_has_MATERIA_ALUMNO1_idx` (`ALUMNO_id` ASC) VISIBLE,
  CONSTRAINT `fk_ALUMNO_has_MATERIA_ALUMNO1`
    FOREIGN KEY (`ALUMNO_id`)
    REFERENCES `escuela`.`ALUMNO` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ALUMNO_has_MATERIA_MATERIA1`
    FOREIGN KEY (`MATERIA_codigo`)
    REFERENCES `escuela`.`MATERIA` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
