
describe('Prueba de Navegación', () => {
    beforeEach(() => {
      cy.visit('http://zero.webappsecurity.com/')
    })
    it('Verifica el título de la página', () => {
      cy.title().should('include', 'Zero - Personal Banking - Loans - Credit Cards')
    })
    it("Verificar encabezado o logo", () => {
        cy.contains("Zero Web App Security").should("exist");
      });
  })