import path from 'path';
import { fileURLToPath } from 'url';

function getDirName(metaUrl) {
  const filename = fileURLToPath(metaUrl);
  const dirname = path.dirname(filename);

  return dirname;
}

export default getDirName;
