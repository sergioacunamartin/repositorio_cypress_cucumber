import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { gestionTarea } from "../../pages/GestionTarea";

Given("visito la página de tareas", () => {
  gestionTarea.visitarPagina();
});

// Crear una Tarea
When("agrego una tarea", () => {
  gestionTarea.agregarTarea('Hacer deporte');
});

Then("la tarea se muestra en la lista", () => {
  gestionTarea.validarExiste('Hacer deporte');
});

// Borrar Tarea
When("pulso en borrar la tarea", () => {
  gestionTarea.borrarTarea('Hacer deporte');
});

Then("la tarea desaparece de la lista", () => {
  gestionTarea.validarNoExiste('Hacer deporte');
});

// Completar tarea
When("pulso en marcar la tarea como completada", () => {
  gestionTarea.completarTarea('Hacer deporte');
});

Then("la tarea aparece como completada", () => {
  gestionTarea.comprobarTareaCompletada('Hacer deporte');
});