import { simpleGit } from 'simple-git';
import type { SimpleGit, SimpleGitOptions } from 'simple-git';
import type { DevtoolsServerContext, ServerFunctions } from '../types'

export function setupGitRPC({ nuxt }: DevtoolsServerContext): any {

  const options: Partial<SimpleGitOptions> = {
    baseDir: nuxt.options.rootDir,
    binary: 'git',
    maxConcurrentProcesses: 6,
    trimmed: false,
 }

  const git: SimpleGit = simpleGit(options)
  git.cwd({
    path: nuxt.options.rootDir,
    root: true,
  })

  return {
  } satisfies Partial<ServerFunctions>
}
