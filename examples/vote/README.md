## Issues

### Conflict between constract and function name

Convert your voting function to a constructor

```solidity
constructor(bytes32[] candidateNames) public {
    candidateList = candidateNames;
}
```


