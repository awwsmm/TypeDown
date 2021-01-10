export class Example {

  private _value: number

  static MIN_VALUE: number = 0
  static MAX_VALUE: number = 2**32 - 1

  constructor (value: number) {
    let truncated = Math.floor(value)
    if (truncated < Example.MIN_VALUE)
      throw new Error(`range error: UInt32 has MIN_VALUE 0, received ${value}`)
    if (truncated > Example.MAX_VALUE)
      throw new Error(`range error: UInt32 has MAX_VALUE 4294967295 (2^32 - 1), received ${value}`)
    this._value = truncated
  }

  toNumber(): number {
    return this._value
  }

  static fromNumber (value: number): Example {
    return new this(value)
  }

  plus (that: number | Example): Example {
    if (typeof that === "number") {
      return Example.fromNumber(this.toNumber() + that)
    } else {
      return Example.fromNumber(this.toNumber() + that.toNumber())
    }
  }

  minus (that: number | Example): Example {
    if (typeof that === "number") {
      return Example.fromNumber(this.toNumber() - that)
    } else {
      return Example.fromNumber(this.toNumber() - that.toNumber())
    }
  }

  private compare (obj: number | Example): number {
    let _this: number = this.toNumber()
    let _that: number

    if (typeof obj === "number") _that = obj
    else                         _that = obj.toNumber()

         if (_this < _that) return -1
    else if (_this > _that) return  1
    else                    return  0
  }

  lt (that: number | Example): boolean {
    return this.compare(that) < 0
  }

  lessThan (that: number | Example): boolean {
    return this.lt(that)
  }

  gt (that: number | Example): boolean {
    return this.compare(that) > 0
  }

  greaterThan (that: number | Example): boolean {
    return this.gt(that)
  }

  le (that: number | Example): boolean {
    return this.compare(that) < 1
  }

  lessThanOrEqualTo (that: number | Example): boolean {
    return this.le(that)
  }

  ge (that: number | Example): boolean {
    return this.compare(that) > -1
  }

  greaterThanOrEqualTo (that: number | Example): boolean {
    return this.ge(that)
  }

}