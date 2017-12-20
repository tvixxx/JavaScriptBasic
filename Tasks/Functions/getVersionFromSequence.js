// Write a function which can take the last version from versions sequence.
// function can take a string parameter.

const versions = [
  '1.0', 
  '1.1.5',
  '1.1.7',
  '1.1.90',
  '1.2',
  '1.2.2',
  '1.2.5',
  '1.3.0',
  '1.3.7'
];

function getVersion(version) {
  const length = version.length;
  return versions.filter(ver => ver.slice(0, length) === version).slice(-1);
}

console.log(getVersion('1.2'));
