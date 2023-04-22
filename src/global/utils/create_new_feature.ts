import path from 'path';
import fs from 'fs';
import { promptCheckList } from '@global/lib/prompt';
import { createFeatureDirectoryContent } from '@global/utils/create_directory_content';

/**
 * TODO: Validate file or feature already exits
 */

const createNewFeature = async () =>
{
  const CHOICES_FEATURES = fs.readdirSync(`${path.dirname('')}/src/global/features`);

  const featureType = await promptCheckList(CHOICES_FEATURES, 'What feature do you want to add ?');
  const featurePath = featureType.map((type) => path.join(path.dirname(''), '/src/global/features/', type));

  for (let i = 0; i < featureType.length; i += 1)
  {
    createFeatureDirectoryContent(featureType[i] || '', featurePath[i] || '');
  }
};

export {
  createNewFeature
};