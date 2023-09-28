# Cypress Test Suite

Este proyecto de evaluación en Cypress se centra en la automatización de pruebas básicas en la página web "http://zero.webappsecurity.com/". El objetivo principal es verificar la funcionalidad y contenido de la página "Zero Web App Security". El proyecto se realiza en equipo y abarca diversas áreas, desde la configuración inicial hasta pruebas de interacción y respuesta del sitio web.

## Requisitos

Asegúrate de tener instalado Node.js y npm en tu sistema.

## Configuración

1. Clona este repositorio en tu máquina local:

```bash
git clone https://github.com/SPVbug/Prueba2Testing.git
```
2. Navega al directorio del proyecto:
```bash
cd Prueba2Testing
```
3. Instalación de las dependencias:
```bash
npm install
```
4. Abre Cypress:
```bash
npx cypress open
```
## Ejecución de Pruebas

Para ejecutar las pruebas, sigue estos pasos:

1. Abre Cypress desde la línea de comandos:
```bash
npx cypress open
```
2. En la ventana de Cypress, selecciona una prueba específica que desees ejecutar haciendo clic en ella.

3. Cypress abrirá una ventana de navegador y ejecutará la prueba.

4. Observa la ejecución de la prueba y los resultados en la interfaz de Cypress.

Repite estos pasos para ejecutar otras pruebas.

## Estructura del Proyecto

La estructura del proyecto es la siguiente:

- `cypress/`: El directorio principal de Cypress.
  - `e2e/`: Contiene las pruebas de extremo a extremo escritas en Cypress.
    -`ejercicios`:Contiene las pruebas realizadas con los ejercicios resueltos
  - `fixtures/`: Almacena datos de prueba estáticos, como archivos JSON o archivos de texto.
  - `support/`: Contiene archivos de soporte, como comandos personalizados o configuraciones específicas de Cypress.
  - `Downloads/`: Utilizado para almacenar archivos descargados durante la ejecución de las pruebas.

## Pruebas Disponibles

Este proyecto contiene un conjunto de pruebas:

1. [Configuración Inicial]
   - Ubicación: `cypress/e2e/pruebaZeroBank.cy.js`

2. [Prueba de Navegación]
   - Ubicación: `cypress/e2e/ejercicios/ejercicio2.cy.js`

3. [Prueba de Contenido]
   - Ubicación: `cypress/e2e/ejercicios/ejercicio3.cy.js`

4. [Prueba de Interacción]
   - Ubicación: `cypress/e2e/ejercicios/ejercicio4.cy.js`

5. [Prueba de Respuesta]
   - Ubicación: `cypress/e2e/ejercicios/ejercicio5.cy.js`

6. [Pruebas Adicionales]
   - Ubicación: `cypress/e2e/ejercicios/ejercicio6.cy.js`

