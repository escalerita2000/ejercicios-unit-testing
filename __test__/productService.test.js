const ProductService = require("../src/productService");

describe("ProductService", () => {
  let mockRepository;
  let service;

  beforeEach(() => {
    mockRepository = {
      findAll: jest.fn(),
      findById: jest.fn(),
      save: jest.fn(),
    };

    service = new ProductService(mockRepository);
  });

  describe("getById", () => {
    test("debe retornar un producto si existe", async () => {
      const product = {
        id: 1,
        name: "Laptop",
      };

      mockRepository.findById.mockResolvedValue(product);

      const result = await service.getById(1);

      expect(result).toEqual(product);
      expect(mockRepository.findById).toHaveBeenCalledWith(1);
    });

    test("debe lanzar error si no existe", async () => {
      mockRepository.findById.mockResolvedValue(null);

      await expect(service.getById(999))
        .rejects
        .toThrow("Producto no encontrado");

      expect(mockRepository.findById).toHaveBeenCalledWith(999);
    });
  });

  describe("getByCategory", () => {
    test("debe retornar productos de la categoría", async () => {
      const products = [
        { id: 1, name: "Laptop", category: "tech" },
        { id: 2, name: "Mouse", category: "tech" },
        { id: 3, name: "Mesa", category: "home" },
      ];

      mockRepository.findAll.mockResolvedValue(products);

      const result = await service.getByCategory("tech");

      expect(result).toEqual([
        { id: 1, name: "Laptop", category: "tech" },
        { id: 2, name: "Mouse", category: "tech" },
      ]);
    });

    test("debe retornar array vacío si no hay productos", async () => {
      mockRepository.findAll.mockResolvedValue([]);

      const result = await service.getByCategory("tech");

      expect(result).toEqual([]);
    });
  });

  describe("searchByName", () => {
    test("debe buscar sin importar mayúsculas/minúsculas", async () => {
      const products = [
        { id: 1, name: "Laptop Gamer" },
        { id: 2, name: "Mouse" },
      ];

      mockRepository.findAll.mockResolvedValue(products);

      const result = await service.searchByName("laptop");

      expect(result).toEqual([
        { id: 1, name: "Laptop Gamer" },
      ]);
    });

    test("debe lanzar error si query está vacía", async () => {
      await expect(service.searchByName(""))
        .rejects
        .toThrow("Query inválida");
    });
  });

  describe("create", () => {
    test("debe crear producto válido", async () => {
      const productData = {
        name: "Laptop",
        price: 1200,
        category: "tech",
      };

      const savedProduct = {
        id: 1,
        ...productData,
      };

      mockRepository.save.mockResolvedValue(savedProduct);

      const result = await service.create(productData);

      expect(result).toEqual(savedProduct);

      expect(mockRepository.save).toHaveBeenCalledTimes(1);

      expect(mockRepository.save)
        .toHaveBeenCalledWith(productData);
    });

    test("debe lanzar error si precio es negativo", async () => {
      await expect(
        service.create({
          name: "Laptop",
          price: -100,
        })
      ).rejects.toThrow("El precio debe ser mayor a 0");

      expect(mockRepository.save).not.toHaveBeenCalled();
    });

    test("debe lanzar error si falta nombre", async () => {
      await expect(
        service.create({
          price: 100,
        })
      ).rejects.toThrow("El nombre es obligatorio");

      expect(mockRepository.save).not.toHaveBeenCalled();
    });
  });
});