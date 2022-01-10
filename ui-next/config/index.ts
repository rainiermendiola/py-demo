const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'http://localhost:5000' : 'https://py-demo-api.azurewebsites.net'