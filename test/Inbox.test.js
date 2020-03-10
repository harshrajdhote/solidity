const assert = require('assert')
const ganache = require('ganache-cli');
const Web3 = require('web3'); //web3 imports constructor thats why it is capital W
const web3 = new Web3(ganache.provider()); //ganache is netwrok and web3 is interface ganeche provider is intermediatery
