import chai, { expect } from 'chai';
import Pact from 'pact';
import chaiAsPromised from 'chai-as-promised';

// helper meethods to grab the expected data
// the file we expect from provider.
import Fixtures from '../mocks';
import { mockProvider, fetchIt, saveIt } from '../lib/helper';

chai.use(chaiAsPromised);


const Matchers = Pact.Matchers

describe('Integration', () => {

  ['http', 'https'].forEach((PROTOCOL) => {

      describe(`Pact on ${PROTOCOL} protocol`, (protocol) => {

        const MOCK_PORT = Math.floor(Math.random() * 999) + 9000
        const PROVIDER_URL = `${PROTOCOL}://localhost:${MOCK_PORT}`

        const provider = mockProvider({
            consumer: 'Matching User',
            provider: 'User Service',
            port : MOCK_PORT,
            PROTOCOL
        })

        const EXPECTED_BODY = Fixtures('users');
        const EXPECTED_BODY_POST = Fixtures('users.post')

        let counter = 1

        before(provider.setup)

        // once all tests are run, write pact and remove interactions
        after(() => provider.finalize())

      context('A single request for users', () => {

        // add interactions, as many as needed
        before((done) => {
          provider.addInteraction({
            state: 'I have a list of users',
            uponReceiving: 'a request for users',
            withRequest: {
              method: 'get',
              path: '/api/users',
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
          fetchIt(`${PROVIDER_URL}/api/users`)
            .then((res) => {
              expect(res.text).to.eql(JSON.stringify(EXPECTED_BODY))
            })
            .then(done)
        })

        // verify with Pact, and reset expectations
        it('successfully verifies', () => provider.verify())
      })

      context('A single request for usesrs with query string parameters', () => {

        // add interactions, as many as needed
        before((done) => {
          provider.addInteraction({
            state: 'I have a list of Users',
            uponReceiving: 'a request for users with a filter for city',
            withRequest: {
              method: 'get',
              path: '/api/users',
              query: { city: 'Brooklyn' },
              headers: { 'Accept': 'application/json' }
            },
            willRespondWith: {
              status: 200,
              headers: { 'Content-Type': 'application/json' },
              body: EXPECTED_BODY[0]
            }
          })
          .then(() => done())
        })

        // execute your assertions
        it('returns the correct body', (done) => {
          fetchIt(`${PROVIDER_URL}/api/users?city=Brooklyn`)
            .then((res) => {
              expect(res.text).to.eql(JSON.stringify(EXPECTED_BODY[0]))
            })
            .then(done)
        })

        // verify with Pact, and reset expectations
        it('successfully verifies', () => provider.verify())
      })

    //   context('A post for s single user', () => {
      //
    //     // add interactions, as many as needed
    //     before((done) => {
    //       provider.addInteraction({
    //         state: 'I have a list of Users',
    //         uponReceiving: 'a post for a user',
    //         withRequest: {
    //           method: 'post',
    //           path: '/api/users',
    //           body: {EXPECTED_BODY_POST},
    //           headers: { 'Accept': 'application/json' }
    //         },
    //         willRespondWith: {
    //           status: 200,
    //           headers: { 'Content-Type': 'application/json' },
    //           body: EXPECTED_BODY_POST
    //         }
    //       })
    //       .then(() => done())
    //     })
      //
    //     // execute your assertions
    //     it('returns the correct body', (done) => {
    //       saveIt(`${PROVIDER_URL}/api/users`)
    //         .then((res) => {
    //             console.log('Reponse-------------------::::::')
    //             console.log(res);
    //             console.log(EXPECTED_BODY_POST)
      //
    //           expect(res.text).to.eql(JSON.stringify(EXPECTED_BODY_POST))
    //         })
    //         .then(done)
    //     })
      //
    //     // verify with Pact, and reset expectations
    //     it('successfully verifies', () => provider.verify())
    //   })


    })
  })
})
