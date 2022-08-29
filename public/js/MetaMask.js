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


    // const contractAddress = `0x018BeFB7D1F3e84948466ef15Cc46bAF9Ba5295F`;
    // const _account = `0x64bF23663F23dC5f452F9f00d7BeAe08072f978C`;

    // let url = `https://etherscan.io/token/generic-tokenholder-inventory?&contractAddress=${contractAddress}&a=${_account}&pUrl=token`;
    //   axios.get(url).then((data) => { 
    //     const $ = Cheerio.load(data.data);
    //     let str = $('#body > div.d-md-flex.justify-content-between.mb-4 > p').text().trim().match(/\d+/)[0];
    //     // console.log(str);
    //     count = parseInt(str);
    //     console.log(count);
    //   })
    // console.log(response.json());
});