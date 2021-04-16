# Polkadot

Polkadot is a blockchain technology inspired in Ethereum. In fact, it was founded by one of the Ethereum founders: Dr. Gavin Wood.  

Polkadot is a Sharded Blockhcain that can be considered a blockchain of blockchains: a blockchain composed of parachains.  
Sharded blockchains bring extreme value in terms of scalability, because of process parallelization. If one of the individual parachains is bloated, it won't affect the rest of the parachains.  
It is a good idea aparently since Ethereum is also moving to a sharded blockchain in Eth 2.0

### The Relay Chain
The heart of the Polkadot network: security and interoperability.

### Parachains
Blockhcains built on top of Polkadot with their own utility tokens. There is a fee paid in DOT to send tokens to other parachains, intended to keep consensus on the global state of the relay chain.

### Bridges
These are the entities that will allow the parachains to communicate with external networks.

### Consensus
#### Nominators
Secure the blockchain by selecting trustworthy validators and staking dots.

#### Validators
Secure the relay chain by staking dots, validating proof of collators and participating in consensus with other validators.

#### Collators
Maintain transactional state in the individial shards. Collect shard transactions and users producing proof for validation.

#### Fishermen
Monitor the network and report bad behaviour to validators, collators and any parachain.

### Grandpa Consensus mechanism



