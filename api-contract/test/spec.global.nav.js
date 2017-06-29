import chai, { expect } from 'chai';
import Pact from 'pact';
import chaiAsPromised from 'chai-as-promised';
import request from 'superagent';

// helper meethods to grab the expected data
// the file we expect from provider.
import Fixtures from '../mocks';
import { mockProvider, fetchIt } from '../lib/helper';

chai.use(chaiAsPromised);


const Matchers = Pact.Matchers

describe('Integration', () => {

  ['http', 'https'].forEach((PROTOCOL) => {

      describe(`Pact on ${PROTOCOL} protocol`, (protocol) => {

        const MOCK_PORT = Math.floor(Math.random() * 999) + 9000
        const PROVIDER_URL = `${PROTOCOL}://localhost:${MOCK_PORT}`

        const provider = mockProvider({
            consumer: 'Matching Navigation',
            provider: 'Global Navigation Service',
            port : MOCK_PORT,
            PROTOCOL
        })

        const EXPECTED_BODY = Fixtures('global.nav');

        let counter = 1

        before(provider.setup)

        // once all tests are run, write pact and remove interactions
        after(() => provider.finalize())

      context('with a single request', () => {

        // add interactions, as many as needed
        before((done) => {
          provider.addInteraction({
            state: 'I have a list of global Navigation',
            uponReceiving: 'a request for Navigation',
            withRequest: {
              method: 'get',
              path: '/api/global/navigation',
              headers: { 'Accept': 'application/json' }
            },
            willRespondWith: {
              status: 200,
              headers: { 'Content-Type': 'application/json' },
              body: EXPECTED_BODY
            }
          })
          .then(() => done())
        })

        // execute your assertions
        it('returns the correct body', (done) => {
          fetchIt(`${PROVIDER_URL}/api/global/navigation`)
            .then((res) => {
              expect(res.text).to.eql(JSON.stringify(EXPECTED_BODY))
            })
            .then(done)
        })

        // verify with Pact, and reset expectations
        it('successfully verifies', () => provider.verify())
      })

      context('with a single request with query string parameters', () => {

        // add interactions, as many as needed
        before((done) => {
          provider.addInteraction({
            state: 'I have a list of navigation',
            uponReceiving: 'a request for navigation with a filter',
            withRequest: {
              method: 'get',
              path: '/api/global/navigation',
              query: { from: 'today' },
              headers: { 'Accept': 'application/json' }
            },
            willRespondWith: {
              status: 200,
              headers: { 'Content-Type': 'application/json' },
              body: EXPECTED_BODY
            }
          })
          .then(() => done())
        })

        // execute your assertions
        it('returns the correct body', (done) => {
          fetchIt(`${PROVIDER_URL}/api/global/navigation?from=today`)
            .then((res) => {
              expect(res.text).to.eql(JSON.stringify(EXPECTED_BODY))
            })
            .then(done)
        })

        // verify with Pact, and reset expectations
        it('successfully verifies', () => provider.verify())
      })



      context('with two requests', () => {

        before((done) => {
          let interaction1 = provider.addInteraction({
            state: 'I have a list of Navigation',
            uponReceiving: 'a request for Navigation',
            withRequest: {
              method: 'get',
              path: '/api/global/navigation',
              headers: { 'Accept': 'application/json' }
            },
            willRespondWith: {
              status: 200,
              headers: { 'Content-Type': 'application/json' },
              body: EXPECTED_BODY
            }
          })

          let interaction2 = provider.addInteraction({
            state: 'I have a list of Navigation',
            uponReceiving: 'a request for a navigation that does not exist',
            withRequest: {
              method: 'get',
              path: '/api/global/navigation/2',
              headers: { 'Accept': 'application/json' }
            },
            willRespondWith: {
              status: 404,
              headers: { 'Content-Type': 'application/json' }
            }
          })

          Promise.all([interaction1, interaction2]).then(() => done())
        })

        it('allows two requests', (done) => {
          const verificationPromise = fetchIt(`${PROVIDER_URL}/api/global/navigation`)
              .then((res) => {
                return res.text
              })
          expect(verificationPromise).to.eventually.eql(JSON.stringify(EXPECTED_BODY)).notify(done)

          const verificationPromise404 = fetchIt(`${PROVIDER_URL}/api/global/navigation/2`)
          expect(verificationPromise404).to.eventually.be.rejected
        })

        // verify with Pact, and reset expectations
        it('successfully verifies', () => provider.verify())
      })

    })
  })
})
