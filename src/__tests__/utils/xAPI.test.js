import { sendStatement } from "@/utils/xapi/xAPIWrapper";
import xAPIMapper from "@/utils/xapi/xAPIMapper";

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

describe('xAPI', () => {
  it('should send xAPI Statement to LRS with proper arguments', () => {

    const spy = jest.spyOn(xAPIMapper, 'sendStatement')
      .mockImplementation(() => Promise.resolve({})
      );

    const actorObj = { 
      first_name: "John",
      last_name: "Doe",
    }
    const verbObj = {
      id: "http://example.com/verbs/searched",
      display: "searched"
    }
    
    const obj = {
      id: "http://example.com/search",
      definitionName: "Test Definition",
      description: "Test Description"
    }

    const resultExtName =  "https://example/result/extensions/searchTerm";
    const resultExtValue = "data";

    return sendStatement(actorObj, verbObj, obj, resultExtName, resultExtValue).then(() => {
      //Get the args passed to sendStatement
      const args = spy.mock.calls[0][0];
      const { actor, verb, object} = args.statement;

      expect(spy).toHaveBeenCalled();
      expect(actor.account.name).toBe('John Doe');

      expect(verb.id).toBe('http://example.com/verbs/searched');
      expect(object.id).toBe('http://example.com/search');

    });
  })
})
