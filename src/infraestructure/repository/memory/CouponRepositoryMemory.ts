import { Coupon } from "../../../domain/entity/Coupon";
import { CouponRepository } from "../../../domain/repository/CouponRepository";

const makeCoupon = (code: string, percent: number):Coupon => {
    return new Coupon(
        code,
        percent,
        new Date('2022-01-01')
    )
}

export class CouponrepositoryMemory implements CouponRepository {
    coupons: Coupon[]

    constructor() {
        this.coupons = [
            makeCoupon('VALE10', 10),
            makeCoupon('VALE20',20),
            makeCoupon('VALE30',20),
        ]
    }
    
    findByCode(code: string): Promise<Coupon | undefined> {
        return Promise.resolve(this.coupons.find(coupon => coupon.code === code))
    }
     
    
}