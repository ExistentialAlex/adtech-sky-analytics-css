import { readdirSync, statSync, mkdirSync, existsSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import strip from 'strip-comments';

const getAllFiles = (dirPath, files) => {
  let arrayOfFiles = files || [];

  const dirFiles = readdirSync(dirPath);

  for (const file of dirFiles) {
    if (statSync(dirPath + '/' + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + '/' + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(join(dirPath, '/', file));
    }
  }

  return arrayOfFiles;
};

const copy = (folder, subDirs = []) => {
  const filesToCopy = getAllFiles('./src/styles/' + folder);
  const filesToWrite = filesToCopy.map((filePath) => filePath.replace('src/styles', 'dist'));

  if (!existsSync(process.cwd() + '/dist/' + folder)) {
    mkdirSync(process.cwd() + '/dist/' + folder);
  }

  for (const dir of subDirs) {
    if (!existsSync(process.cwd() + `/dist/${folder}/${dir}`)) {
      mkdirSync(process.cwd() + `/dist/${folder}/${dir}`);
    }
  }

  for (let i = 0; i < filesToCopy.length; i++) {
    const data = strip(readFileSync(process.cwd() + '/' + filesToCopy[i]).toString()).replaceAll(
      /\r?\n|\r/g,
      ''
    );
    writeFileSync(process.cwd() + '/' + filesToWrite[i], data);
  }
};

if (!existsSync(process.cwd() + '/dist')) {
  mkdirSync(process.cwd() + '/dist');
}
copy('scss', ['utilities', 'blocks', 'composition']);
copy('less', ['utilities', 'blocks', 'composition']);
