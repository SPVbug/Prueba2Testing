describe('Prueba de Interacción con Botones Dinámicos', () => {
    it('Verifica la interacción con botones y apertura de la lista desplegable después de iniciar sesión', () => {
      cy.visit('http://zero.webappsecurity.com/');
      cy.get('button').each(($button) => {
        cy.wrap($button).click();
        cy.url().should('include', 'http://zero.webappsecurity.com/login.html');
        cy.get('#user_login').type('username'); 
        cy.get('#user_password').type('password');
        cy.get('input[type="submit"]').click();
        cy.get('#account_activity_tab').click(); 
        cy.get('#aa_accountId').select('1');
        cy.visit('http://zero.webappsecurity.com/login.html');
      });
    });
  });