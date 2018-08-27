import grapesjs from 'grapesjs';

module.exports = (() => {
  return {
    init( config = {} ) {
      config = { ...config }
      console.log('config', config);
      const editor = grapesjs.init(config)
      return editor;
    }
  };
})()