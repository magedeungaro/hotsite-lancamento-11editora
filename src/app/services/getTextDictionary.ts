import yaml from 'js-yaml';
import fs from 'fs';
import path from 'path';

export const getTextDictionary = (): Record<string, Record<string, string>> => {
  const directoryPath = process.env.YAML_DIRECTORY_PATH;
  if (!directoryPath) throw new Error('Directory path is not provided');
  
  const files = fs.readdirSync(directoryPath);
  const texts: Record<string, Record<string, string>> = {};

  files.forEach((file) => {
    const filePath = path.join(directoryPath, file);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const content = yaml.load(fileContents) as Record<string, string>;
    const fileName = path.parse(file).name;
    texts[fileName] = content;
  });

  return texts;
};