# Class AnnotationVisitor

## 🏭 Constructors

### constructor <Badge type="tip" text="public" />

```ts
AnnotationVisitor(api: number, av: null | AnnotationVisitor= null): AnnotationVisitor
```
Constructs a new [AnnotationVisitor](@xmcl/asm.AnnotationVisitor).
#### Parameters

- **api**: `number`
the ASM API version implemented by this visitor. Must be one
of [Opcodes#ASM4](#@xmcl/asm.Opcodes.ASM4) or [Opcodes#ASM5](#@xmcl/asm.Opcodes.ASM5).
- **av**: `null | AnnotationVisitor`
the annotation visitor to which this visitor must delegate
method calls. May be null.
#### Return Type

- `AnnotationVisitor`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/AnnotationVisitor.ts#L65" target="_blank" rel="noreferrer">packages/asm/libs/AnnotationVisitor.ts:65</a>
</p>


## 🏷️ Properties

### api

```ts
api: number
```
The ASM API version implemented by this visitor. The value of this field
must be one of [Opcodes#ASM4](#@xmcl/asm.Opcodes.ASM4) or [Opcodes#ASM5](#@xmcl/asm.Opcodes.ASM5).
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/AnnotationVisitor.ts#L47" target="_blank" rel="noreferrer">packages/asm/libs/AnnotationVisitor.ts:47</a>
</p>


### av

```ts
av: null | AnnotationVisitor
```
The annotation visitor to which this visitor must delegate method calls.
May be null.
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/AnnotationVisitor.ts#L53" target="_blank" rel="noreferrer">packages/asm/libs/AnnotationVisitor.ts:53</a>
</p>


## 🔧 Methods

### visit <Badge type="tip" text="public" />

```ts
visit(name: string, value: any): void
```
Visits a primitive value of the annotation.
#### Parameters

- **name**: `string`
the value name.
- **value**: `any`
the actual value, whose type must be [Byte],
[Boolean], [Character], [Short],
[Integer] , [Long], [Float], [Double],
[String] or [Type](@xmcl/asm.Type) of OBJECT or ARRAY sort. This
value can also be an array of byte, boolean, short, char, int,
long, float or double values (this is equivalent to using
[#visitArray visitArray] and visiting each array element
in turn, but is more convenient).
#### Return Type

- `void`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/AnnotationVisitor.ts#L89" target="_blank" rel="noreferrer">packages/asm/libs/AnnotationVisitor.ts:89</a>
</p>


### visitAnnotation <Badge type="tip" text="public" />

```ts
visitAnnotation(name: string, desc: string): null | AnnotationVisitor
```
Visits a nested annotation value of the annotation.
#### Parameters

- **name**: `string`
the value name.
- **desc**: `string`
the class descriptor of the nested annotation class.
#### Return Type

- `null | AnnotationVisitor`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/AnnotationVisitor.ts#L124" target="_blank" rel="noreferrer">packages/asm/libs/AnnotationVisitor.ts:124</a>
</p>


### visitArray <Badge type="tip" text="public" />

```ts
visitArray(name: string): null | AnnotationVisitor
```
Visits an array value of the annotation. Note that arrays of primitive
types (such as byte, boolean, short, char, int, long, float or double)
can be passed as value to [#visit visit]. This is what
[ClassReader](@xmcl/asm.ClassReader) does.
#### Parameters

- **name**: `string`
the value name.
#### Return Type

- `null | AnnotationVisitor`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/AnnotationVisitor.ts#L145" target="_blank" rel="noreferrer">packages/asm/libs/AnnotationVisitor.ts:145</a>
</p>


### visitEnd <Badge type="tip" text="public" />

```ts
visitEnd(): void
```
Visits the end of the annotation.
#### Return Type

- `void`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/AnnotationVisitor.ts#L155" target="_blank" rel="noreferrer">packages/asm/libs/AnnotationVisitor.ts:155</a>
</p>


### visitEnum <Badge type="tip" text="public" />

```ts
visitEnum(name: string, desc: null | string, value: null | string): void
```
Visits an enumeration value of the annotation.
#### Parameters

- **name**: `string`
the value name.
- **desc**: `null | string`
the class descriptor of the enumeration class.
- **value**: `null | string`
the actual enumeration value.
#### Return Type

- `void`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/AnnotationVisitor.ts#L105" target="_blank" rel="noreferrer">packages/asm/libs/AnnotationVisitor.ts:105</a>
</p>


