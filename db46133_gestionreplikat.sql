-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 14-01-2014 a las 00:46:54
-- Versión del servidor: 5.6.12-log
-- Versión de PHP: 5.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `db46133_gestionreplikat`
--
CREATE DATABASE IF NOT EXISTS `db46133_gestionreplikat` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `db46133_gestionreplikat`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE IF NOT EXISTS `clientes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `apellido` varchar(50) DEFAULT NULL,
  `empresa` varchar(50) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  `comentarios` varchar(1000) DEFAULT NULL,
  `direccion` varchar(1000) DEFAULT NULL,
  `deshabilitado` bit(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id`, `nombre`, `apellido`, `empresa`, `email`, `telefono`, `comentarios`, `direccion`, `deshabilitado`) VALUES
(1, 'Miguel', 'Galante', 'Replikat', 'mgalante@gmail.com', '44326985', 'Buen cliente', NULL, b'0'),
(2, 'Mirta', 'Armoza', 'Aryger', 'mirtaarmoza@gmail.com', '1563006200', 'Ok', NULL, b'0');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ordendecompraitems`
--

CREATE TABLE IF NOT EXISTS `ordendecompraitems` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ordendecompra_id` int(11) DEFAULT NULL,
  `pieza_id` int(11) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `precio_unitario` decimal(8,2) DEFAULT NULL,
  `deshabilitado` bit(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ordendecompras`
--

CREATE TABLE IF NOT EXISTS `ordendecompras` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `numero` varchar(20) DEFAULT NULL,
  `proveedor_id` int(11) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `fecha_recepcion_estimada` date DEFAULT NULL,
  `fecha_recepcion_real` date DEFAULT NULL,
  `estado` int(11) DEFAULT NULL,
  `deshabilitado` bit(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidoitems`
--

CREATE TABLE IF NOT EXISTS `pedidoitems` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pedido_id` int(11) NOT NULL,
  `producto_id` int(11) NOT NULL,
  `precio_unitario` decimal(18,2) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `deshabilitado` bit(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `pedido_id` (`pedido_id`),
  KEY `producto_id` (`producto_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE IF NOT EXISTS `pedidos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `codigo` int(11) DEFAULT NULL,
  `cliente_id` int(11) NOT NULL,
  `fecha_pedido` date NOT NULL,
  `fecha_entrega` date NOT NULL,
  `adelanto` decimal(18,2) NOT NULL,
  `restoabonado` decimal(18,2) DEFAULT NULL,
  `comentarios` varchar(1000) DEFAULT NULL,
  `statuspedido_id` int(11) DEFAULT NULL,
  `deshabilitado` bit(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_pedido_cliente` (`cliente_id`),
  KEY `statuspedido_id` (`statuspedido_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Volcado de datos para la tabla `pedidos`
--

INSERT INTO `pedidos` (`id`, `codigo`, `cliente_id`, `fecha_pedido`, `fecha_entrega`, `adelanto`, `restoabonado`, `comentarios`, `statuspedido_id`, `deshabilitado`) VALUES
(1, NULL, 1, '2013-10-19', '2013-10-31', '5000.00', '0.00', 'entrega en taller', 1, b'0'),
(2, 0, 1, '2013-02-02', '2013-02-02', '1000.00', '10.00', 'LAla', 2, b'0');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `piezas`
--

CREATE TABLE IF NOT EXISTS `piezas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `codigo` int(11) NOT NULL,
  `descripcion` varchar(20) DEFAULT NULL,
  `precio` decimal(18,2) DEFAULT NULL,
  `stockactual` int(11) NOT NULL,
  `stockminimo` int(11) NOT NULL,
  `stockmaximo` int(11) NOT NULL,
  `deshabilitado` bit(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Volcado de datos para la tabla `piezas`
--

INSERT INTO `piezas` (`id`, `codigo`, `descripcion`, `precio`, `stockactual`, `stockminimo`, `stockmaximo`, `deshabilitado`) VALUES
(1, 100, 'Barra de acero 8mm', '140.00', 0, 0, 0, b'0');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productopiezas`
--

CREATE TABLE IF NOT EXISTS `productopiezas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `producto_id` int(11) NOT NULL,
  `pieza_id` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `deshabilitado` bit(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `producto_id` (`producto_id`),
  KEY `pieza_id` (`pieza_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Volcado de datos para la tabla `productopiezas`
--

INSERT INTO `productopiezas` (`id`, `producto_id`, `pieza_id`, `cantidad`, `deshabilitado`) VALUES
(1, 4, 1, 5, b'0'),
(2, 4, 1, 99, b'0');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE IF NOT EXISTS `productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `codigo` int(11) NOT NULL,
  `titulo` varchar(50) NOT NULL,
  `descripcion` varchar(100) DEFAULT NULL,
  `precio` decimal(18,2) DEFAULT NULL,
  `statusproducto_id` int(11) DEFAULT NULL,
  `deshabilitado` bit(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `modelos_ibfk_1` (`statusproducto_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `codigo`, `titulo`, `descripcion`, `precio`, `statusproducto_id`, `deshabilitado`) VALUES
(4, 101, 'Test1', 'test', '1.00', 2, b'0'),
(5, 102, 'Test2', 'test2', '2.00', 2, b'0');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proveedores`
--

CREATE TABLE IF NOT EXISTS `proveedores` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `direccion` varchar(150) DEFAULT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  `contacto` varchar(50) DEFAULT NULL,
  `email` varchar(80) DEFAULT NULL,
  `comentario` varchar(1000) DEFAULT NULL,
  `statusproveedor_id` int(11) DEFAULT NULL,
  `deshabilitado` bit(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=20 ;

--
-- Volcado de datos para la tabla `proveedores`
--

INSERT INTO `proveedores` (`id`, `nombre`, `direccion`, `telefono`, `contacto`, `email`, `comentario`, `statusproveedor_id`, `deshabilitado`) VALUES
(1, 'aaa', 'Av San Martín 4723, 1417 Ciudad De Buenos Aires, Capital Federal', '011 5510-4000', 'Juan', 'ventas@famiq.com.ar', 'Proveedor de Acero Inoxidable', 2, b'1'),
(2, 'miguel', 'peron 4077', '4778722', 'lalal', 'cualquiera', 'nada', 1, b'1'),
(3, 'miguel', 'peron 4077', '4778722', 'lalal', 'cualquiera', 'nada', 2, b'1'),
(4, 'asdas', 'dasdasd', NULL, NULL, NULL, NULL, 1, b'1'),
(5, 'carlos', NULL, NULL, NULL, NULL, NULL, 2, b'1'),
(6, 'carlos', NULL, NULL, NULL, NULL, NULL, 1, b'1'),
(7, '88', '1', '2', '34', '5', '7', 1, b'1'),
(8, 'dada', NULL, NULL, NULL, NULL, NULL, 1, b'0'),
(9, 'sasa', NULL, NULL, NULL, NULL, NULL, 1, b'0'),
(10, 'qweqwe', NULL, NULL, NULL, NULL, NULL, 2, b'0'),
(11, 'qweqwe', 'aaasd', '1231231', 'asdasd', 'asdasda', 'nada', 2, b'0'),
(12, 'nada', NULL, NULL, NULL, NULL, NULL, 1, b'0'),
(13, 'nada', NULL, NULL, NULL, NULL, NULL, 1, b'0'),
(14, 'nada', NULL, NULL, NULL, NULL, NULL, 1, b'0'),
(15, 'nada', NULL, NULL, NULL, NULL, NULL, 1, b'0'),
(16, 'carlos', NULL, NULL, NULL, NULL, NULL, 2, b'0'),
(17, 'migueeee', NULL, NULL, NULL, NULL, NULL, 2, b'0'),
(18, '', NULL, NULL, NULL, NULL, NULL, 1, b'1'),
(19, 'miguel editar', 'florida 99', '47778722', 'miguel', 'nada@gmail.com', 'no coment', 2, b'1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proveedorpiezas`
--

CREATE TABLE IF NOT EXISTS `proveedorpiezas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pieza_id` int(11) NOT NULL,
  `proveedor_id` int(11) NOT NULL,
  `precio` decimal(18,2) DEFAULT NULL,
  `comentarios` varchar(1000) DEFAULT NULL,
  `deshabilitado` bit(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `pieza_id` (`pieza_id`),
  KEY `proveedor_id` (`proveedor_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `statuspedidos`
--

CREATE TABLE IF NOT EXISTS `statuspedidos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(20) NOT NULL,
  `deshabilitado` bit(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- Volcado de datos para la tabla `statuspedidos`
--

INSERT INTO `statuspedidos` (`id`, `descripcion`, `deshabilitado`) VALUES
(1, 'No Confirmado', b'0'),
(2, 'Señado', b'0'),
(3, 'Listo', b'0'),
(4, 'Entregado', b'0');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `statusproductos`
--

CREATE TABLE IF NOT EXISTS `statusproductos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(20) NOT NULL,
  `deshabilitado` bit(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- Volcado de datos para la tabla `statusproductos`
--

INSERT INTO `statusproductos` (`id`, `descripcion`, `deshabilitado`) VALUES
(2, 'Activo', b'0'),
(3, 'Discontinuado', b'0');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `statusproveedores`
--

CREATE TABLE IF NOT EXISTS `statusproveedores` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `codigo` varchar(3) DEFAULT NULL,
  `descripcion` varchar(20) DEFAULT NULL,
  `deshabilitado` bit(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Volcado de datos para la tabla `statusproveedores`
--

INSERT INTO `statusproveedores` (`id`, `codigo`, `descripcion`, `deshabilitado`) VALUES
(1, 'ACT', 'Activo', b'0'),
(2, 'INA', 'Inactivo', b'0');

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `productopiezas`
--
ALTER TABLE `productopiezas`
  ADD CONSTRAINT `productopiezas_ibfk_1` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`),
  ADD CONSTRAINT `productopiezas_ibfk_2` FOREIGN KEY (`pieza_id`) REFERENCES `piezas` (`id`);

--
-- Filtros para la tabla `proveedorpiezas`
--
ALTER TABLE `proveedorpiezas`
  ADD CONSTRAINT `proveedorpiezas_ibfk_1` FOREIGN KEY (`pieza_id`) REFERENCES `piezas` (`id`),
  ADD CONSTRAINT `proveedorpiezas_ibfk_2` FOREIGN KEY (`proveedor_id`) REFERENCES `proveedores` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
