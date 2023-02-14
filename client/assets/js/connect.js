window.addEventListener('load', async () => {
              
    if (window.ethereum) {
      // window.web3 = new Web3(ethereum);
      web3 = new Web3(window.ethereum);
      console.log("provider detected");


      try {
        await ethereum.enable();
        initPayButton()
      } catch (err) {
        $('#status').html('User denied account access', err)
      }
    } 
    
    else if (window.web3) {
      window.web3 = new Web3(web3.currentProvider)
      initPayButton()
    } else {
      $('#status').html('No Metamask (or other Web3 Provider) installed')
    }
    await window.ethereum.send('eth_requestAccounts');
  })

  const initPayButton = () => {
    $('.pay-button').click(() => {
      // paymentAddress is where funds will be send to
      const paymentAddress = '0xf9a598A7885D727B3b773463efE387f15C28174c'
      const amountEth = 0.001

      web3.eth.sendTransaction({
        to: paymentAddress,
        value: web3.toWei(amountEth, 'ether')
      }, (err, transactionId) => {
        if  (err) {
          console.log('Payment failed', err)
          $('#status').html('Payment failed')
        } else {
          console.log('Payment successful', transactionId)
          $('#status').html('Payment successful')
          document.getElementById( 'payment' ).style.display = 'none';
        }
      })
    })
  }