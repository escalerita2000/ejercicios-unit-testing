class UserService {
  constructor(userRepository) {
    this.repo = userRepository;  // dependencia inyectada
  }

  async findById(id) {
    if (typeof id !== 'number') throw new TypeError('id debe ser un número.');
    const user = await this.repo.findById(id);
    if (!user) throw new Error(`Usuario ${id} no encontrado.`);
    return user;
  }

  async getActiveUsers() {
    const all = await this.repo.findAll();
    return all.filter(u => u.active);
  }
}

module.exports = UserService;