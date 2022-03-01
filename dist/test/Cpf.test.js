"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cpf_1 = require("../src/Cpf");
test("Deve validar um cpf", function () {
    const cpf = new Cpf_1.Cpf("847.903.332-05");
    expect(cpf).toBeDefined();
});
test("Não deve validar um cpf", function () {
    const cpf = "847.903.332";
    expect(() => new Cpf_1.Cpf(cpf)).toThrow(new Error("Invalid cpf"));
});
