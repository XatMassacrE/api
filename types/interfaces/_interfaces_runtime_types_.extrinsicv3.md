[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/runtime/types"](../modules/_interfaces_runtime_types_.md) › [ExtrinsicV3](_interfaces_runtime_types_.extrinsicv3.md)

# Interface: ExtrinsicV3 <**S, T, V, E**>

GenericExtrinsicV3

## Type parameters

▪ **S**: *TypesDef*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  ↳ [ExtrinsicV3](../classes/_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md)

  ↳ **ExtrinsicV3**

## Implements

* [Codec](_types_.codec.md)
* [IExtrinsicImpl](_types_.iextrinsicimpl.md)

## Index

### Constructors

* [constructor](_interfaces_runtime_types_.extrinsicv3.md#constructor)

### Accessors

* [Type](_interfaces_runtime_types_.extrinsicv3.md#type)
* [encodedLength](_interfaces_runtime_types_.extrinsicv3.md#encodedlength)
* [hash](_interfaces_runtime_types_.extrinsicv3.md#hash)
* [isEmpty](_interfaces_runtime_types_.extrinsicv3.md#isempty)
* [method](_interfaces_runtime_types_.extrinsicv3.md#method)
* [signature](_interfaces_runtime_types_.extrinsicv3.md#signature)
* [version](_interfaces_runtime_types_.extrinsicv3.md#version)

### Methods

* [addSignature](_interfaces_runtime_types_.extrinsicv3.md#addsignature)
* [eq](_interfaces_runtime_types_.extrinsicv3.md#eq)
* [get](_interfaces_runtime_types_.extrinsicv3.md#get)
* [getAtIndex](_interfaces_runtime_types_.extrinsicv3.md#getatindex)
* [sign](_interfaces_runtime_types_.extrinsicv3.md#sign)
* [toArray](_interfaces_runtime_types_.extrinsicv3.md#toarray)
* [toHex](_interfaces_runtime_types_.extrinsicv3.md#tohex)
* [toJSON](_interfaces_runtime_types_.extrinsicv3.md#tojson)
* [toRawType](_interfaces_runtime_types_.extrinsicv3.md#torawtype)
* [toString](_interfaces_runtime_types_.extrinsicv3.md#tostring)
* [toU8a](_interfaces_runtime_types_.extrinsicv3.md#tou8a)
* [decodeExtrinsic](_interfaces_runtime_types_.extrinsicv3.md#static-decodeextrinsic)
* [typesToMap](_interfaces_runtime_types_.extrinsicv3.md#static-typestomap)
* [with](_interfaces_runtime_types_.extrinsicv3.md#static-with)

## Constructors

###  constructor

\+ **new ExtrinsicV3**(`value?`: Uint8Array | [ExtrinsicValueV3](_primitive_extrinsic_v3_extrinsic_.extrinsicvaluev3.md) | [Call](_interfaces_runtime_types_.call.md), `__namedParameters`: object): *[ExtrinsicV3](_interfaces_runtime_types_.extrinsicv3.md)*

*Inherited from [ExtrinsicV3](../classes/_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md).[constructor](../classes/_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md#constructor)*

*Overrides [Struct](../classes/_codec_struct_.struct.md).[constructor](../classes/_codec_struct_.struct.md#constructor)*

*Defined in [primitive/Extrinsic/v3/Extrinsic.ts:27](https://github.com/polkadot-js/api/blob/9086592252/packages/types/src/primitive/Extrinsic/v3/Extrinsic.ts#L27)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value?` | Uint8Array &#124; [ExtrinsicValueV3](_primitive_extrinsic_v3_extrinsic_.extrinsicvaluev3.md) &#124; [Call](_interfaces_runtime_types_.call.md) | - |
`__namedParameters` | object |  {} |

**Returns:** *[ExtrinsicV3](_interfaces_runtime_types_.extrinsicv3.md)*

## Accessors

###  Type

• **get Type**(): *E*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[Type](../classes/_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:155](https://github.com/polkadot-js/api/blob/9086592252/packages/types/src/codec/Struct.ts#L155)*

**`description`** Returns the Type description to sthe structure

**Returns:** *E*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [ExtrinsicV3](../classes/_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md).[encodedLength](../classes/_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md#encodedlength)*

*Overrides [Struct](../classes/_codec_struct_.struct.md).[encodedLength](../classes/_codec_struct_.struct.md#encodedlength)*

*Defined in [primitive/Extrinsic/v3/Extrinsic.ts:59](https://github.com/polkadot-js/api/blob/9086592252/packages/types/src/primitive/Extrinsic/v3/Extrinsic.ts#L59)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](_types_.ihash.md)*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[hash](../classes/_codec_struct_.struct.md#hash)*

*Defined in [codec/Struct.ts:179](https://github.com/polkadot-js/api/blob/9086592252/packages/types/src/codec/Struct.ts#L179)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[isEmpty](../classes/_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:140](https://github.com/polkadot-js/api/blob/9086592252/packages/types/src/codec/Struct.ts#L140)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  method

• **get method**(): *[Call](_interfaces_runtime_types_.call.md)*

*Inherited from [ExtrinsicV3](../classes/_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md).[method](../classes/_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md#method)*

*Defined in [primitive/Extrinsic/v3/Extrinsic.ts:66](https://github.com/polkadot-js/api/blob/9086592252/packages/types/src/primitive/Extrinsic/v3/Extrinsic.ts#L66)*

**`description`** The [Call](_interfaces_runtime_types_.call.md) this extrinsic wraps

**Returns:** *[Call](_interfaces_runtime_types_.call.md)*

___

###  signature

• **get signature**(): *[ExtrinsicSignatureV3](../classes/_primitive_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md)*

*Inherited from [ExtrinsicV3](../classes/_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md).[signature](../classes/_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md#signature)*

*Defined in [primitive/Extrinsic/v3/Extrinsic.ts:73](https://github.com/polkadot-js/api/blob/9086592252/packages/types/src/primitive/Extrinsic/v3/Extrinsic.ts#L73)*

**`description`** The [ExtrinsicSignatureV3](../classes/_primitive_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md)

**Returns:** *[ExtrinsicSignatureV3](../classes/_primitive_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md)*

___

###  version

• **get version**(): *number*

*Inherited from [ExtrinsicV3](../classes/_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md).[version](../classes/_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md#version)*

*Defined in [primitive/Extrinsic/v3/Extrinsic.ts:80](https://github.com/polkadot-js/api/blob/9086592252/packages/types/src/primitive/Extrinsic/v3/Extrinsic.ts#L80)*

**`description`** The version for the signature

**Returns:** *number*

## Methods

###  addSignature

▸ **addSignature**(`signer`: [Address](_interfaces_runtime_types_.address.md) | Uint8Array | string, `signature`: Uint8Array | string, `payload`: [ExtrinsicPayloadValue](_types_.extrinsicpayloadvalue.md) | Uint8Array | string): *[ExtrinsicV3](../classes/_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md)*

*Inherited from [ExtrinsicV3](../classes/_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md).[addSignature](../classes/_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md#addsignature)*

*Defined in [primitive/Extrinsic/v3/Extrinsic.ts:87](https://github.com/polkadot-js/api/blob/9086592252/packages/types/src/primitive/Extrinsic/v3/Extrinsic.ts#L87)*

**`description`** Add an [ExtrinsicSignatureV3](../classes/_primitive_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md) to the extrinsic (already generated)

**Parameters:**

Name | Type |
------ | ------ |
`signer` | [Address](_interfaces_runtime_types_.address.md) &#124; Uint8Array &#124; string |
`signature` | Uint8Array &#124; string |
`payload` | [ExtrinsicPayloadValue](_types_.extrinsicpayloadvalue.md) &#124; Uint8Array &#124; string |

**Returns:** *[ExtrinsicV3](../classes/_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md)*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[eq](../classes/_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:186](https://github.com/polkadot-js/api/blob/9086592252/packages/types/src/codec/Struct.ts#L186)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  get

▸ **get**(`name`: keyof S): *[Codec](_types_.codec.md) | undefined*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[get](../classes/_codec_struct_.struct.md#get)*

*Overrides void*

*Defined in [codec/Struct.ts:194](https://github.com/polkadot-js/api/blob/9086592252/packages/types/src/codec/Struct.ts#L194)*

**`description`** Returns a specific names entry in the structure

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | keyof S | The name of the entry to retrieve  |

**Returns:** *[Codec](_types_.codec.md) | undefined*

___

###  getAtIndex

▸ **getAtIndex**(`index`: number): *[Codec](_types_.codec.md)*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[getAtIndex](../classes/_codec_struct_.struct.md#getatindex)*

*Defined in [codec/Struct.ts:201](https://github.com/polkadot-js/api/blob/9086592252/packages/types/src/codec/Struct.ts#L201)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Codec](_types_.codec.md)*

___

###  sign

▸ **sign**(`account`: [IKeyringPair](_types_.ikeyringpair.md), `options`: [SignatureOptions](_types_.signatureoptions.md)): *[ExtrinsicV3](../classes/_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md)*

*Inherited from [ExtrinsicV3](../classes/_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md).[sign](../classes/_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md#sign)*

*Defined in [primitive/Extrinsic/v3/Extrinsic.ts:96](https://github.com/polkadot-js/api/blob/9086592252/packages/types/src/primitive/Extrinsic/v3/Extrinsic.ts#L96)*

**`description`** Sign the extrinsic with a specific keypair

**Parameters:**

Name | Type |
------ | ------ |
`account` | [IKeyringPair](_types_.ikeyringpair.md) |
`options` | [SignatureOptions](_types_.signatureoptions.md) |

**Returns:** *[ExtrinsicV3](../classes/_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md)*

___

###  toArray

▸ **toArray**(): *[Codec](_types_.codec.md)[]*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toArray](../classes/_codec_struct_.struct.md#toarray)*

*Defined in [codec/Struct.ts:208](https://github.com/polkadot-js/api/blob/9086592252/packages/types/src/codec/Struct.ts#L208)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toHex](../classes/_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:215](https://github.com/polkadot-js/api/blob/9086592252/packages/types/src/codec/Struct.ts#L215)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](_types_.anyjsonobject.md) | string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toJSON](../classes/_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:222](https://github.com/polkadot-js/api/blob/9086592252/packages/types/src/codec/Struct.ts#L222)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](_types_.anyjsonobject.md) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toRawType](../classes/_codec_struct_.struct.md#torawtype)*

*Defined in [codec/Struct.ts:246](https://github.com/polkadot-js/api/blob/9086592252/packages/types/src/codec/Struct.ts#L246)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toString](../classes/_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:255](https://github.com/polkadot-js/api/blob/9086592252/packages/types/src/codec/Struct.ts#L255)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toU8a](../classes/_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:263](https://github.com/polkadot-js/api/blob/9086592252/packages/types/src/codec/Struct.ts#L263)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*

___

### `Static` decodeExtrinsic

▸ **decodeExtrinsic**(`value?`: [Call](_interfaces_runtime_types_.call.md) | Uint8Array | [ExtrinsicValueV3](_primitive_extrinsic_v3_extrinsic_.extrinsicvaluev3.md), `isSigned`: boolean): *[ExtrinsicValueV3](_primitive_extrinsic_v3_extrinsic_.extrinsicvaluev3.md)*

*Inherited from [ExtrinsicV3](../classes/_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md).[decodeExtrinsic](../classes/_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md#static-decodeextrinsic)*

*Defined in [primitive/Extrinsic/v3/Extrinsic.ts:35](https://github.com/polkadot-js/api/blob/9086592252/packages/types/src/primitive/Extrinsic/v3/Extrinsic.ts#L35)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value?` | [Call](_interfaces_runtime_types_.call.md) &#124; Uint8Array &#124; [ExtrinsicValueV3](_primitive_extrinsic_v3_extrinsic_.extrinsicvaluev3.md) | - |
`isSigned` | boolean | false |

**Returns:** *[ExtrinsicValueV3](_primitive_extrinsic_v3_extrinsic_.extrinsicvaluev3.md)*

___

### `Static` typesToMap

▸ **typesToMap**(`Types`: Record‹string, [Constructor](_types_.constructor.md)›): *Record‹string, string›*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[typesToMap](../classes/_codec_struct_.struct.md#static-typestomap)*

*Defined in [codec/Struct.ts:235](https://github.com/polkadot-js/api/blob/9086592252/packages/types/src/codec/Struct.ts#L235)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | Record‹string, [Constructor](_types_.constructor.md)› |

**Returns:** *Record‹string, string›*

___

### `Static` with

▸ **with**<**S**>(`Types`: S): *[Constructor](_types_.constructor.md)‹[Struct](../classes/_codec_struct_.struct.md)‹S››*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[with](../classes/_codec_struct_.struct.md#static-with)*

*Defined in [codec/Struct.ts:117](https://github.com/polkadot-js/api/blob/9086592252/packages/types/src/codec/Struct.ts#L117)*

**Type parameters:**

▪ **S**: *TypesDef*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | S |

**Returns:** *[Constructor](_types_.constructor.md)‹[Struct](../classes/_codec_struct_.struct.md)‹S››*