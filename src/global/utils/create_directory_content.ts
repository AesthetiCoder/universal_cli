import { formatBytes } from '@global/utils/format_bytes';
import { render } from '@global/utils/render';
import { createFileMessage } from '@global/utils/text';
import fs from 'fs';
import path from 'path';

const createFolder = (folderPath: string): boolean =>
{
  if(fs.existsSync(folderPath))
  {
    return false;
  }
  fs.mkdirSync(folderPath);

  return true;
};

const createProjectDirectoryContent = (projectName: string, templatePath: string): void =>
{
  const CURRENT_DIR = process.cwd();
  const filesToCreate = fs.readdirSync(templatePath);

  filesToCreate.forEach((file) =>
  {
    const origFilePath = path.join(templatePath, file);
    const stats = fs.statSync(origFilePath);

    if(stats.isFile())
    {
      let contents = fs.readFileSync(origFilePath, 'utf8');
      const writePath = path.join(CURRENT_DIR, projectName, file);

      contents = render(contents, { projectName });
      fs.writeFileSync(writePath, contents, 'utf8');

      createFileMessage(path.join(projectName, file), formatBytes(stats.size));
    }
    else if(stats.isDirectory())
    {
      fs.mkdirSync(path.join(CURRENT_DIR, projectName, file));
      createProjectDirectoryContent(path.join(projectName, file), path.join(templatePath, file));
    }
  });
};

const createFeatureDirectoryContent = (featureName: string, featurePath: string) =>
{
  const CURRENT_DIR = process.cwd();
  const filesToCreate = fs.readdirSync(featurePath);

  filesToCreate.forEach((file) =>
  {
    const origFilePath = path.join(featurePath, file);
    const stats = fs.statSync(origFilePath);

    if(stats.isFile())
    {
      const contents = fs.readFileSync(origFilePath, 'utf8');
      const writePath = path.join(CURRENT_DIR, file);

      fs.writeFileSync(writePath, contents, 'utf8');
    }
    else if(stats.isDirectory())
    {
      fs.mkdirSync(path.join(CURRENT_DIR, featureName, file));
      createProjectDirectoryContent(path.join(featureName, file), path.join(featurePath, file));
    }
  });
};

export {
  createFolder,
  createProjectDirectoryContent,
  createFeatureDirectoryContent
};