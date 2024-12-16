$(document).ready(function () {
    var enZ0,
        cmwr = Array(),
        Byss = Array(),
        cHss,
        dxss,
        eess,
        Fhss,
        Gdss,
        hlss,
        J5ss,
        k6ss,
        R7ss,
        Szss,
        Toss,
        Vjss,
        Xass,
        FJId = false,
        Y1ss;

    var ases = new Array(
        0,// 00 characters
        0.1,   // 01 characters
        0.2,// 02 characters
        0.3,// 03 characters
        0.4,// 04 characters
        0.5,// 05 characters
        0.6,// 06 characters
        0.7,// 07 characters
        0.8,// 08 characters
        0.9,// 09 characters
        1.0,// 10 characters
        1.05,// 11 characters
        1.10,// 12 characters
        1.15,// 13 characters
        1.20,// 14 characters
        1.25,// 15 characters
        1.30,// 16 characters
        1.35,// 17 characters
        1.40,// 18 characters
        1.45,// 19 characters
        1.50,// 20 characters
        1.55,// 21 characters
        1.60,// 22 characters
        1.65,// 23 characters
        1.70,// 24 characters
        1.75,// 25 characters
        1.80 // 26 characters
    );
    var hlsss = new Array();
    hlsss["point"] = .05;
    hlsss["comma"] = .02;

    var abfs = '!@#$%^&*()_+-=[]{};\'\:"|<>?/`~§±';

    var we9C = 'Welcome to Readtime©,\r\rThis introduction only takes you 00:00:00:00 seconds to read:\r\rReadtime is the only tool to help you calculate the time it takes to read your text out loud. This is ideal if you are working on a time set script, or writing the text for a big presentation. This program normally uses the average read speed, but you can also adjust the speed to your personal liking.\r\rTo change the read speed to your personal liking, time your personal speed by reading this text. You can use the build-in stopwatch if you like. Then adjust the slider to match your personal time.';

    init();

    function init() {
        // is substracted from the read speed. 1 is a nice figure to start with but the calculation needs to be 0.75 so we substract .25 from the slidervalue at calculation
        Xass = 0.25;

        // Initialize the stopwatch
        $('#clock1').stopwatch();

        $('.normal #input').text(we9C); // the .normal class isnt there when a saved text is loaded
        $('#input').on('keyup', readWords).autoResize({ maxHeight: 10000000, extraSize: 10 });

        //Overlays
        $('.questionmark').on('click', function () { getOverlay('#linkToText') });
        $('.linkToText').on('click', function () { getOverlay('#linkToText') });
        $('.open-contact').on('click', function () { getOverlay('#contact') });
        $('.open-stopwatch').on('click', function () { getStopwatch(); });
        /* $('.gethelp').on('click', function(){$('#help').show()}); */
        $('.gethelp').on('click', function () { getOverlay('#help') });
        $('#help').on('click', function () {/* $('#help').hide() */getOverlay('#help') });
        $('#mask').on('click', closeAllOverlays);
        $('.close').on('click', closeAllOverlays);
        $(window).on('keyup', function (event) { if (event.keyCode == 27 || event.keyCode == 88) { closeAllOverlays() } }); // Close overlays on keys 'esc' & 'x'

        // Add break
        $('#addbreak').on('click', addBreak);

        // Hide stuff
        $('#trace').hide();
        $('#helpimg').detach();

        // Clear\restore button
        $('.clear').on('click', clearText);
        $('.restore').on('click', restoreText);
        $('.restore').hide();

        /* $('#stopw').hide(); */
        $('.click-to-select').on('click', select);

        // Swap background images / ads
        Y1ss = 300;
        Vjss = 20000;
        Toss = 'leobakker';
        var x8xx = new Array(
            'leobakker1.jpg',
            'leobakker2.jpg',
            'leobakker3.jpg',
            'leobakker4.jpg',
            'leobakker5.jpg');
        var dAoc = 'https://web.archive.org/web/20240119213820/http://leobakker.nl';
        //switchImages(x8xx, dAoc);

        initSlider();
        readWords(true);

        // Replace the 00:00:00:0 in de result with the calculated time on load
        var r2tc = $('#input').html().replace('00:00:00:0', J5ss);
        $('#input').text(r2tc);
    }
    function initSlider() {
        $("#slider").slider({
            value: $(".slidervalue").html(),
            min: 0.5,
            max: 1.25,
            step: 0.05,
            animate: "fast",
            slide: function (event, ui) {
                readWords();
                $(".slidervalue").html(ui.value);
                $("#slidervalue-input").attr('value', ui.value);
                enZ0 = ui.value;
            }
        });
        enZ0 = $("#slider").slider("value");
        trace('ewfwef:' + enZ0);
    }

    //*
    function readWords(isFromInit) {     
        cHss += 1;
        // if (!isFromInit|| FJId) {
        //       document.querySelector('.linkTo.block.animate').removeAttribute('disabled');
        //     } else {
        // FJId = true;
        // }

        // Reset
        Byss = new Array();
        cmwr = new Array();
        dxss = 0;
        eess = 0;
        Gdss = 0;
        k6ss = 0;
        R7ss = 0;

        Fhss = $("#input").val();
        Fhss = htmlEncode(Fhss);
        var p0ec = Fhss.length;

        if (p0ec) {
            extractSpecialCharacters();
            extractBreaks();
            extractPoints();
            extractCommas();
            //trace(originalText);

            //trace("n/o breaks:" + numberOfBreaks + " / " + "breaktime: " + timeFromBreaks);

            Byss = Fhss.split(" ");
            clean(Byss);

            getWordLengths();
            convertWordsToReadTime(cmwr);
        }
        else {
            $('#output').text('00:00:00:0');
            $('#milisecs').text('');
        }
    }
    //*/
    function extractBreaks() {
        var p0ec = Fhss.length;

        var wief = Fhss.indexOf("[");
        var qcfg = Fhss.indexOf("]");

        if (wief >= 1) {
            if (qcfg - wief == 9) {
                var etwx = Fhss.substr(wief, 10);
                Fhss = Fhss.substr(0, wief) + Fhss.substring(wief + 10, p0ec);

                getBreakTime(etwx);
                extractBreaks(); // Run again so all breaks are extracted
            }
        }
    }
    function extractPoints() {
        var p0ec = Fhss.length;
        var wqe2 = Fhss.indexOf(".");

        if (wqe2 >= 1 && wqe2 != p0ec) // Dont count the point at the end.
        {
            Fhss = Fhss.substr(0, wqe2) + Fhss.substring(wqe2 + 1, p0ec);
            k6ss += 1;
            extractPoints(); // Run again so all points are extracted
        }
    }
    function extractCommas() {
        var p0ec = Fhss.length;

        var Ap3r = Fhss.indexOf(",");

        if (Ap3r >= 1) {
            Fhss = Fhss.substr(0, Ap3r) + Fhss.substring(Ap3r + 1, p0ec);
            R7ss += 1;
            extractCommas(); // Run again so all points are extracted
        }
    }
    function extractSpecialCharacters() {
        var PDfD = abfs.split("");
        for (wIdW in PDfD) {
            var w4eS = PDfD[wIdW];
            Fhss.replace(w4eS, 'WOOT');
        }
    }
    function getBreakTime(QFAp) {
        Gdss += 1
        var WEDM = QFAp.indexOf("[");
        var EKFw = QFAp.indexOf("]");
        var zuA3 = Number(QFAp.substr(WEDM + 7, 2));

        //trace("thisbreak: " + thisbreak);
        eess += zuA3;
    }
    function getWordLengths() {
        var p0ec = Byss.length;

        if (p0ec) {
            for (var i = 0; i < p0ec; i += 1) {
                cmwr.push(Byss[i].length);
            }
        }
    }
    // Calculates the time it takes to read a word
    function convertWordsToReadTime(QFAp) {
        var p0ec = QFAp.length;
        var pfvc = ases.length;

        for (var i = 0; i < p0ec; i++) {
            var cgdc = ases[QFAp[i]] ? ases[QFAp[i]] : 2;
            dxss += cgdc;
        }

        /* var enZ0= $( "#slider" ).slider( "option", "value" ); */
        trace('//////');
        trace('result: ' + dxss);
        trace('slider: ' + enZ0);
        trace('timefb: ' + eess);
        trace('specti: ' + timeFromSpecialCharacters());

        convertTime((dxss * (enZ0 - Xass)) + eess + timeFromSpecialCharacters());
    }
    function timeFromSpecialCharacters() {
        hlss = 0;

        hlss += k6ss * hlsss["point"];
        hlss += R7ss * hlsss["comma"];

        return hlss;
    }
    //*/
    function convertTime(dGw1) {
        var v12f = Math.floor(dGw1);

        var rPwo = Math.floor((dGw1 / 3600) / 24);
        var VQn8 = Math.floor(dGw1 / 3600);
        var fReP = Math.floor((dGw1 % 3600) / 60);
        var fSei = Math.floor((dGw1 % 3600) % 60);

        var pOo0 = String(Math.abs(v12f - dGw1));
        pOo0 = dGw1 - v12f;
        pOo0 = String(pOo0);
        pOo0 = pOo0.substring(3, 2);

        VQn8 = zeroPad(VQn8, 2) + ':';
        fReP = zeroPad(fReP, 2) + ':';
        fSei = zeroPad(fSei, 2) + ':';

        $("#output").html(VQn8 + fReP + fSei + '<span id="milisecs">' + pOo0 + '</span>');
        J5ss = (VQn8 + fReP + fSei + pOo0);
    }
    function isset(wNV4) {
        if (wNV4 != 0 && wNV4 != 'undefined' && wNV4 != null) { return true } else { return false }
    }
    function htmlEncode(ABss) {
        if (ABss) {
            return jQuery('<div/>').text(ABss).html();
        }
        else {
            return '';
        }
    }
    function zeroPad(eLfL, BCZ1) {
        var FrE0 = eLfL + '';
        while (FrE0.length < BCZ1) {
            FrE0 = "0" + FrE0;
        }
        return FrE0;
    }
    function addBreak() {
        var f9d0 = $('#breaktime').val();
        if (!f9d0) {
            $('#breaktime').val(1);
            f9d0 = 1;
        }
        f9d0 = f9d0 < 10 ? '0' + f9d0 : f9d0;

        var fSeielection = $('#input').getSelection();

        $('#input').insertText("[BREAK=" + f9d0 + "]", fSeielection.start, true);

        readWords();
    }
    function getStopwatch() {
        $('#stopw').toggleClass('visible');
    }
    function getOverlay(Dwv9) {
        $('#overlays').show();
        $('#help').hide();
        $(Dwv9).fadeIn('slow');
    }
    function closeAllOverlays() {
        $('#mask').show();
        $('#overlays').hide();
        $('.overlay').hide();
    }
    function clearText() {
        if ($('#input').val()) { Szss = $('#input').val(); }
        $('.restore').fadeIn();
        $('#input').val('');
    }
    function restoreText() {
        $('.restore').fadeOut();
        $('#input').val(Szss);
    }
    // Based on http://stackoverflow.com/questions/281264\remove-empty-elements-from-an-array-in-javascript
    // Makes shure double spaces are ignored
    function clean(fkD3) {
        for (var i = 0; i < fkD3.length; i++) {
            if (fkD3[i] == "") {
                fkD3.splice(i, 1);
                i--;
            }
        }
    };

    function select() {
        $(this).focus().select();
    }


    // Function to switch images given in param1 (array). target
    function switchImages(x8xx, dAoc) {
        $('body').css('background', 'none');
        for (var i = 0; i < x8xx.length; i += 1) {
            var $thelink = dAoc.length >= 1 ? dAoc[i] : dAoc;
            $('#background').prepend('<div class="bg-' + i + '"><a href="' + $thelink + '" style="background-image: url(../img/backgrounds/' + Toss + '/' + x8xx[i] + ')"/></a></div>');
            if (i != 0) {
                //$('#background .bg-' + i).hide();
            }
        }

        var eLfLChildren = x8xx.length;
        var e3v2 = 0;

        animate();
        function animate() {
            var $target = $('#background .bg-' + e3v2);
            $($target).delay(Vjss).fadeOut(Y1ss, function () {
                e3v2 = ++e3v2 % eLfLChildren;
                $(this).detach().prependTo($('#background')).show();

                animate();
            });
        }
    }
    function trace(mJpS) {
        //console.log(mJpS);
    }
});


// Hide the iPhone topbar
hideURLbar();
function hideURLbar() {
    window.scrollTo(0, 1);
}
