const puzzleInput = require("./puzzleInputs");

const binaryData = puzzleInput
  .trim()
  .split("")
  .map((hex) => parseInt(hex, 16).toString(2).padStart(4, "0"))
  .join("");
let readPosition = 0;
const readBits = (bitsToRead) => {
  readPosition += bitsToRead;
  return binaryData.slice(readPosition - bitsToRead, readPosition);
};

const readVersionType = () => parseInt(readBits(3), 2);

const readLiteralValue = (prevValue = "") => {
  const [keepReading, ...value] = readBits(5).split("");
  return keepReading === "1"
    ? readLiteralValue(prevValue + value.join(""))
    : parseInt(prevValue + value.join(""), 2);
};

const readOperatorType = () => parseInt(readBits(1), 2);
const readOperatorType0Length = () => parseInt(readBits(15), 2);
const readOperatorType1SubPackets = () => parseInt(readBits(11), 2);
const readOperatorType0 = (totalLengthInBits) => {
  const endPosition = readPosition + totalLengthInBits;
  const packetsRead = [];
  while (readPosition !== endPosition) {
    packetsRead.push(readAPacket());
  }
  return packetsRead;
};
const readOperatorType1 = (numberOfSubPackets) => {
  const packetsRead = [];
  while (packetsRead.length != numberOfSubPackets) {
    packetsRead.push(readAPacket());
  }
  return packetsRead;
};
const readOperator = () => {
  const operatorType = readOperatorType();
  if (operatorType === 0) {
    return readOperatorType0(readOperatorType0Length());
  } else {
    return readOperatorType1(readOperatorType1SubPackets());
  }
};

const readAPacket = () => {
  readVersionType();
  const typeID = readVersionType();
  switch (typeID) {
    case 0:
      return readOperator().reduce((p, c) => p + c);
    case 1:
      return readOperator().reduce((p, c) => p * c);
    case 2:
      return Math.min(...readOperator());
    case 3:
      return Math.max(...readOperator());
    case 4:
      return readLiteralValue();
    case 5:
      return readOperator().reduce((a, b) => (a > b ? 1 : 0));
    case 6:
      return readOperator().reduce((a, b) => (a < b ? 1 : 0));
    case 7:
      return readOperator().reduce((a, b) => (a === b ? 1 : 0));
  }
};

console.log({ readAPacket: readAPacket() });
