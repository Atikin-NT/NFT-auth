const ethereumButton = document.querySelector('.enableEthereumButton');

ethereumButton.addEventListener('click', () => {
    console.log("Click");
  //Will Start the metamask extension
//   ethereum.request({ method: 'eth_requestAccounts' });
    const accounts = ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    console.log(account);
    console.log(accounts);

    const tmp = ethereum.request({ method: 'eth_getBalance', params: ['0xdc64D9dd89fB9e38536096C2Ba0010e0b12432C5', 'latest']});
    console.log(tmp);


    const url = "https://api.etherscan.io/api?module=account";
    const apiKey = 'QU339WY2ZB4P5STB2GFPQJTSSAYPJC1KAR';
    let response = fetch(url, {
      method: 'POST',
      headers: {
        'address': '0x64bF23663F23dC5f452F9f00d7BeAe08072f978C',
        'contractaddress': '0x76be3b62873462d2142405439777e971754e8e77',
        'page': 1,
        'offset': 100,
        'startblock': 0,
        'endblock': 99999999,
        'sort': 'asc',
        'apikey': apiKey
      }
    });
    console.log(response.json())
});