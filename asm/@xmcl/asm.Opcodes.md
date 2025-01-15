# Enum Opcodes

Defines the JVM opcodes, access flags and array type codes. This interface
does not define all the JVM opcodes because some opcodes are automatically
handled. For example, the xLOAD and xSTORE opcodes are automatically replaced
by xLOAD_n and xSTORE_n opcodes when possible. The xLOAD_n and xSTORE_n
opcodes are therefore not defined in this interface. Likewise for LDC,
automatically replaced by LDC_W or LDC2_W when necessary, WIDE, GOTO_W and
JSR_W.
## 🏷️ Enum Members

### AALOAD

```ts
AALOAD: 50
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L245" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:245</a>
</p>


### AASTORE

```ts
AASTORE: 83
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L271" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:271</a>
</p>


### ACC_ABSTRACT

```ts
ACC_ABSTRACT: 1024
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L91" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:91</a>
</p>


### ACC_ANNOTATION

```ts
ACC_ANNOTATION: 8192
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L97" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:97</a>
</p>


### ACC_BRIDGE

```ts
ACC_BRIDGE: 64
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L81" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:81</a>
</p>


### ACC_DEPRECATED

```ts
ACC_DEPRECATED: 131072
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L103" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:103</a>
</p>


### ACC_ENUM

```ts
ACC_ENUM: 16384
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L99" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:99</a>
</p>


### ACC_FINAL

```ts
ACC_FINAL: 16
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L73" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:73</a>
</p>


### ACC_INTERFACE

```ts
ACC_INTERFACE: 512
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L89" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:89</a>
</p>


### ACC_MANDATED

```ts
ACC_MANDATED: 32768
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L101" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:101</a>
</p>


### ACC_NATIVE

```ts
ACC_NATIVE: 256
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L87" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:87</a>
</p>


### ACC_PRIVATE

```ts
ACC_PRIVATE: 2
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L67" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:67</a>
</p>


### ACC_PROTECTED

```ts
ACC_PROTECTED: 4
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L69" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:69</a>
</p>


### ACC_PUBLIC

```ts
ACC_PUBLIC: 1
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L65" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:65</a>
</p>


### ACC_STATIC

```ts
ACC_STATIC: 8
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L71" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:71</a>
</p>


### ACC_STRICT

```ts
ACC_STRICT: 2048
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L93" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:93</a>
</p>


### ACC_SUPER

```ts
ACC_SUPER: 32
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L75" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:75</a>
</p>


### ACC_SYNCHRONIZED

```ts
ACC_SYNCHRONIZED: 32
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L77" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:77</a>
</p>


### ACC_SYNTHETIC

```ts
ACC_SYNTHETIC: 4096
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L95" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:95</a>
</p>


### ACC_TRANSIENT

```ts
ACC_TRANSIENT: 128
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L85" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:85</a>
</p>


### ACC_VARARGS

```ts
ACC_VARARGS: 128
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L83" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:83</a>
</p>


### ACC_VOLATILE

```ts
ACC_VOLATILE: 64
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L79" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:79</a>
</p>


### ACONST_NULL

```ts
ACONST_NULL: 1
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L191" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:191</a>
</p>


### ALOAD

```ts
ALOAD: 25
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L235" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:235</a>
</p>


### ANEWARRAY

```ts
ANEWARRAY: 189
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L483" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:483</a>
</p>


### ARETURN

```ts
ARETURN: 176
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L457" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:457</a>
</p>


### ARRAYLENGTH

```ts
ARRAYLENGTH: 190
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L485" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:485</a>
</p>


### ASM4

```ts
ASM4: 262144
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L45" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:45</a>
</p>


### ASM5

```ts
ASM5: 327680
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L47" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:47</a>
</p>


### ASTORE

```ts
ASTORE: 58
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L261" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:261</a>
</p>


### ATHROW

```ts
ATHROW: 191
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L487" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:487</a>
</p>


### BALOAD

```ts
BALOAD: 51
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L247" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:247</a>
</p>


### BASTORE

```ts
BASTORE: 84
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L273" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:273</a>
</p>


### BIPUSH

```ts
BIPUSH: 16
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L221" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:221</a>
</p>


### CALOAD

```ts
CALOAD: 52
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L249" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:249</a>
</p>


### CASTORE

```ts
CASTORE: 85
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L275" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:275</a>
</p>


