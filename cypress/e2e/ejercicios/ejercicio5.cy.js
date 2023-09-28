describe('Prueba de Respuesta', () => {
    beforeEach(() => {
        cy.visit('http://zero.webappsecurity.com/')
    });
    it('01.- Visitar Correctamente la parte de feedback', () => {
        cy.get('#feedback > div > strong').click();
    });
    it('02.- Comprueba el Feedback envie mensaje correctamente', () => {
        cy.visit('http://zero.webappsecurity.com/feedback.html')
        cy.get('#name').type('marco');
        cy.get('#email').type('corrreo@prueba.cl');
        cy.get('#subject').type('Asunto');
        cy.get('#comment').type('comentario');
        cy.get('.btn-signin').click();
        cy.get('.offset3').should('contain','Thank you for your comments')
    });
    it('03.- Comprueba el Feedback envie mensaje erroneamente en el Nombre', () => {
        cy.visit('http://zero.webappsecurity.com/feedback.html')
        cy.get('#email').type('corrreo@prueba.cl');
        cy.get('#subject').type('Asunto');
        cy.get('#comment').type('comentario');
        cy.get('.btn-signin').click();
        cy.get('#name:invalid').should('exist');
    });
    it('04.- Comprueba el Feedback envie mensaje erroneamente en el email', () => {
        cy.visit('http://zero.webappsecurity.com/feedback.html')
        cy.get('#name').type('marco');
        cy.get('#subject').type('Asunto');
        cy.get('#comment').type('comentario');
        cy.get('.btn-signin').click();
        cy.get('#email:invalid').should('exist');
    });
    it('05.- Comprueba el Feedback envie mensaje erroneamente en el email', () => {
        cy.visit('http://zero.webappsecurity.com/feedback.html')
        cy.get('#name').type('marco');
        cy.get('#subject').type('Asunto');
        cy.get('#comment').type('comentario');
        cy.get('.btn-signin').click();
        cy.get('#email:invalid').should('exist');
    });
    it('06.- Comprueba el Feedback envie mensaje erroneamente en el Asunto', () => {
        cy.visit('http://zero.webappsecurity.com/feedback.html')
        cy.get('#name').type('marco');
        cy.get('#email').type('corrreo@prueba.cl');
        cy.get('#comment').type('comentario');
        cy.get('.btn-signin').click();
        cy.get('#subject:invalid').should('exist');
    });
    it('07.- Comprueba el Feedback envie mensaje erroneamente en el Contenido', () => {
        cy.visit('http://zero.webappsecurity.com/feedback.html')
        cy.get('#name').type('marco');
        cy.get('#email').type('corrreo@prueba.cl');
        cy.get('#subject').type('Asunto');
        cy.get('.btn-signin').click();
        cy.get('#comment:invalid').should('exist');
    });
});