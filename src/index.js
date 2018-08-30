import grapesjs from 'grapesjs';

module.exports = (() => {
  const defaultConfig = {
    fromElement: true,
    autorender:1
  }
  return {
    init( config = {} ) {
      config = { ...defaultConfig, ...config }
      console.log('config', config);
      const editor = grapesjs.init(config);
      editor.getModel().loadOnStart();
      config.autorender && editor.render();
      return editor;
    }
  };
})()
