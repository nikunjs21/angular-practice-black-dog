import { HumanReadableRatePipe } from './human-readable-rate.pipe';

describe('HumanReadableRatePipe', () => {
  it('create an instance', () => {
    const pipe = new HumanReadableRatePipe();
    expect(pipe).toBeTruthy();
  });
});
