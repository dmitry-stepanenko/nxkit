import {
  generateFiles,
  joinPathFragments,
  names,
  offsetFromRoot,
  Tree,
} from '@nrwl/devkit';
import { getRelativePathToRootTsConfig } from '@nrwl/workspace/src/utilities/typescript';
import * as path from 'path';
import { NormalizedLibraryGeneratorSchema } from '../schema';

export function addProjectFiles(
  tree: Tree,
  options: NormalizedLibraryGeneratorSchema
) {
  const { projectRoot, preset } = options;
  const templateOptions = {
    ...options,
    ...names(options.name),
    offsetFromRoot: offsetFromRoot(projectRoot),
    rootTsConfigPath: getRelativePathToRootTsConfig(tree, projectRoot),
    outputPath: joinPathFragments('dist', projectRoot),
    template: '',
  };

  generateFiles(
    tree,
    path.join(__dirname, `../files/common`),
    options.projectRoot,
    templateOptions
  );

  generateFiles(
    tree,
    path.join(__dirname, `../files/presets/${preset}`),
    options.projectRoot,
    templateOptions
  );
}
