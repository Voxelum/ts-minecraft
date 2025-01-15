# Class ByteBuffer

## 🏭 Constructors

### constructor

```ts
ByteBuffer(capacity: number, littleEndian: boolean, noAssert: boolean): ByteBuffer
```
Constructs a new ByteBuffer.
 The swiss army knife for binary data in JavaScript.
#### Parameters

- **capacity**: `number`
Initial capacity. Defaults to [ByteBuffer.DEFAULT_CAPACITY](#bytebuffer.ByteBuffer.DEFAULT_CAPACITY).
- **littleEndian**: `boolean`
Whether to use little or big endian byte order. Defaults to
 [ByteBuffer.DEFAULT_ENDIAN](#bytebuffer.ByteBuffer.DEFAULT_ENDIAN).
- **noAssert**: `boolean`
Whether to skip assertions of offsets and values. Defaults to
 [ByteBuffer.DEFAULT_NOASSERT](#bytebuffer.ByteBuffer.DEFAULT_NOASSERT).
#### Return Type

- `ByteBuffer`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L130" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:130</a>
</p>


## 🏷️ Properties

### buffer

```ts
buffer: ArrayBuffer
```
Backing ArrayBuffer.
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L75" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:75</a>
</p>


### limit

```ts
limit: number
```
Absolute limit of the contained data. Set to the backing buffer's capacity upon allocation.
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L105" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:105</a>
</p>


### littleEndian

```ts
littleEndian: boolean
```
Whether to use little endian byte order, defaults to ``false`` for big endian.
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L111" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:111</a>
</p>


### markedOffset

```ts
markedOffset: number
```
Marked offset.
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L97" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:97</a>
</p>


### noAssert

```ts
noAssert: boolean
```
Whether to skip assertions of offsets and values, defaults to ``false``.
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L117" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:117</a>
</p>


### offset

```ts
offset: number
```
Absolute read/write offset.
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L89" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:89</a>
</p>


### readByte

```ts
readByte: (offset?: number) => number = ...
```
Reads an 8bit signed integer. This is an alias of [ByteBuffer#readInt8](#bytebuffer.ByteBuffer.readInt8).
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L364" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:364</a>
</p>


### readDouble

```ts
readDouble: (offset?: number) => number = ...
```
Reads a 64bit float. This is an alias of [ByteBuffer#readFloat64](#bytebuffer.ByteBuffer.readFloat64).
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L822" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:822</a>
</p>


### readFloat

```ts
readFloat: (offset?: number) => number = ...
```
Reads a 32bit float. This is an alias of [ByteBuffer#readFloat32](#bytebuffer.ByteBuffer.readFloat32).
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L757" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:757</a>
</p>


### readInt

```ts
readInt: (offset?: number) => number = ...
```
Reads a 32bit signed integer. This is an alias of [ByteBuffer#readInt32](#bytebuffer.ByteBuffer.readInt32).
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L632" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:632</a>
</p>


### readLong

```ts
readLong: (offset?: number) => bigint = ...
```
Reads a 64bit signed integer. This is an alias of [ByteBuffer#readInt64](#bytebuffer.ByteBuffer.readInt64).
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L1390" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:1390</a>
</p>


### readShort

```ts
readShort: (offset?: number) => number = ...
```
Reads a 16bit signed integer. This is an alias of [ByteBuffer#readInt16](#bytebuffer.ByteBuffer.readInt16).
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L500" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:500</a>
</p>


### readUInt16

```ts
readUInt16: (offset?: number) => number = ...
```
Reads a 16bit unsigned integer. This is an alias of [ByteBuffer#readUint16](#bytebuffer.ByteBuffer.readUint16).
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L570" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:570</a>
</p>


### readUInt32

```ts
readUInt32: (offset?: number) => number = ...
```
Reads a 32bit unsigned integer. This is an alias of [ByteBuffer#readUint32](#bytebuffer.ByteBuffer.readUint32).
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L694" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:694</a>
</p>


### readUInt64

```ts
readUInt64: (offset?: number) => bigint = ...
```
Reads a 64bit unsigned integer. This is an alias of [ByteBuffer#readUint64](#bytebuffer.ByteBuffer.readUint64).
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L1454" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:1454</a>
</p>


### readUInt8

```ts
readUInt8: (offset?: number) => number = ...
```
Reads an 8bit unsigned integer. This is an alias of [ByteBuffer#readUint8](#bytebuffer.ByteBuffer.readUint8).
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L428" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:428</a>
</p>


### toArrayBuffer

```ts
toArrayBuffer: (forceCopy?: boolean) => ArrayBuffer = ...
```
Returns a raw buffer compacted to contain this ByteBuffer's contents. Contents are the bytes between
 [ByteBuffer#offset](#bytebuffer.ByteBuffer.offset) and [ByteBuffer#limit](#bytebuffer.ByteBuffer.limit). This is an alias of [ByteBuffer#toBuffer](#bytebuffer.ByteBuffer.toBuffer).
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L1498" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:1498</a>
</p>


### view

```ts
view: DataView
```
DataView utilized to manipulate the backing buffer. Becomes ``null`` if the backing buffer has a capacity of ``0``.
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L81" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:81</a>
</p>


### writeByte

```ts
writeByte: (value: number, offset?: number) => ByteBuffer = ...
```
Writes an 8bit signed integer. This is an alias of [ByteBuffer#writeInt8](#bytebuffer.ByteBuffer.writeInt8).
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L336" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:336</a>
</p>


### writeBytes

```ts
writeBytes: (source: Uint8Array | ArrayBuffer | ByteBuffer, offset?: number) => ByteBuffer = ...
```
Writes a payload of bytes. This is an alias of [ByteBuffer#append](#bytebuffer.ByteBuffer.append).
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L298" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:298</a>
</p>


### writeDouble

```ts
writeDouble: (value: number, offset?: number) => ByteBuffer = ...
```
Writes a 64bit float. This is an alias of [ByteBuffer#writeFloat64](#bytebuffer.ByteBuffer.writeFloat64).
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L794" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:794</a>
</p>


### writeFloat

```ts
writeFloat: (value: number, offset?: number) => ByteBuffer = ...
```
Writes a 32bit float. This is an alias of [ByteBuffer#writeFloat32](#bytebuffer.ByteBuffer.writeFloat32).
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L729" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:729</a>
</p>


### writeInt

```ts
writeInt: (value: number, offset?: number) => ByteBuffer = ...
```
Writes a 32bit signed integer. This is an alias of [ByteBuffer#writeInt32](#bytebuffer.ByteBuffer.writeInt32).
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L605" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:605</a>
</p>


### writeLong

```ts
writeLong: (value: number | bigint, offset?: number) => ByteBuffer = ...
```
Writes a 64bit signed integer. This is an alias of [ByteBuffer#writeInt64](#bytebuffer.ByteBuffer.writeInt64).
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L1363" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:1363</a>
</p>


### writeShort

```ts
writeShort: (value: number, offset?: number) => ByteBuffer = ...
```
Writes a 16bit signed integer. This is an alias of [ByteBuffer#writeInt16](#bytebuffer.ByteBuffer.writeInt16).
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L468" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:468</a>
</p>


### writeUInt16

```ts
writeUInt16: (value: number, offset?: number) => ByteBuffer = ...
```
Writes a 16bit unsigned integer. This is an alias of [ByteBuffer#writeUint16](#bytebuffer.ByteBuffer.writeUint16).
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L538" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:538</a>
</p>


### writeUInt32

```ts
writeUInt32: (value: number, offset?: number) => ByteBuffer = ...
```
Writes a 32bit unsigned integer. This is an alias of [ByteBuffer#writeUint32](#bytebuffer.ByteBuffer.writeUint32).
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L666" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:666</a>
</p>


### writeUInt64

```ts
writeUInt64: (value: number | bigint, offset?: number) => ByteBuffer = ...
```
Writes a 64bit unsigned integer. This is an alias of [ByteBuffer#writeUint64](#bytebuffer.ByteBuffer.writeUint64).
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L1426" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:1426</a>
</p>


### writeUInt8

```ts
writeUInt8: (value: number, offset?: number) => ByteBuffer = ...
```
Writes an 8bit unsigned integer. This is an alias of [ByteBuffer#writeUint8](#bytebuffer.ByteBuffer.writeUint8).
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L400" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:400</a>
</p>


### accessor <Badge type="warning" text="static" />

```ts
accessor: () => DataViewConstructor = ...
```
Gets the accessor type.
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L155" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:155</a>
</p>


### allocate <Badge type="warning" text="static" />

```ts
allocate: (capacity?: number, littleEndian?: boolean, noAssert?: boolean) => ByteBuffer = ...
```
Allocates a new ByteBuffer backed by a buffer of the specified capacity.
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L169" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:169</a>
</p>


### BIG_ENDIAN <Badge type="warning" text="static" />

```ts
BIG_ENDIAN: boolean = false
```
Big endian constant that can be used instead of its boolean value. Evaluates to ``false``.
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L48" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:48</a>
</p>


### concat <Badge type="warning" text="static" />

```ts
concat: (buffers: (Uint8Array | ArrayBuffer | ByteBuffer)[], littleEndian?: boolean, noAssert?: boolean) => ByteBuffer = ...
```
Concatenates multiple ByteBuffers into one.
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L185" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:185</a>
</p>


### DEFAULT_CAPACITY <Badge type="warning" text="static" />

```ts
DEFAULT_CAPACITY: number = 16
```
Default initial capacity of ``16``.
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L55" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:55</a>
</p>


### DEFAULT_ENDIAN <Badge type="warning" text="static" />

```ts
DEFAULT_ENDIAN: boolean = ByteBuffer.BIG_ENDIAN
```
Default endianess of ``false`` for big endian.
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L62" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:62</a>
</p>


### DEFAULT_NOASSERT <Badge type="warning" text="static" />

```ts
DEFAULT_NOASSERT: boolean = false
```
Default no assertions flag of ``false``.
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L69" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:69</a>
</p>


### LITTLE_ENDIAN <Badge type="warning" text="static" />

```ts
LITTLE_ENDIAN: boolean = true
```
Little endian constant that can be used instead of its boolean value. Evaluates to ``true``.
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L40" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:40</a>
</p>


### type <Badge type="warning" text="static" />

```ts
type: () => ArrayBufferConstructor = ...
```
Gets the backing buffer type.
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L220" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:220</a>
</p>


### VERSION <Badge type="warning" text="static" />

```ts
VERSION: string = '0.0.1'
```
ByteBuffer version.
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L32" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:32</a>
</p>


### wrap <Badge type="warning" text="static" />

```ts
wrap: (buffer: number[] | ArrayBuffer, littleEndian?: boolean, noAssert?: boolean) => ByteBuffer = ...
```
Wraps a buffer or a string. Sets the allocated ByteBuffer's [ByteBuffer#offset](#bytebuffer.ByteBuffer.offset) to ``0`` and its
 [ByteBuffer#limit](#bytebuffer.ByteBuffer.limit) to the length of the wrapped data.
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L235" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:235</a>
</p>


## 🔧 Methods

### append

```ts
append(source: Uint8Array | ArrayBuffer | ByteBuffer, offset: number): ByteBuffer
```
Appends some data to this ByteBuffer. This will overwrite any contents behind the specified offset up to the appended
 data's length.
#### Parameters

- **source**: `Uint8Array | ArrayBuffer | ByteBuffer`
Data to append. If ``source`` is a ByteBuffer, its offsets
 will be modified according to the performed read operation.
- **offset**: `number`
Offset to append at. Will use and increase [ByteBuffer#offset](#bytebuffer.ByteBuffer.offset) by the number of bytes
 written if omitted.
#### Return Type

- `ByteBuffer`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L837" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:837</a>
</p>


### appendTo

```ts
appendTo(target: ByteBuffer, offset: number): ByteBuffer
```
Appends this ByteBuffer's contents to another ByteBuffer. This will overwrite any contents at and after the
   specified offset up to the length of this ByteBuffer's data.
#### Parameters

- **target**: `ByteBuffer`
Target ByteBuffer
- **offset**: `number`
Offset to append to. Will use and increase [ByteBuffer#offset](#bytebuffer.ByteBuffer.offset) by the number of bytes
 read if omitted.
#### Return Type

- `ByteBuffer`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L868" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:868</a>
</p>


### assert

```ts
assert(assert: boolean): ByteBuffer
```
Enables or disables assertions of argument types and offsets. Assertions are enabled by default but you can opt to
 disable them if your code already makes sure that everything is valid.
#### Parameters

- **assert**: `boolean`
``true`` to enable assertions, otherwise ``false``
#### Return Type

- `ByteBuffer`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L880" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:880</a>
</p>


### BE

```ts
BE(bigEndian: undefined | boolean): ByteBuffer
```
Switches (to) big endian byte order.
#### Parameters

- **bigEndian**: `undefined | boolean`
Defaults to ``true``, otherwise uses little endian
#### Return Type

- `ByteBuffer`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L1146" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:1146</a>
</p>


### capacity

```ts
capacity(): number
```
Gets the capacity of this ByteBuffer's backing buffer.
#### Return Type

- `number`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L890" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:890</a>
</p>


### clear

```ts
clear(): ByteBuffer
```
Clears this ByteBuffer's offsets by setting [ByteBuffer#offset](#bytebuffer.ByteBuffer.offset) to ``0`` and [ByteBuffer#limit](#bytebuffer.ByteBuffer.limit) to the
 backing buffer's capacity. Discards [ByteBuffer#markedOffset](#bytebuffer.ByteBuffer.markedOffset).
#### Return Type

- `ByteBuffer`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L900" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:900</a>
</p>


### clone

```ts
clone(copy: boolean): ByteBuffer
```
Creates a cloned instance of this ByteBuffer, preset with this ByteBuffer's values for [ByteBuffer#offset](#bytebuffer.ByteBuffer.offset),
 [ByteBuffer#markedOffset](#bytebuffer.ByteBuffer.markedOffset) and [ByteBuffer#limit](#bytebuffer.ByteBuffer.limit).
#### Parameters

- **copy**: `boolean`
Whether to copy the backing buffer or to return another view on the same, defaults to ``false``
#### Return Type

- `ByteBuffer`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L914" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:914</a>
</p>


### compact

```ts
compact(begin: undefined | number, end: undefined | number): ByteBuffer
```
Compacts this ByteBuffer to be backed by a [ByteBuffer#buffer](#bytebuffer.ByteBuffer.buffer) of its contents' length. Contents are the bytes
 between [ByteBuffer#offset](#bytebuffer.ByteBuffer.offset) and [ByteBuffer#limit](#bytebuffer.ByteBuffer.limit). Will set ``offset = 0`` and ``limit = capacity`` and
 adapt [ByteBuffer#markedOffset](#bytebuffer.ByteBuffer.markedOffset) to the same relative position if set.
#### Parameters

- **begin**: `undefined | number`
Offset to start at, defaults to [ByteBuffer#offset](#bytebuffer.ByteBuffer.offset)
- **end**: `undefined | number`
Offset to end at, defaults to [ByteBuffer#limit](#bytebuffer.ByteBuffer.limit)
#### Return Type

- `ByteBuffer`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L939" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:939</a>
</p>


### copy

```ts
copy(begin: undefined | number, end: undefined | number): ByteBuffer
```
Creates a copy of this ByteBuffer's contents. Contents are the bytes between [ByteBuffer#offset](#bytebuffer.ByteBuffer.offset) and
 [ByteBuffer#limit](#bytebuffer.ByteBuffer.limit).
#### Parameters

- **begin**: `undefined | number`
Begin offset, defaults to [ByteBuffer#offset](#bytebuffer.ByteBuffer.offset).
- **end**: `undefined | number`
End offset, defaults to [ByteBuffer#limit](#bytebuffer.ByteBuffer.limit).
#### Return Type

- `ByteBuffer`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L977" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:977</a>
</p>


### copyTo

```ts
copyTo(target: ByteBuffer, targetOffset: number, sourceOffset: number, sourceLimit: number): ByteBuffer
```
Copies this ByteBuffer's contents to another ByteBuffer. Contents are the bytes between [ByteBuffer#offset](#bytebuffer.ByteBuffer.offset) and
 [ByteBuffer#limit](#bytebuffer.ByteBuffer.limit).
#### Parameters

- **target**: `ByteBuffer`
Target ByteBuffer
- **targetOffset**: `number`
Offset to copy to. Will use and increase the target's [ByteBuffer#offset](#bytebuffer.ByteBuffer.offset)
 by the number of bytes copied if omitted.
- **sourceOffset**: `number`
Offset to start copying from. Will use and increase [ByteBuffer#offset](#bytebuffer.ByteBuffer.offset) by the
 number of bytes copied if omitted.
- **sourceLimit**: `number`
Offset to end copying from, defaults to [ByteBuffer#limit](#bytebuffer.ByteBuffer.limit)
#### Return Type

- `ByteBuffer`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L1009" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:1009</a>
</p>


### ensureCapacity

```ts
ensureCapacity(capacity: number): ByteBuffer
```
Makes sure that this ByteBuffer is backed by a [ByteBuffer#buffer](#bytebuffer.ByteBuffer.buffer) of at least the specified capacity. If the
 current capacity is exceeded, it will be doubled. If double the current capacity is less than the required capacity,
 the required capacity will be used instead.
#### Parameters

- **capacity**: `number`
Required capacity
#### Return Type

- `ByteBuffer`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L1045" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:1045</a>
</p>


### fill

```ts
fill(value: string | number, begin: number, end: number): ByteBuffer
```
Overwrites this ByteBuffer's contents with the specified value. Contents are the bytes between
 [ByteBuffer#offset](#bytebuffer.ByteBuffer.offset) and [ByteBuffer#limit](#bytebuffer.ByteBuffer.limit).
#### Parameters

- **value**: `string | number`
Byte value to fill with. If given as a string, the first character is used.
- **begin**: `number`
Begin offset. Will use and increase [ByteBuffer#offset](#bytebuffer.ByteBuffer.offset) by the number of bytes
 written if omitted. defaults to [ByteBuffer#offset](#bytebuffer.ByteBuffer.offset).
- **end**: `number`
End offset, defaults to [ByteBuffer#limit](#bytebuffer.ByteBuffer.limit).
#### Return Type

- `ByteBuffer`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L1062" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:1062</a>
</p>


### flip

```ts
flip(): ByteBuffer
```
Makes this ByteBuffer ready for a new sequence of write or relative read operations. Sets ``limit = offset`` and
 ``offset = 0``. Make sure always to flip a ByteBuffer when all relative read or write operations are complete.
#### Return Type

- `ByteBuffer`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L1089" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:1089</a>
</p>


### LE

```ts
LE(littleEndian: undefined | boolean): ByteBuffer
```
Switches (to) little endian byte order.
#### Parameters

- **littleEndian**: `undefined | boolean`
Defaults to ``true``, otherwise uses big endian
#### Return Type

- `ByteBuffer`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L1135" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:1135</a>
</p>


### mark

```ts
mark(offset: number): ByteBuffer
```
Marks an offset on this ByteBuffer to be used later.
#### Parameters

- **offset**: `number`
Offset to mark. Defaults to [ByteBuffer#offset](#bytebuffer.ByteBuffer.offset).
#### Return Type

- `ByteBuffer`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L1104" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:1104</a>
</p>


### order

```ts
order(littleEndian: boolean): ByteBuffer
```
Sets the byte order.
#### Parameters

- **littleEndian**: `boolean`
``true`` for little endian byte order, ``false`` for big endian
#### Return Type

- `ByteBuffer`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L1121" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:1121</a>
</p>


### prepend

```ts
prepend(source: ArrayBuffer | ByteBuffer, offset: number): ByteBuffer
```
Prepends some data to this ByteBuffer. This will overwrite any contents before the specified offset up to the
 prepended data's length. If there is not enough space available before the specified ``offset``, the backing buffer
 will be resized and its contents moved accordingly.
#### Parameters

- **source**: `ArrayBuffer | ByteBuffer`
Data to prepend. If ``source`` is a ByteBuffer, its offset will be
 modified according to the performed read operation.
- **offset**: `number`
Offset to prepend at. Will use and decrease [ByteBuffer#offset](#bytebuffer.ByteBuffer.offset) by the number of bytes
 prepended if omitted.
#### Return Type

- `ByteBuffer`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L1165" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:1165</a>
</p>


### prependTo

```ts
prependTo(target: ByteBuffer, offset: number): ByteBuffer
```
Prepends this ByteBuffer to another ByteBuffer. This will overwrite any contents before the specified offset up to the
 prepended data's length. If there is not enough space available before the specified ``offset``, the backing buffer
 will be resized and its contents moved accordingly.
#### Parameters

- **target**: `ByteBuffer`
Target ByteBuffer
- **offset**: `number`
Offset to prepend at. Will use and decrease [ByteBuffer#offset](#bytebuffer.ByteBuffer.offset) by the number of bytes
 prepended if omitted.
#### Return Type

- `ByteBuffer`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L1208" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:1208</a>
</p>


### readBytes

```ts
readBytes(length: number, offset: number): ByteBuffer
```
Reads the specified number of bytes.
#### Parameters

- **length**: `number`
Number of bytes to read
- **offset**: `number`
Offset to read from. Will use and increase [ByteBuffer#offset](#bytebuffer.ByteBuffer.offset) by ``length`` if omitted.
#### Return Type

- `ByteBuffer`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L274" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:274</a>
</p>


### readFloat32

```ts
readFloat32(offset: number): number
```
Reads a 32bit float.
#### Parameters

- **offset**: `number`
Offset to read from. Will use and increase [ByteBuffer#offset](#bytebuffer.ByteBuffer.offset) by ``4`` if omitted.
#### Return Type

- `number`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L737" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:737</a>
</p>


### readFloat64

```ts
readFloat64(offset: number): number
```
Reads a 64bit float.
#### Parameters

- **offset**: `number`
Offset to read from. Will use and increase [ByteBuffer#offset](#bytebuffer.ByteBuffer.offset) by ``8`` if omitted.
#### Return Type

- `number`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L802" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:802</a>
</p>


### readInt16

```ts
readInt16(offset: number): number
```
Reads a 16bit signed integer.
#### Parameters

- **offset**: `number`
Offset to read from. Will use and advance [ByteBuffer#offset](#bytebuffer.ByteBuffer.offset) by ``2`` if omitted.
#### Return Type

- `number`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L478" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:478</a>
</p>


### readInt32

```ts
readInt32(offset: number): number
```
Reads a 32bit signed integer.
#### Parameters

- **offset**: `number`
Offset to read from. Will use and increase [ByteBuffer#offset](#bytebuffer.ByteBuffer.offset) by ``4`` if omitted.
#### Return Type

- `number`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L613" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:613</a>
</p>


### readInt64

```ts
readInt64(offset: number): bigint
```
Reads a 64bit signed integer.
#### Parameters

- **offset**: `number`
Offset to read from. Will use and increase [ByteBuffer#offset](#bytebuffer.ByteBuffer.offset) by ``8`` if omitted.
#### Return Type

- `bigint`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L1371" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:1371</a>
</p>


### readInt8

```ts
readInt8(offset: number): number
```
Reads an 8bit signed integer.
#### Parameters

- **offset**: `number`
Offset to read from. Will use and advance [ByteBuffer#offset](#bytebuffer.ByteBuffer.offset) by ``1`` if omitted.
#### Return Type

- `number`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L344" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:344</a>
</p>


### readUint16

```ts
readUint16(offset: number): number
```
Reads a 16bit unsigned integer.
#### Parameters

- **offset**: `number`
Offset to read from. Will use and advance [ByteBuffer#offset](#bytebuffer.ByteBuffer.offset) by ``2`` if omitted.
#### Return Type

- `number`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L548" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:548</a>
</p>


### readUint32

```ts
readUint32(offset: number): number
```
Reads a 32bit unsigned integer.
#### Parameters

- **offset**: `number`
Offset to read from. Will use and increase [ByteBuffer#offset](#bytebuffer.ByteBuffer.offset) by ``4`` if omitted.
#### Return Type

- `number`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L674" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:674</a>
</p>


### readUint64

```ts
readUint64(offset: number): bigint
```
Reads a 64bit unsigned integer.
#### Parameters

- **offset**: `number`
Offset to read from. Will use and increase [ByteBuffer#offset](#bytebuffer.ByteBuffer.offset) by ``8`` if omitted.
#### Return Type

- `bigint`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L1434" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:1434</a>
</p>


### readUint8

```ts
readUint8(offset: number): number
```
Reads an 8bit unsigned integer.
#### Parameters

- **offset**: `number`
Offset to read from. Will use and advance [ByteBuffer#offset](#bytebuffer.ByteBuffer.offset) by ``1`` if omitted.
#### Return Type

- `number`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L408" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:408</a>
</p>


### readVarint32

```ts
readVarint32(): number
```
#### Return Type

- `number`

```ts
readVarint32(offset: number): number | { length: number; value: number }
```
#### Parameters

- **offset**: `number`
#### Return Type

- `number | { length: number; value: number }`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/varint32.ts#L6" target="_blank" rel="noreferrer">packages/bytebuffer/varint32.ts:6</a>, <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/varint32.ts#L7" target="_blank" rel="noreferrer">packages/bytebuffer/varint32.ts:7</a>
</p>


### readVarint32ZigZag

```ts
readVarint32ZigZag(): number
```
#### Return Type

- `number`

```ts
readVarint32ZigZag(offset: number): { length: number; value: number }
```
#### Parameters

- **offset**: `number`
#### Return Type

- `{ length: number; value: number }`

```ts
readVarint32ZigZag(offset: number): number | { length: number; value: number }
```
#### Parameters

- **offset**: `number`
#### Return Type

- `number | { length: number; value: number }`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/varint32.ts#L9" target="_blank" rel="noreferrer">packages/bytebuffer/varint32.ts:9</a>, <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/varint32.ts#L10" target="_blank" rel="noreferrer">packages/bytebuffer/varint32.ts:10</a>, <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/varint32.ts#L11" target="_blank" rel="noreferrer">packages/bytebuffer/varint32.ts:11</a>
</p>


### readVarint64

```ts
readVarint64(): bigint
```
#### Return Type

- `bigint`

```ts
readVarint64(offset: number): { length: number; value: bigint }
```
#### Parameters

- **offset**: `number`
#### Return Type

- `{ length: number; value: bigint }`

```ts
readVarint64(offset: number): bigint | { length: number; value: bigint }
```
Reads a 64bit base 128 variable-length integer. Requires bigint.js.
#### Parameters

- **offset**: `number`
Offset to read from. Will use and increase [ByteBuffer#offset](#bytebuffer.ByteBuffer.offset) by the number of bytes
 read if omitted.
#### Return Type

- `bigint | { length: number; value: bigint }`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/varint64.ts#L15" target="_blank" rel="noreferrer">packages/bytebuffer/varint64.ts:15</a>, <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/varint64.ts#L16" target="_blank" rel="noreferrer">packages/bytebuffer/varint64.ts:16</a>, <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/varint64.ts#L26" target="_blank" rel="noreferrer">packages/bytebuffer/varint64.ts:26</a>
</p>


### readVarint64ZigZag

```ts
readVarint64ZigZag(offset: number): bigint | { length: number; value: number | bigint }
```
#### Parameters

- **offset**: `number`
#### Return Type

- `bigint | { length: number; value: number | bigint }`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/varint64.ts#L36" target="_blank" rel="noreferrer">packages/bytebuffer/varint64.ts:36</a>
</p>


### remaining

```ts
remaining(): number
```
Gets the number of remaining readable bytes. Contents are the bytes between [ByteBuffer#offset](#bytebuffer.ByteBuffer.offset) and
 [ByteBuffer#limit](#bytebuffer.ByteBuffer.limit), so this returns ``limit - offset``.
#### Return Type

- `number`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L1219" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:1219</a>
</p>


### reset

```ts
reset(): ByteBuffer
```
Resets this ByteBuffer's [ByteBuffer#offset](#bytebuffer.ByteBuffer.offset). If an offset has been marked through [ByteBuffer#mark](#bytebuffer.ByteBuffer.mark)
 before, ``offset`` will be set to [ByteBuffer#markedOffset](#bytebuffer.ByteBuffer.markedOffset), which will then be discarded. If no offset has been
 marked, sets ``offset = 0``.
#### Return Type

- `ByteBuffer`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L1231" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:1231</a>
</p>


### resize

```ts
resize(capacity: number): ByteBuffer
```
Resizes this ByteBuffer to be backed by a buffer of at least the given capacity. Will do nothing if already that
 large or larger.
#### Parameters

- **capacity**: `number`
Capacity required
#### Return Type

- `ByteBuffer`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L1250" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:1250</a>
</p>


### reverse

```ts
reverse(begin: undefined | number, end: undefined | number): ByteBuffer
```
Reverses this ByteBuffer's contents.
#### Parameters

- **begin**: `undefined | number`
Offset to start at, defaults to [ByteBuffer#offset](#bytebuffer.ByteBuffer.offset)
- **end**: `undefined | number`
Offset to end at, defaults to [ByteBuffer#limit](#bytebuffer.ByteBuffer.limit)
#### Return Type

- `ByteBuffer`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L1272" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:1272</a>
</p>


### skip

```ts
skip(length: number): ByteBuffer
```
Skips the next ``length`` bytes. This will just advance
#### Parameters

- **length**: `number`
Number of bytes to skip. May also be negative to move the offset back.
#### Return Type

- `ByteBuffer`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L1294" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:1294</a>
</p>


### slice

```ts
slice(begin: number, end: number): ByteBuffer
```
Slices this ByteBuffer by creating a cloned instance with ``offset = begin`` and ``limit = end``.
#### Parameters

- **begin**: `number`
Begin offset, defaults to [ByteBuffer#offset](#bytebuffer.ByteBuffer.offset).
- **end**: `number`
End offset, defaults to [ByteBuffer#limit](#bytebuffer.ByteBuffer.limit).
#### Return Type

- `ByteBuffer`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L1314" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:1314</a>
</p>


### toBuffer

```ts
toBuffer(forceCopy: boolean): ArrayBuffer
```
Returns a copy of the backing buffer that contains this ByteBuffer's contents. Contents are the bytes between
 [ByteBuffer#offset](#bytebuffer.ByteBuffer.offset) and [ByteBuffer#limit](#bytebuffer.ByteBuffer.limit).
#### Parameters

- **forceCopy**: `boolean`
If ``true`` returns a copy, otherwise returns a view referencing the same memory if
 possible. Defaults to ``false``
#### Return Type

- `ArrayBuffer`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L1464" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:1464</a>
</p>


### toHex

```ts
toHex(begin: undefined | number, end: undefined | number): string
```
#### Parameters

- **begin**: `undefined | number`
- **end**: `undefined | number`
#### Return Type

- `string`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/hex.ts#L5" target="_blank" rel="noreferrer">packages/bytebuffer/hex.ts:5</a>
</p>


### writeFloat32

```ts
writeFloat32(value: number, offset: number): ByteBuffer
```
Writes a 32bit float.
#### Parameters

- **value**: `number`
Value to write
- **offset**: `number`
Offset to write to. Will use and increase [ByteBuffer#offset](#bytebuffer.ByteBuffer.offset) by ``4`` if omitted.
#### Return Type

- `ByteBuffer`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L703" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:703</a>
</p>


### writeFloat64

```ts
writeFloat64(value: number, offset: number): ByteBuffer
```
Writes a 64bit float.
#### Parameters

- **value**: `number`
Value to write
- **offset**: `number`
Offset to write to. Will use and increase [ByteBuffer#offset](#bytebuffer.ByteBuffer.offset) by ``8`` if omitted.
#### Return Type

- `ByteBuffer`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L768" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:768</a>
</p>


### writeInt16

```ts
writeInt16(value: number, offset: number): ByteBuffer
```
Writes a 16bit signed integer.
#### Parameters

- **value**: `number`
Value to write
- **offset**: `number`
Offset to write to. Will use and advance [ByteBuffer#offset](#bytebuffer.ByteBuffer.offset) by ``2`` if omitted.
#### Return Type

- `ByteBuffer`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L440" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:440</a>
</p>


### writeInt32

```ts
writeInt32(value: number, offset: number): ByteBuffer
```
Writes a 32bit signed integer.
#### Parameters

- **value**: `number`
Value to write
- **offset**: `number`
Offset to write to. Will use and increase [ByteBuffer#offset](#bytebuffer.ByteBuffer.offset) by ``4`` if omitted.
#### Return Type

- `ByteBuffer`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L580" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:580</a>
</p>


### writeInt64

```ts
writeInt64(value: number | bigint, offset: number): ByteBuffer
```
Writes a 64bit signed integer.
#### Parameters

- **value**: `number | bigint`
Value to write
- **offset**: `number`
Offset to write to. Will use and increase [ByteBuffer#offset](#bytebuffer.ByteBuffer.offset) by ``8`` if omitted.
#### Return Type

- `ByteBuffer`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L1337" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:1337</a>
</p>


### writeInt8

```ts
writeInt8(value: number, offset: number): ByteBuffer
```
Writes an 8bit signed integer.
#### Parameters

- **value**: `number`
Value to write
- **offset**: `number`
Offset to write to. Will use and advance [ByteBuffer#offset](#bytebuffer.ByteBuffer.offset) by ``1`` if omitted.
#### Return Type

- `ByteBuffer`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L309" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:309</a>
</p>


### writeUint16

```ts
writeUint16(value: number, offset: number): ByteBuffer
```
Writes a 16bit unsigned integer.
#### Parameters

- **value**: `number`
Value to write
- **offset**: `number`
Offset to write to. Will use and advance [ByteBuffer#offset](#bytebuffer.ByteBuffer.offset) by ``2`` if omitted.
#### Return Type

- `ByteBuffer`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L510" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:510</a>
</p>


### writeUint32

```ts
writeUint32(value: number, offset: number): ByteBuffer
```
Writes a 32bit unsigned integer.
#### Parameters

- **value**: `number`
Value to write
- **offset**: `number`
Offset to write to. Will use and increase [ByteBuffer#offset](#bytebuffer.ByteBuffer.offset) by ``4`` if omitted.
#### Return Type

- `ByteBuffer`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L640" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:640</a>
</p>


### writeUint64

```ts
writeUint64(value: number | bigint, offset: number): ByteBuffer
```
Writes a 64bit unsigned integer.
#### Parameters

- **value**: `number | bigint`
Value to write
- **offset**: `number`
Offset to write to. Will use and increase [ByteBuffer#offset](#bytebuffer.ByteBuffer.offset) by ``8`` if omitted.
#### Return Type

- `ByteBuffer`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L1399" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:1399</a>
</p>


### writeUint8

```ts
writeUint8(value: number, offset: number): ByteBuffer
```
Writes an 8bit unsigned integer.
#### Parameters

- **value**: `number`
Value to write
- **offset**: `number`
Offset to write to. Will use and advance [ByteBuffer#offset](#bytebuffer.ByteBuffer.offset) by ``1`` if omitted.
#### Return Type

- `ByteBuffer`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/index.ts#L373" target="_blank" rel="noreferrer">packages/bytebuffer/index.ts:373</a>
</p>


### writeVarint32

```ts
writeVarint32(value: number, offset: number): number | ByteBuffer
```
#### Parameters

- **value**: `number`
- **offset**: `number`
#### Return Type

- `number | ByteBuffer`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/varint32.ts#L5" target="_blank" rel="noreferrer">packages/bytebuffer/varint32.ts:5</a>
</p>


### writeVarint32ZigZag

```ts
writeVarint32ZigZag(value: number, offset: number): number | ByteBuffer
```
#### Parameters

- **value**: `number`
- **offset**: `number`
#### Return Type

- `number | ByteBuffer`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/varint32.ts#L8" target="_blank" rel="noreferrer">packages/bytebuffer/varint32.ts:8</a>
</p>


### writeVarint64

```ts
writeVarint64(value: number | bigint, offset: number): number | ByteBuffer
```
Writes a 64bit base 128 variable-length integer.
#### Parameters

- **value**: `number | bigint`
Value to write
- **offset**: `number`
Offset to write to. Will use and increase [ByteBuffer#offset](#bytebuffer.ByteBuffer.offset) by the number of bytes
 written if omitted.
#### Return Type

- `number | ByteBuffer`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/varint64.ts#L14" target="_blank" rel="noreferrer">packages/bytebuffer/varint64.ts:14</a>
</p>


### writeVarint64ZigZag

```ts
writeVarint64ZigZag(value: number | bigint, offset: number): number | ByteBuffer
```
Writes a zig-zag encoded 64bit base 128 variable-length integer.
#### Parameters

- **value**: `number | bigint`
Value to write
- **offset**: `number`
Offset to write to. Will use and increase [ByteBuffer#offset](#bytebuffer.ByteBuffer.offset) by the number of bytes
 written if omitted.
#### Return Type

- `number | ByteBuffer`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/bytebuffer/varint64.ts#L35" target="_blank" rel="noreferrer">packages/bytebuffer/varint64.ts:35</a>
</p>


