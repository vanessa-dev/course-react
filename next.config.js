/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa')({
    dest: 'public'
})

const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
    // next.js config
    pwa: {
        dest: 'public',
        disable: !isProd
    }
})
