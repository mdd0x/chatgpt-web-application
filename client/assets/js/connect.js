document.getElementById('connect-button').addEventListener('click', event => {
    let account;
    ethereum.request({method: 'eth_requestAccounts'}).then(accounts => {
      account = accounts[0];
      console.log(account);
  
    });
  });