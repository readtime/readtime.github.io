document.addEventListener('DOMContentLoaded', () => {
    let enZ0;
    let cmwr = [],
        Byss = [];
    let cHss, dxss, eess, Fhss, Gdss, hlss, J5ss, k6ss, R7ss, Szss, Toss, Vjss, Xass, FJId = false, Y1ss;

    const ases = [
        0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9,
        1.0, 1.05, 1.10, 1.15, 1.20, 1.25, 1.30, 1.35, 1.40, 1.45,
        1.50, 1.55, 1.60, 1.65, 1.70, 1.75, 1.80
    ];

    const hlsss = { point: 0.05, comma: 0.02 };
    const abfs = '!@#$%^&*()_+-=[]{};\'\":|<>?/`~§±';
    const we9C = `Welcome to Readtime©,

This introduction only takes you 00:00:00:00 seconds to read:

Readtime is the only tool to help you calculate the time it takes to read your text out loud. This is ideal if you are working on a time set script, or writing the text for a big presentation. This program normally uses the average read speed, but you can also adjust the speed to your personal liking.

To change the read speed to your personal liking, time your personal speed by reading this text. You can use the build-in stopwatch if you like. Then adjust the slider to match your personal time.`;

    function init() {
        Xass = 0.25;

        const clockElement = document.getElementById('clock1');
        // Initialize the stopwatch (assuming a stopwatch function exists)
        if (clockElement) {
            stopwatch(clockElement);
        }

        //document.querySelector('.normal #input')?.innerText = we9C;
        

        const inputElement = document.getElementById('input');
        if (inputElement) {
            inputElement.addEventListener('keyup', () => readWords(false));
            // Assuming autoResize is a utility function to adjust textarea size
            autoResize(inputElement, { maxHeight: 10000000, extraSize: 10 });
        }

        setupEventListeners();
        initSlider();
        readWords(true);
    }

    function setupEventListeners() {
        const overlaySelectors = {
            '.questionmark': '#linkToText',
            '.linkToText': '#linkToText',
            '.open-contact': '#contact',
            '.open-stopwatch': getStopwatch,
            '.gethelp': '#help',
        };

        Object.entries(overlaySelectors).forEach(([trigger, target]) => {
            document.querySelectorAll(trigger).forEach(el => {
                el.addEventListener('click', () => {
                    typeof target === 'function' ? target() : getOverlay(target);
                });
            });
        });

        document.getElementById('mask')?.addEventListener('click', closeAllOverlays);
        document.querySelectorAll('.close').forEach(el => el.addEventListener('click', closeAllOverlays));
        window.addEventListener('keyup', (event) => {
            if (event.key === 'Escape' || event.key.toLowerCase() === 'x') closeAllOverlays();
        });

        document.getElementById('addbreak')?.addEventListener('click', addBreak);

        document.querySelectorAll('.clear').forEach(el => el.addEventListener('click', clearText));
        document.querySelectorAll('.restore').forEach(el => el.addEventListener('click', restoreText));
        document.querySelectorAll('.click-to-select').forEach(el => el.addEventListener('click', select));

        // Hide elements
        //document.getElementById('trace')?.style.display = 'none';
        document.getElementById('helpimg')?.remove();
    }

    function initSlider() {
        const slider = document.getElementById('slider');
        if (slider) {
            slider.addEventListener('input', (event) => {
                enZ0 = parseFloat(event.target.value);
                document.querySelector('.slidervalue').innerText = enZ0;
                document.getElementById('slidervalue-input').value = enZ0;
                readWords(false);
            });

            enZ0 = parseFloat(slider.value);
            trace(`Slider initialized with value: ${enZ0}`);
        }
    }

    function readWords(isFromInit) {
        console.log('readWords', isFromInit, FJId);
        cHss = (cHss || 0) + 1;

        Byss = [];
        cmwr = [];
        dxss = 0;
        eess = 0;
        Gdss = 0;
        k6ss = 0;
        R7ss = 0;

        const inputElement = document.getElementById('input');
        if (!inputElement) return;

        Fhss = htmlEncode(inputElement.value || '');

        if (Fhss.length) {
            extractSpecialCharacters();
            extractBreaks();
            extractPoints();
            extractCommas();

            Byss = Fhss.split(" ").filter(Boolean);
            cmwr = Byss.map(word => word.length);
            convertWordsToReadTime(cmwr);
        } else {
            document.getElementById('output').innerText = '00:00:00:0';
            document.getElementById('milisecs').innerText = '';
        }
    }

    // Other utility functions go here

    function trace(msg) {
        console.log(msg);
    }

    function htmlEncode(str) {
        const div = document.createElement('div');
        div.innerText = str;
        return div.innerHTML;
    }

    // Start initialization
    init();
});
