// __tests__/matchers.test.js
describe("Jest Matchers - различные способы проверки", () => {

 // === ПРОСТЫЕ ТИПЫ ===
 test("toBe для примитивов", () => {
 expect(2 + 2).toBe(4);
 expect("hello").toBe("hello");
 expect(true).toBe(true);
 });

 test("toEqual для объектов", () => {
 const obj1 = { name: "John", age: 30 };
 const obj2 = { name: "John", age: 30 };
 expect(obj1).toEqual(obj2); // toBe не сработает, toEqual - сработает
 });

 // === ПРОВЕРКА ИСТИННОСТИ ===
 test("проверка на истинность", () => {
 expect(true).toBeTruthy();
 expect("hello").toBeTruthy();
 expect(1).toBeTruthy();

 expect(false).toBeFalsy();
 expect(0).toBeFalsy();
 expect(null).toBeFalsy();
 expect(undefined).toBeFalsy();
 expect("").toBeFalsy();
 });

 test("специальные проверки", () => {
 expect(null).toBeNull();
 expect(undefined).toBeUndefined();
 expect(10).toBeDefined();
 expect(NaN).toBeNaN();
 });

 // === ЧИСЛА ===
 test("числовые matchers", () => {
 // Больше/меньше
 expect(10).toBeGreaterThan(5);
 expect(10).toBeGreaterThanOrEqual(10);
 expect(5).toBeLessThan(10);
 expect(5).toBeLessThanOrEqual(5);

 // Для чисел с плавающей точкой
 expect(0.1 + 0.2).toBeCloseTo(0.3, 5);
 });

 // === СТРОКИ ===
 test("строковые matchers", () => {
 expect("Hello World").toMatch(/World/);
 expect("team").not.toMatch(/I/);
 expect("Hello").toContain("ell");
 });

 // === МАССИВЫ И ИТЕРИРУЕМЫЕ ОБЪЕКТЫ ===
 test("массивы", () => {
 const shoppingList = ["diapers", "kleenex", "trash bags"];

 expect(shoppingList).toContain("kleenex");
 expect(shoppingList).toHaveLength(3);
 });

 // === ИСКЛЮЧЕНИЯ ===
 test("проверка исключений", () => {
 function throwError() {
 throw new Error("Something went wrong");
 }

 expect(() => throwError()).toThrow();
 expect(() => throwError()).toThrow(Error);
 expect(() => throwError()).toThrow("Something went wrong");
 });
});
