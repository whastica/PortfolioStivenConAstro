import Mongo from "../components/Icons/Mongo.astro";
import Mysql from "../components/Icons/Mysql.astro";
import Spring from "../components/Icons/Spring.astro";

export const TAGS = {
  SPRING: {
    name: "Spring",
    class:
      "bg-gradient-to-r from-green-500 to-green-600 text-white border-green-400 hover:from-green-600 hover:to-green-700",
    icono: Spring,
  },
  MONGO: {
    name: "MongoDB",
    class:
      "bg-gradient-to-r from-green-600 to-green-700 text-white border-green-500 hover:from-green-700 hover:to-green-800",
    icono: Mongo,
  },
  MYSQL: {
    name: "MySQL",
    class:
      "bg-gradient-to-r from-blue-500 to-blue-600 text-white border-blue-400 hover:from-blue-600 hover:to-blue-700",
    icono: Mysql,
  },
  POSTGRESQL: {
    name: "PostgreSQL",
    class:
      "bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-blue-500 hover:from-blue-700 hover:to-indigo-700",
    icono: Mysql,
  },
};

export const PROJECTS = [
  {
    title: "Watchdog",
    description:
      "Plataforma ciudadana para reportar problemas urbanos en Popayán como baches, fallos en alumbrado público y acumulación de basura. Incluye geolocalización, carga de imágenes y sistema de gestión municipal.",
    link: "https://github.com/whastica/whatchdog",
    Github: "https://github.com/whastica/whatchdog",
    image: "/Images/watchdog.webp",
    tags: [TAGS.SPRING, TAGS.MONGO, TAGS.MYSQL],
    technologies: "🚀 Tecnologías",
    caracteristicasTecnicas: "⚙️ Características Técnicas",
    descripcionTecnica:
      "Arquitectura de microservicios con enfoque hexagonal, implementando DDD y CQRS. Tecnologías: Spring Boot, Spring Security, JPA, Lombok, Hibernate.",
  },
  {
    title: "Sistema de Gestión Supermarket",
    description:
      "Plataforma completa para administrar supermercados, con gestión de productos, órdenes, compras y control detallado de inventario en tiempo real.",
    link: "https://github.com/whastica/backendMarket",
    Github: "https://github.com/whastica/backendMarket",
    image: "/Images/superMarket.webp",
    tags: [TAGS.SPRING, TAGS.MONGO, TAGS.MYSQL],
    technologies: "🚀 Tecnologías",
    caracteristicasTecnicas: "⚙️ Características Técnicas",
    descripcionTecnica:
      "Arquitectura por capas con base de datos relacional y API REST. Tecnologías: Spring Boot, JPA, Lombok, Hibernate.",
  },
  {
    title: "Sistema de Gestión Pizzería",
    description:
      "Solución integral para pizzerías que facilita la gestión de productos, inventario y órdenes, optimizando tanto el control interno como la experiencia del cliente.",
    link: "https://github.com/whastica/BackPizzeriaSecurity",
    Github: "https://github.com/whastica/BackPizzeriaSecurity",
    image: "/Images/pizzeria.webp",
    tags: [TAGS.SPRING, TAGS.MONGO, TAGS.MYSQL],
    technologies: "🚀 Tecnologías",
    caracteristicasTecnicas: "⚙️ Características Técnicas",
    descripcionTecnica:
      "Arquitectura por capas con modelo REST y base de datos relacional. Tecnologías: Spring Boot, JPA, Lombok, Hibernate.",
  },
];