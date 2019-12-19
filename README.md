 🚧🚨*WORK IN PROGRESS. USE AT YOUR OWN RISK.*🚧🚨

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
+ [Hyperledger Fabric v1.4.3](https://hyperledger-fabric.readthedocs.io) is a platform for distributed ledger solutions, underpinned by a modular architecture that delivers high degrees of confidentiality, resiliency, flexibility, and scalability.

## Prerequisites (Cloud)

  - [Hyperledger stuff](https://tinyurl.com/y4mzxow5)
  - [Node v8.x or greater and npm v5.x or greater](https://nodejs.org/en/download)
  - [OpenShift Origin CLI](https://cloud.ibm.com/docs/openshift?topic=openshift-openshift-cli#cli_oc)

# Steps
1. [Order IBM Blockchain Platform V2.1.0](#step-1-Order-IBM-Blockchain-Platform-V2.1.0)


## Step 1. Order IBM Blockchain Platform V2.1.0 

<br>
<p align="center">
  <img src="https://i.imgur.com/MeRlEuv.gif">
</p>
<br>

## Conclusion


## Extending the code pattern


# Related IBM Developer content
* [Fabcar Code Pattern](https://github.com/IBM/fabcar-blockchain-sample)

# Related links
* [Raft White Paper](https://raft.github.io/raft.pdf)


## License
This code pattern is licensed under the Apache Software License, Version 2. Separate third-party code objects invoked within this code pattern are licensed by their respective providers pursuant to their own separate licenses. Contributions are subject to the [Developer Certificate of Origin, Version 1.1 (DCO)](https://developercertificate.org/) and the [Apache Software License, Version 2](https://www.apache.org/licenses/LICENSE-2.0.txt).

[Apache Software License (ASL) FAQ](https://www.apache.org/foundation/license-faq.html#WhatDoesItMEAN)
 
