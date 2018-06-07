import { BubbleChatModule } from './bubble-chat.module';

describe('BubbleChatModule', () => {
  let bubbleChatModule: BubbleChatModule;

  beforeEach(() => {
    bubbleChatModule = new BubbleChatModule();
  });

  it('should create an instance', () => {
    expect(bubbleChatModule).toBeTruthy();
  });
});
