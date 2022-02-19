module.exports = {
    app: {
        px: ':',
        token: 'OTM5NTE2MTQ2MTYyNDcwOTMz.Yf5-mA.5wWQwmKxwg-80hGms6Nya4vQ6MI',
        playing: 'HD MUSIC'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
