let messageSecret = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

messageSecret.pop();

messageSecret.push('to', 'Program');

messageSecret[messageSecret.indexOf('easily')] = 'right';

messageSecret.shift();

messageSecret.unshift('Programming');

messageSecret.splice(6, 5, 'know,');

console.log(messageSecret.join(' '));