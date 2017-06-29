import express from 'express'

import pactContracts from './map-to-contracts'

const router = express.Router()

router.get('*', (req, res) => {
    let status
    let response

    if(pactContracts[req.url]) {

        response = pactContracts[req.url]
        status = response.status
    } else {
        status = 404

        response = {
            status,
            "headers":{"Content-Type":"application/json"},
            "body": [{"message" : "There is no Pact Contract for this endpoint "+req.url}]
        }
    }

    res.status(status).json(response.body)
})

export default router
