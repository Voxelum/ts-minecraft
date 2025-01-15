# Class Channel

The channel for send and listen the Minecraft packet.
## 🏭 Constructors

### constructor

```ts
Channel(): Channel
```
#### Return Type

- `Channel`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/client/channel.ts#L47" target="_blank" rel="noreferrer">packages/client/channel.ts:47</a>
</p>


## 🏷️ Properties

### state

```ts
state: keyof States = 'handshake'
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/client/channel.ts#L21" target="_blank" rel="noreferrer">packages/client/channel.ts:21</a>
</p>


## 🔑 Accessors

### ready

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/client/channel.ts#L71" target="_blank" rel="noreferrer">packages/client/channel.ts:71</a>
</p>


## 🔧 Methods

### disconnect

```ts
disconnect(): Promise<void>
```
#### Return Type

- `Promise<void>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/client/channel.ts#L124" target="_blank" rel="noreferrer">packages/client/channel.ts:124</a>
</p>


### findCoderById

```ts
findCoderById(packetId: number, side: Side): Coder<any>
```
#### Parameters

- **packetId**: `number`
- **side**: `Side`
#### Return Type

- `Coder<any>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/client/channel.ts#L75" target="_blank" rel="noreferrer">packages/client/channel.ts:75</a>
</p>


### getPacketId

```ts
getPacketId(packetInst: any, side: Side): number
```
#### Parameters

- **packetInst**: `any`
- **side**: `Side`
#### Return Type

- `number`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/client/channel.ts#L80" target="_blank" rel="noreferrer">packages/client/channel.ts:80</a>
</p>


### listen

```ts
listen(option: NetConnectOpts & { keepalive?: number | boolean }): Promise<void>
```
Open the connection and start to listen the port.
#### Parameters

- **option**: `NetConnectOpts & { keepalive?: number | boolean }`
#### Return Type

- `Promise<void>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/client/channel.ts#L104" target="_blank" rel="noreferrer">packages/client/channel.ts:104</a>
</p>


### on

```ts
on(channel: string, listener: (event: T) => void): this
```
Adds the ``listener`` function to the end of the listeners array for the
event named ``eventName``. No checks are made to see if the ``listener`` has
already been added. Multiple calls passing the same combination of ``eventName``and ``listener`` will result in the ``listener`` being added, and called, multiple
times.

````js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
````

Returns a reference to the ``EventEmitter``, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The``emitter.prependListener()`` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

````js
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
````
#### Parameters

- **channel**: `string`
- **listener**: `(event: T) => void`
The callback function
#### Return Type

- `this`

*Inherited from: `EventEmitter.on`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/client/channel.ts#L172" target="_blank" rel="noreferrer">packages/client/channel.ts:172</a>
</p>


### once

```ts
once(channel: string, listener: (event: T) => void): this
```
Adds a **one-time**``listener`` function for the event named ``eventName``. The
next time ``eventName`` is triggered, this listener is removed and then invoked.

````js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
````

Returns a reference to the ``EventEmitter``, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The``emitter.prependOnceListener()`` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

````js
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
````
#### Parameters

- **channel**: `string`
- **listener**: `(event: T) => void`
The callback function
#### Return Type

- `this`

*Inherited from: `EventEmitter.once`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/client/channel.ts#L173" target="_blank" rel="noreferrer">packages/client/channel.ts:173</a>
</p>


### oncePacket

```ts
oncePacket(packet: (args: any[]) => T, listener: (event: T) => void): this
```
#### Parameters

- **packet**: `(args: any[]) => T`
- **listener**: `(event: T) => void`
#### Return Type

- `this`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/client/channel.ts#L166" target="_blank" rel="noreferrer">packages/client/channel.ts:166</a>
</p>


### onPacket

```ts
onPacket(packet: (args: any[]) => T, listener: (event: T) => void): this
```
Listen for sepcific packet by its class name.
#### Parameters

- **packet**: `(args: any[]) => T`
- **listener**: `(event: T) => void`
#### Return Type

- `this`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/client/channel.ts#L162" target="_blank" rel="noreferrer">packages/client/channel.ts:162</a>
</p>


### registerPacket

```ts
registerPacket(entry: PacketRegistryEntry): void
```
#### Parameters

- **entry**: `PacketRegistryEntry`
#### Return Type

- `void`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/client/channel.ts#L94" target="_blank" rel="noreferrer">packages/client/channel.ts:94</a>
</p>


### registerPacketType

```ts
registerPacketType(clazz: (args: any) => any): void
```
#### Parameters

- **clazz**: `(args: any) => any`
#### Return Type

- `void`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/client/channel.ts#L86" target="_blank" rel="noreferrer">packages/client/channel.ts:86</a>
</p>


### send

```ts
send(message: T, skeleton: Partial<T>): Promise<void>
```
Sent a packet to server.
#### Parameters

- **message**: `T`
- **skeleton**: `Partial<T>`
#### Return Type

- `Promise<void>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/client/channel.ts#L144" target="_blank" rel="noreferrer">packages/client/channel.ts:144</a>
</p>


