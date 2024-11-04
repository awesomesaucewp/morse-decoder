'use strict';

const baseCharacters = {
    '1': {
        'A': '01', 'B': '1000', 'C': '1010', 'D': '100', 'E': '0', 'F': '0010',
        'G': '110', 'H': '0000', 'I': '00', 'J': '0111', 'K': '101', 'L': '0100',
        'M': '11', 'N': '10', 'O': '111', 'P': '0110', 'Q': '1101', 'R': '010',
        'S': '000', 'T': '1', 'U': '001', 'V': '0001', 'W': '011', 'X': '1001',
        'Y': '1011', 'Z': '1100'
    },
    '2': {
        '0': '11111', '1': '01111', '2': '00111', '3': '00011', '4': '00001',
        '5': '00000', '6': '10000', '7': '11000', '8': '11100', '9': '11110'
    },
    '3': {
        '.': '010101', ',': '110011', '?': '001100', '\'': '011110', '!': '101011', '/': '10010',
        '(': '10110', ')': '101101', '&': '01000', ':': '111000', ';': '101010', '=': '10001',
        '+': '01010', '-': '100001', '_': '001101', '"': '010010', '$': '0001001', '@': '011010',
        'Â¿': '00101', 'Â¡': '110001'
    },
    '4': {
        'Ãƒ': '01101', 'Ã': '01101', 'Ã…': '01101', 'Ã€': '01101', 'Ã‚': '01101', 'Ã„': '0101',
        'Ä„': '0101', 'Ã†': '0101', 'Ã‡': '10100', 'Ä†': '10100', 'Äˆ': '10100', 'ÄŒ': '110',
        'Ã': '00110', 'Ãˆ': '01001', 'Ä˜': '00100', 'Ã‹': '00100', 'Ã‰': '00100',
        'ÃŠ': '10010', 'Äž': '11010', 'Äœ': '11010', 'Ä¤': '1111', 'Ä°': '01001', 'Ã': '10011',
        'ÃŒ': '01110', 'Ä´': '01110', 'Å': '01001', 'Åƒ': '11011', 'Ã‘': '11011', 'Ã“': '1110',
        'Ã’': '1110', 'Ã–': '1110', 'Ã”': '1110', 'Ã˜': '1110', 'Åš': '0001000', 'Åž': '01100',
        'È˜': '1111', 'Å ': '1111', 'Åœ': '00010', 'ÃŸ': '000000', 'Ãž': '01100', 'Ãœ': '0011',
        'Ã™': '0011', 'Å¬': '0011', 'Å½': '11001', 'Å¹': '110010', 'Å»': '11001'
    },
    '5': {
        'Ð': '01', 'Ð‘': '1000', 'Ð’': '011', 'Ð“': '110', 'Ð”': '100', 'Ð•': '0',
        'Ð–': '0001', 'Ð—': '1100', 'Ð˜': '00', 'Ð™': '0111', 'Ðš': '101', 'Ð›': '0100',
        'Ðœ': '11', 'Ð': '10', 'Ðž': '111', 'ÐŸ': '0110', 'Ð ': '010', 'Ð¡': '000',
        'Ð¢': '1', 'Ð£': '001', 'Ð¤': '0010', 'Ð¥': '0000', 'Ð¦': '1010', 'Ð§': '1110',
        'Ð¨': '1111', 'Ð©': '1101', 'Ðª': '11011', 'Ð«': '1011', 'Ð¬': '1001', 'Ð­': '00100',
        'Ð®': '0011', 'Ð¯': '0101', 'Ð‡': '01110', 'Ð„': '00100', 'Ð†': '00', 'Ò': '110'
    },
    '6': {
        'Î‘': '01', 'Î’': '1000', 'Î“': '110', 'Î”': '100', 'Î•': '0', 'Î–': '1100',
        'Î—': '0000', 'Î˜': '1010', 'Î™': '00', 'Îš': '101', 'Î›': '0100', 'Îœ': '11',
        'Î': '10', 'Îž': '1001', 'ÎŸ': '111', 'Î ': '0110', 'Î¡': '010', 'Î£': '000',
        'Î¤': '1', 'Î¥': '1011', 'Î¦': '0010', 'Î§': '1111', 'Î¨': '1101', 'Î©': '011'
    },
    '7': {
        '×': '01', '×‘': '1000', '×’': '110', '×“': '100', '×”': '111', '×•': '0',
        '×–': '1100', '×—': '0000', '×˜': '001', '×™': '00', '×›': '101', '×œ': '0100',
        '×ž': '11', '× ': '10', '×¡': '1010', '×¢': '0111', '×¤': '0110', '×¦': '011',
        '×§': '1101', '×¨': '010', '×©': '000', '×ª': '1'
    },
    '8': {
        'Ø§': '01', 'Ø¨': '1000', 'Øª': '1', 'Ø«': '1010', 'Ø¬': '0111', 'Ø­': '0000',
        'Ø®': '111', 'Ø¯': '100', 'Ø°': '1100', 'Ø±': '010', 'Ø²': '1110', 'Ø³': '000',
        'Ø´': '1111', 'Øµ': '1001', 'Ø¶': '0001', 'Ø·': '001', 'Ø¸': '1011', 'Ø¹': '0101',
        'Øº': '110', 'Ù': '0010', 'Ù‚': '1101', 'Ùƒ': '101', 'Ù„': '0100', 'Ù…': '11',
        'Ù†': '10', 'Ù‡': '00100', 'Ùˆ': '011', 'ÙŠ': '00', 'ïº€': '0'
    },
    '9': {
        'Ø§': '01', 'Ø¨': '1000', 'Ù¾': '0110', 'Øª': '1', 'Ø«': '1010', 'Ø¬': '0111',
        'Ú†': '1110', 'Ø­': '0000', 'Ø®': '1001', 'Ø¯': '100', 'Ø°': '0001', 'Ø±': '010',
        'Ø²': '1100', 'Ú˜': '110', 'Ø³': '000', 'Ø´': '1111', 'Øµ': '0101', 'Ø¶': '00100',
        'Ø·': '001', 'Ø¸': '1011', 'Ø¹': '111', 'Øº': '0011', 'Ù': '0010', 'Ù‚': '111000',
        'Ú©': '101', 'Ú¯': '1101', 'Ù„': '0100', 'Ù…': '11', 'Ù†': '10', 'Ùˆ': '011',
        'Ù‡': '0', 'ÛŒ': '00'
    },
    '10': {
        'ã‚¢': '11011', 'ã‚«': '0100', 'ã‚µ': '10101', 'ã‚¿': '10', 'ãƒŠ': '010', 'ãƒ': '1000',
        'ãƒž': '1001', 'ãƒ¤': '011', 'ãƒ©': '000', 'ãƒ¯': '101', 'ã‚¤': '01', 'ã‚­': '10100',
        'ã‚·': '11010', 'ãƒ': '0010', 'ãƒ‹': '1010', 'ãƒ’': '11001', 'ãƒŸ': '00101', 'ãƒª': '110',
        'ãƒ°': '01001', 'ã‚¦': '001', 'ã‚¯': '0001', 'ã‚¹': '11101', 'ãƒ„': '0110', 'ãƒŒ': '0000',
        'ãƒ•': '1100', 'ãƒ ': '1', 'ãƒ¦': '10011', 'ãƒ«': '10110', 'ãƒ³': '01010', 'ã‚¨': '10111',
        'ã‚±': '1011', 'ã‚»': '01110', 'ãƒ†': '01011', 'ãƒ': '1101', 'ãƒ˜': '0', 'ãƒ¡': '10001',
        'ãƒ¬': '111', 'ãƒ±': '01100', 'ã‚ª': '01000', 'ã‚³': '1111', 'ã‚½': '1110', 'ãƒˆ': '00100',
        'ãƒŽ': '0011', 'ãƒ›': '100', 'ãƒ¢': '10010', 'ãƒ¨': '11', 'ãƒ­': '0101', 'ãƒ²': '0111',
        'ã‚›': '00', 'ã‚œ': '00110', 'ã€‚': '010100', 'ãƒ¼': '01101', 'ã€': '010101',
        'ï¼ˆ': '101101', 'ï¼‰': '010010'
    },
    '11': {
        'ã„±': '0100', 'ã„´': '0010', 'ã„·': '1000', 'ã„¹': '0001', 'ã…': '11', 'ã…‚': '011',
        'ã……': '110', 'ã…‡': '101', 'ã…ˆ': '0110', 'ã…Š': '1010', 'ã…‹': '1001', 'ã…Œ': '1100',
        'ã…': '111', 'ã…Ž': '0111', 'ã…': '0', 'ã…‘': '00', 'ã…“': '1', 'ã…•': '000',
        'ã…—': '01', 'ã…›': '10', 'ã…œ': '0000', 'ã… ': '010', 'ã…¡': '100', 'ã…£': '001',
        'ã…': '1101', 'ã…”': '1011'
    },
    '12': {
        'à¸': '110', 'à¸‚': '1010', 'à¸„': '101', 'à¸‡': '10110', 'à¸ˆ': '10010',
        'à¸‰': '1111', 'à¸Š': '1001', 'à¸‹': '1100', 'à¸': '0111', 'à¸”': '100',
        'à¸•': '1', 'à¸–': '10100', 'à¸—': '10011', 'à¸™': '10', 'à¸š': '1000',
        'à¸›': '0110', 'à¸œ': '1101', 'à¸': '10101', 'à¸ž': '01100', 'à¸Ÿ': '0010',
        'à¸¡': '11', 'à¸¢': '1011', 'à¸£': '010', 'à¸¥': '0100', 'à¸§': '011',
        'à¸ª': '000', 'à¸«': '0000', 'à¸­': '10001', 'à¸®': '11011', 'à¸¤': '01011',
        'à¸°': '01000', 'à¸²': '01', 'à¸´': '00100', 'à¸µ': '00', 'à¸¶': '00110',
        'à¸·': '0011', 'à¸¸': '00101', 'à¸¹': '1110', 'à¹€': '0', 'à¹': '0101',
        'à¹„': '01001', 'à¹‚': '111', 'à¸³': '00010', 'à¹ˆ': '001', 'à¹‰': '0001',
        'à¹Š': '11000', 'à¹‹': '01010', 'à¸±': '01101', 'à¹‡': '11100', 'à¹Œ': '11001',
        'à¹†': '10111', 'à¸¯': '11010'
    }
};
const getCharacters = (options) => (Object.assign(Object.assign({}, baseCharacters), { '0': baseCharacters[options.priority], '1': Object.assign(Object.assign({}, baseCharacters['1']), { [options.separator]: options.space }) }));
const getMappedCharacters = (options, usePriority) => {
    const mapped = {};
    const characters = getCharacters(options);
    for (const set in characters) {
        mapped[set] = {};
        for (const key in characters[set]) {
            mapped[set][key] = characters[set][key].replace(/0/g, options.dot).replace(/1/g, options.dash);
        }
    }
    if (!usePriority) {
        delete mapped['0'];
    }
    return mapped;
};
const swapCharacters = (options) => {
    const swapped = {};
    const mappedCharacters = getMappedCharacters(options, true);
    for (const set in mappedCharacters) {
        for (const key in mappedCharacters[set]) {
            if (typeof swapped[mappedCharacters[set][key]] === 'undefined') {
                swapped[mappedCharacters[set][key]] = key;
            }
        }
    }
    return swapped;
};

