
import { remote } from '../../../src'

describe('previous sibling test', () => {
    it('should return previous sibling of an element', async () => {
        const browser = await remote({
            capabilities: {
                browserName: 'foobar'
            }
        })
        const elem = await browser.$('#foo')
        const previousEl = await elem.prev()

        expect(previousEl.elementId).toBe('some-previous-elem')
    })
})