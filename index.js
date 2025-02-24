import { CeramicClient } from '@ceramicnetwork/http-client';

// Use the 3Box Labs hosted node
const ceramic = new CeramicClient('https://ceramic-clay.3boxlabs.com');

console.log('Connected to hosted Ceramic node');