const getOptions = (opts = {}) => {
    var _a, _b, _c;
    const options = Object.assign(Object.assign({}, opts), { dash: opts.dash || '-', dot: opts.dot || '.', space: opts.space || '/', separator: opts.separator || ' ', invalid: opts.invalid || '#', priority: opts.priority || 1, wpm: opts.wpm, unit: opts.unit || 0.08, fwUnit: opts.fwUnit || opts.unit || 0.08, volume: opts.volume || 100, oscillator: Object.assign(Object.assign({}, opts.oscillator), { type: ((_a = opts.oscillator) === null || _a === void 0 ? void 0 : _a.type) || 'sine', frequency: ((_b = opts.oscillator) === null || _b === void 0 ? void 0 : _b.frequency) || 500, onended: ((_c = opts.oscillator) === null || _c === void 0 ? void 0 : _c.onended) || null // event that fires when the tone has stopped playing
        }) });
    return options;
};

const getGainTimings = (morse, opts, currentTime = 0) => {
    const timings = [];
    let { unit, fwUnit } = opts;
    let time = 0;
    if (opts.wpm) {
        // wpm mode uses standardised units
        unit = fwUnit = 60 / (opts.wpm * 50);
    }
    timings.push([0, time]);
    const tone = (i) => {
        timings.push([1 * (opts.volume / 100.0), currentTime + time]);
        time += i * unit;
    };
    const silence = (i) => {
        timings.push([0, currentTime + time]);
        time += i * unit;
    };
    const gap = (i) => {
        timings.push([0, currentTime + time]);
        time += i * fwUnit;
    };
    for (let i = 0, addSilence = false; i <= morse.length; i++) {
        if (morse[i] === opts.space) {
            gap(7);
            addSilence = false;
        }
        else if (morse[i] === opts.dot) {
            if (addSilence)
                silence(1);
            else
                addSilence = true;
            tone(1);
        }
        else if (morse[i] === opts.dash) {
            if (addSilence)
                silence(1);
            else
                addSilence = true;
            tone(3);
        }
        else if ((typeof morse[i + 1] !== 'undefined' && morse[i + 1] !== opts.space) &&
            (typeof morse[i - 1] !== 'undefined' && morse[i - 1] !== opts.space)) {
            gap(3);
            addSilence = false;
        }
    }
    return [timings, time];
};
// Source: https://github.com/mattdiamond/Recorderjs/blob/master/src/recorder.js#L155
const encodeWAV = (sampleRate, samples) => {
    const buffer = new ArrayBuffer(44 + samples.length * 2);
    const view = new DataView(buffer);
    const writeString = (view, offset, string) => {
        for (let i = 0; i < string.length; i++) {
            view.setUint8(offset + i, string.charCodeAt(i));
        }
    };
    // RIFF identifier
    writeString(view, 0, 'RIFF');
    // RIFF chunk length
    view.setUint32(4, 36 + samples.length * 2, true);
    // RIFF type
    writeString(view, 8, 'WAVE');
    // format chunk identifier
    writeString(view, 12, 'fmt ');
    // format chunk length
    view.setUint32(16, 16, true);
    // sample format (raw)
    view.setUint16(20, 1, true);
    // channel count
    view.setUint16(22, 1, true);
    // sample rate
    view.setUint32(24, sampleRate, true);
    // byte rate (sample rate * block align)
    view.setUint32(28, sampleRate * 4, true);
    // block align (channel count * bytes per sample)
    view.setUint16(32, 2, true);
    // bits per sample
    view.setUint16(34, 16, true);
    // data chunk identifier
    writeString(view, 36, 'data');
    // data chunk length
    view.setUint32(40, samples.length * 2, true);
    // to PCM
    const floatTo16BitPCM = (output, offset, input) => {
        for (let i = 0; i < input.length; i++, offset += 2) {
            const s = Math.max(-1, Math.min(1, input[i]));
            output.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
        }
    };
    floatTo16BitPCM(view, 44, samples);
    return view;
};
const audio = (morse, options) => {
    let AudioContextClass = window.AudioContext || window.webkitAudioContext;
    let OfflineAudioContextClass = window.OfflineAudioContext || window.webkitOfflineAudioContext;
    if (!AudioContextClass || !OfflineAudioContextClass) {
        throw new Error('Web Audio API is not supported in this browser');
    }
    const context = new AudioContextClass();
    const [gainValues, totalTime] = getGainTimings(morse, options);
    const offlineContext = new OfflineAudioContextClass(1, 44100 * totalTime, 44100);
    const oscillator = offlineContext.createOscillator();
    const gainNode = offlineContext.createGain();
    oscillator.type = options.oscillator.type;
    oscillator.frequency.value = options.oscillator.frequency;
    gainValues.forEach(([value, time]) => gainNode.gain.setValueAtTime(value, time));
    oscillator.connect(gainNode);
    gainNode.connect(offlineContext.destination);
    let source;
    // Render the audio buffer
    const render = new Promise((resolve, reject) => {
        oscillator.start(0);
        offlineContext.startRendering();
        offlineContext.oncomplete = (e) => {
            try {
                source = context.createBufferSource();
                source.buffer = e.renderedBuffer;
                source.connect(context.destination);
                source.onended = options.oscillator.onended;
                resolve();
            }
            catch (err) {
                reject(err);
            }
        };
        offlineContext.onerror = (err) => {
            reject(err);
        };
    });
    let timeout;
    const play = async () => {
        await render;
        if (context.state === 'suspended') {
            await context.resume();
        }
        source.start(context.currentTime);
        timeout = window.setTimeout(() => { stop(); }, totalTime * 1000);
    };
    const stop = () => {
        clearTimeout(timeout);
        if (source) {
            source.stop(0);
        }
    };
    const getWaveBlob = async () => {
        await render;
        const waveData = encodeWAV(offlineContext.sampleRate, source.buffer.getChannelData(0));
        return new Blob([waveData], { type: 'audio/wav' });
    };
    const getWaveUrl = async () => {
        const audioBlob = await getWaveBlob();
        return URL.createObjectURL(audioBlob);
    };
    const exportWave = async (filename) => {
        const waveUrl = await getWaveUrl();
        const anchor = document.createElement('a');
        anchor.href = waveUrl;
        anchor.target = '_blank';
        anchor.download = filename || 'morse.wav';
        anchor.click();
    };
    return {
        play,
        stop,
        getWaveBlob,
        getWaveUrl,
        exportWave,
        context,
        oscillator,
        gainNode
    };
};

