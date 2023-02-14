$(document).ready(function () {
    $('.connectBtn').on('click', function () {
        if (walletAddress === null) {
            $("#walletConnectModal").css("display", "block");
        }
        else {
            if (confirm("Would you like to disconnect from this dApp?")) {
                if (isMetaMask) {
                    metaMaskConnect.disconnect();
                }
                else {
                    walletConnect.disconnect();
                }
            }
        }
    });

    $("#modalWConnect").on("click", function () {
        walletConnect.initialise();
        walletConnect.connect();
        $("#walletConnectModal").css("display", "none");
    });

    $("#modalMMConnect").on("click", function () {
        metaMaskConnect.initialise().then(function () {
            metaMaskConnect.connect();
        });
        $("#walletConnectModal").css("display", "none");
    });

    $("#walletConnectModal").css("display", "block");
});