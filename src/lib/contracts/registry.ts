export const REGISTRY_ADDRESS = "0x584009E9eDe26e212182c9745F5c000191296a78";
export const REGISTRY_ABI = [
  {
    inputs: [
      {
        internalType: "contract IPRBProxyPlugin",
        name: "currentPlugin",
        type: "address",
      },
      {
        internalType: "contract IPRBProxyPlugin",
        name: "newPlugin",
        type: "address",
      },
      {
        internalType: "bytes4",
        name: "method",
        type: "bytes4",
      },
    ],
    name: "PRBProxyRegistry_PluginMethodCollision",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "contract IPRBProxyPlugin",
        name: "plugin",
        type: "address",
      },
    ],
    name: "PRBProxyRegistry_PluginUnknown",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "contract IPRBProxyPlugin",
        name: "plugin",
        type: "address",
      },
    ],
    name: "PRBProxyRegistry_PluginWithZeroMethods",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "PRBProxyRegistry_UserDoesNotHaveProxy",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "contract IPRBProxy",
        name: "proxy",
        type: "address",
      },
    ],
    name: "PRBProxyRegistry_UserHasProxy",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "contract IPRBProxy",
        name: "proxy",
        type: "address",
      },
    ],
    name: "DeployProxy",
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
        internalType: "contract IPRBProxy",
        name: "proxy",
        type: "address",
      },
      {
        indexed: true,
        internalType: "contract IPRBProxyPlugin",
        name: "plugin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes4[]",
        name: "methods",
        type: "bytes4[]",
      },
    ],
    name: "InstallPlugin",
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
        internalType: "contract IPRBProxy",
        name: "proxy",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "envoy",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "newPermission",
        type: "bool",
      },
    ],
    name: "SetPermission",
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
        internalType: "contract IPRBProxy",
        name: "proxy",
        type: "address",
      },
      {
        indexed: true,
        internalType: "contract IPRBProxyPlugin",
        name: "plugin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes4[]",
        name: "methods",
        type: "bytes4[]",
      },
    ],
    name: "UninstallPlugin",
    type: "event",
  },
  {
    inputs: [],
    name: "VERSION",
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
    inputs: [],
    name: "constructorParams",
    outputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "deploy",
    outputs: [
      {
        internalType: "contract IPRBProxy",
        name: "proxy",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "deployAndExecute",
    outputs: [
      {
        internalType: "contract IPRBProxy",
        name: "proxy",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "contract IPRBProxyPlugin",
        name: "plugin",
        type: "address",
      },
    ],
    name: "deployAndExecuteAndInstallPlugin",
    outputs: [
      {
        internalType: "contract IPRBProxy",
        name: "proxy",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IPRBProxyPlugin",
        name: "plugin",
        type: "address",
      },
    ],
    name: "deployAndInstallPlugin",
    outputs: [
      {
        internalType: "contract IPRBProxy",
        name: "proxy",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "deployFor",
    outputs: [
      {
        internalType: "contract IPRBProxy",
        name: "proxy",
        type: "address",
      },
    ],
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
      {
        internalType: "contract IPRBProxyPlugin",
        name: "plugin",
        type: "address",
      },
    ],
    name: "getMethodsByOwner",
    outputs: [
      {
        internalType: "bytes4[]",
        name: "methods",
        type: "bytes4[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IPRBProxy",
        name: "proxy",
        type: "address",
      },
      {
        internalType: "contract IPRBProxyPlugin",
        name: "plugin",
        type: "address",
      },
    ],
    name: "getMethodsByProxy",
    outputs: [
      {
        internalType: "bytes4[]",
        name: "methods",
        type: "bytes4[]",
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
        name: "envoy",
        type: "address",
      },
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
    ],
    name: "getPermissionByOwner",
    outputs: [
      {
        internalType: "bool",
        name: "permission",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IPRBProxy",
        name: "proxy",
        type: "address",
      },
      {
        internalType: "address",
        name: "envoy",
        type: "address",
      },
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
    ],
    name: "getPermissionByProxy",
    outputs: [
      {
        internalType: "bool",
        name: "permission",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "bytes4",
        name: "method",
        type: "bytes4",
      },
    ],
    name: "getPluginByOwner",
    outputs: [
      {
        internalType: "contract IPRBProxyPlugin",
        name: "plugin",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IPRBProxy",
        name: "proxy",
        type: "address",
      },
      {
        internalType: "bytes4",
        name: "method",
        type: "bytes4",
      },
    ],
    name: "getPluginByProxy",
    outputs: [
      {
        internalType: "contract IPRBProxyPlugin",
        name: "plugin",
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
        name: "user",
        type: "address",
      },
    ],
    name: "getProxy",
    outputs: [
      {
        internalType: "contract IPRBProxy",
        name: "proxy",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IPRBProxyPlugin",
        name: "plugin",
        type: "address",
      },
    ],
    name: "installPlugin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "envoy",
        type: "address",
      },
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "bool",
        name: "permission",
        type: "bool",
      },
    ],
    name: "setPermission",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IPRBProxyPlugin",
        name: "plugin",
        type: "address",
      },
    ],
    name: "uninstallPlugin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export const REGISTRY_ABI_VIEM = `[
  "error PRBProxyRegistry_PluginMethodCollision(address currentPlugin, address newPlugin, bytes4 method)",
  "error PRBProxyRegistry_PluginUnknown(address plugin)",
  "error PRBProxyRegistry_PluginWithZeroMethods(address plugin)",
  "error PRBProxyRegistry_UserDoesNotHaveProxy(address user)",
  "error PRBProxyRegistry_UserHasProxy(address user, address proxy)",
  "event DeployProxy(address indexed operator, address indexed owner, address proxy)",
  "event InstallPlugin(address indexed owner, address indexed proxy, address indexed plugin, bytes4[] methods)",
  "event SetPermission(address indexed owner, address indexed proxy, address indexed envoy, address target, bool newPermission)",
  "event UninstallPlugin(address indexed owner, address indexed proxy, address indexed plugin, bytes4[] methods)",
  "function VERSION() view returns (string)",
  "function constructorParams() view returns (address owner, address target, bytes data)",
  "function deploy() returns (address proxy)",
  "function deployAndExecute(address target, bytes data) returns (address proxy)",
  "function deployAndExecuteAndInstallPlugin(address target, bytes data, address plugin) returns (address proxy)",
  "function deployAndInstallPlugin(address plugin) returns (address proxy)",
  "function deployFor(address user) returns (address proxy)",
  "function getMethodsByOwner(address owner, address plugin) view returns (bytes4[] methods)",
  "function getMethodsByProxy(address proxy, address plugin) view returns (bytes4[] methods)",
  "function getPermissionByOwner(address owner, address envoy, address target) view returns (bool permission)",
  "function getPermissionByProxy(address proxy, address envoy, address target) view returns (bool permission)",
  "function getPluginByOwner(address owner, bytes4 method) view returns (address plugin)",
  "function getPluginByProxy(address proxy, bytes4 method) view returns (address plugin)",
  "function getProxy(address user) view returns (address proxy)",
  "function installPlugin(address plugin)",
  "function setPermission(address envoy, address target, bool permission)",
  "function uninstallPlugin(address plugin)"
] as const`;