(((name, root, factory) => {
    if (typeof exports === 'object') {
        module.exports = factory();
    }
    else if (typeof define === 'function' && define.amd) {
        define(factory);
    }
    else if (root !== undefined) {
        root[name] = factory();
    }
})('awesomesauce-morse-decoder', window, () => {
    const encode = (text, opts) => {
        const options = getOptions(opts);
        const characters = getCharacters(options);
        return [...text.replace(/\s+/g, options.separator).trim().toLocaleUpperCase()].map(function (character) {
            for (const set in characters) {
                if (typeof characters[set] !== 'undefined' && typeof characters[set][character] !== 'undefined') {
                    return characters[set][character];
                }
            }
            return options.invalid;
        }).join(options.separator).replace(/0/g, options.dot).replace(/1/g, options.dash);
    };
    const decode = (morse, opts) => {
        const options = getOptions(opts);
        const swapped = swapCharacters(options);
        return morse.replace(/\s+/g, options.separator).trim().split(options.separator).map(function (characters) {
            if (typeof swapped[characters] !== 'undefined') {
                return swapped[characters];
            }
            return options.invalid;
        }).join('');
    };
    const characters = (options, usePriority) => getMappedCharacters(getOptions(options), usePriority);
    const audio$1 = (text, opts, morseString) => {
        const morse = morseString || encode(text, opts);
        const options = getOptions(opts);
        return audio(morse, options);
    };
    return {
        characters,
        decode,
        encode,
        audio: audio$1
    };
}));
