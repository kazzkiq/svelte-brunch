'use strict';

const svelte = require('svelte');

class SvelteCompiler {
  constructor (cfg) {
    this.opts = cfg.plugins.svelte || {};
    this.opts.format = this.opts.format || 'cjs';

    this.opts.onerror = err => {
      console.error(err.message);
    }
    
    this.opts.onwarn = warning => {
      console.warn(warning.message);
    }
  }

  compile ({data}) {
    return svelte.compile(data, this.opts).code;
  }
}

SvelteCompiler.prototype.brunchPlugin = true;
SvelteCompiler.prototype.type = 'javascript';
SvelteCompiler.prototype.extension = 'svelte';

module.exports = SvelteCompiler;
