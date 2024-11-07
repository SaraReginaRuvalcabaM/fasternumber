-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-06-2023 a las 03:30:41
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `fasternumber`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `iniciosesion`
--

CREATE TABLE `iniciosesion` (
  `id_registro` int(10) NOT NULL,
  `usuario` varchar(15) NOT NULL
  
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `iniciosesion`
--

INSERT INTO `iniciosesion` (`id_registro`, `usuario`) VALUES
(1, 'Vuala55');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `puntajejuegosimpares`
--

CREATE TABLE `puntajejuegosimpares` (
  `id_juegosimpares` int(10) NOT NULL,
  `id_registro` int(5) NOT NULL,
  `num_impares_pun_nl1` int(10) NOT NULL,
  `num_impares_pun_nl2` int(10) NOT NULL,
  `num_impares_pun_nl3` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `puntajejuegosimpares`
--

INSERT INTO `puntajejuegosimpares` (`id_juegosimpares`, `id_registro`, `num_impares_pun_nl1`, `num_impares_pun_nl2`, `num_impares_pun_nl3`) VALUES
(1, 1, 3, 4556, 12),
(2, 2, 8934, 543, 3456),
(3, 3, 5489, 458, 45),
(4, 4, 2587, 369, 47),
(5, 5, 1475, 698, 68);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `puntajejuegospares`
--

CREATE TABLE `puntajejuegospares` (
  `id_juegospares` int(10) NOT NULL,
  `id_registro` int(5) NOT NULL,
  `num_pares_pun_nl1` int(10) NOT NULL,
  `num_pares_pun_nl2` int(10) NOT NULL,
  `num_pares_pun_nl3` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `puntajejuegospares`
--

INSERT INTO `puntajejuegospares` (`id_juegospares`, `id_registro`, `num_pares_pun_nl1`, `num_pares_pun_nl2`, `num_pares_pun_nl3`) VALUES
(1, 1, 123, 123, 123),
(2, 2, 7895, 159, 42),
(3, 3, 3575, 259, 24),
(4, 4, 4586, 146, 36),
(5, 5, 2456, 345, 68);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `puntajejuegosprimos`
--

CREATE TABLE `puntajejuegosprimos` (
  `id_juegosprimos` int(10) NOT NULL,
  `id_registro` int(5) NOT NULL,
  `num_primos_pun_nl1` int(10) NOT NULL,
  `num_primos_pun_nl2` int(10) NOT NULL,
  `num_primos_pun_nl3` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `puntajejuegosprimos`
--

INSERT INTO `puntajejuegosprimos` (`id_juegosprimos`, `id_registro`, `num_primos_pun_nl1`, `num_primos_pun_nl2`, `num_primos_pun_nl3`) VALUES
(1, 1, 5275, 953, 43),
(2, 2, 5742, 985, 18),
(3, 3, 123, 123, 123),
(4, 4, 6541, 754, 61),
(5, 5, 4751, 359, 14);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registrodecuentas`
--

CREATE TABLE `registrodecuentas` (
  `id_registro` int(10) NOT NULL,
  `usuario` varchar(15) NOT NULL,
  `id_cargo` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `registrodecuentas`
--

INSERT INTO `registrodecuentas` (`id_registro`, `usuario`, `id_cargo`) VALUES
(1, 'Vuala55', 1),
(2, 'Cuyo17', 2),
(3, 'SebastianTO', 2),
(4, 'EdgarP', 1),
(5, 'Rubén Doblas Gu', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tablacargo`
--

CREATE TABLE `tablacargo` (
  `id_cargo` int(1) NOT NULL,
  `cargo` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tablacargo`
--

INSERT INTO `tablacargo` (`id_cargo`, `cargo`) VALUES
(1, 'usuario'),
(2, 'administrador');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `puntajejuegosimpares`
--
ALTER TABLE `puntajejuegosimpares`
  ADD PRIMARY KEY (`id_juegosimpares`),
  ADD KEY `id_registro` (`id_registro`);

--
-- Indices de la tabla `puntajejuegospares`
--
ALTER TABLE `puntajejuegospares`
  ADD PRIMARY KEY (`id_juegospares`),
  ADD KEY `id_registro` (`id_registro`);

--
-- Indices de la tabla `puntajejuegosprimos`
--
ALTER TABLE `puntajejuegosprimos`
  ADD PRIMARY KEY (`id_juegosprimos`),
  ADD KEY `id_registro` (`id_registro`);

--
-- Indices de la tabla `registrodecuentas`
--
ALTER TABLE `registrodecuentas`
  ADD PRIMARY KEY (`id_registro`),
  ADD KEY `id_cargo` (`id_cargo`);

--
-- Indices de la tabla `tablacargo`
--
ALTER TABLE `tablacargo`
  ADD PRIMARY KEY (`id_cargo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `puntajejuegosimpares`
--
ALTER TABLE `puntajejuegosimpares`
  MODIFY `id_juegosimpares` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `puntajejuegospares`
--
ALTER TABLE `puntajejuegospares`
  MODIFY `id_juegospares` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `puntajejuegosprimos`
--
ALTER TABLE `puntajejuegosprimos`
  MODIFY `id_juegosprimos` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `registrodecuentas`
--
ALTER TABLE `registrodecuentas`
  MODIFY `id_registro` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `puntajejuegosimpares`
--
ALTER TABLE `puntajejuegosimpares`
  ADD CONSTRAINT `puntajejuegosimpares_ibfk_1` FOREIGN KEY (`id_registro`) REFERENCES `registrodecuentas` (`id_registro`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `puntajejuegospares`
--
ALTER TABLE `puntajejuegospares`
  ADD CONSTRAINT `puntajejuegospares_ibfk_1` FOREIGN KEY (`id_registro`) REFERENCES `registrodecuentas` (`id_registro`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `puntajejuegosprimos`
--
ALTER TABLE `puntajejuegosprimos`
  ADD CONSTRAINT `puntajejuegosprimos_ibfk_1` FOREIGN KEY (`id_registro`) REFERENCES `registrodecuentas` (`id_registro`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `registrodecuentas`
--
ALTER TABLE `registrodecuentas`
  ADD CONSTRAINT `registrodecuentas_ibfk_1` FOREIGN KEY (`id_cargo`) REFERENCES `tablacargo` (`id_cargo`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
