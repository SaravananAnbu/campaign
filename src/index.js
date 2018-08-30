import grapesjs from 'grapesjs';

module.exports = (() => {
  const defaultConfig = {
    fromElement: true,
  }
  return {
    init( config = {} ) {
      config = { ...defaultConfig, ...config }
      console.log('config', config);
      const editor = grapesjs.init(config)
      return editor;
    }
  };
})()
