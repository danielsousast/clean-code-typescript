"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Coupon_1 = require("../src/domain/entity/Coupon");
test("should make a coupon valid", () => {
    const today = new Date("2022-01-01");
    const coupon = new Coupon_1.Coupon("VALE20", 20, new Date("2022-01-10"));
    expect(coupon.isValid(today)).toBeTruthy();
});
test("should make a coupon expired", () => {
    const coupon = new Coupon_1.Coupon("VALE20", 20, new Date("2022-01-01"));
    const today = new Date("2022-01-10");
    expect(coupon.isValid(today)).toBeFalsy();
});
