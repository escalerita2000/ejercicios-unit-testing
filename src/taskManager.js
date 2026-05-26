class TaskManager {
  constructor() {
    this.tasks = [];
    this.currentId = 1;
  }

  addTask(title) {
    if (!title || title.trim() === "") {
      throw new Error("El título es obligatorio");
    }

    const task = {
      id: this.currentId++,
      title,
      completed: false,
      createdAt: new Date(),
    };

    this.tasks.push(task);

    return task;
  }

  completeTask(id) {
    const task = this.tasks.find(t => t.id === id);

    if (!task) {
      throw new Error("Tarea no encontrada");
    }

    task.completed = true;

    return task;
  }

  removeTask(id) {
    const index = this.tasks.findIndex(t => t.id === id);

    if (index === -1) {
      throw new Error("Tarea no encontrada");
    }

    this.tasks.splice(index, 1);
  }

  getPending() {
    return this.tasks.filter(t => !t.completed);
  }

  getCompleted() {
    return this.tasks.filter(t => t.completed);
  }

  getAll() {
    return this.tasks;
  }
}

module.exports = TaskManager;