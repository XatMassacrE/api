[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/babe/types"](../modules/_interfaces_babe_types_.md) › [BabeWeight](_interfaces_babe_types_.babeweight.md)

# Interface: BabeWeight

u64

## Hierarchy

  ↳ [U64](../classes/_primitive_u64_.u64.md)

  ↳ **BabeWeight**

## Implements

* [Codec](_types_.codec.md)

## Index

### Constructors

* [constructor](_interfaces_babe_types_.babeweight.md#constructor)

### Methods

* [toHex](_interfaces_babe_types_.babeweight.md#tohex)
* [toRawType](_interfaces_babe_types_.babeweight.md#torawtype)
* [toU8a](_interfaces_babe_types_.babeweight.md#tou8a)

## Constructors

###  constructor

\+ **new BabeWeight**(`value?`: [AnyNumber](../modules/_types_.md#anynumber)): *[BabeWeight](_interfaces_babe_types_.babeweight.md)*

*Inherited from [U64](../classes/_primitive_u64_.u64.md).[constructor](../classes/_primitive_u64_.u64.md#constructor)*

*Overrides [UInt](../classes/_codec_uint_.uint.md).[constructor](../classes/_codec_uint_.uint.md#constructor)*

*Defined in [primitive/U64.ts:14](https://github.com/polkadot-js/api/blob/8379689eaa/packages/types/src/primitive/U64.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | [AnyNumber](../modules/_types_.md#anynumber) |

**Returns:** *[BabeWeight](_interfaces_babe_types_.babeweight.md)*

## Methods

###  toHex

▸ **toHex**(`isLe`: boolean): *string*

*Inherited from [UInt](../classes/_codec_uint_.uint.md).[toHex](../classes/_codec_uint_.uint.md#tohex)*

*Overrides void*

*Defined in [codec/UInt.ts:37](https://github.com/polkadot-js/api/blob/8379689eaa/packages/types/src/codec/UInt.ts#L37)*

**`description`** Returns a hex string representation of the value

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`isLe` | boolean | false |

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [UInt](../classes/_codec_uint_.uint.md).[toRawType](../classes/_codec_uint_.uint.md#torawtype)*

*Overrides void*

*Defined in [codec/UInt.ts:49](https://github.com/polkadot-js/api/blob/8379689eaa/packages/types/src/codec/UInt.ts#L49)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [UInt](../classes/_codec_uint_.uint.md).[toU8a](../classes/_codec_uint_.uint.md#tou8a)*

*Overrides void*

*Defined in [codec/UInt.ts:63](https://github.com/polkadot-js/api/blob/8379689eaa/packages/types/src/codec/UInt.ts#L63)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*