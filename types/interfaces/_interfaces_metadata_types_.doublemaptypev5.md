> # Interface: DoubleMapTypeV5 <**S, T, V, E**>

Struct

## Type parameters

▪ **S**: *`TypesDef`*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  * [Struct](../classes/_codec_struct_.struct.md)

  * **DoubleMapTypeV5**

## Implements

* [Codec](_types_.codec.md)

## Index

### Constructors

* [constructor](_interfaces_metadata_types_.doublemaptypev5.md#constructor)

### Properties

* [hasher](_interfaces_metadata_types_.doublemaptypev5.md#hasher)
* [key1](_interfaces_metadata_types_.doublemaptypev5.md#key1)
* [key2](_interfaces_metadata_types_.doublemaptypev5.md#key2)
* [key2Hasher](_interfaces_metadata_types_.doublemaptypev5.md#key2hasher)
* [value](_interfaces_metadata_types_.doublemaptypev5.md#value)

### Accessors

* [Type](_interfaces_metadata_types_.doublemaptypev5.md#type)
* [encodedLength](_interfaces_metadata_types_.doublemaptypev5.md#encodedlength)
* [hash](_interfaces_metadata_types_.doublemaptypev5.md#hash)
* [isEmpty](_interfaces_metadata_types_.doublemaptypev5.md#isempty)

### Methods

* [eq](_interfaces_metadata_types_.doublemaptypev5.md#eq)
* [get](_interfaces_metadata_types_.doublemaptypev5.md#get)
* [getAtIndex](_interfaces_metadata_types_.doublemaptypev5.md#getatindex)
* [toArray](_interfaces_metadata_types_.doublemaptypev5.md#toarray)
* [toHex](_interfaces_metadata_types_.doublemaptypev5.md#tohex)
* [toJSON](_interfaces_metadata_types_.doublemaptypev5.md#tojson)
* [toRawType](_interfaces_metadata_types_.doublemaptypev5.md#torawtype)
* [toString](_interfaces_metadata_types_.doublemaptypev5.md#tostring)
* [toU8a](_interfaces_metadata_types_.doublemaptypev5.md#tou8a)
* [with](_interfaces_metadata_types_.doublemaptypev5.md#static-with)

## Constructors

###  constructor

\+ **new DoubleMapTypeV5**(`Types`: `S`, `value`: `V` | `Map<any, any>` | any[] | string, `jsonMap`: `Map<keyof S, string>`): *[DoubleMapTypeV5](_interfaces_metadata_types_.doublemaptypev5.md)*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[constructor](../classes/_codec_struct_.struct.md#constructor)*

*Defined in [codec/Struct.ts:36](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/codec/Struct.ts#L36)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`Types` | `S` | - |
`value` | `V` \| `Map<any, any>` \| any[] \| string |  {} as unknown as V |
`jsonMap` | `Map<keyof S, string>` |  new Map() |

**Returns:** *[DoubleMapTypeV5](_interfaces_metadata_types_.doublemaptypev5.md)*

## Properties

###  hasher

• **hasher**: *[StorageHasher](../classes/_primitive_storagehasher_.storagehasher.md)*

*Defined in [interfaces/metadata/types.ts:45](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/interfaces/metadata/types.ts#L45)*

StorageHasher

___

###  key1

• **key1**: *[Type](../classes/_primitive_type_.type.md)*

*Defined in [interfaces/metadata/types.ts:47](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/interfaces/metadata/types.ts#L47)*

Type

___

###  key2

• **key2**: *[Type](../classes/_primitive_type_.type.md)*

*Defined in [interfaces/metadata/types.ts:49](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/interfaces/metadata/types.ts#L49)*

Type

___

###  key2Hasher

• **key2Hasher**: *[StorageHasher](../classes/_primitive_storagehasher_.storagehasher.md)*

*Defined in [interfaces/metadata/types.ts:53](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/interfaces/metadata/types.ts#L53)*

StorageHasher

___

###  value

• **value**: *[Type](../classes/_primitive_type_.type.md)*

*Defined in [interfaces/metadata/types.ts:51](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/interfaces/metadata/types.ts#L51)*

Type

## Accessors

###  Type

• **get Type**(): *`E`*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[Type](../classes/_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:157](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/codec/Struct.ts#L157)*

**`description`** Returns the Type description to sthe structure

**Returns:** *`E`*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[encodedLength](../classes/_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:170](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/codec/Struct.ts#L170)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](_types_.ihash.md)*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[hash](../classes/_codec_struct_.struct.md#hash)*

*Defined in [codec/Struct.ts:181](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/codec/Struct.ts#L181)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[isEmpty](../classes/_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:142](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/codec/Struct.ts#L142)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[eq](../classes/_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:188](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/codec/Struct.ts#L188)*

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

*Defined in [codec/Struct.ts:196](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/codec/Struct.ts#L196)*

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

*Defined in [codec/Struct.ts:203](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/codec/Struct.ts#L203)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Codec](_types_.codec.md)*

___

###  toArray

▸ **toArray**(): *[Codec](_types_.codec.md)[]*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toArray](../classes/_codec_struct_.struct.md#toarray)*

*Defined in [codec/Struct.ts:210](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/codec/Struct.ts#L210)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toHex](../classes/_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:217](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/codec/Struct.ts#L217)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](_types_.anyjsonobject.md) | string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toJSON](../classes/_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:224](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/codec/Struct.ts#L224)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](_types_.anyjsonobject.md) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toRawType](../classes/_codec_struct_.struct.md#torawtype)*

*Defined in [codec/Struct.ts:240](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/codec/Struct.ts#L240)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toString](../classes/_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:253](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/codec/Struct.ts#L253)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toU8a](../classes/_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:261](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/codec/Struct.ts#L261)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

### `Static` with

▸ **with**<**S**>(`Types`: `S`): *[Constructor](_types_.constructor.md)‹*[Struct](../classes/_codec_struct_.struct.md)‹*`S`*›*›*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[with](../classes/_codec_struct_.struct.md#static-with)*

*Defined in [codec/Struct.ts:119](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/codec/Struct.ts#L119)*

**Type parameters:**

▪ **S**: *`TypesDef`*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `S` |

**Returns:** *[Constructor](_types_.constructor.md)‹*[Struct](../classes/_codec_struct_.struct.md)‹*`S`*›*›*