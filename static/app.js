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
  publish: function (pn, price, callback) {
    var patentSellInstance;

    return App.contracts.PatentSell.deployed().then(function (instance) {
      patentSellInstance = instance;

      return patentSellInstance.publish(web3.fromAscii(pn), web3.fromDecimal(price), web3.fromAscii(new Date().getTime() + ""));
    }).then(function () {
      callback && callback();
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
          pn: App.toString(sellingPatents[0][i]),
          price: App.toNum(sellingPatents[1][i]),
          pub_time: App.toString(sellingPatents[2][i])
        });
      }
      console.log(patents);
    }).catch(function (err) {
      console.log(err.message);
    });
  },
  toString: function(data) {
    return web3.toAscii(data.replace(/0+$/g, ''));
  },
  toNum: function(data) {
    return web3.toDecimal(data);
  },
  loadMyPatents: function () {
    var patentSellInstance;

    return App.contracts.PatentSell.deployed().then(function (instance) {
      patentSellInstance = instance;

      return patentSellInstance.getMyPatents.call();
    }).then(function (sellingPatents) {
      var patents = [];
      for (var i in sellingPatents[0]) {
        patents.push({
          pn: App.toString(sellingPatents[0][i].replace(/0+$/g, '')),
          price: App.toNum(sellingPatents[1][i]),
          sold: sellingPatents[2][i],
          pub_time: App.toString(sellingPatents[3][i])
        });
      }
      console.log(patents);
    }).catch(function (err) {
      console.log(err.message);
    });
  },
  getBalance: function () {
    var patentSellInstance;

    return App.contracts.PatentSell.deployed().then(function (instance) {
      patentSellInstance = instance;

      return patentSellInstance.getBalance.call();
    }).then(function (balance) {
      console.log(App.toNum(balance));
    }).catch(function (err) {
      console.log(err.message);
    });
  },
  addBalance: function (balance, callback) {
    var patentSellInstance;

    return App.contracts.PatentSell.deployed().then(function (instance) {
      patentSellInstance = instance;

      return patentSellInstance.addBalance(web3.fromDecimal(balance));
    }).then(function () {
      callback && callback();
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
