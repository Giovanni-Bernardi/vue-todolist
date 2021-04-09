function init() {
  new Vue({
    el: "#app",
    data: {
      toDoList: ["inserisci un nuovo task"],
      nuovoTask: "",
    },

    methods: {
      rimuoviTodo: function (parametroIndice) {
        this.toDoList.splice(parametroIndice, 1);
      },
      aggiungiTask: function () {
        if (this.nuovoTask.length > 0) {
          this.toDoList.push(this.nuovoTask[0].toUpperCase() + this.nuovoTask);

          this.nuovoTask = "";
        } else {
          console.log("Non hai scritto nulla");
        }
      },
    },
  });
}
document.addEventListener("DOMContentLoaded", init);
