if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
    if (typeof ethereum.isMetaMask !== 'undefined'){
        console.log('MetaMask is connect to chrome')
    }
}
else{
    console.log('MetaMask not found!');
}