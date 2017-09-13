import { PlainTextPipe } from './plain-text.pipe';

describe('PlainTextPipe', () => {
  it('create an instance', () => {
    const pipe = new PlainTextPipe();
    expect(pipe).toBeTruthy();
  });
});
