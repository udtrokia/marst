# DAO 启动方法

1. 进入目录文件
   `$ cd /path/to/dao`
2. 运行 ganache-cli 
   `$ ganache-cli`
3. 编译合约
   `$ truffle compile`
4. 部署合约
   `$ truffle migrate`
5. 安装 app 依赖
   `$ cd /path/dao/app && npm i --save && npm run dev`
6. 打开浏览器
   `输入网址 "localhost:3000"`


# 思路

##### 制作一个 DAICO 的智能合约，包含以下功能：
+ 合约总余额
+ 各个账户的余额
+ 资金状态
+ 转账
+ 锁定转账
+ 退款
+ 界面优化

##### 算是SPA，一个单页网页 DAPP
+ 使用了(react + nextjs) 
// 用习惯了... 我手贱，不过 web3 比较好调，代码干净。明天可以修改下。
+ 转账，锁定，退款功能按钮

### 关于 web3 api

大部分教程及代码是老式的 web3API，最近 web3 更新到了 1.0.0stable 版本。这个项目也使用了最新版本的 [web3(1.0.0)](http://web3js.readthedocs.io/en/1.0/) 和 solidity(4.0.23)。



### 搭建私链环境(如果系统中已经安装过则可以跳过这一步)

```
$ brew install ganache-cli
$ ganche-cli
```

开启私链后自动生成 5 个账号，每个账号拥有 100 ETH。输出如下：

```
 ℷ ganache-cli 
Ganache CLI v6.1.0 (ganache-core: 2.1.0)

Available Accounts
==================
(0) 0x92c024ce1b15e2a6acf2a278ace9cf2257b0d19b
(1) 0x3462eee23cc82dabba783f64e1019fb681cdd71f
(2) 0x50cd7d0b3dfe4461833beaa1cdb5252faccb71ee
(3) 0x7ef8d26119c63cfd04a0766c816d5c4e2ce795b6
(4) 0x0cb3a573ace8313e1698834688384c09a276484e
(5) 0x96cb12c8d9941d5690c2be94ecf183c1e4ea4ea3
(6) 0xd5186addcdbd1e2a61c9113cff6b0d607c4e41bf
(7) 0xafcac62e05dfdf756d7eb61427fb9115e9d1aff7
(8) 0x1b546aeacd379ecceb391b995e8bafd0201128a7
(9) 0xab683c63e00d45743c60db0b3bab87312819f37a

Private Keys
==================
(0) dafae7e91292392843200d3439eda271eb6479bf429e505339b7bfb226166e5b
(1) a9e78cbacb66a8ef124f3af139669f2ed3821eec6a5e3f35dacf1b596296d13c
(2) aa1afa4e50c1274c35b298f262b7d3ef9927e92f27f9b9c61c729855682ecc3c
(3) 6d664d393b3ce57662a2eb4c8127e351110fb22df17eef8b7dac11b543d6135e
(4) fbdb1111258431561957e50f319c3cf813e6641eda4be5f20df66712d38ddba0
(5) 1ed3e68b24e94ef5ec764fb071c507b541ac8f1670ace5fab12fa07f0270f6ce
(6) fc517b5c873154c7e35571562575b8c609368dba6841c31804ceb03c7abae4ee
(7) 73fbdaa3f22ea5c51ab322d321ff034009a60cd9fdc3fe2059fb84a079be9660
(8) cc05a49ae03e2e825019680f823d5c4f50333f9ddcd1f12760d6424b21c3955f
(9) 136ee9ee5c05bb5ce2f8a570abbfc929488623d9dc3fc4f1880a6453b879721e

HD Wallet
==================
Mnemonic:      deal shell pave purpose despair walnut put wish smoke local actress alter
Base HD Path:  m/44'/60'/0'/0/{account_index}

```



### 配置 truffle 连接端口

/path/dapp/truffle.js:

```
module.exports = {
  networks: {
    development:{
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    }
  }
};
```
truffle 通过这个配置文件来访问 ganache-cli 开启的以太坊开发私链。







### 编写智能合约

/path/dapp/contracts/DAO.sol:
```
...
```



### 智能合约编译

可选择使用 truffle 编译，或在 dapp 中调用 web3 接口编译。




##### truffle

```
 ℷ truffle compile
 ℷ truffle migrate
Compiling ./contracts/DAO.sol...
Writing artifacts to ./build/contracts

Using network 'development'.

Running migration: 1_initial_migration.js
  Deploying Migrations...
  ... 0xfa94c7d678056da60d121d427d90b61a5cbf1adabad4dac81e49efc5f0697cdf
  Migrations: 0x8e0e9bda5c820d6be8d17c8cbc6dec462de21d75
Saving successful migration to network...
  ... 0x2c05ca3a28ec0ca0156c82e53c669f3f193a357bec24543ed0e1451708a876b8
Saving artifacts...
Running migration: 2_deploy_contracts.js
  Deploying DAO...
  ... 0x564dcf9cd62fea641655aab7473a6c9197bf27b70d94547cabc24770d525ea0e
  DAO: 0x8acf5f84036bce8adb09b4d33aaa159616422dac
Saving successful migration to network...
  ... 0xf2250b5f96024116a2caf4c6946429acea8cf1384b37444794dc3b47ec81dbfd
Saving artifacts...
```

这样会生成一份编译好的智能合约在 `/path/dapp/build/contracts/DAO.json`
后面会使用 web3 接口调用这个文件。





### dapp 编写

/path/dapp/dapp

```
dapp = constract(web3API) + app 
```
