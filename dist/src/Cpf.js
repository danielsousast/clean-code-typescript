"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cpf = void 0;
class Cpf {
    constructor(value) {
        if (!this.validate(value))
            throw new Error("Invalid cpf");
        this.value = value;
    }
    calculateDigit(cpf, factor) {
        let total = 0;
        for (const digit of cpf) {
            if (factor > 1)
                total += parseInt(digit) * factor--;
        }
        const rest = total % 11;
        return rest < 2 ? 0 : 11 - rest;
    }
    clean(cpf) {
        return cpf.replace(/\D/g, "");
    }
    hasMinimumLength(cpf) {
        return cpf.length === 11;
    }
    isBlocked(cpf) {
        const [firstDigit] = cpf;
        return [...cpf].every((digit) => digit === firstDigit);
    }
    validate(rawCpf) {
        if (!rawCpf)
            return false;
        const cpf = this.clean(rawCpf);
        if (!this.hasMinimumLength(cpf))
            return false;
        if (this.isBlocked(cpf))
            return false;
        const digit1 = this.calculateDigit(cpf, 10);
        const digit2 = this.calculateDigit(cpf, 11);
        const calculatedDigit = `${digit1}${digit2}`;
        const actualDigit = cpf.slice(9);
        return actualDigit === calculatedDigit;
    }
}
exports.Cpf = Cpf;
