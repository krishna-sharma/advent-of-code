const puzzleInput = require("./puzzleInputs");

const binaryData = puzzleInput
  .trim()
  .split("")
  .map((hex) => parseInt(hex, 16).toString(2).padStart(4, "0"))
  .join("");
let readPosition = 0;
let versionSum = 0;
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
  const startPosition = readPosition;
  while (readPosition - startPosition < totalLengthInBits) {
    readAPacket();
  }
};
const readOperatorType1 = (numberOfSubPackets) => {
  for (packetsLeft = numberOfSubPackets; packetsLeft > 0; packetsLeft--) {
    readAPacket();
  }
};

const readAPacket = () => {
  versionSum += readVersionType();
  const typeID = readVersionType();
  if (typeID === 4) {
    readLiteralValue();
  } else {
    const operatorType = readOperatorType();
    if (operatorType === 0) {
      readOperatorType0(readOperatorType0Length());
    } else {
      readOperatorType1(readOperatorType1SubPackets());
    }
  }
};

readAPacket();
console.log({ versionSum });
