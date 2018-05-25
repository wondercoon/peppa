pragma solidity ^0.4.23;
pragma experimental ABIEncoderV2;

contract PatentSell {
    // basic patent info
    struct PatentInfo {
        address owner;      // patent owner
        bytes32 pn;         // patent number
        uint price;         // published price
        bool sold;          // sold already ?
        address buyer;      // who bought this patent
        bytes32 timestamp;  // publish time
    }

    event Refresh (bytes32 evtType, bytes32 pn);

    bytes32[] public allPns;

    mapping (address => uint) public balances;

    mapping (bytes32 => address) public emailWalletMap;

    mapping (bytes32 => PatentInfo) public patentInfos;

    mapping (address => bytes32[]) public userPatents;

    // bind wallet to an email
    function bindWallet(bytes32 email, address wallet) public {
        emailWalletMap[email] = wallet;
    }

    // get wallet address bind before
    function getWallet(bytes32 email) public view returns (address) {
        return emailWalletMap[email];
    }

    // publish a patent to platform
    function publish(bytes32 pn, uint price, bytes32 timestamp) public {
        if (patentInfos[pn].price > 0) {
            return;
        }

        if (price <= uint(0x0)) {
            return;
        }

        // bind to current user patents
        userPatents[msg.sender].push(pn);

        // save patent detail info
        patentInfos[pn] = PatentInfo({
            owner : msg.sender,
            pn : pn,
            price : price,
            sold : false,
            buyer : 0,
            timestamp: timestamp
        });

        // add to pn list
        allPns.push(pn);

        // refresh pages
        emit Refresh("PUBLISH", pn);
    }

    // get all selling patents in platform
    function getAllSellingPatents() public view returns (bytes32[], uint[], bytes32[]) {
        bytes32[] memory pns = new bytes32[](allPns.length);
        uint[] memory prices = new uint[](allPns.length);
        bytes32[] memory timestamps = new bytes32[](allPns.length);
        uint count = 0;
        for (uint idx = 0; idx < allPns.length; idx++) {
            bytes32 pn = allPns[idx];
            PatentInfo storage info = patentInfos[pn];
            if (info.sold) {
                continue;
            }

            pns[count] = info.pn;
            prices[count] = info.price;
            timestamps[count] = info.timestamp;
            count++;
        }

        return (pns, prices, timestamps);
    }

    // get all patents published by me
    function getMyPatents() public returns (bytes32[], uint[], bool[], bytes32[]) {
        bytes32[] storage patents = userPatents[msg.sender];
        bytes32[] memory pns = new bytes32[](patents.length);
        uint[] memory prices = new uint[](patents.length);
        bool[] memory solds = new bool[](patents.length);
        bytes32[] memory timestamps = new bytes32[](patents.length);

        uint count = 0;
        for (uint idx = 0; idx < patents.length; idx++) {
            bytes32 pn = patents[idx];
            PatentInfo storage info = patentInfos[pn];
            pns[count] = pn;
            prices[count] = info.price;
            solds[count] = info.sold;
            timestamps[count] = info.timestamp;
            count++;
        }
        return (pns, prices, solds, timestamps);
    }

    // update patent price
    function updatePrice(bytes32 pn, uint price) public returns (bytes32) {
        if (patentInfos[pn].sold) {
            return "SOLD";
        }

        patentInfos[pn].price = price;
        return "SUCCESS";
    }

    // buy a patent
    function buy(bytes32 pn) public payable returns (bytes32) {
        PatentInfo storage info = patentInfos[pn];
        if (info.sold) {
            return "SOLD";
        }

        if (msg.sender.balance < info.price) {
            return "INSUFFICIENT";
        }

        balances[msg.sender] -= info.price;
        balances[info.owner] += info.price;
        info.buyer = msg.sender;

        // refresh pages
        emit Refresh("BUY", pn);
        return "SUCCESS";
    }

    // get balance of current account
    function getBalance() public view returns (uint) {
        return balances[msg.sender];
    }

    // add more balance
    function addBalance(uint amount) public {
        balances[msg.sender] += amount;
    }
}
