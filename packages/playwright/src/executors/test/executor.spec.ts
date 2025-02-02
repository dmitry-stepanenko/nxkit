import { TestExecutorSchema } from './schema';

import executor from './executor';
import { PlaywrightCLI } from '../../utils/playwright';

jest.mock('../../utils/playwright');

const options: TestExecutorSchema = {
  playwrightConfig: 'mock-playqright.config.ts',
  outputPath: 'dist/apps/mock-project/test-results',
};

describe('Playwright Test Executor', () => {
  const mockContext = {
    root: '/root',
    workspace: { projects: {} },
    projectName: 'mock-project',
  } as any;

  it('can run', async () => {
    const output = await executor(options, mockContext);
    expect(PlaywrightCLI.test).toHaveBeenCalled();
    expect(output.success).toBe(true);
  });
});
