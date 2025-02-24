import { CeramicClient } from '@ceramicnetwork/http-client';
import { DID } from 'dids';
import { Ed25519Provider } from 'key-did-provider-ed25519';
import { getResolver } from 'key-did-resolver';
import * as u8a from 'uint8arrays';
import { IDX } from '@ceramicstudio/idx';

// Initialize Ceramic Client
const ceramic = new CeramicClient('https://testnet-clay.ceramic.network');


// Generate a DID for authentication (Replace with your own secret)
const seed = u8a.fromString('63b9599f1c5d796f2f82785c90df0363fc589355851270659bdfb4ebab19fe8e', 'base16');
const provider = new Ed25519Provider(seed);
const did = new DID({ provider, resolver: getResolver() });

await did.authenticate();
ceramic.did = did;

console.log('DID authenticated:', did.id);

// Initialize IDX
const idx = new IDX({ ceramic });

// Sample voter data
const voterData = {
  voterID: '12345XYZ',
  name: 'devanshu',
  age: 21,
  registered: true
};

// Store voter data in IDX
await idx.set('voterProfile', voterData);
console.log('Voter Data Stored:', voterData);
