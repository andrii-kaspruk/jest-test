import { render } from '@testing-library/react';

import App from '../App';

describe('transform', () => {
  it('should generate snapshots correctly in different OS', () => {
    render(<App />);
    // TODO: To refactor this test. It frequently need to be updated.
    expect(document.body.outerHTML).toMatchInlineSnapshot(
      `"<body><div><div class=\\"App\\"><header class=\\"App-header\\"><div class=\\"sc-gsnTZi kykGJG\\"><img src=\\"/logo.svg\\" class=\\"App-logo\\" alt=\\"logo\\" height=\\"100\\"><svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"410\\" height=\\"100\\" fill=\\"none\\" viewBox=\\"0 0 410 404\\"><path fill=\\"url(#paint0_linear)\\" d=\\"M399.641 59.5246L215.643 388.545C211.844 395.338 202.084 395.378 198.228 388.618L10.5817 59.5563C6.38087 52.1896 12.6802 43.2665 21.0281 44.7586L205.223 77.6824C206.398 77.8924 207.601 77.8904 208.776 77.6763L389.119 44.8058C397.439 43.2894 403.768 52.1434 399.641 59.5246Z\\"></path><path fill=\\"url(#paint1_linear)\\" d=\\"M292.965 1.5744L156.801 28.2552C154.563 28.6937 152.906 30.5903 152.771 32.8664L144.395 174.33C144.198 177.662 147.258 180.248 150.51 179.498L188.42 170.749C191.967 169.931 195.172 173.055 194.443 176.622L183.18 231.775C182.422 235.487 185.907 238.661 189.532 237.56L212.947 230.446C216.577 229.344 220.065 232.527 219.297 236.242L201.398 322.875C200.278 328.294 207.486 331.249 210.492 326.603L212.5 323.5L323.454 102.072C325.312 98.3645 322.108 94.137 318.036 94.9228L279.014 102.454C275.347 103.161 272.227 99.746 273.262 96.1583L298.731 7.86689C299.767 4.27314 296.636 0.855181 292.965 1.5744Z\\"></path><defs><linearGradient id=\\"paint0_linear\\" x1=\\"6\\" x2=\\"235\\" y1=\\"33\\" y2=\\"344\\" gradientUnits=\\"userSpaceOnUse\\"><stop stop-color=\\"#41D1FF\\"></stop><stop offset=\\"1\\" stop-color=\\"#BD34FE\\"></stop></linearGradient><linearGradient id=\\"paint1_linear\\" x1=\\"194.651\\" x2=\\"236.076\\" y1=\\"8.818\\" y2=\\"292.989\\" gradientUnits=\\"userSpaceOnUse\\"><stop stop-color=\\"#FFEA83\\"></stop><stop offset=\\"0.083\\" stop-color=\\"#FFDD35\\"></stop><stop offset=\\"1\\" stop-color=\\"#FFA800\\"></stop></linearGradient></defs></svg></div><img src=\\"/demo/assets/images/logo.svg\\" class=\\"logo2\\" alt=\\"logo2\\"><p>Hello Vite + React!</p><p class=\\"_scssModule_ujx1w_1\\">Styled by SCSS Modules</p><p class=\\"sc-bczRLJ dgihId\\">This text is styled by styled-components</p><p class=\\"global-css\\">This text is styled by global css which is not imported to App.tsx</p><p class=\\"_cssModule_1a0qn_1\\">This text is styled by CSS Modules</p><p class=\\"global-configured-sass\\">This text is styled by global configured SASS</p><p class=\\"imported-sass\\">This text is styled by imported SASS</p><p class=\\"bg-yellow-400 font-bold m-5 text-red-500\\">This text is styled by Tailwind CSS</p><button class=\\"css-1b07vmx-App\\">Hover to change color.</button><p class=\\"css-2m18qq\\">Styled by Emotion</p><p class=\\"c-gqdJwI\\">Styled by Stiches</p><p class=\\"load-path-sass\\">This text is styled by SASS from load paths</p><p class=\\"animate__animated animate__bounce\\">An animated element style using @use ~</p><div class=\\"animated fadeIn\\"><p>An animated element style using import ~</p><p>Watch me fade in!</p></div><p><button data-testid=\\"increase\\" type=\\"button\\">count is: <div data-testid=\\"count\\">0</div></button></p><p>Edit <code>App.tsx</code> and save to test HMR updates.</p><p><a class=\\"App-link\\" href=\\"https://reactjs.org\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Learn React</a> | <a class=\\"App-link\\" href=\\"https://vitejs.dev/guide/features.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Vite Docs</a></p></header></div></div></body>"`,
    );
  });
});
