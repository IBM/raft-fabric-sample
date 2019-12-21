 🚧🚨*This code pattern uses only open-source technologies. There is no need for an IBM Cloud account or any paid services.*🚧🚨

# Build and run a decentralized multi-node ordering service using raft consensus on Hyperledger Fabric
A repo to demonstrate how to build and submit transactions to a five-node ordering service running 
on the (crash fault tolerant) Raft consensus protocol.

With the new [Hyperledger Fabric v1.4.1 release](https://hyperledger-fabric.readthedocs.io/en/release-1.4/whatsnew.html), you now have the ability to deploy a truly decentralized, crash fault tolerant (CFT) ordering service. Not only that, but since the raft implementation of Hyperledger Fabric is developed by the 
Hyperledger community, this means that you can get support on the implementation of your (raft-based) ordering nodes. Before, 
with the Kafka based ordering node, you would have to go to Apache for support 
and Hyperledger could not support our ordering service - making it a much more 
complex implementation process, especially if you ran into errors.

Not only that, but the way that Kafka was meant to be implemented within the ordering service, the Kafka cluster and Zookeeper ensemble were meant to be run by *one* organization i.e. a single point a failure. Point in case, this is not the kind of decentralization we expect from a blockchain and any distributed network.

With the new Raft ordering service, we can have the ordering nodes run by 
multiple different organizations. This is meant to be *the default* for all
production deployments moving forward. 

## Intro to Raft Consensus Algorithm
The purpose of consensus algorithms is to enable machines (nodes) to work together and survive even if 
parts of the whole fail (i.e. nodes crash). This is very important for software, especially mission-critical software, due to the fact that if some nodes crash, we want to ensure that our application can still run 
as intended. Imagine if some of the servers from J.P. Morgan Chase bank fail, and your whole savings account is lost. All the money that you earned there is now lost, and you cannot prove that you had thousands of dollars in that account, all because parts of the system failed. Now, that is extremely unlikely, due to 
the fact that mission-critical applications allow for *many* points of failure. This is what Raft, and other consensus algorithms allow - they allow crash fault tolerance. As long as the majority of the nodes are still running, then our system will be healthy. The purpose of this code pattern will be to discuss how consensus applies to the Hyperledger Fabric permissioned blockchain. 

But before we talk about Raft, we have to mention the Paxos algorithm (white paper can be found [here](https://lamport.azurewebsites.net/pubs/paxos-simple.pdf)]). Paxos has dominated discussions of consensus 
algorithms over the past few decades, and most consensus algorithms are based on Paxos, or influenced by it. 
Raft is no exception - it is based on the Paxos algorithm, produces the same result, and is considered easier to  
understand compared to Paxos. The problem is that to implement Paxos in production, in a real-life situation,
many changes to the architecture of the algorithm need to be made, thus creating many problems for anyone
creating a distributed system based on this algorithm.

When the reader has completed this code pattern, they will understand how to:

* Understand how the raft algorithm works
* Understand how to build and run a Raft ordering service with multiple organizations in Hyperledger Fabric
* Test the ordering service fault tolerance by deleting (crashing) one of the ordering nodes 
* Submit transactions and run a blockchain network on using a Raft ordering service

# Flow Diagram
<!-- <br>
<p align="center">
  <img src="images/archDiagram.png">
</p>
<br> -->

# Flow Description
1. The blockchain operator purchases an entitlement to the IBM Blockchain Platform V2.1.0.
<!-- 2. The blockchain operator deploys the IBM Blockchain Platform (which is running the latest Hyperledger Fabric version) onto
a Red Hat OpenShift cluster. The operator creates a network onto the IBM Blockchain platform, eventually installing and instantiating the Fabcar smart contract on the network.
3. The Node.js application server uses the Fabric SDK to interact with the deployed network on IBM Blockchain Platform and creates APIs for a web client.
4. The Angular client uses the Node.js Fabric SDK to interact with the network.
5. The User interacts with the Fabcar Angular web application to update and query the blockchain state. -->

# Included components

## Featured technologies
+ [Hyperledger Fabric v1.4.4](https://hyperledger-fabric.readthedocs.io) is a platform for distributed ledger solutions, underpinned by a modular architecture that delivers high degrees of confidentiality, resiliency, flexibility, and scalability.

## Prerequisites

  - [Hyperledger Fabric 1.4 prerequisites](https://hyperledger-fabric.readthedocs.io/en/release-1.4/prereqs.html) 

# Steps
1. [Clone the repo](#step-1-clone-the-repo)


## Step 1. Clone the repo

**Note: This repo is 73MB. May take some time do clone.**

Clone this repo by issuing the following command in Terminal. Next, navigate to the newly cloned folder.

```
Workdir$ git clone https://github.com/IBM/raft-fabric-samples.git
Workdir$ cd raft-fabric-samples
```

## Step 2. (Optional) Clean your Docker images

You will need to run the following command if you have other Docker containers running from the [IBM-Blockchain VSCode extension](https://github.com/IBM-Blockchain/blockchain-vscode-extension), or any other
projects that are using the same containers on the same ports. Also, if you ran into an error using these scripts in the past, clean your
Docker system with the following commands. Note when asked if you want to continue type in `y`:

```
raft-fabric-samples$ cd first-network/
first-network$ ./byfn.sh down
```

The output will look something like this:

```
Stopping for channel 'mychannel' with CLI timeout of '10' seconds and CLI delay of '3' seconds
Continue? [Y/n] y
proceeding ...
WARNING: Volume net_peer1.org3.example.com not found.
ce79d448de52
044e7437c085
Untagged: dev-peer0.org1.example.com-fabcar-1.0-5c906e402ed29f20260ae42283216aa75549c571e2e380f3615826365d8269ba:latest
Deleted: sha256:aa78a2e101cc6402b6c0ae6b74bb1af0f0935a74ae63e6db42eb5f069729f6b3
Deleted: sha256:1b13efa63dcdf4a7a16d20a1963a2a31a27e39cd0638694df25c7c3d79ed2bd7
Deleted: sha256:53f6681b7a2e123577506b7d8c2d1bad39a67ecd941befe4a2d866b68c63dfb6
Deleted: sha256:7db554b1063d5f151bbc8a6c2eff01bf1e166fbf908543bd221d045d855b091f
Untagged: dev-peer0.org2.example.com-fabcar-1.0-264b0a1cb5efbecaac5cf8990339c24474dc8435c6e10f10f2be565d555d0e94:latest
Deleted: sha256:a291305233a2d3981226d6080fb4252a5419ef5f0bd2e86d11fb427fde4246c7
Deleted: sha256:cae6530ed0696219b471436abbb7a304a880be5031cd016e45bff606a6bcc37a
Deleted: sha256:b916c69c9c1b01e46ef92ac6568900138ae0b84bde36d0755d69f6257bc5aad6
Deleted: sha256:f8386c6e7763a2ab8917d57912b3df0fc37cb844338900313a7c5eb6164de7ea
```

One last thing we have to do to clean previous cryptographic certificates on our system is the following command. Note when asked if
you want to continue, type in `y`: 

```

first-network$ docker network prune

WARNING! This will remove all local volumes not used by at least one container.
Are you sure you want to continue? [y/N] y
Total reclaimed space: 0B
```

## Step 3. Generate cryptographic material

Issue the following command to generate the required certificates and genesis block configuration. When asked for if you want to continue
go ahead and type in `y`.


```
first-network$ ./byfn.sh generate -o etcdraft
```
The output will look something like this: 

```
Generating certs and genesis block for channel 'mychannel' with CLI timeout of '10' seconds and CLI delay of '3' seconds
Continue? [Y/n] y
proceeding ...

/Users/Horea.Porutiu@ibm.com/Workdir/testDir/testDec20/raft-fabric-samples2/first-network/../bin/cryptogen

##########################################################
##### Generate certificates using cryptogen tool #########
##########################################################
+ cryptogen generate --config=./crypto-config.yaml
org1.example.com
org2.example.com
+ res=0
+ set +x
```

Next, Start up the raft network with the following command. This may take a few minutes to execute...

```
first-network$ ./byfn.sh up -o etcdraft -l node
```

The output will look something like this: 

```
Starting for channel 'mychannel' with CLI timeout of '10' seconds and CLI delay of '3' seconds
Continue? [Y/n] y
proceeding ...

LOCAL_VERSION=1.4.4
DOCKER_IMAGE_VERSION=1.4.4
...

===================== Chaincode is installed on peer0.org2 ===================== 

Instantiating chaincode on peer0.org2...
+ peer chaincode instantiate -o orderer.example.com:7050 --tls true --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem -C mychannel -n fabcar -l node -v 1.0 -c '{"Args":["initLedger"]}' -P 'AND ('\''Org1MSP.peer'\'','\''Org2MSP.peer'\'')'
+ res=0
+ set +x
2019-12-20 20:29:42.998 UTC [chaincodeCmd] checkChaincodeCmdParams -> INFO 001 Using default escc
2019-12-20 20:29:42.998 UTC [chaincodeCmd] checkChaincodeCmdParams -> INFO 002 Using default vscc
===================== Chaincode is instantiated on peer0.org2 on channel 'mychannel' ===================== 

Querying chaincode on peer0.org1...
===================== Querying on peer0.org1 on channel 'mychannel'... ===================== 
+ peer chaincode query -C mychannel -n fabcar -c '{"Args":["queryCar","CAR1"]}'
Attempting to Query peer0.org1 ...3 secs
+ res=0
+ set +x

{"color":"red","make":"Ford","model":"Mustang","owner":"Brad","docType":"car"}
===================== Query successful on peer0.org1 on channel 'mychannel' ===================== 

========= All GOOD, BYFN execution completed =========== 


 _____   _   _   ____   
| ____| | \ | | |  _ \  
|  _|   |  \| | | | | | 
| |___  | |\  | | |_| | 
|_____| |_| \_| |____/  

```

## Step 3. Install Fabcar web-app dependencies

Next, we need to install the dependencies to run the fabcar UI. In a two separate Terminal window, navigate to the 
client and server directories of the web-app, and run npm install. 

```
first-network$ cd ..
raft-fabric-samples$ cd web-app/client/
client$ npm install
```

```
first-network$ cd ..
raft-fabric-samples$ cd web-app/server/
server$ npm install
```

## Step 4. Start the Fabcar web-app

Once the dependencies are installed, in the two separate windows, run the following command to start the Angular app, and the Node.js server.

Start the Angular development server:

```
client$ npm start
```

You should see the following output:
```
> client@0.0.0 start /Users/Horea.Porutiu@ibm.com/Workdir/testDir/testDec20/raft-fabric-samples2/web-app/client
> ng serve

** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **
                                                                                          
Date: 2019-12-20T20:42:18.359Z
Hash: 5989a95598de77388957
Time: 15228ms
chunk {main} main.js, main.js.map (main) 43.1 kB [initial] [rendered]
chunk {polyfills} polyfills.js, polyfills.js.map (polyfills) 241 kB [initial] [rendered]
chunk {runtime} runtime.js, runtime.js.map (runtime) 6.22 kB [entry] [rendered]
chunk {styles} styles.js, styles.js.map (styles) 28.1 kB [initial] [rendered]
chunk {vendor} vendor.js, vendor.js.map (vendor) 3.63 MB [initial] [rendered]
ℹ ｢wdm｣: Compiled successfully.
```

Next, start the Node.js Express server:
```
server$ npm start
```

You should see the following output:

```
> server@1.0.0 start /Users/Horea.Porutiu@ibm.com/Workdir/testDir/testDec20/raft-fabric-samples2/web-app/server
> ./node_modules/nodemon/bin/nodemon.js src/app.js

[nodemon] 1.18.10
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node src/app.js`
```

## Step 5. Add reference to cryptographic keys
The last thing we need to do is to add a reference to our private keys from our Org1 and Org2 of our application, so that we can 
prove to the network that we are allowed to transact on the network by proving our keys have been generated from a valid certificate 
authority. In step 1, when we did the `./byfn.sh generate -o etcdraft` command, we actually created certificates for org1.example.com and org2.example.com which are the organizations that are managing and creating certificates for the peer nodes. 

Run the following script from the server folder to assign and change the `connection.yaml` file with the 
correct private keys for our two organizations. Remember to save the file after you run the script!

```
server$ ./updateKeystore.sh
```


## Conclusion


## Extending the code pattern


# Related IBM Developer content
* [Fabcar Code Pattern](https://github.com/IBM/fabcar-blockchain-sample)

# Related links
* [Raft White Paper](https://raft.github.io/raft.pdf)


## License
This code pattern is licensed under the Apache Software License, Version 2. Separate third-party code objects invoked within this code pattern are licensed by their respective providers pursuant to their own separate licenses. Contributions are subject to the [Developer Certificate of Origin, Version 1.1 (DCO)](https://developercertificate.org/) and the [Apache Software License, Version 2](https://www.apache.org/licenses/LICENSE-2.0.txt).

[Apache Software License (ASL) FAQ](https://www.apache.org/foundation/license-faq.html#WhatDoesItMEAN)
 
