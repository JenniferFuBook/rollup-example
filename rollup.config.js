import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import postcss from 'rollup-plugin-postcss';
import image from '@rollup/plugin-image';
import { terser } from 'rollup-plugin-terser';
import cleaner from 'rollup-plugin-cleaner';

export default {
  input: 'src/index.js',
  plugins: [
    cleaner({
      targets: ['dist'],
    }),
    postcss(),
    image(),
    serve({
      open: true,
      verbose: true,
      contentBase: ['', 'dist'],
      historyApiFallback: true,
      host: 'localhost',
      port: 3000,
    }),
    livereload({ watch: ['', 'dist'] }),
  ],
  output: {
    file: 'dist/bundle.js',
    name: 'example',
    format: 'iife',
    sourcemap: process.env.BUILD === 'development',
    plugins: [terser()],
  },
};
