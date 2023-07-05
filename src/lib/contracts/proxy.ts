export const PROXY_ABI = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  {
    inputs: [
      { internalType: "contract IPRBProxyRegistry", name: "registry", type: "address" },
      { internalType: "address", name: "caller", type: "address" },
    ],
    name: "PRBProxy_CallerNotRegistry",
    type: "error",
  },
  { inputs: [], name: "PRBProxy_ExecutionReverted", type: "error" },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "caller", type: "address" },
      { internalType: "address", name: "target", type: "address" },
    ],
    name: "PRBProxy_ExecutionUnauthorized",
    type: "error",
  },
  {
    inputs: [
      { internalType: "address", name: "caller", type: "address" },
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "bytes4", name: "method", type: "bytes4" },
    ],
    name: "PRBProxy_PluginNotInstalledForMethod",
    type: "error",
  },
  {
    inputs: [{ internalType: "contract IPRBProxyPlugin", name: "plugin", type: "address" }],
    name: "PRBProxy_PluginReverted",
    type: "error",
  },
  {
    inputs: [{ internalType: "address", name: "target", type: "address" }],
    name: "PRBProxy_TargetNotContract",
    type: "error",
  },
  { inputs: [], name: "PRBProxy_TargetRegistry", type: "error" },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "target", type: "address" },
      { indexed: false, internalType: "bytes", name: "data", type: "bytes" },
      { indexed: false, internalType: "bytes", name: "response", type: "bytes" },
    ],
    name: "Execute",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "contract IPRBProxyPlugin", name: "plugin", type: "address" },
      { indexed: false, internalType: "bytes", name: "data", type: "bytes" },
      { indexed: false, internalType: "bytes", name: "response", type: "bytes" },
    ],
    name: "RunPlugin",
    type: "event",
  },
  { stateMutability: "payable", type: "fallback" },
  {
    inputs: [
      { internalType: "address", name: "target", type: "address" },
      { internalType: "bytes", name: "data", type: "bytes" },
    ],
    name: "execute",
    outputs: [{ internalType: "bytes", name: "response", type: "bytes" }],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "registry",
    outputs: [{ internalType: "contract IPRBProxyRegistry", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  { stateMutability: "payable", type: "receive" },
] as const;

export const PROXY_ABI_VIEM = `[
  "constructor()",
  "error PRBProxy_CallerNotRegistry(address registry, address caller)",
  "error PRBProxy_ExecutionReverted()",
  "error PRBProxy_ExecutionUnauthorized(address owner, address caller, address target)",
  "error PRBProxy_PluginNotInstalledForMethod(address caller, address owner, bytes4 method)",
  "error PRBProxy_PluginReverted(address plugin)",
  "error PRBProxy_TargetNotContract(address target)",
  "error PRBProxy_TargetRegistry()",
  "event Execute(address indexed target, bytes data, bytes response)",
  "event RunPlugin(address indexed plugin, bytes data, bytes response)",
  "fallback()",
  "function execute(address target, bytes data) payable returns (bytes response)",
  "function owner() view returns (address)",
  "function registry() view returns (address)",
  "receive() external payable"
] as const`;
