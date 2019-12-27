# Short title

> Run a smart contract on a blockchain network with the raft ordering service

# Long title

> Deploy the fabcar smart contract onto a Hyperledger Fabric network running a five-node raft ordering service

# Author

* Horea Porutiu <horea.porutiu@ibm.com>

# URLs

### Github repo

> https://github.com/horeaporutiu/raft-fabric-sample


# Summary
> Given that Hyperledger Fabric has several ordering service implementations,
including Solo, Kafka, and Raft, you as the developer should know the advantages 
and disadvantages of each implementation before making a design decision. As the 
new default for production blockchain networks, the Raft consensus algorithm is a 
crash fault tolerant ordering service implementation which is easier to set up and manage 
than Kafka. More importantly, Raft allows different organizations to contribute nodes the ordering service, enabling a more decentralized network architecture.

# Description

> Given that there are many possible ways that 
the nodes on a blockchain network may come to agreement (or consensus), and that
agreement is essential for a distributed computing network, it is no surprise that the 
debate over the most efficient consensus algorithm is often heated and even religious.
At the heart of consensus algorithms is solving a difficult, popular, distributed computing 
question: how can we (computers)
agree on one result (reach consensus) among a group of computers when we know that the 
computers are unreliable? Although there is no perfect way to solve this problem, the 
de-facto standard since 1989 has been the Paxos algorithm. The problem with Paxos,
is that it takes Ph.D students years to master, and even the brightest of engineers that 
try to implement this algorithm in practice have difficulties fully understanding, and thus,
implementing their solution. 

Enter raft. Designed as an alternative consensus algorithm to Paxos, raft is much easier 
to understand, and is now used in some of the most successful software projects, such as
Docker. Since the start of Hyperledger Fabric, consensus has been designed as pluggable, 
and you the developer get to choose which type of consensus your ordering nodes will use.
Raft enables a much easier setup than Kafka, a more decentralized approach because multiple
organizations can contribute nodes to the ordering service, and greater crash fault 
tolerance than Solo, since Solo features a single ordering node. This code pattern will
help you understand how to build and deploy a smart contract onto a Hyperledger Fabric 
network running Raft, and enable you to test the tolerance of the network by stopping 
and starting some of the ordering nodes.

When the reader has completed this code pattern, they will understand how to:

> Understand how the raft algorithm works
> Understand how to build and run a Raft ordering service with multiple organizations in Hyperledger Fabric
> Submit transactions and run a blockchain network on using a Raft ordering service
> Test the ordering service fault tolerance by deleting (crashing) one of the ordering nodes

# Technologies

[Blockchain](https://developer.ibm.com/technologies/blockchain/): A blockchain is a tamper-evident, shared digital ledger that records transactions in a public or private peer-to-peer network. The blockchain acts as a single source of truth, and members in a blockchain network can view only those transactions that are relevant to them.
[Containers](https://developer.ibm.com/technologies/containers/): A Containers architecture enables multiple services to run on the same machine, isolated from each other, in the same way as virtual machines, but with much less overhead.

# Flow

<br>
<p align="center">
  <img src="images/archDiagram.png">
</p>
<br>

# Flow Description
1. The blockchain operator generates cryptographic materials such as public and private keys
for the organizations that will manage the peer nodes.
2. The blockchain operator will bring up the network including five-ordering nodes running raft, install the smart contract on the peers, and query the network to ensure the contract is working properly.
3. The blockchain operator will install dependencies for the Fabcar web application, including server side, and client side dependencies.
4. The blockchain operator will create a cryptographic identity for the client which
will be submitting transactions via the Fabcar UI, and store that identity in a wallet.
5. The user interacts with the Fabcar Angular web application to update the blockchain state,and the raft-based ordering nodes use leader election to decide which node will take lead in writing blocks.
6. The user inspects the ordering service logs to ensure that the raft consensus algorithm
is running as expected.

# Instructions

> Find the detailed steps for this pattern in the [readme file](https://github.com/horeaporutiu/raft-fabric-sample/blob/master/README.md). The steps will show you how to:

1. Clone the repo
2. Optional Clean your Docker images
3. Generate cryptographic material
4. Install Fabcar web app dependencies
5. Create a cryptographic identity
6. Start the Fabcar web app

# Components and services

*	[IBM Blockchain Platform v2.1.0](https://cloud.ibm.com/docs/services/blockchain-rhos?topic=blockchain-rhos-get-started-console-ocp) IBM® Blockchain Platform provides a managed and full stack blockchain-as-a-service (BaaS) offering that allows you to deploy blockchain components on any x86_64 architecture supported by the Red Hat OpenShift Container Platform 3.11
*	[Red Hat OpenShift Container Platform 3.11](https://www.openshift.com/products/container-platform) Red Hat® OpenShift® offers a consistent hybrid cloud foundation for building and scaling containerized applications. 

# Runtimes

* Node.js

# Related IBM Developer content
* [Fabcar Code Pattern](https://github.com/IBM/fabcar-blockchain-sample)
* [IBM Code Patterns for Blockchain](https://developer.ibm.com/patterns/category/blockchain/)
* [Hyperledger Fabric Podcast](https://github.com/IBM/fabcar-blockchain-sample)

# Related links
* [Fabcar Tutorial - Hyperledger Fabric Site](https://hyperledger-fabric.readthedocs.io/en/latest/write_first_app.html)
* [Fabcar YouTube Tutorial](https://www.youtube.com/watch?v=2moCQeHCx-g)



