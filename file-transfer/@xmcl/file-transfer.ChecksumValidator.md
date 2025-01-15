# Class ChecksumValidator

## 🏭 Constructors

### constructor

```ts
ChecksumValidator(checksum: ChecksumValidatorOptions): ChecksumValidator
```
#### Parameters

- **checksum**: `ChecksumValidatorOptions`
#### Return Type

- `ChecksumValidator`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/file-transfer/validator.ts#L17" target="_blank" rel="noreferrer">packages/file-transfer/validator.ts:17</a>
</p>


## 🏷️ Properties

### checksum <Badge type="warning" text="protected" /> <Badge type="info" text="optional" />

```ts
checksum: ChecksumValidatorOptions
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/file-transfer/validator.ts#L17" target="_blank" rel="noreferrer">packages/file-transfer/validator.ts:17</a>
</p>


## 🔧 Methods

### validate

```ts
validate(destination: string, url: string): Promise<void>
```
Validate the download result. It should throw ``ValidationError`` if validation failed.
#### Parameters

- **destination**: `string`
The result file
- **url**: `string`
The url where the file downloaded from
#### Return Type

- `Promise<void>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/file-transfer/validator.ts#L19" target="_blank" rel="noreferrer">packages/file-transfer/validator.ts:19</a>
</p>


