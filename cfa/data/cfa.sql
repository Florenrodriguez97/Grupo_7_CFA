-- MySQL Script generated by MySQL Workbench
-- Fri Mar 12 21:29:42 2021
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema cfa
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema cfa
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `cfa` DEFAULT CHARACTER SET latin1 ;
USE `cfa` ;

-- -----------------------------------------------------
-- Table `cfa`.`category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cfa`.`category` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC))
ENGINE = InnoDB
AUTO_INCREMENT = 11
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `cfa`.`product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cfa`.`product` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(200) NOT NULL,
  `detail` VARCHAR(900) NOT NULL,
  `image` VARCHAR(500) NOT NULL,
  `price` INT(11) NOT NULL,
  `offer` INT(11) NOT NULL,
  `featured` INT(11) NOT NULL,
  `id_category` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  INDEX `id_category_idx` (`id_category` ASC),
  CONSTRAINT `id_category`
    FOREIGN KEY (`id_category`)
    REFERENCES `cfa`.`category` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 41
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `cfa`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cfa`.`users` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `last_name` VARCHAR(100) NOT NULL,
  `dni` INT(11) NULL DEFAULT NULL,
  `avatar` VARCHAR(500) NOT NULL,
  `admin` TINYINT(4) NOT NULL,
  `province` VARCHAR(150) NULL DEFAULT NULL,
  `location` VARCHAR(150) NULL DEFAULT NULL,
  `address` VARCHAR(150) NULL DEFAULT NULL,
  `phone` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `cfa`.`cart`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cfa`.`cart` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `id_user` INT(11) NOT NULL,
  `id_product` INT(11) NOT NULL,
  `quantity` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  INDEX `id_user_idx` (`id_user` ASC),
  INDEX `id_product_idx` (`id_product` ASC),
  CONSTRAINT `id_product`
    FOREIGN KEY (`id_product`)
    REFERENCES `cfa`.`product` (`id`),
  CONSTRAINT `id_user`
    FOREIGN KEY (`id_user`)
    REFERENCES `cfa`.`users` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `cfa`.`combo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cfa`.`combo` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `cfa`.`product_combo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cfa`.`product_combo` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `id_product` INT(11) NOT NULL,
  `id_combo` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  INDEX `id_product_combo_idx` (`id_product` ASC),
  INDEX `id_combo_product_idx` (`id_combo` ASC),
  CONSTRAINT `id_combo_product`
    FOREIGN KEY (`id_combo`)
    REFERENCES `cfa`.`combo` (`id`),
  CONSTRAINT `id_product_combo`
    FOREIGN KEY (`id_product`)
    REFERENCES `cfa`.`product` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `cfa`.`purchase_history`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cfa`.`purchase_history` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `id_user` INT(11) NOT NULL,
  `id_product` INT(11) NOT NULL,
  `price` INT(11) NOT NULL,
  `quantity` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  INDEX `id_user_idx` (`id_user` ASC),
  INDEX `id_product_idx` (`id_product` ASC),
  CONSTRAINT `id_product_purchase`
    FOREIGN KEY (`id_product`)
    REFERENCES `cfa`.`product` (`id`),
  CONSTRAINT `id_user_purchase`
    FOREIGN KEY (`id_user`)
    REFERENCES `cfa`.`users` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
