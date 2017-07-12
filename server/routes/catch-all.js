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

router.post('/api/save', (req, res) => {
    let status = 200
    res.status(status).json(req.body)
})

export default router
