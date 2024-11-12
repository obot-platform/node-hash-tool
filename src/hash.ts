import { createHash } from 'node:crypto';

const SUPPORTED_ALGORITHMS = ['sha256', 'md5'];

export function hash(data: string = '', algo = 'sha256'): string {
  if (data === '') {
    throw new Error("A non-empty data argument must be provided");
  }

  if (!SUPPORTED_ALGORITHMS.includes(algo)) {
    throw new Error(`Unsupported hash algorithm ${algo} not in [${SUPPORTED_ALGORITHMS.join(', ')}]`);
  }

  return JSON.stringify({
    algo,
    hash: createHash(algo).update(data).digest('hex'),
  });
}