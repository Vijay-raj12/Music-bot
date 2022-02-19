module.exports = {
    app: {
        px: 'music',
        token: 'OTM5NTE2MTQ2MTYyNDcwOTMz.Yf5-mA.tIUvJQVgUW7h3SFKk51CwN7h8EI
',
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
