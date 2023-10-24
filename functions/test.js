// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async (event, context) => {
    try {
        return {
            statusCode: 200,
            body: JSON.stringify({
                name: 'Gillilo',
                age: 34,
                email: 'ghlwns1535@gmail.com'
            })
        }
    } catch (error) {
        return { statusCode: 500, body: error.toString() }
    }
}

module.exports = { handler }