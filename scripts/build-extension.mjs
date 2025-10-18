import fs from 'node:fs';
import path from 'node:path';
import archiver from 'archiver';

const dist = 'dist';
fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist);

<<<<<<< HEAD

const filesToCopy = ['manifest.json', 'README.md'];
for (const f of filesToCopy) {
  if (fs.existsSync(f)) fs.copyFileSync(f, path.join(dist, f));
}

if (fs.existsSync('src')) fs.cpSync('src', path.join(dist, 'src'), { recursive: true });
if (fs.existsSync('icons')) fs.cpSync('icons', path.join(dist, 'icons'), { recursive: true });


=======
// Copia os arquivos da extensão
for (const f of ['manifest.json']) fs.copyFileSync(f, path.join(dist, f));
fs.cpSync('src', path.join(dist, 'src'), { recursive: true });
fs.cpSync('icons', path.join(dist, 'icons'), { recursive: true });

// Cria o ZIP
>>>>>>> e9352a6 (update arquivos)
const output = fs.createWriteStream(path.join(dist, 'extension.zip'));
const archive = archiver('zip', { zlib: { level: 9 } });
archive.directory(dist, false);
archive.pipe(output);
await archive.finalize();
console.log('✅ Build gerado em dist/extension.zip');
