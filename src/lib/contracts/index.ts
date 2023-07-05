export * from "./proxy";
export * from "./registry";

export const SOLIDITY_INTERFACE = `// SPDX-License-Identifier: MIT
pragma solidity >=0.8.4;

interface IPRBProxyPlugin {
    function getMethods() external returns (bytes4[] memory methods);
}

interface IPRBProxy {
    error PRBProxy_CallerNotRegistry(IPRBProxyRegistry registry, address caller);
    error PRBProxy_ExecutionReverted();
    error PRBProxy_ExecutionUnauthorized(address owner, address caller, address target);
    error PRBProxy_PluginNotInstalledForMethod(address caller, address owner, bytes4 method);
    error PRBProxy_PluginReverted(IPRBProxyPlugin plugin);
    error PRBProxy_TargetNotContract(address target);
    error PRBProxy_TargetRegistry();

    event Execute(address indexed target, bytes data, bytes response);
    event RunPlugin(IPRBProxyPlugin indexed plugin, bytes data, bytes response);

    function owner() external view returns (address);
    function registry() external view returns (IPRBProxyRegistry);
    
    function execute(address target, bytes calldata data) external payable returns (bytes memory response);
}

interface IPRBProxyRegistry {
    error PRBProxyRegistry_CallerDoesNotHaveProxy(address caller);
    error PRBProxyRegistry_OwnerHasProxy(address owner, IPRBProxy proxy);
    error PRBProxyRegistry_PluginMethodCollision(IPRBProxyPlugin currentPlugin, IPRBProxyPlugin newPlugin, bytes4 method);
    error PRBProxyRegistry_PluginUnknown(IPRBProxyPlugin plugin);
    error PRBProxyRegistry_PluginWithZeroMethods(IPRBProxyPlugin plugin);

    event DeployProxy(address indexed operator, address indexed owner, IPRBProxy proxy);
    event InstallPlugin(address indexed owner, IPRBProxy indexed proxy, IPRBProxyPlugin indexed plugin, bytes4[] methods);
    event SetPermission(address indexed owner, IPRBProxy indexed proxy, address indexed envoy, address target, bool newPermission);
    event UninstallPlugin(address indexed owner, IPRBProxy indexed proxy, IPRBProxyPlugin indexed plugin, bytes4[] methods);

    struct ConstructorParams {
        address owner;
        address target;
        bytes data;
    }

    function VERSION() external view returns (string memory);
    function constructorParams() external view returns (address owner, address target, bytes memory data);
    function getMethodsByOwner(address owner, IPRBProxyPlugin plugin) external view returns (bytes4[] memory methods);
    function getMethodsByProxy(IPRBProxy proxy, IPRBProxyPlugin plugin) external view returns (bytes4[] memory methods);
    function getPermissionByOwner(address owner, address envoy, address target) external view returns (bool permission);
    function getPermissionByProxy(IPRBProxy proxy, address envoy, address target) external view returns (bool permission);
    function getPluginByOwner(address owner, bytes4 method) external view returns (IPRBProxyPlugin plugin);
    function getPluginByProxy(IPRBProxy proxy, bytes4 method) external view returns (IPRBProxyPlugin plugin);
    function getProxy(address owner) external view returns (IPRBProxy proxy);

    function deploy() external returns (IPRBProxy proxy);
    function deployAndExecute(address target, bytes calldata data) external returns (IPRBProxy proxy);
    function deployAndExecuteAndInstallPlugin(address target, bytes calldata data, IPRBProxyPlugin plugin) external returns (IPRBProxy proxy);
    function deployAndInstallPlugin(IPRBProxyPlugin plugin) external returns (IPRBProxy proxy);
    function deployFor(address owner) external returns (IPRBProxy proxy);
}
`;
