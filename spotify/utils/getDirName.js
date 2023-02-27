import path from 'path';
import { fileURLToPath } from 'url';

function getDirName(metaUrl) {
  const filename = fileURLToPath(new URL(metaUrl, import.meta.url));
  const dirname = path.dirname(filename);
  return dirname;
}

export default getDirName;
