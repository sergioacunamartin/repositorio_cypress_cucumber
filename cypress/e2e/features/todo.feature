Feature: todoMVC
  Scenario: Agregar una tarea
    Given visito la página de tareas
    And agrego una tarea
    Then la tarea se muestra en la lista
  
  Scenario: Borrar una tarea
    Given visito la página de tareas
    And agrego una tarea
    When pulso en borrar la tarea
    Then la tarea desaparece de la lista

  Scenario: Completar una tarea
    Given visito la página de tareas
    And agrego una tarea
    When pulso en marcar la tarea como completada
    Then la tarea aparece como completada