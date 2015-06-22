describe('Chats service', () => {

  beforeEach(module('starter.chats.service'));

  it('should exist', inject((Chats) => {
    expect(Chats).toBeDefined()
  }))

});