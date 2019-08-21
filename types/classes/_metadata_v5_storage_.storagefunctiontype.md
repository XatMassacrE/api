> # Class: StorageFunctionType

## Hierarchy

  * [Enum](_codec_enum_.enum.md)

  * **StorageFunctionType**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_metadata_v5_storage_.storagefunctiontype.md#constructor)

### Accessors

* [asDoubleMap](_metadata_v5_storage_.storagefunctiontype.md#asdoublemap)
* [asMap](_metadata_v5_storage_.storagefunctiontype.md#asmap)
* [asType](_metadata_v5_storage_.storagefunctiontype.md#astype)
* [encodedLength](_metadata_v5_storage_.storagefunctiontype.md#encodedlength)
* [hash](_metadata_v5_storage_.storagefunctiontype.md#hash)
* [index](_metadata_v5_storage_.storagefunctiontype.md#index)
* [isDoubleMap](_metadata_v5_storage_.storagefunctiontype.md#isdoublemap)
* [isEmpty](_metadata_v5_storage_.storagefunctiontype.md#isempty)
* [isMap](_metadata_v5_storage_.storagefunctiontype.md#ismap)
* [isNone](_metadata_v5_storage_.storagefunctiontype.md#isnone)
* [isNull](_metadata_v5_storage_.storagefunctiontype.md#isnull)
* [isPlainType](_metadata_v5_storage_.storagefunctiontype.md#isplaintype)
* [type](_metadata_v5_storage_.storagefunctiontype.md#type)
* [value](_metadata_v5_storage_.storagefunctiontype.md#value)

### Methods

* [eq](_metadata_v5_storage_.storagefunctiontype.md#eq)
* [toHex](_metadata_v5_storage_.storagefunctiontype.md#tohex)
* [toJSON](_metadata_v5_storage_.storagefunctiontype.md#tojson)
* [toNumber](_metadata_v5_storage_.storagefunctiontype.md#tonumber)
* [toRawType](_metadata_v5_storage_.storagefunctiontype.md#torawtype)
* [toString](_metadata_v5_storage_.storagefunctiontype.md#tostring)
* [toU8a](_metadata_v5_storage_.storagefunctiontype.md#tou8a)
* [with](_metadata_v5_storage_.storagefunctiontype.md#static-with)

## Constructors

###  constructor

\+ **new StorageFunctionType**(`value?`: any, `index?`: undefined | number): *[StorageFunctionType](_metadata_v5_storage_.storagefunctiontype.md)*

*Overrides [Enum](_codec_enum_.enum.md).[constructor](_codec_enum_.enum.md#constructor)*

*Defined in [Metadata/v5/Storage.ts:16](https://github.com/polkadot-js/api/blob/67d6c50/packages/types/src/Metadata/v5/Storage.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | any |
`index?` | undefined \| number |

**Returns:** *[StorageFunctionType](_metadata_v5_storage_.storagefunctiontype.md)*

## Accessors

###  asDoubleMap

• **get asDoubleMap**(): *[DoubleMapTypeV5](../interfaces/_interfaces_metadata_types_.doublemaptypev5.md)*

*Defined in [Metadata/v5/Storage.ts:28](https://github.com/polkadot-js/api/blob/67d6c50/packages/types/src/Metadata/v5/Storage.ts#L28)*

**`description`** The value as a mapped value

**Returns:** *[DoubleMapTypeV5](../interfaces/_interfaces_metadata_types_.doublemaptypev5.md)*

___

###  asMap

• **get asMap**(): *[MapTypeV5](../interfaces/_interfaceregistry_.interfaceregistry.md#maptypev5)*

*Defined in [Metadata/v5/Storage.ts:37](https://github.com/polkadot-js/api/blob/67d6c50/packages/types/src/Metadata/v5/Storage.ts#L37)*

**`description`** The value as a mapped value

**Returns:** *[MapTypeV5](../interfaces/_interfaceregistry_.interfaceregistry.md#maptypev5)*

___

###  asType

• **get asType**(): *[PlainTypeV5](../interfaces/_interfaceregistry_.interfaceregistry.md#plaintypev5)*

*Defined in [Metadata/v5/Storage.ts:46](https://github.com/polkadot-js/api/blob/67d6c50/packages/types/src/Metadata/v5/Storage.ts#L46)*

**`description`** The value as a [Type](../interfaces/_interfaces_runtime_types_.header.md#type) value

**Returns:** *[PlainTypeV5](../interfaces/_interfaceregistry_.interfaceregistry.md#plaintypev5)*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Enum](_codec_enum_.enum.md).[encodedLength](_codec_enum_.enum.md#encodedlength)*

*Overrides [Base](_codec_base_.base.md).[encodedLength](_codec_base_.base.md#encodedlength)*

*Defined in [codec/Enum.ts:172](https://github.com/polkadot-js/api/blob/67d6c50/packages/types/src/codec/Enum.ts#L172)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_.ihash.md)*

*Inherited from [Base](_codec_base_.base.md).[hash](_codec_base_.base.md#hash)*

*Defined in [codec/Base.ts:32](https://github.com/polkadot-js/api/blob/67d6c50/packages/types/src/codec/Base.ts#L32)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_.ihash.md)*

___

###  index

• **get index**(): *number*

*Inherited from [Enum](_codec_enum_.enum.md).[index](_codec_enum_.enum.md#index)*

*Defined in [codec/Enum.ts:179](https://github.com/polkadot-js/api/blob/67d6c50/packages/types/src/codec/Enum.ts#L179)*

**`description`** The index of the metadata value

**Returns:** *number*

___

###  isDoubleMap

• **get isDoubleMap**(): *boolean*

*Defined in [Metadata/v5/Storage.ts:55](https://github.com/polkadot-js/api/blob/67d6c50/packages/types/src/Metadata/v5/Storage.ts#L55)*

**`description`** `true` if the storage entry is a doublemap

**Returns:** *boolean*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Base](_codec_base_.base.md).[isEmpty](_codec_base_.base.md#isempty)*

*Defined in [codec/Base.ts:39](https://github.com/polkadot-js/api/blob/67d6c50/packages/types/src/codec/Base.ts#L39)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  isMap

• **get isMap**(): *boolean*

*Defined in [Metadata/v5/Storage.ts:62](https://github.com/polkadot-js/api/blob/67d6c50/packages/types/src/Metadata/v5/Storage.ts#L62)*

**`description`** `true` if the storage entry is a map

**Returns:** *boolean*

___

###  isNone

• **get isNone**(): *boolean*

*Inherited from [Enum](_codec_enum_.enum.md).[isNone](_codec_enum_.enum.md#isnone)*

*Defined in [codec/Enum.ts:186](https://github.com/polkadot-js/api/blob/67d6c50/packages/types/src/codec/Enum.ts#L186)*

**`description`** Checks if the Enum points to a [Null](_primitive_null_.null.md) type

**Returns:** *boolean*

___

###  isNull

• **get isNull**(): *boolean*

*Inherited from [Enum](_codec_enum_.enum.md).[isNull](_codec_enum_.enum.md#isnull)*

*Defined in [codec/Enum.ts:193](https://github.com/polkadot-js/api/blob/67d6c50/packages/types/src/codec/Enum.ts#L193)*

**`description`** Checks if the Enum points to a [Null](_primitive_null_.null.md) type (deprecated, use isNone)

**Returns:** *boolean*

___

###  isPlainType

• **get isPlainType**(): *boolean*

*Defined in [Metadata/v5/Storage.ts:69](https://github.com/polkadot-js/api/blob/67d6c50/packages/types/src/Metadata/v5/Storage.ts#L69)*

**`description`** `true` if the storage entry is a plain type

**Returns:** *boolean*

___

###  type

• **get type**(): *string*

*Inherited from [Enum](_codec_enum_.enum.md).[type](_codec_enum_.enum.md#type)*

*Defined in [codec/Enum.ts:200](https://github.com/polkadot-js/api/blob/67d6c50/packages/types/src/codec/Enum.ts#L200)*

**`description`** The name of the type this enum value represents

**Returns:** *string*

___

###  value

• **get value**(): *[Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enum_.enum.md).[value](_codec_enum_.enum.md#value)*

*Defined in [codec/Enum.ts:207](https://github.com/polkadot-js/api/blob/67d6c50/packages/types/src/codec/Enum.ts#L207)*

**`description`** The value of the enum

**Returns:** *[Codec](../interfaces/_types_.codec.md)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enum_.enum.md).[eq](_codec_enum_.enum.md#eq)*

*Overrides [Base](_codec_base_.base.md).[eq](_codec_base_.base.md#eq)*

*Defined in [codec/Enum.ts:214](https://github.com/polkadot-js/api/blob/67d6c50/packages/types/src/codec/Enum.ts#L214)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Enum](_codec_enum_.enum.md).[toHex](_codec_enum_.enum.md#tohex)*

*Overrides [Base](_codec_base_.base.md).[toHex](_codec_base_.base.md#tohex)*

*Defined in [codec/Enum.ts:229](https://github.com/polkadot-js/api/blob/67d6c50/packages/types/src/codec/Enum.ts#L229)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_.md#anyjson)*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enum_.enum.md).[toJSON](_codec_enum_.enum.md#tojson)*

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [codec/Enum.ts:236](https://github.com/polkadot-js/api/blob/67d6c50/packages/types/src/codec/Enum.ts#L236)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toNumber

▸ **toNumber**(): *number*

*Inherited from [Enum](_codec_enum_.enum.md).[toNumber](_codec_enum_.enum.md#tonumber)*

*Defined in [codec/Enum.ts:245](https://github.com/polkadot-js/api/blob/67d6c50/packages/types/src/codec/Enum.ts#L245)*

**`description`** Returns the number representation for the value

**Returns:** *number*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enum_.enum.md).[toRawType](_codec_enum_.enum.md#torawtype)*

*Overrides [Base](_codec_base_.base.md).[toRawType](_codec_base_.base.md#torawtype)*

*Defined in [codec/Enum.ts:252](https://github.com/polkadot-js/api/blob/67d6c50/packages/types/src/codec/Enum.ts#L252)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Overrides [Enum](_codec_enum_.enum.md).[toString](_codec_enum_.enum.md#tostring)*

*Defined in [Metadata/v5/Storage.ts:76](https://github.com/polkadot-js/api/blob/67d6c50/packages/types/src/Metadata/v5/Storage.ts#L76)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enum_.enum.md).[toU8a](_codec_enum_.enum.md#tou8a)*

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [codec/Enum.ts:273](https://github.com/polkadot-js/api/blob/67d6c50/packages/types/src/codec/Enum.ts#L273)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

### `Static` with

▸ **with**(`Types`: `Record<string, InterfaceTypes | Constructor>` | string[]): *[EnumConstructor](../interfaces/_codec_enum_.enumconstructor.md)‹*[Enum](_codec_enum_.enum.md)*›*

*Inherited from [Enum](_codec_enum_.enum.md).[with](_codec_enum_.enum.md#static-with)*

*Defined in [codec/Enum.ts:136](https://github.com/polkadot-js/api/blob/67d6c50/packages/types/src/codec/Enum.ts#L136)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `Record<string, InterfaceTypes \| Constructor>` \| string[] |

**Returns:** *[EnumConstructor](../interfaces/_codec_enum_.enumconstructor.md)‹*[Enum](_codec_enum_.enum.md)*›*