export class GestionTarea {
  // Selectores
  elements = {
    selectorInput: () => cy.get('.new-todo'),
    selectorItem: (textoTarea) => cy.contains('label', textoTarea),
    todoItems: () => cy.get('.todo-list li'),
    botonBorrar: () => cy.get('button.destroy'),
    checkButton: () => cy.get('.toggle'),
    checkButtonMarcado: () => cy.get('li.completed')
}

 // Métodos

 visitarPagina() {
  cy.visit('https://todomvc.com/examples/react/dist/');
}

agregarTarea(textoTarea) {
  this.elements.selectorInput().type(`${textoTarea}{enter}`);
}

validarExiste(textoTarea) {
  this.elements.selectorItem(textoTarea).should('be.visible');
}

validarNoExiste(textoTarea) {
  this.elements.selectorItem(textoTarea).should('not.exist')
}

borrarTarea() {
  this.elements.botonBorrar().invoke('css', 'display', 'block')
  .should('be.visible')
  .click();
}

completarTarea() {
  this.elements.checkButton().check()
}

comprobarTareaCompletada() {
  this.elements.checkButton().should('be.checked')
}

}

export const gestionTarea = new GestionTarea();