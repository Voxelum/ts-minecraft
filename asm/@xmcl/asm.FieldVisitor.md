# Class FieldVisitor

## 🏭 Constructors

### constructor <Badge type="tip" text="public" />

```ts
FieldVisitor(api: number, fv: null | FieldVisitor= null): FieldVisitor
```
Constructs a new [FieldVisitor](@xmcl/asm.FieldVisitor).
#### Parameters

- **api**: `number`
the ASM API version implemented by this visitor. Must be one
of [Opcodes#ASM4](#@xmcl/asm.Opcodes.ASM4) or [Opcodes#ASM5](#@xmcl/asm.Opcodes.ASM5).
- **fv**: `null | FieldVisitor`
the field visitor to which this visitor must delegate method
calls. May be null.
#### Return Type

- `FieldVisitor`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/FieldVisitor.ts#L66" target="_blank" rel="noreferrer">packages/asm/libs/FieldVisitor.ts:66</a>
</p>


## 🏷️ Properties

### api

```ts
api: number
```
The ASM API version implemented by this visitor. The value of this field
must be one of [Opcodes#ASM4](#@xmcl/asm.Opcodes.ASM4) or [Opcodes#ASM5](#@xmcl/asm.Opcodes.ASM5).
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/FieldVisitor.ts#L48" target="_blank" rel="noreferrer">packages/asm/libs/FieldVisitor.ts:48</a>
</p>


### fv

```ts
fv: null | FieldVisitor
```
The field visitor to which this visitor must delegate method calls. May
be null.
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/FieldVisitor.ts#L54" target="_blank" rel="noreferrer">packages/asm/libs/FieldVisitor.ts:54</a>
</p>


## 🔧 Methods

### visitAnnotation <Badge type="tip" text="public" />

```ts
visitAnnotation(desc: null | string, visible: boolean): null | AnnotationVisitor
```
Visits an annotation of the field.
#### Parameters

- **desc**: `null | string`
the class descriptor of the annotation class.
- **visible**: `boolean`
&lt;tt&gt;true&lt;/tt&gt; if the annotation is visible at runtime.
#### Return Type

- `null | AnnotationVisitor`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/FieldVisitor.ts#L85" target="_blank" rel="noreferrer">packages/asm/libs/FieldVisitor.ts:85</a>
</p>


### visitAttribute <Badge type="tip" text="public" />

```ts
visitAttribute(attr: Attribute): void
```
Visits a non standard attribute of the field.
#### Parameters

- **attr**: `Attribute`
an attribute.
#### Return Type

- `void`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/FieldVisitor.ts#L126" target="_blank" rel="noreferrer">packages/asm/libs/FieldVisitor.ts:126</a>
</p>


### visitEnd <Badge type="tip" text="public" />

```ts
visitEnd(): void
```
Visits the end of the field. This method, which is the last one to be
called, is used to inform the visitor that all the annotations and
attributes of the field have been visited.
#### Return Type

- `void`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/FieldVisitor.ts#L137" target="_blank" rel="noreferrer">packages/asm/libs/FieldVisitor.ts:137</a>
</p>


### visitTypeAnnotation <Badge type="tip" text="public" />

```ts
visitTypeAnnotation(typeRef: number, typePath: null | TypePath, desc: null | string, visible: boolean): null | AnnotationVisitor
```
Visits an annotation on the type of the field.
#### Parameters

- **typeRef**: `number`
a reference to the annotated type. The sort of this type
reference must be [TypeReference#FIELD FIELD]. See
[TypeReference](@xmcl/asm.TypeReference).
- **typePath**: `null | TypePath`
the path to the annotated type argument, wildcard bound, array
element type, or static inner type within 'typeRef'. May be
&lt;tt&gt;null&lt;/tt&gt; if the annotation targets 'typeRef' as a whole.
- **desc**: `null | string`
the class descriptor of the annotation class.
- **visible**: `boolean`
&lt;tt&gt;true&lt;/tt&gt; if the annotation is visible at runtime.
#### Return Type

- `null | AnnotationVisitor`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/FieldVisitor.ts#L110" target="_blank" rel="noreferrer">packages/asm/libs/FieldVisitor.ts:110</a>
</p>


