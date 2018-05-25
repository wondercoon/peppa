

function asc2hex(pStr) {
  tempstr = '';
  for (a = 0; a < pStr.length; a = a + 1) {
    tempstr = tempstr + pStr.charCodeAt(a).toString(16);
  }
  return tempstr;
}

function hex2asc(pStr) {
  tempstr = '';
  for (b = 0; b < pStr.length; b = b + 2) {
    tempstr = tempstr + String.fromCharCode(parseInt(pStr.substr(b, 2), 16));
  }
  return tempstr;
}

function hex2dec(pStr) {
  var web3 = new Web3();
  tempstr = new web3.BigNumber(pStr, 16)
  return tempstr.toString();
}

function hex2addr(pStr) {
  tempstr = pStr.substr(pStr.length - 40)
  return "<a href='/address/0x" + tempstr + "'>" + "0x" + tempstr + "</a>";
}

function hexpad(instr) {
  if (instr.length % 2) return '0' + instr; else return instr;
}

function toString(data) {
  return web3.toUtf8(data);
}

function toNum(data) {
  return web3.toDecimal(data);
}

function hex2utf8(pStr) {
  var tempstr = ''
  try {
    tempstr = decodeURIComponent(pStr.replace(/\s+/g, '').replace(/[0-9a-f]{2}/g, '%$&'));
  }
  catch (err) {
    console.log('Fallback-Convert')
    for (b = 0; b < pStr.length; b = b + 2) {
      tempstr = tempstr + String.fromCharCode(parseInt(pStr.substr(b, 2), 16));
    }
  }
  return tempstr;
}
