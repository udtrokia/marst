## Issues

### Conflict between constract and function name

```
defining constructors as functions with the same name as the contract is deprecated. Use "constructor(...) { ... }" instead.
  function Voting(bytes32[] candidateNames) public {
  ^ (Relevant source part starts here and spans across multiple lines).
```
You can change your function name or make a constructors


```
Running migration: 1_initial_migration.js
  Deploying Migrations...
  ... 0xf6cb3fd8dd418889a952ab3f4c11c84e6cea118f970c456eecd983767bd553d4
  Migrations: 0x69a392a004cd96479c49e4fd9c034e3d3c18b888
Saving successful migration to network...
  ... 0x641adaa0a3ea84141fbff377bc6247739d4a228e938a3f44eddf5799920860ab
Saving artifacts...
Running migration: 2_deploy_contracts.js
  Deploying Voting...
  ... 0xfb9a76cad45bc6a6dae81a38c4f621ef1e78a3ae2f007a10baefd6105bbf9c26
  Voting: 0x064e5fb07162f5f65b73a412ace8a2dce804adf5
Saving successful migration to network...
  ... 0xe043c7752d809bdf45753bac389ede35b92b3bcba0c5b2330122755d90b71db8
Saving artifacts...
```
