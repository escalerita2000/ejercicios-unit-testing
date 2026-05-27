const UserService = require('../src/userService');

// Repositorio simulado: objeto con funciones mockeadas
const mockRepo = {
  findById: jest.fn(),
  findAll:  jest.fn(),
};

describe('UserService', () => {
  let service;

  beforeEach(() => {
    jest.clearAllMocks();               // reset del historial entre tests
    service = new UserService(mockRepo);
  });

  describe('findById()', () => {
    it('devuelve el usuario cuando existe', async () => {
      // Arrange: el mock resolverá con este valor
      mockRepo.findById.mockResolvedValue({ id: 1, name: 'Ana', active: true });

      // Act
      const user = await service.findById(1);

      // Assert
      expect(user.name).toBe('Ana');
      expect(mockRepo.findById).toHaveBeenCalledWith(1);
      expect(mockRepo.findById).toHaveBeenCalledTimes(1);
    });

    it('lanza Error si el usuario no existe', async () => {
      mockRepo.findById.mockResolvedValue(null);  // simula "no encontrado"

      await expect(service.findById(99)).rejects.toThrow('Usuario 99 no encontrado.');
    });

    it('lanza TypeError si id no es un número', async () => {
      await expect(service.findById('abc')).rejects.toThrow(TypeError);
    });
  });

  describe('getActiveUsers()', () => {
    it('filtra solo usuarios activos', async () => {
      mockRepo.findAll.mockResolvedValue([
        { id: 1, name: 'Ana',  active: true  },
        { id: 2, name: 'Luis', active: false },
        { id: 3, name: 'Eva',  active: true  },
      ]);

      const result = await service.getActiveUsers();

      expect(result).toHaveLength(2);
      expect(result.every(u => u.active)).toBe(true);
    });
  });
});