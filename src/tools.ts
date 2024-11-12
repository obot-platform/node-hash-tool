import { hash } from './hash.ts'

if (process.argv.length !== 3) {
    console.error('Usage: node tool.ts <command>')
    process.exit(1)
}

const cmd = process.argv[2]
try {
    switch (cmd) {
        case 'hash':
            console.log(hash(process.env.DATA, process.env.ALGO))
            break
        default:
            console.log(`Unknown command: ${cmd}`)
            process.exit(1)
    }

} catch (error) {
    // Print the error to stdout so that it can be captured by the GPTScript
    console.log(`${error}`)
    process.exit(1)
}
