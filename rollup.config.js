import { terser } from 'rollup-plugin-terser';
export default {
  input: 'src/index.js',
  output: { file: 'dist/no-touch.min.js', format: 'umd', name: 'NoTouch' },
  plugins: [terser()]
};