### CHECKCAST

```ts
CHECKCAST: 192
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L489" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:489</a>
</p>


### D2F

```ts
D2F: 144
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L393" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:393</a>
</p>


### D2I

```ts
D2I: 142
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L389" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:389</a>
</p>


### D2L

```ts
D2L: 143
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L391" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:391</a>
</p>


### DADD

```ts
DADD: 99
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L303" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:303</a>
</p>


### DALOAD

```ts
DALOAD: 49
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L243" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:243</a>
</p>


### DASTORE

```ts
DASTORE: 82
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L269" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:269</a>
</p>


### DCMPG

```ts
DCMPG: 152
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L409" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:409</a>
</p>


### DCMPL

```ts
DCMPL: 151
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L407" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:407</a>
</p>


### DCONST_0

```ts
DCONST_0: 14
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L217" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:217</a>
</p>


### DCONST_1

```ts
DCONST_1: 15
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L219" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:219</a>
</p>


### DDIV

```ts
DDIV: 111
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L327" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:327</a>
</p>


### DLOAD

```ts
DLOAD: 24
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L233" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:233</a>
</p>


### DMUL

```ts
DMUL: 107
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L319" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:319</a>
</p>


### DNEG

```ts
DNEG: 119
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L343" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:343</a>
</p>


### DOUBLE

```ts
DOUBLE: 3
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L181" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:181</a>
</p>


### DREM

```ts
DREM: 115
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L335" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:335</a>
</p>


### DRETURN

```ts
DRETURN: 175
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L455" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:455</a>
</p>


### DSTORE

```ts
DSTORE: 57
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L259" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:259</a>
</p>


### DSUB

```ts
DSUB: 103
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L311" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:311</a>
</p>


### DUP

```ts
DUP: 89
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L283" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:283</a>
</p>


### DUP_X1

```ts
DUP_X1: 90
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L285" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:285</a>
</p>


### DUP_X2

```ts
DUP_X2: 91
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L287" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:287</a>
</p>


### DUP2

```ts
DUP2: 92
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L289" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:289</a>
</p>


### DUP2_X1

```ts
DUP2_X1: 93
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L291" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:291</a>
</p>


### DUP2_X2

```ts
DUP2_X2: 94
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L293" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:293</a>
</p>


### F_APPEND

```ts
F_APPEND: 1
```
Represents a compressed frame where locals are the same as the locals in
the previous frame, except that additional 1-3 locals are defined, and
with an empty stack.
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L154" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:154</a>
</p>


### F_CHOP

```ts
F_CHOP: 2
```
Represents a compressed frame where locals are the same as the locals in
the previous frame, except that the last 1-3 locals are absent and with
an empty stack.
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L161" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:161</a>
</p>


### F_FULL

```ts
F_FULL: 0
```
Represents a compressed frame with compe frame data.,
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L147" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:147</a>
</p>


### F_NEW

