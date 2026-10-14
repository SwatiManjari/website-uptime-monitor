const express = require('express');

const app = express();


app.use(express.static('public'));

app.get('/', (req, res) => {
res.send('Website Uptime Monitor is running!');
});

app.get('/check', async (req, res) => {
const url = req.query.url;


if (!url) {
    return res.status(400).json({
        error: 'Please provide a website URL.'
    });
}

let parsedUrl;

try {
    parsedUrl = new URL(url);
} catch {
    return res.status(400).json({
        error: 'Invalid URL.'
    });
}

if (!['http:', 'https:'].includes(parsedUrl.protocol)) {
    return res.status(400).json({
        error: 'Only HTTP and HTTPS URLs are supported.'
    });
}

const startTime = Date.now();

try {
    const response = await fetch(parsedUrl, {
        signal: AbortSignal.timeout(5000)
    });

    const responseTime = Date.now() - startTime;

    res.json({
        url: parsedUrl.href,
        reachable: true,
        status: response.status,
        responseTime: `${responseTime} ms`
    });
} catch (error) {
    const responseTime = Date.now() - startTime;

    res.json({
        url: parsedUrl.href,
        reachable: false,
        responseTime: `${responseTime} ms`,
        error: error.name === 'TimeoutError'
            ? 'Request timed out.'
            : 'Could not reach the website.'
    });
}

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
console.log(`Website Uptime Monitor is running on port ${PORT}`);
});
