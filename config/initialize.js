/**
 * Created by pc hp on 30.10.2017.
 */
'use strict';

const jsyaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

const configPromise = new Promise((resolve, reject) => {
    try {
      const config = jsyaml.safeLoad(fs.readFileSync(path.join(__dirname, '/school.yaml'), 'utf8'));
resolve(config);
} catch (err) {
  reject(err);
}
});