```ts
F_NEW: -1
```
Represents an expanded frame. See [ClassReader#EXPAND_FRAMES].
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L142" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:142</a>
</p>


### F_SAME

```ts
F_SAME: 3
```
Represents a compressed frame with exactly the same locals as the
previous frame and with an empty stack.
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L167" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:167</a>
</p>


### F_SAME1

```ts
F_SAME1: 4
```
Represents a compressed frame with exactly the same locals as the
previous frame and with a single value on the stack.
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L173" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:173</a>
</p>


### F2D

```ts
F2D: 141
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L387" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:387</a>
</p>


### F2I

```ts
F2I: 139
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L383" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:383</a>
</p>


### F2L

```ts
F2L: 140
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L385" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:385</a>
</p>


### FADD

```ts
FADD: 98
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L301" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:301</a>
</p>


### FALOAD

```ts
FALOAD: 48
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L241" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:241</a>
</p>


### FASTORE

```ts
FASTORE: 81
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L267" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:267</a>
</p>


### FCMPG

```ts
FCMPG: 150
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L405" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:405</a>
</p>


### FCMPL

```ts
FCMPL: 149
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L403" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:403</a>
</p>


### FCONST_0

```ts
FCONST_0: 11
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L211" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:211</a>
</p>


### FCONST_1

```ts
FCONST_1: 12
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L213" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:213</a>
</p>


### FCONST_2

```ts
FCONST_2: 13
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L215" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:215</a>
</p>


### FDIV

```ts
FDIV: 110
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L325" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:325</a>
</p>


### FLOAD

```ts
FLOAD: 23
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L231" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:231</a>
</p>


### FLOAT

```ts
FLOAT: 2
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L179" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:179</a>
</p>


### FMUL

```ts
FMUL: 106
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L317" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:317</a>
</p>


### FNEG

```ts
FNEG: 118
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L341" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:341</a>
</p>


### FREM

```ts
FREM: 114
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L333" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:333</a>
</p>


### FRETURN

```ts
FRETURN: 174
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L453" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:453</a>
</p>


### FSTORE

```ts
FSTORE: 56
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L257" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:257</a>
</p>


### FSUB

```ts
FSUB: 102
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L309" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:309</a>
</p>


### GETFIELD

```ts
GETFIELD: 180
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L465" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:465</a>
</p>


### GETSTATIC

```ts
GETSTATIC: 178
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L461" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:461</a>
</p>


### GOTO

```ts
GOTO: 167
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L439" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:439</a>
</p>


### H_GETFIELD

```ts
H_GETFIELD: 1
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L121" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:121</a>
</p>


### H_GETSTATIC

```ts
H_GETSTATIC: 2
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L123" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:123</a>
</p>


### H_INVOKEINTERFACE

```ts
H_INVOKEINTERFACE: 9
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L137" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:137</a>
</p>


### H_INVOKESPECIAL

```ts
H_INVOKESPECIAL: 7
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L133" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:133</a>
</p>


### H_INVOKESTATIC

```ts
H_INVOKESTATIC: 6
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L131" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:131</a>
</p>


### H_INVOKEVIRTUAL

```ts
H_INVOKEVIRTUAL: 5
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L129" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:129</a>
</p>


### H_NEWINVOKESPECIAL

```ts
H_NEWINVOKESPECIAL: 8
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L135" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:135</a>
</p>


### H_PUTFIELD

```ts
H_PUTFIELD: 3
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L125" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:125</a>
</p>


### H_PUTSTATIC

```ts
H_PUTSTATIC: 4
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L127" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:127</a>
</p>


### I2B

```ts
I2B: 145
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L395" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:395</a>
</p>


### I2C

```ts
I2C: 146
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L397" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:397</a>
</p>


### I2D

```ts
I2D: 135
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L375" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:375</a>
</p>


### I2F

```ts
I2F: 134
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L373" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:373</a>
</p>


### I2L

```ts
I2L: 133
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L371" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:371</a>
</p>


### I2S

```ts
I2S: 147
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L399" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:399</a>
</p>


### IADD

```ts
IADD: 96
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L297" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:297</a>
</p>


### IALOAD

```ts
IALOAD: 46
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L237" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:237</a>
</p>


### IAND

```ts
IAND: 126
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L357" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:357</a>
</p>


### IASTORE

```ts
IASTORE: 79
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L263" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:263</a>
</p>


### ICONST_0

```ts
ICONST_0: 3
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L195" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:195</a>
</p>


### ICONST_1

```ts
ICONST_1: 4
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L197" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:197</a>
</p>


### ICONST_2

```ts
ICONST_2: 5
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L199" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:199</a>
</p>


### ICONST_3

```ts
ICONST_3: 6
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L201" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:201</a>
</p>


### ICONST_4

```ts
ICONST_4: 7
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L203" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:203</a>
</p>


### ICONST_5

```ts
ICONST_5: 8
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L205" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:205</a>
</p>


### ICONST_M1

```ts
ICONST_M1: 2
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L193" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:193</a>
</p>


### IDIV

```ts
IDIV: 108
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L321" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:321</a>
</p>


### IF_ACMPEQ

```ts
IF_ACMPEQ: 165
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L435" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:435</a>
</p>


### IF_ACMPNE

```ts
IF_ACMPNE: 166
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L437" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:437</a>
</p>


### IF_ICMPEQ

```ts
IF_ICMPEQ: 159
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L423" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:423</a>
</p>


### IF_ICMPGE

```ts
IF_ICMPGE: 162
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L429" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:429</a>
</p>


### IF_ICMPGT

```ts
IF_ICMPGT: 163
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L431" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:431</a>
</p>


### IF_ICMPLE

```ts
IF_ICMPLE: 164
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L433" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:433</a>
</p>


### IF_ICMPLT

```ts
IF_ICMPLT: 161
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L427" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:427</a>
</p>


### IF_ICMPNE

```ts
IF_ICMPNE: 160
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L425" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:425</a>
</p>


### IFEQ

```ts
IFEQ: 153
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L411" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:411</a>
</p>


### IFGE

```ts
IFGE: 156
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L417" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:417</a>
</p>


### IFGT

```ts
IFGT: 157
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L419" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:419</a>
</p>


### IFLE

```ts
IFLE: 158
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L421" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:421</a>
</p>


### IFLT

```ts
IFLT: 155
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L415" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:415</a>
</p>


### IFNE

```ts
IFNE: 154
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L413" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:413</a>
</p>


### IFNONNULL

```ts
IFNONNULL: 199
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L501" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:501</a>
</p>


### IFNULL

```ts
IFNULL: 198
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L499" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:499</a>
</p>


### IINC

```ts
IINC: 132
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L369" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:369</a>
</p>


### ILOAD

```ts
ILOAD: 21
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L227" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:227</a>
</p>


### IMUL

```ts
IMUL: 104
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L313" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:313</a>
</p>


### INEG

```ts
INEG: 116
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L337" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:337</a>
</p>


### INSTANCEOF

```ts
INSTANCEOF: 193
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L491" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:491</a>
</p>


### INTEGER

```ts
INTEGER: 1
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L177" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:177</a>
</p>


### INVOKEDYNAMIC

```ts
INVOKEDYNAMIC: 186
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L477" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:477</a>
</p>


### INVOKEINTERFACE

```ts
INVOKEINTERFACE: 185
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L475" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:475</a>
</p>


### INVOKESPECIAL

```ts
INVOKESPECIAL: 183
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L471" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:471</a>
</p>


### INVOKESTATIC

```ts
INVOKESTATIC: 184
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L473" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:473</a>
</p>


### INVOKEVIRTUAL

```ts
INVOKEVIRTUAL: 182
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L469" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:469</a>
</p>


### IOR

```ts
IOR: 128
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L361" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:361</a>
</p>


### IREM

```ts
IREM: 112
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L329" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:329</a>
</p>


### IRETURN

```ts
IRETURN: 172
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L449" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:449</a>
</p>


### ISHL

```ts
ISHL: 120
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L345" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:345</a>
</p>


### ISHR

```ts
ISHR: 122
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L349" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:349</a>
</p>


### ISTORE

```ts
ISTORE: 54
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L253" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:253</a>
</p>


### ISUB

```ts
ISUB: 100
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L305" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:305</a>
</p>


### IUSHR

```ts
IUSHR: 124
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L353" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:353</a>
</p>


### IXOR

```ts
IXOR: 130
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L365" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:365</a>
</p>


### JSR

```ts
JSR: 168
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L441" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:441</a>
</p>


### L2D

```ts
L2D: 138
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L381" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:381</a>
</p>


### L2F

```ts
L2F: 137
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L379" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:379</a>
</p>


### L2I

```ts
L2I: 136
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L377" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:377</a>
</p>


### LADD

```ts
LADD: 97
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L299" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:299</a>
</p>


### LALOAD

```ts
LALOAD: 47
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L239" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:239</a>
</p>


### LAND

```ts
LAND: 127
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L359" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:359</a>
</p>


### LASTORE

```ts
LASTORE: 80
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L265" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:265</a>
</p>


### LCMP

```ts
LCMP: 148
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L401" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:401</a>
</p>


### LCONST_0

```ts
LCONST_0: 9
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L207" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:207</a>
</p>


### LCONST_1

```ts
LCONST_1: 10
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L209" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:209</a>
</p>


### LDC

```ts
LDC: 18
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L225" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:225</a>
</p>


### LDIV

```ts
LDIV: 109
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L323" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:323</a>
</p>


### LLOAD

```ts
LLOAD: 22
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L229" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:229</a>
</p>


### LMUL

```ts
LMUL: 105
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L315" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:315</a>
</p>


### LNEG

```ts
LNEG: 117
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L339" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:339</a>
</p>


### LONG

```ts
LONG: 4
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L183" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:183</a>
</p>


### LOOKUPSWITCH

```ts
LOOKUPSWITCH: 171
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L447" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:447</a>
</p>


### LOR

```ts
LOR: 129
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L363" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:363</a>
</p>


### LREM

```ts
LREM: 113
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L331" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:331</a>
</p>


### LRETURN

```ts
LRETURN: 173
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L451" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:451</a>
</p>


### LSHL

```ts
LSHL: 121
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L347" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:347</a>
</p>


### LSHR

```ts
LSHR: 123
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L351" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:351</a>
</p>


### LSTORE

```ts
LSTORE: 55
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L255" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:255</a>
</p>


### LSUB

```ts
LSUB: 101
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L307" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:307</a>
</p>


### LUSHR

```ts
LUSHR: 125
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L355" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:355</a>
</p>


### LXOR

```ts
LXOR: 131
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L367" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:367</a>
</p>


### MONITORENTER

```ts
MONITORENTER: 194
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L493" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:493</a>
</p>


### MONITOREXIT

```ts
MONITOREXIT: 195
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L495" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:495</a>
</p>


### MULTIANEWARRAY

```ts
MULTIANEWARRAY: 197
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L497" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:497</a>
</p>


### NEW

```ts
NEW: 187
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L479" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:479</a>
</p>


### NEWARRAY

```ts
NEWARRAY: 188
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L481" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:481</a>
</p>


### NOP

```ts
NOP: 0
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L189" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:189</a>
</p>


### NULL

```ts
NULL: 5
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L185" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:185</a>
</p>


### POP

```ts
POP: 87
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L279" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:279</a>
</p>


### POP2

```ts
POP2: 88
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L281" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:281</a>
</p>


### PUTFIELD

```ts
PUTFIELD: 181
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L467" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:467</a>
</p>


### PUTSTATIC

```ts
PUTSTATIC: 179
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L463" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:463</a>
</p>


### RET

```ts
RET: 169
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L443" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:443</a>
</p>


### RETURN

```ts
RETURN: 177
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L459" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:459</a>
</p>


### SALOAD

```ts
SALOAD: 53
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L251" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:251</a>
</p>


### SASTORE

```ts
SASTORE: 86
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L277" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:277</a>
</p>


### SIPUSH

```ts
SIPUSH: 17
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L223" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:223</a>
</p>


### SWAP

```ts
SWAP: 95
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L295" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:295</a>
</p>


### T_BOOLEAN

```ts
T_BOOLEAN: 4
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L105" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:105</a>
</p>


### T_BYTE

```ts
T_BYTE: 8
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L113" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:113</a>
</p>


### T_CHAR

```ts
T_CHAR: 5
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L107" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:107</a>
</p>


### T_DOUBLE

```ts
T_DOUBLE: 7
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L111" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:111</a>
</p>


### T_FLOAT

```ts
T_FLOAT: 6
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L109" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:109</a>
</p>


### T_INT

```ts
T_INT: 10
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L117" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:117</a>
</p>


### T_LONG

```ts
T_LONG: 11
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L119" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:119</a>
</p>


### T_SHORT

```ts
T_SHORT: 9
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L115" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:115</a>
</p>


### TABLESWITCH

```ts
TABLESWITCH: 170
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L445" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:445</a>
</p>


### TOP

```ts
TOP: 0
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L175" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:175</a>
</p>


### UNINITIALIZED_THIS

```ts
UNINITIALIZED_THIS: 6
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L187" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:187</a>
</p>


### V1_1

```ts
V1_1: 196653
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L49" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:49</a>
</p>


### V1_2

```ts
V1_2: 46
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L51" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:51</a>
</p>


### V1_3

```ts
V1_3: 47
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L53" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:53</a>
</p>


### V1_4

```ts
V1_4: 48
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L55" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:55</a>
</p>


### V1_5

```ts
V1_5: 49
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L57" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:57</a>
</p>


### V1_6

```ts
V1_6: 50
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L59" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:59</a>
</p>


### V1_7

```ts
V1_7: 51
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L61" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:61</a>
</p>


### V1_8

```ts
V1_8: 52
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/asm/libs/Opcodes.ts#L63" target="_blank" rel="noreferrer">packages/asm/libs/Opcodes.ts:63</a>
</p>


