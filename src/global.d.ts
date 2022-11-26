declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
declare module '*.svg';
declare module 'md5-es';
declare module 'vue-slider-component';
declare module 'icecast-metadata-stats';

declare module 'v-hotkey' {
  import { DirectiveOptions, PluginFunction } from 'vue'

  type Plugin = {
    install: PluginFunction<{ [alias in string]?: number }>
    directive: DirectiveOptions
  };

  const plugin: Plugin

  export default plugin
}
