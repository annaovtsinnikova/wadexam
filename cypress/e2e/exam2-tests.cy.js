/// <reference types = "cypress"/>  

describe('Instructor Page', () => {
    it('Visits the Instructor page and performs some checks', () => {
      // Visit the Instructor page
      cy.visit('http://localhost:8080/instructor');
  
      cy.get('h1').should('be.visible').contains('Instructor Management Pannel');

      
    });
  });

  describe('Modify Exam Cell', () => {
    it('Locates the exam cell, clears it, and types 0', () => {
      cy.visit('http://localhost:8080/instructor');
  
      cy.get('h1').should('be.visible').contains('Instructor Management Pannel');
  
      cy.get('table tr.item:first-child td:nth-child(5) input')
        .clear()  
        .type('0') 
  
    });
});

