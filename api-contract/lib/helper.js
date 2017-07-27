import Pact from 'pact';
import path from 'path';
import request from 'superagent';

const headers = { 'Accept': 'application/json'};


export const fetchIt = (url) => {
    return request.get(url).set(headers)
}

export const saveIt = (url) => {
    return request.post(url).set(headers)
}

export const mockProvider = ({port, consumer, provider, PROTOCOL}) => {
        const _provider = Pact({
            consumer,
            provider,
            port,
            log: path.resolve(process.cwd(), 'logs', 'mockserver-ui.log'),
            dir: path.resolve(process.cwd(), 'pacts'),
            logLevel: 'INFO',
            ssl: (PROTOCOL === 'https'),
            spec: 2
        });

        return _provider;
}
