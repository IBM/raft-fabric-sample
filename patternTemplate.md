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

> Given that there are many possible ways that 
the nodes on a blockchain network may come to agree on the order of transactions, and that
agreement is essential for a distributed computing network, it is no surprise that the 
debate over the most efficient consensus mechanism often a heated, religious, debate. 
At the heart of consensus mechanisms is solving a difficult, popular, distributed computing 
question: how can we (computers)
agree on one result (reach consensus) among a group of computers when we know that the 
computers are unreliable? Although there is not perfect way to solve this problem, the 
de-facto standard has since 1989 has been the Paxos algorithm. The problem with Paxos,
is that it takes Ph.D students years to master, and even the brightest of engineers that 
try to implement this algorithm in practice have difficulties fully understanding, and thus,
implementing the algorithm in practice. 

Enter



# Technologies

[Blockchain](https://developer.ibm.com/technologies/blockchain/): A blockchain is a tamper-evident, shared digital ledger that records transactions in a public or private peer-to-peer network. The blockchain acts as a single source of truth, and members in a blockchain network can view only those transactions that are relevant to them.
[Containers](https://developer.ibm.com/technologies/containers/): A Containers architecture enables multiple services to run on the same machine, isolated from each other, in the same way as virtual machines, but with much less overhead.


# Description
> With the new IBM Blockchain Platform 2.1.0, you now have the flexibility to deploy components on the cloud of your choice - whether that is IBM Cloud, Azure, AWS, or Google Cloud. Not only that, but you can get the same functionality that is expected with the original IBM Blockchain Platform, consistently, across different clouds, whether that is public, private, or even hybrid. More specifically, you can deploy the IBM Blockchain Platform on any x86_64 architecture that is supported by OpenShift 3.11 and meets the system and environment requirements. From there, you can import components from other networks, onboard other organizations to your current channel, and easily expand your network.

When the reader has completed this code pattern, they will understand how to:

Create an OpenShift cluster.
Log in to an OpenShift cluster.
Create and a new project and add security and access policies.
Deploy the IBM Blockchain console and log in to the console.
Deploy a smart contract and run transactions on the IBM Blockchain Platform running on OpenShift.

# Flow

<br>
<p align="center">
  <img src="images/archDiagram.png">
</p>
<br>

# Flow Description
1. The blockchain operator purchases an entitlement to the IBM Blockchain Platform V2.1.0.
2. The blockchain operator deploys the IBM Blockchain Platform (which is running the latest Hyperledger Fabric version) onto
a Red Hat OpenShift cluster. The operator creates a network onto the IBM Blockchain platform, eventually installing and instantiating the Fabcar smart contract on the network.
3. The Node.js application server uses the Fabric SDK to interact with the deployed network on IBM Blockchain Platform and creates APIs for a web client.
4. The Angular client uses the Node.js Fabric SDK to interact with the network.
5. The User interacts with the Fabcar Angular web application to update and query the blockchain state.

# Instructions

> Find the detailed steps for this pattern in the [readme file](https://github.com/horeaporutiu/fabcar-openshift-public). The steps will show you how to:

1. [Order IBM Blockchain Platform V2.1.0](#step-1-Order-IBM-Blockchain-Platform-V2.1.0)
2. [Create an OpenShift cluster](#step-2-Create-an-OpenShift-cluster)
3. [Log in to your OpenShift cluster](#step-3-Log-in-to-your-OpenShift-cluster)
4. [Add security and access policies to your project](#step-4-Add-security-and-access-policies-to-your-project)
5. [Create a secret for your entitlement key](#step-5-Create-a-secret-for-your-entitlement-key)
6. [Deploy the IBM Blockchain Platform operator](#step-6-Deploy-the-IBM-Blockchain-Platform-operator)
7. [Deploy the IBM Blockchain Platform console](#step-7-Deploy-the-IBM-Blockchain-Platform-console)
8. [Log in to IBM Blockchain Platform console](#step-8-Log-in-to-IBM-Blockchain-Platform-console)
9. [Build a Network - Create Certificate Authority](#step-9-Build-a-Network---Create-Certificate-Authority)
10. [Build a Network - Certificate Authority - Associate Identity](#step-10-Build-a-Network---Certificate-Authority---Associate-Identity)
11. [Build a Network - Membership Service Provider](#step-11-Build-a-Network---Membership-Service-Provider)
12. [Build a Network - Create peer and ordering nodes](#step-12-Build-a-Network---Create-peer-and-ordering-nodes)
13. [Build a Network - Create and join channel](#step-13-Build-a-Network---Create-and-join-channel)
14. [Install and Instantiate Fabcar Smart Contract](#step-14-Install-and-Instantiate-Fabcar-Smart-Contract)
15. [Register a user for our client app](#step-15-Register-a-user-for-our-client-app)
16. [Update the config file](#step-16-Update-the-config-file)
17. [Start the app](#step-17-Start-the-app)
18. [Submit and check transactions](#step-18-Submit-and-check-transactions)
19. [Conclusion](#step-19-Conclusion)

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



