const {
  maskEmail,
  reverseWords,
  extractHashtags,
} = require("../src/stringProcessor");

describe("maskEmail", () => {
  test("email normal", () => {
    expect(maskEmail("sergio@gmail.com"))
      .toBe("s****o@gmail.com");
  });

  test("usuario de 1 carácter", () => {
    expect(maskEmail("a@gmail.com"))
      .toBe("a@gmail.com");
  });

  test("email sin @", () => {
    expect(() => maskEmail("correo.com"))
      .toThrow(Error);
  });
});

describe("reverseWords", () => {
  test("oración normal", () => {
    expect(reverseWords("hola mundo"))
      .toBe("mundo hola");
  });

  test("espacios múltiples", () => {
    expect(reverseWords("hola    mundo   cruel"))
      .toBe("cruel mundo hola");
  });

  test("texto vacío", () => {
    expect(reverseWords("    "))
      .toBe("");
  });

  test("una sola palabra", () => {
    expect(reverseWords("node"))
      .toBe("node");
  });
});

describe("extractHashtags", () => {
  test("múltiples hashtags", () => {
    expect(
      extractHashtags(
        "Me gusta #node y #testing"
      )
    ).toEqual(["#node", "#testing"]);
  });

  test("sin hashtags", () => {
    expect(
      extractHashtags("Hola mundo")
    ).toEqual([]);
  });

  test("# solo", () => {
    expect(
      extractHashtags("Esto es un #")
    ).toEqual([]);
  });

  test("hashtags con números", () => {
    expect(
      extractHashtags("Version #node18")
    ).toEqual(["#node18"]);
  });
});