'use strict';

const svelte = require('svelte');

class SvelteCompiler {
  constructor (opts) {
    this.opts = opts;

    this.opts.format = this.opts.format || 'cjs';

    this.opts.onerror = err => {
      console.error(err.message);
    }
    
    this.opts.onwarn = warning => {
      console.warn(warning.message);
    }
  }

  compile (file) {
    return new Promise((resolve, reject) => {
      try {
        let { code, map } = svelte.compile(file.data, this.opts);
        resolve(code);
      } catch (error) {
        reject(error);
      }
    });
  }
}

SvelteCompiler.prototype.brunchPlugin = true;
SvelteCompiler.prototype.type = 'javascript';
SvelteCompiler.prototype.extension = 'svelte';

module.exports = SvelteCompiler;
