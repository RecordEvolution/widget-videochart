import { html, css, LitElement } from 'lit';
export class ReVideoChart extends LitElement {
    render() {
        return html `
      <video
          id="my-player"
          class="video-js"
          controls
          preload="auto"
          poster="//vjs.zencdn.net/v/oceans.png"
          data-setup='{}'>
        <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4"></source>
        <source src="//vjs.zencdn.net/v/oceans.webm" type="video/webm"></source>
        <source src="//vjs.zencdn.net/v/oceans.ogv" type="video/ogg"></source>
        <p class="vjs-no-js">
          To view this video please enable JavaScript, and consider upgrading to a
          web browser that
          <a href="https://videojs.com/html5-video-support/" target="_blank">
            supports HTML5 video
          </a>
        </p>
      </video>
    `;
    }
}
ReVideoChart.styles = css `
    :host {
      display: block;
      padding: 25px;
      color: var(--widget-videochart-text-color, #000);
    }
  `;
//# sourceMappingURL=ReVideoChart.js.map