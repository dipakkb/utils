buildFormData = (fdName, filename, contentType, content) => {
    let body = [];
    const boundary = 'blob';
    body.push(
        `--${boundary}`,
        `content-disposition: form-data; name=${fdName}; filename=${filename}`,
        `Content-Type: ${contentType}`,
        '',
        content.toString('ascii', 0, content.length),
        `--${boundary}--`
    );
    body = body.join('\r\n');

    return {
        headerContentType: `multipart/form-data; boundary=${boundary}`,
        body
    };
}

module.exports = { buildFormData };

/*
import fs from 'fs';
const content = fs.readFileSync('./star.png');
buildFormData('image', 'star.png', 'image/png', content);
*/

