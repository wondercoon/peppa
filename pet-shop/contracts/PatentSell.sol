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
    }

    // basic info for selling patents
    struct SellingPatent {
        bytes32 pn;
        uint price;
    }

    // basic info for my patents
    struct MyPatent {
        bytes32 pn;
        uint price;
        bool sold;
    }

    event Refresh ();

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
    function publish(bytes32 pn, uint price) public {
        // bind to current user patents
        userPatents[msg.sender].push(pn);

        // save patent detail info
        patentInfos[pn] = PatentInfo({
            owner : msg.sender,
            pn : pn,
            price : price,
            sold : false,
            buyer : 0
        });

        // add to pn list
        allPns.push(pn);

        // refresh pages
//        emit Refresh();
    }

    function bytes32ToString(bytes32 x) constant returns (string) {
        bytes memory bytesString = new bytes(32);
        uint charCount = 0;
        for (uint j = 0; j < 32; j++) {
            byte char = byte(bytes32(uint(x) * 2 ** (8 * j)));
            if (char != 0) {
                bytesString[charCount] = char;
                charCount++;
            }
        }
        bytes memory bytesStringTrimmed = new bytes(charCount);
        for (j = 0; j < charCount; j++) {
            bytesStringTrimmed[j] = bytesString[j];
        }
        return string(bytesStringTrimmed);
    }

    // get all selling patents in platform
    function getAllSellingPatents() public view returns (bytes32[], uint[]) {
        bytes32[] memory pns = new bytes32[](allPns.length);
        uint[] memory prices = new uint[](allPns.length);
        uint count = 0;
        for (uint idx = 0; idx < allPns.length; idx++) {
            bytes32 pn = allPns[idx];
            PatentInfo storage info = patentInfos[pn];
            if (info.sold) {
                continue;
            }

            pns[count] = info.pn;
            prices[count] = info.price;
            count++;
        }

        return (pns, prices);
    }

    // get all patents published by me
    function getMyPatents() public returns (MyPatent[]) {
        MyPatent[] patents;
        for (uint idx = 0; idx < allPns.length; idx++) {
            bytes32 pn = allPns[idx];
            PatentInfo storage info = patentInfos[pn];
            patents.push(MyPatent({
                pn : pn,
                sold : info.sold,
                price : info.price
            }));
        }
        return patents;
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
        emit Refresh();
        return "SUCCESS";
    }

    // get balance of current account
    function getBalance(address addr) public view returns (uint) {
        return balances[addr];
    }

    // add more balance
    function addBalance(address addr, uint amount) public {
        balances[addr] += amount;
    }
}