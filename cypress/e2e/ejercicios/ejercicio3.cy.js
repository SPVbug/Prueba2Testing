describe('Prueba de Asunto', () => {
    beforeEach(() => {
        //Ingresar a la pagina web
        cy.visit('http://zero.webappsecurity.com/')
    });

    it('01.- CHECKING ACCOUNT ACTIVITY', () => {
        //Comprobando el texto de Checking Account
        cy.get('#online_banking_features > :nth-child(2) > div > p').should('contain', 'Use Zero to view the most up-to-date listings of your deposits, withdrawals, interest payments, and a number of other useful transactions.');

    });
    it('02.- MY MONEY MAP', () => {
        //Comprobando el texto de My Money Map
        cy.get('#online_banking_features > :nth-child(4) > div > p',)
            .should('contain', 'Use Zero to set up and monitor your personalized money map. A money map is an easy-to-use online tool that helps you manage your finances efficiently. With Money Map, you can create a budget, sort your finances into spending and savings categories,');
        cy.get('#online_banking_features > :nth-child(4) > div > p',)
            .should('contain', 'check the interest your accounts are earning, and gain new understanding of your patterns with the help of Zero’s clear charts and graphs.');
    });
});
