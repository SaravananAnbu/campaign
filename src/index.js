import grapesjs from 'grapesjs';

module.exports = (() => {
  const defaultConfig = {
    fromElement: true,
    plugins: ['gjs-mjml', 'gjs-campaign'],
    pluginsOpts: {
      'gjs-mjml': {
        resetDevices: 0
      },
      'gjs-campaign': {}
    }
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
