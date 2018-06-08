import { NotAccessModule } from './not-access.module';

describe('NotAccessModule', () => {
  let notAccessModule: NotAccessModule;

  beforeEach(() => {
    notAccessModule = new NotAccessModule();
  });

  it('should create an instance', () => {
    expect(notAccessModule).toBeTruthy();
  });
});
