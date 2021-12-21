import React, {useEffect} from 'react'
import "./Slide1.css"
import { TimelineMax, CSSPlugin, Power4} from "gsap";
import $ from "jquery"

export default function Slide1() {

    useEffect(()=>{
        var tmax_optionsGlobal = {
            repeat: -1,
            repeatDelay: 0.65,
            yoyo: true
          };
          
          CSSPlugin.useSVGTransformAttr = true;
          
          var tl = new TimelineMax(tmax_optionsGlobal),
              path = 'svg *',
              stagger_val = 0.0125,
              duration = 0.75;
          
          $.each($(path), function(i, el) {
            tl.set($(this), {
              x: '+=' + getRandom(-500, 500),
              y: '+=' + getRandom(-500, 500),
              rotation: '+=' + getRandom(-720, 720),
              scale: 0,
              opacity: 0
            });
          });
          
          var stagger_opts_to = {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
            rotation: 0,
            ease: Power4.easeInOut
          };
          
          tl.staggerTo(path, duration, stagger_opts_to, stagger_val);
          
          var svg = $('svg');
          svg.hover(
            function() {
              tl.timeScale(0.05);
            },
            function() {
              tl.timeScale(1.0);
            });
          
          function getRandom(min, max) {
            return Math.random() * (max - min) + min;
          }
    },[])

    return (
        <div data-aos="fade-up" className="container-slide-1">
            <figure>
            <svg id="slide-1-svg" version="1.1" x="0px" y="0px"
                viewBox="0 0 1920 1080" 
                // style="enable-background:new 0 0 1920 1080;"
                >
        <g id="Layer_1">
            <path className="st0" d="M1256.69,480.95"/>
            <path className="st1" d="M1013,895"/>
            <path className="st0" d="M319.89,603.09h0.07l-0.04-0.09C319.91,603.03,319.9,603.06,319.89,603.09z"/>
            <g>
                <path className="st0" d="M348.14,522.24c1.6-4.52,3.11-8.78,4.54-12.77c2.35,8.06,4.56,15.68,6.64,22.87l-6.64-23.12L348.14,522.24z"
                    />
                <path className="st0" d="M277.27,532.21l-82.28-129.95h-0.39c17.65,43.9,30.98,78.28,40,103.15c15.37,45.29,26.22,77.93,32.57,97.91
                    h52.65c0.03-0.08,0.05-0.15,0.08-0.23h-52.74L277.27,532.21z"/>
                <polygon className="st0" points="430.48,490.34 428.96,495.61 429.02,495.89 		"/>
                <path className="st0" d="M505.27,402.26l-2.46,6.84c0.96-2.41,1.88-4.7,2.75-6.84H505.27z"/>
                <path className="st0" d="M296.02,402.26h-0.1l0.68,2.35C296.39,403.8,296.2,403,296.02,402.26z"/>
                <path className="st0" d="M409.93,402.26h-92.2c7.2,21.98,13.13,40.58,17.78,55.81l74.72-54.23
                    C410.13,403.3,410.03,402.77,409.93,402.26z"/>
                <path className="st0" d="M369.97,569.4c4.01,14.1,7.17,25.41,9.48,33.92h53.39c0.03-0.08,0.05-0.15,0.08-0.23h-53.26L369.97,569.4z"/>
                <path className="st0" d="M277.27,532.21l0.21,0.34L277.27,532.21l-10.12,70.88h52.74c0.01-0.03,0.02-0.06,0.03-0.09L281.5,502.56
                    L277.27,532.21z"/>
                <path className="st0" d="M428.75,495.78l0.15,0.06l0.07-0.23l-17.74-92.49l-0.99,0.72c1.61,8.46,4.14,21.5,7.58,39.13
                    C420.48,455.39,424.12,473,428.75,495.78z"/>
                <path className="st0" d="M335.51,458.08l-0.05,0.04l0.08,0.03C335.52,458.13,335.52,458.1,335.51,458.08z"/>
                <path className="st0" d="M428.75,495.78c-4.63-22.79-8.27-40.39-10.94-52.81c-3.45-17.62-5.97-30.67-7.58-39.13l-74.72,54.23
                    c0.01,0.02,0.01,0.05,0.02,0.07L428.75,495.78z"/>
                <polygon className="st0" points="429.02,495.89 428.96,495.61 428.9,495.84 		"/>
                <path className="st0" d="M322.79,496.12c0.03-0.07,0.06-0.14,0.08-0.21l-0.04-0.02l-0.11,0.02L322.79,496.12z"/>
                <path className="st0" d="M319.96,603.09l28.18-80.85c-7.5,21.17-16.9,48.09-28.21,80.76L319.96,603.09z"/>
                <path className="st0" d="M322.87,495.91c-0.03,0.07-0.06,0.14-0.08,0.21l-0.06-0.21l-41.22,6.65L319.92,603
                    c11.31-32.67,20.72-59.59,28.21-80.76l4.54-13.02L322.87,495.91z"/>
                <path className="st0" d="M322.72,495.91l0.11-0.02l-26.23-91.28c2.15,8.65,5.62,21.68,10.43,39.14L322.72,495.91z"/>
                <polygon className="st0" points="295.92,402.26 295.85,402.02 295.81,402.26 		"/>
                <path className="st0" d="M281.5,502.56l41.22-6.65l-15.7-52.15c-4.8-17.46-8.27-30.5-10.43-39.14l-0.68-2.35h-0.11L281.5,502.56z"/>
                <polygon className="st0" points="295.85,402.02 194.83,402.02 194.98,402.26 295.81,402.26 		"/>
                <polygon className="st0" points="281.5,502.56 295.81,402.26 194.98,402.26 277.27,532.21 		"/>
                <polygon className="st0" points="505.27,402.26 505.36,402.02 505.16,402.26 		"/>
                <path className="st0" d="M466.9,508.11l-1.76-0.57c-0.11,0.3-0.22,0.58-0.33,0.88c-4.64,13.21-10.16,29.35-16.55,48.42l1.43-0.96
                    l-1.43,0.96c-4.65,13.87-9.77,29.28-15.35,46.25h0.13l69.77-193.99c-8.67,21.74-21.23,54.55-37.67,98.44L466.9,508.11z"/>
                <path className="st0" d="M379.65,603.09h53.26c5.58-16.97,10.69-32.38,15.35-46.25L379.65,603.09z"/>
                <path className="st0" d="M505.16,402.26l-76.14,93.63l36.12,11.65c16.45-43.88,29-76.7,37.67-98.44l2.46-6.84H505.16z"/>
                <path className="st0" d="M448.26,556.84c6.39-19.06,11.91-35.21,16.55-48.42c0.11-0.3,0.22-0.59,0.33-0.88l-36.12-11.65l-49.36,107.2
                    L448.26,556.84z"/>
                <path className="st0" d="M453.8,402.26h51.35l0.2-0.25H453.7l-23.22,88.33l13.66-47.63C446.91,432.59,450.13,419.11,453.8,402.26z"/>
                <path className="st0" d="M505.16,402.26H453.8c-3.67,16.84-6.89,30.33-9.67,40.45l-13.66,47.63l-1.46,5.55L505.16,402.26z"/>
                <path className="st0" d="M335.57,458.29c-0.01-0.05-0.03-0.09-0.04-0.14l-0.08-0.03l-12.63,37.77l0.04,0.02
                    C325.74,488.63,329.98,476.1,335.57,458.29z"/>
                <path className="st0" d="M369.97,569.4c-3.05-10.73-6.61-23.09-10.65-37.06L369.97,569.4z"/>
                <path className="st0" d="M428.82,496.12l0.08-0.28l-0.15-0.06C428.77,495.9,428.8,496.01,428.82,496.12z"/>
                <path className="st0" d="M429.02,495.89l-0.12-0.05l-0.08,0.28c-0.02-0.11-0.05-0.22-0.07-0.34l-93.22-37.63
                    c0.01,0.05,0.03,0.09,0.04,0.14c-5.6,17.81-9.83,30.35-12.71,37.62l29.81,13.31l6.64,23.12c4.05,13.97,7.6,26.33,10.65,37.06
                    l9.68,33.69L429.02,495.89z"/>
            </g>
            <path className="st0" d="M609.66,506.07c0.13,0,0.27,0.01,0.4,0.01l-0.23-0.19l2.28-24.82c-0.07,0-0.15,0-0.22,0L609.66,506.07z"/>
            <polygon className="st0" points="669.44,402.26 663.06,484.97 663.21,485.34 669.52,402.02 668.94,402.26 	"/>
            <polygon className="st0" points="669.52,402.02 513.39,402.02 513.7,402.26 668.94,402.26 	"/>
            <path className="st0" d="M663.04,485.12c-3.67-0.52-11.6-1.44-23.79-2.75c-7.5-0.63-15.65-1.04-24.43-1.25l48.39,4.21l-0.15-0.37
                L663.04,485.12z"/>
            <path className="st0" d="M666.63,563.72l0.02-0.06l-0.35,0.13C666.41,563.77,666.52,563.74,666.63,563.72z"/>
            <path className="st0" d="M666.3,563.79l0.35-0.13l-56.83,4.81c7.83-0.17,20.66-0.72,38.5-1.66C652,566.55,657.99,565.54,666.3,563.79z"
                />
            <path className="st0" d="M632.56,539.58c-5.12-0.25-12.6-0.34-22.44-0.27l43.9,2.69l-0.13-0.11
                C650.88,541.28,643.78,540.51,632.56,539.58z"/>
            <path className="st0" d="M607.54,568.5l0.84-21.67l-1.1,21.67C607.36,568.5,607.45,568.5,607.54,568.5z"/>
            <path className="st0" d="M654.02,541.99l0.02-0.08c-0.05-0.01-0.1-0.02-0.15-0.03L654.02,541.99z"/>
            <path className="st0" d="M657.75,597.63l5.73-21.88c-0.62,2.21-1.31,4.67-2.07,7.42C660.36,587.19,659.14,592.01,657.75,597.63z"/>
            <polygon className="st0" points="523.23,602.82 523.15,603.09 523.24,603.03 	"/>
            <polygon className="st0" points="523.15,603.09 523.24,603.09 523.24,603.03 	"/>
            <path className="st0" d="M666.3,563.79l-103.54,39.3h93.56l1.43-5.47c1.39-5.62,2.61-10.44,3.66-14.46c0.77-2.74,1.46-5.21,2.07-7.42
                l3.15-12.03C666.52,563.74,666.41,563.77,666.3,563.79z"/>
            <polygon className="st0" points="567.8,445.48 567.87,445.54 567.9,445.44 	"/>
            <polygon className="st0" points="669.44,402.26 668.94,402.26 635.18,416.69 663.06,484.97 	"/>
            <path className="st0" d="M608.38,546.84l0.38-7.52c0.46,0,0.91-0.01,1.36-0.01l-1.44-0.09L608.38,546.84z"/>
            <path className="st0" d="M609.82,568.46c-0.82,0.02-1.58,0.03-2.29,0.04l-0.01,0.15L609.82,568.46z"/>
            <path className="st0" d="M654.12,541.93c0.05-0.32,0.1-0.62,0.15-0.93l-0.23,0.92C654.07,541.92,654.1,541.93,654.12,541.93z"/>
            <polygon className="st0" points="567.9,445.44 567.92,445.34 567.9,445.44 635.18,416.69 635.08,416.46 635.18,416.69 668.94,402.26 
                513.7,402.26 567.8,445.48 	"/>
            <path className="st0" d="M663.48,575.75c1.7-6.07,2.85-10.1,3.43-12.09c-0.09,0.02-0.18,0.04-0.28,0.06L663.48,575.75z"/>
            <path className="st0" d="M663.04,485.12l0.01-0.16l-27.88-68.28l-67.28,28.75l-0.03,0.1l44.25,35.35l2.7,0.23
                c8.78,0.21,16.93,0.62,24.43,1.25C651.44,483.68,659.38,484.6,663.04,485.12z"/>
            <path className="st0" d="M562.76,603.09h-39.51l0.01,0.23h133.1c0.48-1.98,0.95-3.88,1.4-5.7l-1.43,5.47H562.76z"/>
            <polygon className="st0" points="608.68,539.22 547.41,517.61 523.23,602.82 523.24,603.03 	"/>
            <path className="st0" d="M547.26,517.55l0.15,0.05l20.45-72.07l-0.07-0.06l-50.38,21.53l50.38-21.53l-54.09-43.22h-0.56
                c3.07,42.15,5.01,74.96,5.8,98.44l4.29,102.12l24.18-85.21L547.26,517.55z"/>
            <path className="st0" d="M612.1,481.07c0.91,0.02,1.81,0.04,2.71,0.06l-2.7-0.23L612.1,481.07z"/>
            <path className="st0" d="M666.3,563.79c-8.3,1.75-14.3,2.76-17.98,3.01c-17.84,0.94-30.67,1.49-38.5,1.66l-2.29,0.19l0.01-0.15
                c-0.09,0-0.17,0-0.26,0l1.1-21.67l0.3-7.62l-85.44,63.81l0,0.07h39.51L666.3,563.79z"/>
            <path className="st0" d="M567.87,445.54l-20.45,72.07l61.26,21.61l1.44,0.09c9.83-0.07,17.32,0.02,22.44,0.27
                c11.22,0.94,18.33,1.71,21.34,2.31l-43.84-35.81c-0.13,0-0.27-0.01-0.4-0.01l2.23-25c0.07,0,0.15,0,0.22,0l0.02-0.18L567.87,445.54
                z"/>
            <path className="st0" d="M654.04,541.92l0.23-0.92c1.05-6.59,2.24-12.44,3.57-17.53c2.38-8.81,4.11-14.83,5.21-18.06
                c-24.39,0.69-42.05,0.91-52.99,0.66l43.84,35.81C653.94,541.9,654,541.91,654.04,541.92z"/>
            <polygon className="st0" points="785.3,402.26 785.47,402.02 682.15,402.02 682.53,402.26 	"/>
            <polygon className="st0" points="785.44,402.26 784.01,430.24 785.47,402.02 785.3,402.26 	"/>
            <path className="st0" d="M827.81,601.2l8.55-36.7c-1.03,3.66-2.79,9.96-5.27,18.93C829.83,588.56,828.74,594.49,827.81,601.2z"/>
            <path className="st0" d="M829.83,564.94l-50.46,4.07c9.55-0.13,23.17-1.04,40.87-2.73C822.81,566.05,826.01,565.61,829.83,564.94z"/>
            <path className="st0" d="M690.76,545.33l0.21-0.32c-0.5-12.83-1.08-27.16-1.75-43c-1.29-24.09-3.62-57.33-6.99-99.74h0.3l-0.38-0.25
                l10.67,196.72c-0.36-13.26-0.97-31.17-1.85-53.72L690.76,545.33z"/>
            <polygon className="st0" points="785.3,402.26 682.53,402.26 754.4,449.03 	"/>
            <path className="st0" d="M682.53,402.26h-0.3c3.37,42.41,5.7,75.66,6.99,99.74c0.67,15.84,1.25,30.17,1.75,43l13.69-20.71l-0.12-0.08
                l0.12,0.08l49.74-75.27L682.53,402.26z"/>
            <polygon className="st0" points="827.37,603.09 775.47,569.77 693.05,603.09 	"/>
            <path className="st0" d="M836.55,563.67l-0.19,0.83c0.08-0.29,0.16-0.57,0.24-0.83C836.58,563.66,836.57,563.67,836.55,563.67z"/>
            <path className="st0" d="M779.37,569.01c-0.83,0.01-1.64,0.02-2.41,0.02l7.05-138.79l-7.16,138.97L779.37,569.01z"/>
            <polygon className="st0" points="785.3,402.26 754.4,449.03 782.02,467.01 754.4,449.03 704.66,524.3 775.47,569.77 776.86,569.21 
                784.01,430.24 785.44,402.26 	"/>
            <path className="st0" d="M775.47,569.77l-70.82-45.47l-13.69,20.71c0.88,22.56,1.49,40.47,1.85,53.72l0.24,4.36L775.47,569.77z"/>
            <path className="st0" d="M693.05,603.09l-0.24-4.36c0.04,1.59,0.08,3.13,0.12,4.59h134.59c0.09-0.72,0.19-1.42,0.29-2.13l-0.44,1.9
                H693.05z"/>
            <path className="st0" d="M829.83,564.94l2.13-0.17L829.83,564.94c-3.82,0.67-7.02,1.11-9.59,1.34c-17.7,1.69-31.31,2.59-40.87,2.73
                l-2.51,0.2l-1.38,0.56l51.9,33.32l0.44-1.9c0.93-6.71,2.02-12.63,3.28-17.77c2.48-8.97,4.23-15.27,5.27-18.93l0.19-0.83
                C834.13,564.16,831.89,564.58,829.83,564.94z"/>
            <path className="st0" d="M934.57,402.57h-1.02l-0.3,0.25c0.05-0.01,0.1-0.02,0.16-0.03C933.79,402.71,934.19,402.65,934.57,402.57z"/>
            <polygon className="st0" points="1007.03,402.57 1006.88,402.57 1006.89,402.75 	"/>
            <path className="st0" d="M956.74,608.93l2.65,0.28l1.86-0.26c-0.55,0-1.1,0.01-1.66,0.01C958.63,608.95,957.68,608.94,956.74,608.93z"
                />
            <polygon className="st0" points="1011.09,475.35 1007.03,402.57 1006.89,402.75 	"/>
            <path className="st0" d="M907.15,598.65l0.6,0.18c-0.43-0.18-0.85-0.37-1.28-0.56L907.15,598.65z"/>
            <path className="st0" d="M1002.3,603.11l0.14-0.02l-0.11-0.09C1002.32,603.04,1002.31,603.08,1002.3,603.11z"/>
            <path className="st0" d="M885.34,586.43l2.77,1.55c-1.93-1.32-3.82-2.71-5.69-4.15L885.34,586.43z"/>
            <path className="st0" d="M951.45,560.83l-4.22-3.5c0.41,0.39,0.83,0.78,1.27,1.16C949.45,559.32,950.44,560.09,951.45,560.83z"/>
            <path className="st0" d="M1002.32,603l0.11,0.09l7.26-33.26c-0.91,3.53-2.05,8.06-3.42,13.59C1004.91,589.7,1003.59,596.22,1002.32,603
                z"/>
            <path className="st0" d="M906.48,598.27l-18.36-10.29C893.95,591.99,900.08,595.42,906.48,598.27z"/>
            <path className="st0" d="M952,493.37c9.91-7.33,22.8-11,38.67-11c8.52,0,15.5,0.74,20.95,2.22l-0.52-9.25l-4.21-72.59L909.1,525.73
                l38.13,31.61c-8.02-7.55-12.04-17.04-12.04-28.49C935.19,513.4,940.79,501.57,952,493.37z"/>
            <path className="st0" d="M1002.26,603.32c0.01-0.07,0.03-0.14,0.04-0.21l-41.06,5.83C977.84,608.82,991.52,606.95,1002.26,603.32z"/>
            <path className="st0" d="M1011.33,563.66c-0.11,0.05-0.21,0.1-0.32,0.15l-1.31,6.02C1010.37,567.24,1010.91,565.18,1011.33,563.66z"/>
            <path className="st0" d="M870.99,573.66l11.43,10.18c1.87,1.45,3.76,2.83,5.69,4.15l18.36,10.29c0.43,0.19,0.85,0.38,1.28,0.56
                l25.23,7.59l23.76,2.5c0.94,0.02,1.89,0.03,2.84,0.03c0.56,0,1.11-0.01,1.66-0.01l41.06-5.83c0.01-0.04,0.01-0.08,0.02-0.11
                l-50.87-42.17c-1.01-0.74-2-1.51-2.95-2.34c-0.44-0.38-0.85-0.77-1.27-1.16l-38.13-31.61L870.99,573.66z"/>
            <path className="st0" d="M862.31,563.7l-10.38-17.22C854.75,552.55,858.21,558.28,862.31,563.7z"/>
            <path className="st0" d="M1006.28,583.43c1.37-5.53,2.51-10.06,3.42-13.59l1.31-6.02c-8.73,4.17-17.94,6.26-27.64,6.26
                c-12.84,0-23.47-3.09-31.92-9.25l50.87,42.17C1003.59,596.22,1004.91,589.7,1006.28,583.43z"/>
            <path className="st0" d="M907.76,598.83c14.83,6.4,31.16,9.77,48.98,10.09l-23.76-2.5L907.76,598.83z"/>
            <path className="st0" d="M909.1,525.73l97.78-122.97l-0.01-0.18h-72.3c-0.39,0.07-0.78,0.14-1.16,0.22l-23.39,121.43l23.39-121.43
                c-0.05,0.01-0.1,0.02-0.16,0.03l-86.94,70.85L909.1,525.73z"/>
            <path className="st0" d="M846.31,473.67l86.94-70.85c-32.27,6.41-52.96,20.76-59.33,26.41c-7.69,6.82-13.45,14.66-13.45,14.66
                s-2.65,3.59-4.91,7.43c-8.58,14.52-12.87,31.42-12.87,50.69c0,16.38,3.08,31.2,9.24,44.47l10.38,17.22
                c4.71,6.22,10.26,12.01,16.67,17.37c1.14,0.95,2.29,1.86,3.45,2.76l-11.43-10.18L846.31,473.67z"/>
            <path className="st0" d="M1006.87,402.53c-8.43-1.92-22.06-2.88-40.9-2.88c-11.41,0-21.89,1.12-31.4,2.93h72.3L1006.87,402.53z"/>
            <polygon className="st0" points="870.99,573.66 909.1,525.73 846.31,473.67 	"/>
            <path className="st0" d="M1011.63,484.6l-0.54-9.25l0.52,9.25C1011.62,484.6,1011.62,484.6,1011.63,484.6z"/>
            <path className="st0" d="M1104.43,549.13c0.4,0.71,0.81,1.39,1.23,2.05l-7.17-17.77C1099.64,538.88,1101.61,544.12,1104.43,549.13z"/>
            <path className="st0" d="M1097.29,521.77c0,2.31,0.14,4.58,0.41,6.81l3.42-29.14C1098.57,505.18,1097.29,512.62,1097.29,521.77z"/>
            <path className="st0" d="M1138.62,488.33l12.47,18.84C1149.09,498.07,1144.94,491.79,1138.62,488.33z"/>
            <path className="st0" d="M1101.11,499.45l-3.42,29.14c0.19,1.63,0.46,3.24,0.79,4.83l7.17,17.77c5.12,8.14,11.31,12.22,18.55,12.22
                c7.63,0,14.37-4.84,20.22-14.53c5.35-8.81,8.03-17.93,8.03-27.36c0-5.38-0.46-10.16-1.38-14.35l-12.47-18.84
                c-3.89-2.13-8.59-3.21-14.11-3.21C1113.16,485.12,1105.37,489.9,1101.11,499.45z"/>
            <path className="st0" d="M1224,485.34l-0.59-0.35c0.02,0.23,0.04,0.45,0.06,0.68L1224,485.34z"/>
            <polygon className="st0" points="1093.13,567.55 1093.15,567.35 1046.06,570.88 1129.29,609.76 1111.62,565.96 1093.15,567.35 	"/>
            <polygon className="st0" points="1209.08,558.66 1111.62,565.96 1129.29,609.76 	"/>
            <path className="st0" d="M1150.51,442.15l72.9,42.84c-0.01-0.11-0.02-0.22-0.03-0.33l-25.2-59.87L1150.51,442.15z"/>
            <path className="st0" d="M1151.68,530.33l71.79-44.66c-0.02-0.23-0.04-0.45-0.06-0.68l-72.9-42.84l-0.01,0l-8.69,33.23l0.11-0.04
                l-0.11,0.04l-3.33,12.74l0.14,0.22c6.32,3.46,10.48,9.74,12.47,18.84l10.92,16.5l-10.92-16.5c0.92,4.19,1.38,8.97,1.38,14.35
                c0,9.42-2.68,18.54-8.03,27.36c-5.85,9.69-12.59,14.53-20.22,14.53c-7.25,0-13.43-4.08-18.55-12.22l5.96,14.78l97.46-7.31
                l14.35-72.77l-14.35,72.77l-79.79,51.1l-83.23-38.88l-21.81-82.76l57.97-86.1l115.95,22.77l25.2,59.87
                c-2.4-26.25-11.85-47.43-28.38-63.54c-18.24-17.71-41.84-26.57-70.79-26.57c-29.45,0-53.29,8.81-71.53,26.44
                c-19.33,18.76-29,44.59-29,77.49c0,30.81,8.87,56.77,26.62,77.88c18.84,22.43,43.47,33.64,73.91,33.64
                c29.54,0,53.78-11.13,72.72-33.38c18.04-21.29,27.07-47.34,27.07-78.15c0-4.4-0.18-8.66-0.53-12.81L1151.68,530.33z
                M1139.05,563.66l15.5-34.99L1139.05,563.66z"/>
            <path className="st0" d="M1101.11,499.45c4.25-9.55,12.05-14.33,23.39-14.33c5.53,0,10.22,1.07,14.11,3.21l-0.14-0.22l3.33-12.74
                l-39.49,13.86L1101.11,499.45z"/>
            <path className="st0" d="M1097.7,528.59l-0.26,2.22l1.05,2.6C1098.15,531.82,1097.89,530.21,1097.7,528.59z"/>
            <path className="st0" d="M1097.44,530.81l0.26-2.22c-0.27-2.23-0.41-4.5-0.41-6.81c0-9.16,1.27-16.6,3.82-22.32l1.2-10.21l-18.94,6.65
                l18.94-6.65l0-0.02l0,0.02l39.49-13.86l8.69-33.23l-77.45,28.2L1097.44,530.81z"/>
            <polygon className="st0" points="1097.44,530.81 1073.04,470.35 1024.25,488.11 1046.06,570.88 1093.15,567.35 	"/>
            <path className="st0" d="M1098.49,533.41l-1.05-2.6l-4.28,36.54l18.47-1.38l-5.96-14.78c-0.42-0.66-0.83-1.34-1.23-2.05
                C1101.61,544.12,1099.64,538.88,1098.49,533.41z"/>
            <polygon className="st0" points="1082.22,402.02 1150.49,442.14 1150.53,442.01 1150.49,442.14 1150.51,442.15 1198.17,424.79 	"/>
            <polygon className="st0" points="1082.22,402.02 1024.25,488.11 1073.04,470.35 1073.04,470.34 1073.04,470.35 1150.49,442.15 
                1150.49,442.14 	"/>
            <polygon className="st0" points="1150.49,442.15 1150.51,442.15 1150.49,442.14 	"/>
            <path className="st0" d="M1611.6,503.09c0.14,0,0.29,0.01,0.43,0.01l-0.25-0.19l2.45-24.99c-0.08,0-0.16,0-0.24,0L1611.6,503.09z"/>
            <polygon className="st0" points="1675.91,398.58 1669.05,481.84 1669.21,482.21 1676,398.33 1675.38,398.58 	"/>
            <polygon className="st0" points="1676,398.33 1508.04,398.33 1508.37,398.58 1675.38,398.58 	"/>
            <path className="st0" d="M1669.03,482c-3.95-0.53-12.48-1.45-25.6-2.77c-8.07-0.63-16.83-1.05-26.28-1.26l52.06,4.24l-0.16-0.37
                L1669.03,482z"/>
            <path className="st0" d="M1672.89,561.13l0.02-0.06l-0.38,0.13C1672.65,561.18,1672.77,561.15,1672.89,561.13z"/>
            <path className="st0" d="M1672.53,561.2l0.38-0.13l-61.13,4.84c8.42-0.17,22.22-0.73,41.42-1.67
                C1657.15,563.98,1663.6,562.96,1672.53,561.2z"/>
            <path className="st0" d="M1636.24,536.82c-5.51-0.25-13.56-0.34-24.14-0.27l47.23,2.71l-0.14-0.11
                C1655.95,538.54,1648.31,537.77,1636.24,536.82z"/>
            <path className="st0" d="M1609.32,565.94l0.91-21.81l-1.19,21.82C1609.13,565.94,1609.22,565.94,1609.32,565.94z"/>
            <path className="st0" d="M1659.33,539.26l0.02-0.08c-0.05-0.01-0.11-0.02-0.16-0.03L1659.33,539.26z"/>
            <path className="st0" d="M1663.34,595.26l6.17-22.02c-0.67,2.22-1.41,4.7-2.23,7.47C1666.14,584.76,1664.83,589.61,1663.34,595.26z"/>
            <polygon className="st0" points="1518.62,600.49 1518.54,600.77 1518.63,600.7 	"/>
            <polygon className="st0" points="1518.54,600.77 1518.64,600.77 1518.63,600.7 	"/>
            <path className="st0" d="M1672.53,561.2l-111.39,39.57h100.65l1.54-5.5c1.49-5.65,2.8-10.51,3.93-14.56c0.82-2.76,1.57-5.25,2.23-7.47
                l3.39-12.11C1672.77,561.15,1672.65,561.18,1672.53,561.2z"/>
            <polygon className="st0" points="1566.57,442.09 1566.64,442.15 1566.67,442.05 	"/>
            <polygon className="st0" points="1675.91,398.58 1675.38,398.58 1639.05,413.11 1669.05,481.84 	"/>
            <path className="st0" d="M1610.23,544.13l0.41-7.57c0.49,0,0.98-0.01,1.46-0.01l-1.55-0.09L1610.23,544.13z"/>
            <path className="st0" d="M1611.78,565.9c-0.88,0.02-1.7,0.03-2.46,0.04l-0.01,0.16L1611.78,565.9z"/>
            <path className="st0" d="M1659.43,539.19c0.05-0.32,0.11-0.62,0.16-0.94l-0.25,0.92C1659.37,539.18,1659.41,539.19,1659.43,539.19z"/>
            <polygon className="st0" points="1566.67,442.05 1566.7,441.95 1566.67,442.05 1639.05,413.11 1638.95,412.87 1639.05,413.11 
                1675.38,398.58 1508.37,398.58 1566.57,442.09 	"/>
            <path className="st0" d="M1669.5,573.24c1.83-6.11,3.06-10.17,3.69-12.17c-0.1,0.02-0.2,0.04-0.3,0.06L1669.5,573.24z"/>
            <path className="st0" d="M1669.03,482l0.01-0.16l-29.99-68.74l-72.38,28.94l-0.03,0.1l47.61,35.59l2.9,0.24
                c9.45,0.21,18.22,0.62,26.28,1.26C1656.55,480.55,1665.09,481.47,1669.03,482z"/>
            <path className="st0" d="M1561.15,600.77h-42.51l0.01,0.23h143.19c0.52-2,1.02-3.91,1.51-5.74l-1.54,5.5H1561.15z"/>
            <polygon className="st0" points="1610.55,536.46 1544.64,514.7 1518.62,600.49 1518.63,600.7 	"/>
            <path className="st0" d="M1544.47,514.65l0.17,0.05l22-72.56l-0.08-0.06l-54.2,21.67l54.2-21.67l-58.19-43.51h-0.61
                c3.3,42.43,5.38,75.47,6.24,99.1l4.62,102.81l26.02-85.78L1544.47,514.65z"/>
            <path className="st0" d="M1614.23,477.92c0.98,0.02,1.95,0.04,2.92,0.06l-2.9-0.24L1614.23,477.92z"/>
            <path className="st0" d="M1672.53,561.2c-8.93,1.76-15.38,2.78-19.34,3.03c-19.19,0.94-32.99,1.5-41.42,1.67l-2.47,0.2l0.01-0.16
                c-0.09,0-0.19,0-0.28,0l1.19-21.82l0.32-7.67l-91.91,64.24l0,0.07h42.51L1672.53,561.2z"/>
            <path className="st0" d="M1566.64,442.15l-22,72.56l65.91,21.75l1.55,0.09c10.58-0.07,18.63,0.02,24.14,0.27
                c12.07,0.94,19.71,1.72,22.95,2.33l-47.16-36.05c-0.14,0-0.29-0.01-0.43-0.01l2.4-25.17c0.08,0,0.16,0,0.24,0l0.02-0.18
                L1566.64,442.15z"/>
            <path className="st0" d="M1659.35,539.18l0.25-0.92c1.13-6.64,2.41-12.53,3.84-17.64c2.56-8.87,4.42-14.94,5.6-18.19
                c-26.24,0.7-45.24,0.92-57.01,0.67l47.16,36.05C1659.24,539.16,1659.3,539.17,1659.35,539.18z"/>
        </g>
        <g id="Layer_2">
            <g>
                <path className="st0" d="M1368.77,466.09c-0.39-0.5-0.76-1-1.14-1.49l1.04,1.66L1368.77,466.09z"/>
                <polygon className="st0" points="1406.88,562.87 1427.07,539.64 1427.07,539.56 		"/>
                <path className="st0" d="M1498.99,398.81c0-0.06,0.01-0.12,0.01-0.18h-86.71c-0.47,0.88-0.93,1.74-1.39,2.59l1.56-2.41H1498.99z"/>
                <path className="st0" d="M1244.51,601.82h59.57l0-0.1h-59.58C1244.5,601.75,1244.51,601.79,1244.51,601.82z"/>
                <path className="st0" d="M1457.49,518.61l-28.66,82.72l0.01,0.48h59.9c0.01-0.28,0.01-0.55,0.02-0.83l-0.04,0.73L1457.49,518.61z"/>
                <polygon className="st0" points="1305.93,540.25 1319.51,554.62 1305.93,540.14 		"/>
                <path className="st0" d="M1326.48,398.81l0.14,0.22c-0.07-0.13-0.14-0.27-0.21-0.4h-94.81c0.13,1.27,0.26,2.54,0.39,3.8l72.41,50.9
                    L1326.48,398.81z"/>
                <path className="st0" d="M1367.63,464.59l-41.01-65.56c3.34,6.47,8.94,16.73,16.84,30.82
                    C1349.41,439.71,1357.47,451.29,1367.63,464.59z"/>
                <path className="st0" d="M1304.4,453.33l61.28,43.08l2.98-2.18v-27.97l-1.04-1.66c-10.16-13.3-18.22-24.89-24.17-34.75
                    c-7.89-14.08-13.5-24.35-16.84-30.82l-0.14-0.22L1304.4,453.33z"/>
                <path className="st0" d="M1231.99,402.43l-0.14-0.1l0.17,0.31C1232.01,402.57,1232,402.5,1231.99,402.43z"/>
                <path className="st0" d="M1285,501.21l19.4-47.88l-72.41-50.9c0.01,0.07,0.01,0.14,0.02,0.21L1285,501.21z"/>
                <polygon className="st0" points="1365.68,496.4 1368.67,498.5 1368.67,494.22 		"/>
                <path className="st0" d="M1240.04,499.43c-1.49-26.75-4.17-59.02-8.03-96.79l-0.17-0.31l12.44,199.39l0.2-0.49
                    C1243.71,580.96,1242.22,547.04,1240.04,499.43z"/>
                <path className="st0" d="M1240.04,499.43c2.18,47.61,3.67,81.53,4.45,101.8L1285,501.21l-52.99-98.57
                    C1235.87,440.41,1238.55,472.68,1240.04,499.43z"/>
                <polygon className="st0" points="1368.67,466.25 1368.67,494.22 1382.74,483.92 		"/>
                <polygon className="st0" points="1499,398.81 1498.99,398.81 1498.98,398.82 		"/>
                <polygon className="st0" points="1431.14,448.49 1498.98,398.82 1498.99,398.81 1412.47,398.81 		"/>
                <path className="st0" d="M1394.92,428.92c4.22-6.5,9.55-15.74,15.99-27.7l-42.13,64.87c0,0,0,0,0,0
                    C1373.52,460.1,1382.23,447.71,1394.92,428.92z"/>
                <path className="st0" d="M1382.74,483.92l35.84-26.24l-6.11-58.87l-1.56,2.41c-6.44,11.96-11.76,21.2-15.99,27.7
                    c-12.69,18.78-21.4,31.18-26.14,37.17c0,0,0,0,0,0l-0.11,0.16L1382.74,483.92z"/>
                <polygon className="st0" points="1418.58,457.68 1431.14,448.49 1412.47,398.81 		"/>
                <polygon className="st0" points="1304.08,601.72 1304.31,601.72 1305.93,540.25 1305.73,540.04 		"/>
                <path className="st0" d="M1244.28,601.72h0.22c-0.01-0.16-0.01-0.33-0.02-0.49L1244.28,601.72z"/>
                <path className="st0" d="M1285,501.21l-40.52,100.02c0.01,0.16,0.01,0.33,0.02,0.49h59.58l1.65-61.68l0.2,0.21l0-0.11L1285,501.21z"/>
                <path className="st0" d="M1498.98,398.85c-1.55,18.57-3.8,52.27-6.77,101.11c-1.53,29.94-2.69,63.62-3.46,101.03L1499,398.81
                    L1498.98,398.85z"/>
                <path className="st0" d="M1498.98,398.85l-41.49,119.76l31.23,83.11l0.04-0.73c0.77-37.41,1.92-71.09,3.46-101.03
                    C1495.18,451.12,1497.44,417.42,1498.98,398.85z"/>
                <polygon className="st0" points="1427.07,539.64 1428.69,601.72 1428.83,601.33 1427.19,539.51 		"/>
                <polygon className="st0" points="1431.14,448.49 1418.58,457.68 1427.07,539.56 1427.07,539.64 1427.19,539.51 1428.83,601.33 
                    1457.49,518.61 		"/>
                <path className="st0" d="M1498.98,398.85l0.01-0.04l-0.01,0.01C1498.98,398.83,1498.98,398.84,1498.98,398.85z"/>
                <path className="st0" d="M1431.14,448.49l26.35,70.12l41.49-119.76c0-0.01,0-0.02,0-0.03L1431.14,448.49z"/>
                <polygon className="st0" points="1285,501.21 1305.93,540.14 1365.68,496.4 1304.4,453.33 		"/>
                <polygon className="st0" points="1368.67,606.6 1368.67,607 1406.88,562.87 1368.78,606.71 		"/>
                <polygon className="st0" points="1368.67,498.5 1368.67,606.6 1368.78,606.71 1406.88,562.87 1427.07,539.56 		"/>
                <polygon className="st0" points="1427.07,539.56 1418.58,457.68 1382.74,483.92 		"/>
                <polygon className="st0" points="1319.51,554.62 1368.67,607 1368.67,606.6 		"/>
                <polygon className="st0" points="1368.67,498.5 1365.68,496.4 1305.93,540.14 1319.51,554.62 1368.67,606.6 		"/>
                <polygon className="st0" points="1368.67,494.22 1368.67,498.5 1427.07,539.56 1382.74,483.92 		"/>
            </g>
        </g>
        </svg>
        </figure>
        <p style={{fontSize:"1rem"}} id="quote">"Love all, trust a few, do wrong to none" <br />
            Welcome to your college life, to peppy roads of tech adventures. A detour to discovery of life and pursuit of the passions....</p>
        </div>
    )
}
