> # Class: StorageFunctionType

## Hierarchy

  * [Enum](_codec_enumtype_.enum.md)

  * **StorageFunctionType**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_metadata_v4_storage_.storagefunctiontype.md#constructor)

### Accessors

* [asDoubleMap](_metadata_v4_storage_.storagefunctiontype.md#asdoublemap)
* [asMap](_metadata_v4_storage_.storagefunctiontype.md#asmap)
* [asType](_metadata_v4_storage_.storagefunctiontype.md#astype)
* [encodedLength](_metadata_v4_storage_.storagefunctiontype.md#encodedlength)
* [hash](_metadata_v4_storage_.storagefunctiontype.md#hash)
* [index](_metadata_v4_storage_.storagefunctiontype.md#index)
* [isDoubleMap](_metadata_v4_storage_.storagefunctiontype.md#isdoublemap)
* [isEmpty](_metadata_v4_storage_.storagefunctiontype.md#isempty)
* [isMap](_metadata_v4_storage_.storagefunctiontype.md#ismap)
* [isNone](_metadata_v4_storage_.storagefunctiontype.md#isnone)
* [isNull](_metadata_v4_storage_.storagefunctiontype.md#isnull)
* [isPlainType](_metadata_v4_storage_.storagefunctiontype.md#isplaintype)
* [type](_metadata_v4_storage_.storagefunctiontype.md#type)
* [value](_metadata_v4_storage_.storagefunctiontype.md#value)

### Methods

* [eq](_metadata_v4_storage_.storagefunctiontype.md#eq)
* [toHex](_metadata_v4_storage_.storagefunctiontype.md#tohex)
* [toJSON](_metadata_v4_storage_.storagefunctiontype.md#tojson)
* [toNumber](_metadata_v4_storage_.storagefunctiontype.md#tonumber)
* [toRawType](_metadata_v4_storage_.storagefunctiontype.md#torawtype)
* [toString](_metadata_v4_storage_.storagefunctiontype.md#tostring)
* [toU8a](_metadata_v4_storage_.storagefunctiontype.md#tou8a)
* [with](_metadata_v4_storage_.storagefunctiontype.md#static-with)

## Constructors

###  constructor

\+ **new StorageFunctionType**(`value?`: any, `index?`: undefined | number): *[StorageFunctionType](_metadata_v4_storage_.storagefunctiontype.md)*

*Overrides [Enum](_codec_enumtype_.enum.md).[constructor](_codec_enumtype_.enum.md#constructor)*

*Defined in [Metadata/v4/Storage.ts:16](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/Metadata/v4/Storage.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | any |
`index?` | undefined \| number |

**Returns:** *[StorageFunctionType](_metadata_v4_storage_.storagefunctiontype.md)*

## Accessors

###  asDoubleMap

• **get asDoubleMap**(): *[DoubleMapTypeV4](../interfaces/_interfaces_metadata_types_.doublemaptypev4.md)*

*Defined in [Metadata/v4/Storage.ts:28](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/Metadata/v4/Storage.ts#L28)*

**`description`** The value as a mapped value

**Returns:** *[DoubleMapTypeV4](../interfaces/_interfaces_metadata_types_.doublemaptypev4.md)*

___

###  asMap

• **get asMap**(): *[MapTypeV4](../interfaces/_interfaces_metadata_types_.maptypev4.md)*

*Defined in [Metadata/v4/Storage.ts:37](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/Metadata/v4/Storage.ts#L37)*

**`description`** The value as a mapped value

**Returns:** *[MapTypeV4](../interfaces/_interfaces_metadata_types_.maptypev4.md)*

___

###  asType

• **get asType**(): *[PlainTypeV4](../interfaces/_interfaceregistry_.interfaceregistry.md#plaintypev4)*

*Defined in [Metadata/v4/Storage.ts:46](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/Metadata/v4/Storage.ts#L46)*

**`description`** The value as a [Type](../interfaces/_interfaces_runtime_types_.header.md#type) value

**Returns:** *[PlainTypeV4](../interfaces/_interfaceregistry_.interfaceregistry.md#plaintypev4)*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Enum](_codec_enumtype_.enum.md).[encodedLength](_codec_enumtype_.enum.md#encodedlength)*

*Overrides [Base](_codec_base_.base.md).[encodedLength](_codec_base_.base.md#encodedlength)*

*Defined in [codec/EnumType.ts:169](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/codec/EnumType.ts#L169)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_.ihash.md)*

*Inherited from [Base](_codec_base_.base.md).[hash](_codec_base_.base.md#hash)*

*Defined in [codec/Base.ts:32](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/codec/Base.ts#L32)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_.ihash.md)*

___

###  index

• **get index**(): *number*

*Inherited from [Enum](_codec_enumtype_.enum.md).[index](_codec_enumtype_.enum.md#index)*

*Defined in [codec/EnumType.ts:176](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/codec/EnumType.ts#L176)*

**`description`** The index of the metadata value

**Returns:** *number*

___

###  isDoubleMap

• **get isDoubleMap**(): *boolean*

*Defined in [Metadata/v4/Storage.ts:55](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/Metadata/v4/Storage.ts#L55)*

**`description`** `true` if the storage entry is a doublemap

**Returns:** *boolean*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Base](_codec_base_.base.md).[isEmpty](_codec_base_.base.md#isempty)*

*Defined in [codec/Base.ts:39](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/codec/Base.ts#L39)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  isMap

• **get isMap**(): *boolean*

*Defined in [Metadata/v4/Storage.ts:62](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/Metadata/v4/Storage.ts#L62)*

**`description`** `true` if the storage entry is a map

**Returns:** *boolean*

___

###  isNone

• **get isNone**(): *boolean*

*Inherited from [Enum](_codec_enumtype_.enum.md).[isNone](_codec_enumtype_.enum.md#isnone)*

*Defined in [codec/EnumType.ts:183](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/codec/EnumType.ts#L183)*

**`description`** Checks if the Enum points to a [Null](_primitive_null_.null.md) type

**Returns:** *boolean*

___

###  isNull

• **get isNull**(): *boolean*

*Inherited from [Enum](_codec_enumtype_.enum.md).[isNull](_codec_enumtype_.enum.md#isnull)*

*Defined in [codec/EnumType.ts:190](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/codec/EnumType.ts#L190)*

**`description`** Checks if the Enum points to a [Null](_primitive_null_.null.md) type (deprecated, use isNone)

**Returns:** *boolean*

___

###  isPlainType

• **get isPlainType**(): *boolean*

*Defined in [Metadata/v4/Storage.ts:69](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/Metadata/v4/Storage.ts#L69)*

**`description`** `true` if the storage entry is a plain type

**Returns:** *boolean*

___

###  type

• **get type**(): *string*

*Inherited from [Enum](_codec_enumtype_.enum.md).[type](_codec_enumtype_.enum.md#type)*

*Defined in [codec/EnumType.ts:197](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/codec/EnumType.ts#L197)*

**`description`** The name of the type this enum value represents

**Returns:** *string*

___

###  value

• **get value**(): *[Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[value](_codec_enumtype_.enum.md#value)*

*Defined in [codec/EnumType.ts:204](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/codec/EnumType.ts#L204)*

**`description`** The value of the enum

**Returns:** *[Codec](../interfaces/_types_.codec.md)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[eq](_codec_enumtype_.enum.md#eq)*

*Overrides [Base](_codec_base_.base.md).[eq](_codec_base_.base.md#eq)*

*Defined in [codec/EnumType.ts:211](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/codec/EnumType.ts#L211)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toHex](_codec_enumtype_.enum.md#tohex)*

*Overrides [Base](_codec_base_.base.md).[toHex](_codec_base_.base.md#tohex)*

*Defined in [codec/EnumType.ts:226](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/codec/EnumType.ts#L226)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_.md#anyjson)*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toJSON](_codec_enumtype_.enum.md#tojson)*

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [codec/EnumType.ts:233](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/codec/EnumType.ts#L233)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toNumber

▸ **toNumber**(): *number*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toNumber](_codec_enumtype_.enum.md#tonumber)*

*Defined in [codec/EnumType.ts:242](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/codec/EnumType.ts#L242)*

**`description`** Returns the number representation for the value

**Returns:** *number*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toRawType](_codec_enumtype_.enum.md#torawtype)*

*Overrides [Base](_codec_base_.base.md).[toRawType](_codec_base_.base.md#torawtype)*

*Defined in [codec/EnumType.ts:249](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/codec/EnumType.ts#L249)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Overrides [Enum](_codec_enumtype_.enum.md).[toString](_codec_enumtype_.enum.md#tostring)*

*Defined in [Metadata/v4/Storage.ts:76](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/Metadata/v4/Storage.ts#L76)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toU8a](_codec_enumtype_.enum.md#tou8a)*

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [codec/EnumType.ts:274](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/codec/EnumType.ts#L274)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

### `Static` with

▸ **with**(`Types`: `Record<string, InterfaceTypes | Constructor>` | string[]): *`EnumConstructor<Enum>`*

*Inherited from [Enum](_codec_enumtype_.enum.md).[with](_codec_enumtype_.enum.md#static-with)*

*Defined in [codec/EnumType.ts:133](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/codec/EnumType.ts#L133)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `Record<string, InterfaceTypes \| Constructor>` \| string[] |

**Returns:** *`EnumConstructor<Enum>`*