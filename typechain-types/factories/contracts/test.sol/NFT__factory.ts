/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { NFT, NFTInterface } from "../../../contracts/test.sol/NFT";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600881526020017f4e4654204e616d650000000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f4e4654000000000000000000000000000000000000000000000000000000000081525081600090816200008f919062000324565b508060019081620000a1919062000324565b5050506200040b565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200012c57607f821691505b602082108103620001425762000141620000e4565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620001ac7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200016d565b620001b886836200016d565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b600062000205620001ff620001f984620001d0565b620001da565b620001d0565b9050919050565b6000819050919050565b6200022183620001e4565b6200023962000230826200020c565b8484546200017a565b825550505050565b600090565b6200025062000241565b6200025d81848462000216565b505050565b5b8181101562000285576200027960008262000246565b60018101905062000263565b5050565b601f821115620002d4576200029e8162000148565b620002a9846200015d565b81016020851015620002b9578190505b620002d1620002c8856200015d565b83018262000262565b50505b505050565b600082821c905092915050565b6000620002f960001984600802620002d9565b1980831691505092915050565b6000620003148383620002e6565b9150826002028217905092915050565b6200032f82620000aa565b67ffffffffffffffff8111156200034b576200034a620000b5565b5b62000357825462000113565b6200036482828562000289565b600060209050601f8311600181146200039c576000841562000387578287015190505b62000393858262000306565b86555062000403565b601f198416620003ac8662000148565b60005b82811015620003d657848901518255600182019150602085019450602081019050620003af565b86831015620003f65784890151620003f2601f891682620002e6565b8355505b6001600288020188555050505b505050505050565b61252a806200041b6000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80636a6278421161008c578063a22cb46511610066578063a22cb4651461026f578063b88d4fde1461028b578063c87b56dd146102a7578063e985e9c5146102d7576100ea565b80636a627842146101f157806370a082311461022157806395d89b4114610251576100ea565b8063095ea7b3116100c8578063095ea7b31461016d57806323b872dd1461018957806342842e0e146101a55780636352211e146101c1576100ea565b806301ffc9a7146100ef57806306fdde031461011f578063081812fc1461013d575b600080fd5b61010960048036038101906101049190611826565b610307565b604051610116919061186e565b60405180910390f35b6101276103e9565b6040516101349190611919565b60405180910390f35b61015760048036038101906101529190611971565b61047b565b60405161016491906119df565b60405180910390f35b61018760048036038101906101829190611a26565b6104c1565b005b6101a3600480360381019061019e9190611a66565b6105d8565b005b6101bf60048036038101906101ba9190611a66565b610638565b005b6101db60048036038101906101d69190611971565b610658565b6040516101e891906119df565b60405180910390f35b61020b60048036038101906102069190611ab9565b6106de565b6040516102189190611af5565b60405180910390f35b61023b60048036038101906102369190611ab9565b61070b565b6040516102489190611af5565b60405180910390f35b6102596107c2565b6040516102669190611919565b60405180910390f35b61028960048036038101906102849190611b3c565b610854565b005b6102a560048036038101906102a09190611cb1565b61086a565b005b6102c160048036038101906102bc9190611971565b6108cc565b6040516102ce9190611919565b60405180910390f35b6102f160048036038101906102ec9190611d34565b610934565b6040516102fe919061186e565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806103d257507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806103e257506103e1826109c8565b5b9050919050565b6060600080546103f890611da3565b80601f016020809104026020016040519081016040528092919081815260200182805461042490611da3565b80156104715780601f1061044657610100808354040283529160200191610471565b820191906000526020600020905b81548152906001019060200180831161045457829003601f168201915b5050505050905090565b600061048682610a32565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006104cc82610658565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361053c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161053390611e46565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1661055b610a7d565b73ffffffffffffffffffffffffffffffffffffffff16148061058a575061058981610584610a7d565b610934565b5b6105c9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105c090611ed8565b60405180910390fd5b6105d38383610a85565b505050565b6105e96105e3610a7d565b82610b3e565b610628576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161061f90611f6a565b60405180910390fd5b610633838383610bd3565b505050565b6106538383836040518060200160405280600081525061086a565b505050565b60008061066483610ecc565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036106d5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106cc90611fd6565b60405180910390fd5b80915050919050565b60006106ea6006610f09565b60006106f66006610f1f565b90506107028382610f2d565b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361077b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161077290612068565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600180546107d190611da3565b80601f01602080910402602001604051908101604052809291908181526020018280546107fd90611da3565b801561084a5780601f1061081f5761010080835404028352916020019161084a565b820191906000526020600020905b81548152906001019060200180831161082d57829003601f168201915b5050505050905090565b61086661085f610a7d565b8383610f4b565b5050565b61087b610875610a7d565b83610b3e565b6108ba576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108b190611f6a565b60405180910390fd5b6108c6848484846110b7565b50505050565b60606108d782610a32565b60006108e1611113565b90506000815111610901576040518060200160405280600081525061092c565b8061090b8461112a565b60405160200161091c9291906120c4565b6040516020818303038152906040525b915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b610a3b816111f8565b610a7a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a7190611fd6565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610af883610658565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610b4a83610658565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610b8c5750610b8b8185610934565b5b80610bca57508373ffffffffffffffffffffffffffffffffffffffff16610bb28461047b565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610bf382610658565b73ffffffffffffffffffffffffffffffffffffffff1614610c49576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c409061215a565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610cb8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610caf906121ec565b60405180910390fd5b610cc58383836001611239565b8273ffffffffffffffffffffffffffffffffffffffff16610ce582610658565b73ffffffffffffffffffffffffffffffffffffffff1614610d3b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d329061215a565b60405180910390fd5b6004600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4610ec7838383600161123f565b505050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6001816000016000828254019250508190555050565b600081600001549050919050565b610f47828260405180602001604052806000815250611245565b5050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610fb9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fb090612258565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516110aa919061186e565b60405180910390a3505050565b6110c2848484610bd3565b6110ce848484846112a0565b61110d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611104906122ea565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b60606000600161113984611427565b01905060008167ffffffffffffffff81111561115857611157611b86565b5b6040519080825280601f01601f19166020018201604052801561118a5781602001600182028036833780820191505090505b509050600082602001820190505b6001156111ed578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a85816111e1576111e061230a565b5b04945060008503611198575b819350505050919050565b60008073ffffffffffffffffffffffffffffffffffffffff1661121a83610ecc565b73ffffffffffffffffffffffffffffffffffffffff1614159050919050565b50505050565b50505050565b61124f838361157a565b61125c60008484846112a0565b61129b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611292906122ea565b60405180910390fd5b505050565b60006112c18473ffffffffffffffffffffffffffffffffffffffff16611797565b1561141a578373ffffffffffffffffffffffffffffffffffffffff1663150b7a026112ea610a7d565b8786866040518563ffffffff1660e01b815260040161130c949392919061238e565b6020604051808303816000875af192505050801561134857506040513d601f19601f8201168201806040525081019061134591906123ef565b60015b6113ca573d8060008114611378576040519150601f19603f3d011682016040523d82523d6000602084013e61137d565b606091505b5060008151036113c2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113b9906122ea565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161491505061141f565b600190505b949350505050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310611485577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000838161147b5761147a61230a565b5b0492506040810190505b6d04ee2d6d415b85acef810000000083106114c2576d04ee2d6d415b85acef810000000083816114b8576114b761230a565b5b0492506020810190505b662386f26fc1000083106114f157662386f26fc1000083816114e7576114e661230a565b5b0492506010810190505b6305f5e100831061151a576305f5e10083816115105761150f61230a565b5b0492506008810190505b612710831061153f5761271083816115355761153461230a565b5b0492506004810190505b6064831061156257606483816115585761155761230a565b5b0492506002810190505b600a8310611571576001810190505b80915050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036115e9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115e090612468565b60405180910390fd5b6115f2816111f8565b15611632576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611629906124d4565b60405180910390fd5b611640600083836001611239565b611649816111f8565b15611689576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611680906124d4565b60405180910390fd5b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a461179360008383600161123f565b5050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611803816117ce565b811461180e57600080fd5b50565b600081359050611820816117fa565b92915050565b60006020828403121561183c5761183b6117c4565b5b600061184a84828501611811565b91505092915050565b60008115159050919050565b61186881611853565b82525050565b6000602082019050611883600083018461185f565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156118c35780820151818401526020810190506118a8565b60008484015250505050565b6000601f19601f8301169050919050565b60006118eb82611889565b6118f58185611894565b93506119058185602086016118a5565b61190e816118cf565b840191505092915050565b6000602082019050818103600083015261193381846118e0565b905092915050565b6000819050919050565b61194e8161193b565b811461195957600080fd5b50565b60008135905061196b81611945565b92915050565b600060208284031215611987576119866117c4565b5b60006119958482850161195c565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006119c98261199e565b9050919050565b6119d9816119be565b82525050565b60006020820190506119f460008301846119d0565b92915050565b611a03816119be565b8114611a0e57600080fd5b50565b600081359050611a20816119fa565b92915050565b60008060408385031215611a3d57611a3c6117c4565b5b6000611a4b85828601611a11565b9250506020611a5c8582860161195c565b9150509250929050565b600080600060608486031215611a7f57611a7e6117c4565b5b6000611a8d86828701611a11565b9350506020611a9e86828701611a11565b9250506040611aaf8682870161195c565b9150509250925092565b600060208284031215611acf57611ace6117c4565b5b6000611add84828501611a11565b91505092915050565b611aef8161193b565b82525050565b6000602082019050611b0a6000830184611ae6565b92915050565b611b1981611853565b8114611b2457600080fd5b50565b600081359050611b3681611b10565b92915050565b60008060408385031215611b5357611b526117c4565b5b6000611b6185828601611a11565b9250506020611b7285828601611b27565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611bbe826118cf565b810181811067ffffffffffffffff82111715611bdd57611bdc611b86565b5b80604052505050565b6000611bf06117ba565b9050611bfc8282611bb5565b919050565b600067ffffffffffffffff821115611c1c57611c1b611b86565b5b611c25826118cf565b9050602081019050919050565b82818337600083830152505050565b6000611c54611c4f84611c01565b611be6565b905082815260208101848484011115611c7057611c6f611b81565b5b611c7b848285611c32565b509392505050565b600082601f830112611c9857611c97611b7c565b5b8135611ca8848260208601611c41565b91505092915050565b60008060008060808587031215611ccb57611cca6117c4565b5b6000611cd987828801611a11565b9450506020611cea87828801611a11565b9350506040611cfb8782880161195c565b925050606085013567ffffffffffffffff811115611d1c57611d1b6117c9565b5b611d2887828801611c83565b91505092959194509250565b60008060408385031215611d4b57611d4a6117c4565b5b6000611d5985828601611a11565b9250506020611d6a85828601611a11565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611dbb57607f821691505b602082108103611dce57611dcd611d74565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b6000611e30602183611894565b9150611e3b82611dd4565b604082019050919050565b60006020820190508181036000830152611e5f81611e23565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c000000602082015250565b6000611ec2603d83611894565b9150611ecd82611e66565b604082019050919050565b60006020820190508181036000830152611ef181611eb5565b9050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206f7220617070726f76656400000000000000000000000000000000000000602082015250565b6000611f54602d83611894565b9150611f5f82611ef8565b604082019050919050565b60006020820190508181036000830152611f8381611f47565b9050919050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b6000611fc0601883611894565b9150611fcb82611f8a565b602082019050919050565b60006020820190508181036000830152611fef81611fb3565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b6000612052602983611894565b915061205d82611ff6565b604082019050919050565b6000602082019050818103600083015261208181612045565b9050919050565b600081905092915050565b600061209e82611889565b6120a88185612088565b93506120b88185602086016118a5565b80840191505092915050565b60006120d08285612093565b91506120dc8284612093565b91508190509392505050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b6000612144602583611894565b915061214f826120e8565b604082019050919050565b6000602082019050818103600083015261217381612137565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b60006121d6602483611894565b91506121e18261217a565b604082019050919050565b60006020820190508181036000830152612205816121c9565b9050919050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b6000612242601983611894565b915061224d8261220c565b602082019050919050565b6000602082019050818103600083015261227181612235565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b60006122d4603283611894565b91506122df82612278565b604082019050919050565b60006020820190508181036000830152612303816122c7565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600081519050919050565b600082825260208201905092915050565b600061236082612339565b61236a8185612344565b935061237a8185602086016118a5565b612383816118cf565b840191505092915050565b60006080820190506123a360008301876119d0565b6123b060208301866119d0565b6123bd6040830185611ae6565b81810360608301526123cf8184612355565b905095945050505050565b6000815190506123e9816117fa565b92915050565b600060208284031215612405576124046117c4565b5b6000612413848285016123da565b91505092915050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b6000612452602083611894565b915061245d8261241c565b602082019050919050565b6000602082019050818103600083015261248181612445565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b60006124be601c83611894565b91506124c982612488565b602082019050919050565b600060208201905081810360008301526124ed816124b1565b905091905056fea2646970667358221220a12a28fe5c7ebfcaf270443bb44f92c638f58e6c3d70050ccab4a749cd31b9cf64736f6c63430008110033";

type NFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NFT__factory extends ContractFactory {
  constructor(...args: NFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<NFT> {
    return super.deploy(overrides || {}) as Promise<NFT>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): NFT {
    return super.attach(address) as NFT;
  }
  override connect(signer: Signer): NFT__factory {
    return super.connect(signer) as NFT__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NFTInterface {
    return new utils.Interface(_abi) as NFTInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): NFT {
    return new Contract(address, _abi, signerOrProvider) as NFT;
  }
}
