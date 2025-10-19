import fs from 'node:fs';
import path from 'node:path';
import archiver from 'archiver';

const dist = 'dist';


fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist);


if (!fs.existsSync('manifest.json')) {
  console.error('❌ ERRO: manifest.json não encontrado na raiz do projeto!');
  process.exit(1);
}

if (!fs.existsSync('src')) {
  console.warn('⚠️ Pasta src/ não encontrada. Criando vazia...');
  fs.mkdirSync('src');
}

if (!fs.existsSync('icons')) {
  console.warn('⚠️ Pasta icons/ não encontrada. Criando vazia...');
  fs.mkdirSync('icons');
}


fs.copyFileSync('manifest.json', path.join(dist, 'manifest.json'));
fs.cpSync('src', path.join(dist, 'src'), { recursive: true });
fs.cpSync('icons', path.join(dist, 'icons'), { recursive: true });


const output = fs.createWriteStream(path.join(dist, 'extension.zip'));
const archive = archiver('zip', { zlib: { level: 9 } });
archive.directory(dist, false);
archive.pipe(output);
await archive.finalize();

console.log('✅ Build gerado em dist/extension.zip');

