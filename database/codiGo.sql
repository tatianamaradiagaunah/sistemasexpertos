-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 19-12-2018 a las 02:34:58
-- Versión del servidor: 10.1.37-MariaDB
-- Versión de PHP: 7.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `codiGo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_archivos`
--

CREATE TABLE `tbl_archivos` (
  `CODIGO_ARCHIVO` int(11) NOT NULL,
  `NOMBRE_ARCHIVO` varchar(45) DEFAULT NULL,
  `FECHA_CREACION` date DEFAULT NULL,
  `CODIGO_TIPO_ARCHIVO` int(11) NOT NULL,
  `CODIGO_USUARIO` int(11) NOT NULL,
  `CODIGO_ESTADO` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_carpeta`
--

CREATE TABLE `tbl_carpeta` (
  `cod_carpeta` int(11) NOT NULL,
  `carpeta_hijo` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `descripcion` varchar(50) NOT NULL,
  `cod_usuario` int(11) NOT NULL,
  `cod_usuario_hijo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tbl_carpeta`
--

INSERT INTO `tbl_carpeta` (`cod_carpeta`, `carpeta_hijo`, `nombre`, `descripcion`, `cod_usuario`, `cod_usuario_hijo`) VALUES
(1, 1, 'experimentando1', 'mnbgxsza', 0, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_carpetas_compartidas_x_usuario`
--

CREATE TABLE `tbl_carpetas_compartidas_x_usuario` (
  `cod_carpeta` int(11) NOT NULL,
  `cod_usuario` int(11) NOT NULL,
  `Cod_usuario_hijo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_compra`
--

CREATE TABLE `tbl_compra` (
  `cod_compra` int(11) NOT NULL,
  `cod_usuario` int(11) DEFAULT NULL,
  `fecha_vencimiento` varchar(45) DEFAULT NULL,
  `impuesto` float DEFAULT NULL,
  `precio` float DEFAULT NULL,
  `numero_tarjeta` int(30) NOT NULL,
  `csv` int(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tbl_compra`
--

INSERT INTO `tbl_compra` (`cod_compra`, `cod_usuario`, `fecha_vencimiento`, `impuesto`, `precio`, `numero_tarjeta`, `csv`) VALUES
(0, 0, '07/2019', NULL, NULL, 54321, 123);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_contactos`
--

CREATE TABLE `tbl_contactos` (
  `codigo_usuario` int(11) NOT NULL,
  `codigo_usuario_contacto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tbl_contactos`
--

INSERT INTO `tbl_contactos` (`codigo_usuario`, `codigo_usuario_contacto`) VALUES
(1, 2),
(1, 3),
(1, 5),
(2, 6),
(2, 7),
(2, 8),
(2, 9),
(3, 10),
(3, 11);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_estado_carpeta`
--

CREATE TABLE `tbl_estado_carpeta` (
  `CODIGO_ESTADO` int(11) NOT NULL,
  `NOMBRE_ESTADO` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_marca_tarjeta`
--

CREATE TABLE `tbl_marca_tarjeta` (
  `cod_marca` int(11) NOT NULL,
  `nombre_marca` varchar(45) DEFAULT NULL,
  `descripcion` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tbl_marca_tarjeta`
--

INSERT INTO `tbl_marca_tarjeta` (`cod_marca`, `nombre_marca`, `descripcion`) VALUES
(1, 'VISA', 'ES UNA TARJETA DE DEBITO/CREDITO');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_mensajes`
--

CREATE TABLE `tbl_mensajes` (
  `codigo_mensaje` int(11) NOT NULL,
  `codigo_usuario_emisor` int(11) NOT NULL,
  `codigo_usuario_receptor` int(11) NOT NULL,
  `mensaje` varchar(1000) NOT NULL,
  `hora_mensaje` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tbl_mensajes`
--

INSERT INTO `tbl_mensajes` (`codigo_mensaje`, `codigo_usuario_emisor`, `codigo_usuario_receptor`, `mensaje`, `hora_mensaje`) VALUES
(1, 1, 2, 'Hola', '18:18'),
(2, 2, 1, 'Hola que tal?', '18:19'),
(3, 1, 2, 'Todo bien', '18:19'),
(4, 1, 2, 'y tu que tal?', '18:20'),
(5, 4, 6, 'Hola', '11:11'),
(6, 1, 2, 'Todo bien de neuvo', 'hora');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_persona`
--

CREATE TABLE `tbl_persona` (
  `cod_persona` int(11) NOT NULL,
  `cod_genero` int(11) NOT NULL,
  `cod_lugar` int(11) DEFAULT NULL,
  `telefono` varchar(45) DEFAULT NULL,
  `nombre_persona` varchar(45) NOT NULL,
  `apellido_persona` varchar(45) NOT NULL,
  `edad` int(11) DEFAULT NULL,
  `img_perfil` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tbl_persona`
--

INSERT INTO `tbl_persona` (`cod_persona`, `cod_genero`, `cod_lugar`, `telefono`, `nombre_persona`, `apellido_persona`, `edad`, `img_perfil`) VALUES
(10, 2, NULL, '123', 'juan', 'lopez', NULL, ''),
(20, 1, NULL, '97654534', 'juan', 'lopez', NULL, ''),
(24, 1, NULL, '97654534', 'juan', 'lopez', NULL, ''),
(29, 1, NULL, '97654534', 'juan', 'lopez', NULL, ''),
(30, 1, NULL, '97654534', 'juan', 'lopez', NULL, ''),
(0, 1, NULL, '', 'tatiana', 'maradiaga', NULL, ''),
(0, 2, NULL, '', 'manuel', 'maradiaga', NULL, '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_planes`
--

CREATE TABLE `tbl_planes` (
  `CODIGO_PLAN` int(11) NOT NULL,
  `NOMBRE_PLAN` varchar(80) NOT NULL,
  `DESCRIPCION` varchar(200) DEFAULT NULL,
  `TAMANIO_ALMACENAMIENTO` int(11) DEFAULT NULL,
  `CANTIDAD_PROYECTOS` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_proyecto`
--

CREATE TABLE `tbl_proyecto` (
  `cod_proyecto` int(11) NOT NULL,
  `cod_carpeta` int(11) NOT NULL,
  `cod_usuario` int(11) NOT NULL,
  `nombre_proyecto` varchar(500) NOT NULL,
  `fecha_creacion` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_tipo_archivos`
--

CREATE TABLE `tbl_tipo_archivos` (
  `CODIGO_TIPO_ARCHIVO` int(10) NOT NULL,
  `NOMBRE_TIPO_ARCHIVO` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_usuario`
--

CREATE TABLE `tbl_usuario` (
  `id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(1000) NOT NULL,
  `acerca` varchar(100) DEFAULT NULL,
  `ubicacion` varchar(2000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tbl_usuario`
--

INSERT INTO `tbl_usuario` (`id`, `username`, `password`, `acerca`, `ubicacion`) VALUES
(10, 'yty', 'juuyh', NULL, NULL),
(20, 'correo', 'e345', NULL, NULL),
(24, 'asdgf', 'hytg', NULL, NULL),
(36, 'carlos@yahoo.com', '123', NULL, NULL),
(0, 'tt@yahoo.com', '$2a$10$mGT55Gn.Y9UKdQzwA18rHuwa4gKHZoHDZVgw0WSFg911n35zFbxIm', NULL, NULL),
(0, 'mm@yahoo.com', '$2a$10$2nftFX8jWP6cR08uTsewe.yLo4AEFugJCzUrytHzl8syb4mP0g9Qi', NULL, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tbl_carpeta`
--
ALTER TABLE `tbl_carpeta`
  ADD PRIMARY KEY (`cod_carpeta`);

--
-- Indices de la tabla `tbl_proyecto`
--
ALTER TABLE `tbl_proyecto`
  ADD PRIMARY KEY (`cod_proyecto`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tbl_carpeta`
--
ALTER TABLE `tbl_carpeta`
  MODIFY `cod_carpeta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `tbl_proyecto`
--
ALTER TABLE `tbl_proyecto`
  MODIFY `cod_proyecto` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
