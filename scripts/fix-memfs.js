const fs = require('fs');
const path = require('path');

const memfsLib = path.resolve(__dirname, '..', 'node_modules', 'memfs', 'lib');
const source = path.join(memfsLib, 'src', 'getBigInt.js');
const target = path.join(memfsLib, 'getBigInt.js');

if (!fs.existsSync(source)) {
  console.warn('fix-memfs: source file not found:', source);
  process.exit(0);
}

try {
  fs.copyFileSync(source, target);
  console.log('fix-memfs: copied getBigInt shim to memfs/lib');
} catch (error) {
  console.error('fix-memfs: failed to copy getBigInt shim:', error);
  process.exit(1);
}
