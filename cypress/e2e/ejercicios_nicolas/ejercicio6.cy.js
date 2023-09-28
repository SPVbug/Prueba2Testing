describe('Pruebas adicionales en http://zero.webappsecurity.com/', () => {
  before(() => {
    cy.visit('http://zero.webappsecurity.com/');
  });

  it('Verifica que las imágenes se carguen correctamente', () => {
    cy.get('.active > img').should('have.attr', 'src').should('not.be.empty');
    cy.get('.right').click({ force: true });
  });

  it('Verifica que los campos obligatorios en el segundo formulario no puedan enviarse vacíos', () => {
    cy.visit('http://zero.webappsecurity.com/feedback.html');
    cy.get('form').eq(1).should('be.visible').within(() => { 
      cy.get('input[required], textarea[required]').each((input) => {
        cy.wrap(input).clear();
      });
      cy.get('input[type="submit"]').click();
      cy.get('#name:invalid').should('be.visible');
    });
  });
});
