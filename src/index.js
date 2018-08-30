import grapesjs from 'grapesjs';
import 'grapesjs-mjml';
import 'grapesjs-campaign';

module.exports = (() => {
  const defaultConfig = {
    fromElement: true,
    plugins: ['gjs-mjml','gjs-campaign'],
    pluginOpts: {
      'gjs-mjml': {},
      'gjs-campaign':{}
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
