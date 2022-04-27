import { CreatorNamePipe } from './creator-name.pipe';

describe('CreatorNamePipe', () => {
  const pipe = new CreatorNamePipe();

  it('should return "You" if creator name is "Ivan"', () => {
    const name = "Ivan";
    expect(pipe.transform(name)).toBe('You');
  });

  it('should return creator name if creator name is not "Ivan"', () => {
    const name = "AnyOtherName";
    expect(pipe.transform(name)).toBe(name);
  });

});
