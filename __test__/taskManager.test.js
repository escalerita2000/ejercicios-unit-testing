const TaskManager = require("../src/taskManager");

describe("TaskManager", () => {
  let manager;

  beforeEach(() => {
    manager = new TaskManager();
  });

  test("una tarea nueva tiene completed: false", () => {
    const task = manager.addTask("Aprender Node");

    expect(task.completed).toBe(false);
  });

  test("después de addTask el total aumenta", () => {
    manager.addTask("Tarea 1");

    expect(manager.getAll().length).toBe(1);
  });

  test("completeTask cambia el estado correctamente", () => {
    const task = manager.addTask("Estudiar");

    manager.completeTask(task.id);

    expect(manager.getCompleted().length).toBe(1);
    expect(manager.getPending().length).toBe(0);
  });

  test("removeTask disminuye el total", () => {
    const task = manager.addTask("Eliminarme");

    manager.removeTask(task.id);

    expect(manager.getAll().length).toBe(0);
  });

  test("getPending no incluye completadas", () => {
    const t1 = manager.addTask("Pendiente");
    const t2 = manager.addTask("Completada");

    manager.completeTask(t2.id);

    const pending = manager.getPending();

    expect(pending.length).toBe(1);
    expect(pending[0].id).toBe(t1.id);
  });

  test("getCompleted no incluye pendientes", () => {
    const t1 = manager.addTask("Pendiente");
    const t2 = manager.addTask("Completada");

    manager.completeTask(t2.id);

    const completed = manager.getCompleted();

    expect(completed.length).toBe(1);
    expect(completed[0].id).toBe(t2.id);
  });

  test("completeTask con id inválido lanza error", () => {
    expect(() => manager.completeTask(999))
      .toThrow(Error);
  });

  test("removeTask con id inválido lanza error", () => {
    expect(() => manager.removeTask(999))
      .toThrow(Error);
  });

  test("addTask con título vacío lanza error", () => {
    expect(() => manager.addTask(""))
      .toThrow(Error);
  });
});