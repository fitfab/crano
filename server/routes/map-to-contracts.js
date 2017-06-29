import fs from 'fs'
import path from 'path'

// NOTE:    Be aware of the current working directory bia process.cwd()
//          console.log('directory: ', directory, process.cwd())

console.log('__dirname: ',__dirname)
const directory = path.normalize('../api-contract/pacts')
const pactContracts = {};

// Loop through the files in the pacts folder
fs.readdir(directory, (err, files) => {

    if(err) {
        throw(err)
    }

    files.map(file => {

        // Read each contract and the content ot the url
        fs.readFile(path.join(directory, file), 'utf8', (err, data) => {

            let content

            if (err) {
                throw(err)
            }

            content = JSON.parse(data)

            // Loop through each interactions in the contracts
            content.interactions.forEach( interaction => {

                if(pactContracts[interaction.request.path]) {
                    return
                }

                pactContracts[interaction.request.path] = interaction.response

            })
        })
    })
})

export default pactContracts;
