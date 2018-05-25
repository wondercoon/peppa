App = {
    web3Provider: null,
    contracts: {},
    data: null,
    init: function () {
        return App.initWeb3();
    },

    initWeb3: function () {
        // Is there an injected web3 instance?
        if (typeof web3 !== 'undefined') {
            App.web3Provider = web3.currentProvider;
        } else {
            // If no injected web3 instance is detected, fall back to Ganache
            App.web3Provider = new Web3.providers.HttpProvider('http://127.0.0.1:7545');
        }
        web3 = new Web3(App.web3Provider);

        return App.initContract();
    },

    initContract: function () {
        $.getJSON('static/PatentSell.json', function (data) {
            // Get the necessary contract artifact file and instantiate it with truffle-contract
            var PatentSellArtifact = data;
            App.contracts.PatentSell = TruffleContract(PatentSellArtifact);

            // Set the provider for our contract
            App.contracts.PatentSell.setProvider(App.web3Provider);

            return App.loadSellingPatents();
        });
    },
    publish: function (pn, price) {
        var patentSellInstance;

        return App.contracts.PatentSell.deployed().then(function (instance) {
            patentSellInstance = instance;

            // return patentSellInstance.publish(web3.fromAscii(pn), web3.fromDecimal(price));
            return patentSellInstance.publish(web3.fromAscii(pn), web3.fromDecimal(price));
        }).then(function () {
            App.loadSellingPatents();
        }).catch(function (err) {
            console.log(err.message);
        });
    },
    loadSellingPatents: function () {
        var patentSellInstance;

        return App.contracts.PatentSell.deployed().then(function (instance) {
            patentSellInstance = instance;

            return patentSellInstance.getAllSellingPatents.call();
        }).then(function (sellingPatents) {
            var patents = [];
            for (var i in sellingPatents[0]) {
              patents.push({
                pn:  web3.toAscii(sellingPatents[0][i].replace(/0+$/g, '')),
                price: web3.toDecimal(sellingPatents[1][i])
              });
            }
            console.log(patents);
        }).catch(function (err) {
            console.log(err.message);
        });
    }
};

$(function () {
    $(window).load(function () {
        App.init();
    });
});
