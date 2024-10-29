var i=globalThis,a={},o={},n=i.parcelRequirec605;null==n&&((n=function(i){if(i in a)return a[i].exports;if(i in o){var n=o[i];delete o[i];var l={id:i,exports:{}};return a[i]=l,n.call(l.exports,l,l.exports),l.exports}var e=Error("Cannot find module '"+i+"'");throw e.code="MODULE_NOT_FOUND",e}).register=function(i,a){o[i]=a},i.parcelRequirec605=n),n.register;var l=n("5D1XK");n("RKbfs"),n("5OQrz"),n("2LYUy");var e=n("7WQrb"),l=n("5D1XK");n("RKbfs"),n("5OQrz"),n("2LYUy");class r extends l.WebComponent{}r=(0,e.__decorate)([(0,l.customElement)({name:"login-page",template:(0,l.html)`${i=>(0,l.html)`
        <div
  class="pf-v5-c-background-image"
  style="--pf-v5-c-background-image--BackgroundImage: url(/assets/images/pfbg-icon.svg)"
></div>
<div class="pf-v5-c-login">
  <div class="pf-v5-c-login__container">
    <header class="pf-v5-c-login__header">
      <img
        class="pf-v5-c-brand"
        src="/assets/images/pf_logo_color.svg"
        alt="PatternFly Logo"
      />
    </header>
    <main class="pf-v5-c-login__main">
      <header class="pf-v5-c-login__main-header">
        <h1 class="pf-v5-c-title pf-m-3xl">Log in to your account</h1>
        <p
          class="pf-v5-c-login__main-header-desc"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </header>
      <div class="pf-v5-c-login__main-body">
        <form class="pf-v5-c-form" novalidate>
          <div class="pf-v5-c-form__helper-text" aria-live="polite">
            <div class="pf-v5-c-helper-text pf-m-hidden">
              <div class="pf-v5-c-helper-text__item pf-m-error" id="-helper">
                <span class="pf-v5-c-helper-text__item-icon">
                  <i class="fas fa-fw fa-exclamation-circle" aria-hidden="true"></i>
                </span>
                <span
                  class="pf-v5-c-helper-text__item-text"
                >Invalid login credentials.</span>
              </div>
            </div>
          </div>
          <div
            class="pf-v5-c-form__helper-text pf-m-error pf-m-hidden"
            aria-live="polite"
          >
            <i class="fas fa-exclamation-circle" aria-hidden="true"></i>
            Invalid login credentials.
          </div>
          <div class="pf-v5-c-form__group"><label class="pf-v5-c-form__label" for="login-demo-form-username">
              <span class="pf-v5-c-form__label-text">Username</span>&nbsp;<span
                class="pf-v5-c-form__label-required"
                aria-hidden="true"
              >&#42;</span></label>

            <span class="pf-v5-c-form-control pf-m-required">
              <input
                required
                type="text"
                id="login-demo-form-username"
                name="login-demo-form-username"
              />
            </span>
          </div>
          <div class="pf-v5-c-form__group"><label class="pf-v5-c-form__label" for="login-demo-form-password">
              <span class="pf-v5-c-form__label-text">Password</span>&nbsp;<span
                class="pf-v5-c-form__label-required"
                aria-hidden="true"
              >&#42;</span></label>

            <div class="pf-v5-c-input-group">
              <span class="pf-v5-c-form-control pf-m-required">
                <input
                  required
                  type="text"
                  id="login-demo-form-password"
                  name="login-demo-form-password"
                  value="abcd1234"
                />
              </span>

              <button
                class="pf-v5-c-button pf-m-control"
                type="button"
                aria-label="Hide password"
              >
                <i class="fas fa-eye-slash" aria-hidden="true"></i>
              </button>
            </div>
          </div>
          <div class="pf-v5-c-form__group">
            <div class="pf-v5-c-check">
              <input
                class="pf-v5-c-check__input"
                type="checkbox"
                id="login-demo-checkbox"
                name="login-demo-checkbox"
              />

              <label
                class="pf-v5-c-check__label"
                for="login-demo-checkbox"
              >Keep me logged in for 30 days.</label>
            </div>
          </div>
          <div class="pf-v5-c-form__group pf-m-action">
            <button
              class="pf-v5-c-button pf-m-primary pf-m-block"
              type="submit"
            >Log in</button>
          </div>
        </form>
      </div>
      <footer class="pf-v5-c-login__main-footer">
        <ul class="pf-v5-c-login__main-footer-links" role="list">
          <li class="pf-v5-c-login__main-footer-links-item">
            <a
              href="#"
              class="pf-v5-c-login__main-footer-links-item-link"
              aria-label="Log in with Google"
            >
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488 512"
              >
                <path
                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                />
              </svg>
            </a>
          </li>
          <li class="pf-v5-c-login__main-footer-links-item">
            <a
              href="#"
              class="pf-v5-c-login__main-footer-links-item-link"
              aria-label="Log in with Github"
            >
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
              >
                <path
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                />
              </svg>
            </a>
          </li>
          <li class="pf-v5-c-login__main-footer-links-item">
            <a
              href="#"
              class="pf-v5-c-login__main-footer-links-item-link"
              aria-label="Log in with Dropbox"
            >
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 528 512"
              >
                <path
                  d="M264.4 116.3l-132 84.3 132 84.3-132 84.3L0 284.1l132.3-84.3L0 116.3 132.3 32l132.1 84.3zM131.6 395.7l132-84.3 132 84.3-132 84.3-132-84.3zm132.8-111.6l132-84.3-132-83.6L395.7 32 528 116.3l-132.3 84.3L528 284.8l-132.3 84.3-131.3-85z"
                />
              </svg>
            </a>
          </li>
          <li class="pf-v5-c-login__main-footer-links-item">
            <a
              href="#"
              class="pf-v5-c-login__main-footer-links-item-link"
              aria-label="Log in with Facebook"
            >
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  d="M448 56.7v398.5c0 13.7-11.1 24.7-24.7 24.7H309.1V306.5h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8v-60.5c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9h-58.4v67.6h58.4V480H24.7C11.1 480 0 468.9 0 455.3V56.7C0 43.1 11.1 32 24.7 32h398.5c13.7 0 24.8 11.1 24.8 24.7z"
                />
              </svg>
            </a>
          </li>
          <li class="pf-v5-c-login__main-footer-links-item">
            <a
              href="#"
              class="pf-v5-c-login__main-footer-links-item-link"
              aria-label="Log in with Gitlab"
            >
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  d="M29.782 199.732L256 493.714 8.074 309.699c-6.856-5.142-9.712-13.996-7.141-21.993l28.849-87.974zm75.405-174.806c-3.142-8.854-15.709-8.854-18.851 0L29.782 199.732h131.961L105.187 24.926zm56.556 174.806L256 493.714l94.257-293.982H161.743zm349.324 87.974l-28.849-87.974L256 493.714l247.926-184.015c6.855-5.142 9.711-13.996 7.141-21.993zm-85.404-262.78c-3.142-8.854-15.709-8.854-18.851 0l-56.555 174.806h131.961L425.663 24.926z"
                />
              </svg>
            </a>
          </li>
        </ul>
        <div class="pf-v5-c-login__main-footer-band">
          <p class="pf-v5-c-login__main-footer-band-item">
            Need an account?
            <a href="https://www.patternfly.org/">Sign up.</a>
          </p>
          <p class="pf-v5-c-login__main-footer-band-item">
            <a href="#">Forgot username or password?</a>
          </p>
        </div>
      </footer>
    </main>
    <footer class="pf-v5-c-login__footer">
      <p>This is placeholder text only. Use this area to place any information or introductory message about your application that may be relevant to users.</p>
      <ul class="pf-v5-c-list pf-m-inline" role="list">
        <li>
          <a href="#">Terms of use</a>
        </li>
        <li>
          <a href="#">Help</a>
        </li>
        <li>
          <a href="#">Privacy policy</a>
        </li>
      </ul>
    </footer>
  </div>
</div>
      `}`,styles:[(0,l.css)`
    .pf-v5-c-login__footer, .pf-v5-c-login__header {
  --pf-v5-global--Color--100: var(--pf-v5-global--Color--light-100);
  --pf-v5-global--Color--200: var(--pf-v5-global--Color--light-200);
  --pf-v5-global--BorderColor--100: var(--pf-v5-global--BorderColor--light-100);
  --pf-v5-global--primary-color--100: var(--pf-v5-global--primary-color--light-100);
  --pf-v5-global--link--Color: var(--pf-v5-global--link--Color--light);
  --pf-v5-global--link--Color--hover: var(--pf-v5-global--link--Color--light);
  --pf-v5-global--BackgroundColor--100: var(--pf-v5-global--BackgroundColor--dark-100);
  --pf-v5-global--icon--Color--light: var(--pf-v5-global--icon--Color--light--light);
  --pf-v5-global--icon--Color--dark: var(--pf-v5-global--icon--Color--dark--light);
}
.pf-v5-c-login__footer .pf-v5-c-button, .pf-v5-c-login__header .pf-v5-c-button {
  --pf-v5-c-button--m-primary--BackgroundColor: var(--pf-v5-global--primary-color--dark-100);
}

.pf-v5-c-login {
  --pf-v5-c-login--PaddingTop: var(--pf-v5-global--spacer--lg);
  --pf-v5-c-login--PaddingBottom: var(--pf-v5-global--spacer--lg);
  --pf-v5-c-login__container--xl--GridColumnGap: var(--pf-v5-global--spacer--3xl);
  --pf-v5-c-login__container--MaxWidth: 31.25rem;
  --pf-v5-c-login__container--xl--MaxWidth: none;
  --pf-v5-c-login__container--PaddingLeft: 6.125rem;
  --pf-v5-c-login__container--PaddingRight: 6.125rem;
  --pf-v5-c-login__container--xl--GridTemplateColumns: 34rem minmax(auto, 34rem);
  --pf-v5-c-login__header--MarginBottom: var(--pf-v5-global--spacer--md);
  --pf-v5-c-login__header--PaddingLeft: var(--pf-v5-global--spacer--md);
  --pf-v5-c-login__header--PaddingRight: var(--pf-v5-global--spacer--md);
  --pf-v5-c-login__header--xl--MarginBottom: var(--pf-v5-global--spacer--2xl);
  --pf-v5-c-login__header--xl--MarginTop: var(--pf-v5-global--spacer--3xl);
  --pf-v5-c-login__header--c-brand--MarginBottom: var(--pf-v5-global--spacer--lg);
  --pf-v5-c-login__header--c-brand--xl--MarginBottom: var(--pf-v5-global--spacer--2xl);
  --pf-v5-c-login__main--BackgroundColor: var(--pf-v5-global--BackgroundColor--light-100);
  --pf-v5-c-login__main--MarginBottom: var(--pf-v5-global--spacer--lg);
  --pf-v5-c-login__main--BoxShadow: var(--pf-v5-global--BoxShadow--xl);
  --pf-v5-c-login__main-header--PaddingTop: var(--pf-v5-global--spacer--2xl);
  --pf-v5-c-login__main-header--PaddingRight: var(--pf-v5-global--spacer--xl);
  --pf-v5-c-login__main-header--PaddingBottom: var(--pf-v5-global--spacer--md);
  --pf-v5-c-login__main-header--PaddingLeft: var(--pf-v5-global--spacer--xl);
  --pf-v5-c-login__main-header--md--PaddingRight: var(--pf-v5-global--spacer--2xl);
  --pf-v5-c-login__main-header--md--PaddingLeft: var(--pf-v5-global--spacer--2xl);
  --pf-v5-c-login__main-header--ColumnGap: var(--pf-v5-global--spacer--md);
  --pf-v5-c-login__main-header--RowGap: var(--pf-v5-global--spacer--md);
  --pf-v5-c-login__main-header-desc--MarginBottom: var(--pf-v5-global--spacer--sm);
  --pf-v5-c-login__main-header-desc--md--MarginBottom: 0;
  --pf-v5-c-login__main-header-desc--FontSize: var(--pf-v5-global--FontSize--sm);
  --pf-v5-c-login__main-body--PaddingRight: var(--pf-v5-global--spacer--xl);
  --pf-v5-c-login__main-body--PaddingBottom: var(--pf-v5-global--spacer--xl);
  --pf-v5-c-login__main-body--PaddingLeft: var(--pf-v5-global--spacer--xl);
  --pf-v5-c-login__main-body--md--PaddingRight: var(--pf-v5-global--spacer--2xl);
  --pf-v5-c-login__main-body--md--PaddingLeft: var(--pf-v5-global--spacer--2xl);
  --pf-v5-c-login__main-footer--PaddingBottom: var(--pf-v5-global--spacer--3xl);
  --pf-v5-c-login__main-footer--c-title--MarginBottom: var(--pf-v5-global--spacer--md);
  --pf-v5-c-login__main-footer-links--PaddingTop: var(--pf-v5-global--spacer--sm);
  --pf-v5-c-login__main-footer-links--PaddingRight: var(--pf-v5-global--spacer--3xl);
  --pf-v5-c-login__main-footer-links--PaddingBottom: var(--pf-v5-global--spacer--xl);
  --pf-v5-c-login__main-footer-links--PaddingLeft: var(--pf-v5-global--spacer--3xl);
  --pf-v5-c-login__main-footer-links-item--PaddingRight: var(--pf-v5-global--spacer--md);
  --pf-v5-c-login__main-footer-links-item--PaddingLeft: var(--pf-v5-global--spacer--md);
  --pf-v5-c-login__main-footer-links-item--MarginBottom: var(--pf-v5-global--spacer--sm);
  --pf-v5-c-login__main-footer-links-item-link-svg--Fill: var(--pf-v5-global--icon--Color--light);
  --pf-v5-c-login__main-footer-links-item-link-svg--Width: var(--pf-v5-global--icon--FontSize--lg);
  --pf-v5-c-login__main-footer-links-item-link-svg--Height: var(--pf-v5-global--icon--FontSize--lg);
  --pf-v5-c-login__main-footer-links-item-link-svg--hover--Fill: var(--pf-v5-global--icon--Color--dark);
  --pf-v5-c-login__main-footer-band--PaddingTop: var(--pf-v5-global--spacer--lg);
  --pf-v5-c-login__main-footer-band--PaddingRight: var(--pf-v5-global--spacer--md);
  --pf-v5-c-login__main-footer-band--PaddingBottom: var(--pf-v5-global--spacer--lg);
  --pf-v5-c-login__main-footer-band--PaddingLeft: var(--pf-v5-global--spacer--md);
  --pf-v5-c-login__main-footer-band--BorderTopColor: var(--pf-v5-global--BorderColor--100);
  --pf-v5-c-login__main-footer-band--BorderTopWidth: var(--pf-v5-global--BorderWidth--sm);
  --pf-v5-c-login__main-footer-band-item--PaddingTop: var(--pf-v5-global--spacer--md);
  --pf-v5-c-login__footer--PaddingLeft: var(--pf-v5-global--spacer--md);
  --pf-v5-c-login__footer--PaddingRight: var(--pf-v5-global--spacer--md);
  --pf-v5-c-login__footer--c-list--PaddingTop: var(--pf-v5-global--spacer--md);
  --pf-v5-c-login__footer--c-list--xl--PaddingTop: var(--pf-v5-global--spacer--2xl);
  display: flex;
  justify-content: center;
  min-height: 100vh;
  padding-block-start: var(--pf-v5-c-login--PaddingTop);
  padding-block-end: var(--pf-v5-c-login--PaddingBottom);
}
@media (min-width: 1200px) {
  .pf-v5-c-login {
    --pf-v5-c-login__container--MaxWidth: var(--pf-v5-c-login__container--xl--MaxWidth);
  }
}
@media (min-width: 576px) {
  .pf-v5-c-login {
    --pf-v5-c-login__header--PaddingRight: 0;
    --pf-v5-c-login__header--PaddingLeft: 0;
  }
}
@media (min-width: 1200px) {
  .pf-v5-c-login {
    --pf-v5-c-login__header--MarginBottom: var(--pf-v5-c-login__header--xl--MarginBottom);
    --pf-v5-c-login__header--c-brand--MarginBottom: var(--pf-v5-c-login__header--c-brand--xl--MarginBottom);
  }
}
@media (min-width: 1200px) {
  .pf-v5-c-login {
    --pf-v5-c-login__main--MarginBottom: 0;
  }
}
@media (min-width: 768px) {
  .pf-v5-c-login {
    --pf-v5-c-login__main-header--PaddingRight: var(--pf-v5-c-login__main-header--md--PaddingRight);
    --pf-v5-c-login__main-header--PaddingLeft: var(--pf-v5-c-login__main-header--md--PaddingLeft);
    --pf-v5-c-login__main-header-desc--MarginBottom: var(--pf-v5-c-login__main-header-desc--md--MarginBottom);
  }
}
@media (min-width: 768px) {
  .pf-v5-c-login {
    --pf-v5-c-login__main-body--PaddingRight: var(--pf-v5-c-login__main-body--md--PaddingRight);
    --pf-v5-c-login__main-body--PaddingLeft: var(--pf-v5-c-login__main-body--md--PaddingLeft);
  }
}
@media (min-width: 576px) {
  .pf-v5-c-login {
    --pf-v5-c-login__footer--PaddingRight: 0;
    --pf-v5-c-login__footer--PaddingLeft: 0;
  }
}
@media (min-width: 1200px) {
  .pf-v5-c-login {
    --pf-v5-c-login__footer--c-list--PaddingTop: var(--pf-v5-c-login__footer--c-list--xl--PaddingTop);
  }
}
@media (min-width: 576px) {
  .pf-v5-c-login {
    align-items: center;
  }
}

.pf-v5-c-login__container {
  width: 100%;
  max-width: var(--pf-v5-c-login__container--MaxWidth);
}
@media (min-width: 1200px) {
  .pf-v5-c-login__container {
    display: grid;
    grid-template-areas: "main header" "main footer" "main .";
    grid-template-columns: var(--pf-v5-c-login__container--xl--GridTemplateColumns);
    grid-column-gap: var(--pf-v5-c-login__container--xl--GridColumnGap);
    justify-content: center;
    padding-inline-start: var(--pf-v5-c-login__container--PaddingLeft);
    padding-inline-end: var(--pf-v5-c-login__container--PaddingRight);
  }
}

.pf-v5-c-login__header {
  color: var(--pf-v5-global--Color--100);
  grid-area: header;
  padding-inline-start: var(--pf-v5-c-login__header--PaddingLeft);
  padding-inline-end: var(--pf-v5-c-login__header--PaddingRight);
}
@media (min-width: 1200px) {
  .pf-v5-c-login__header {
    margin-block-start: var(--pf-v5-c-login__header--xl--MarginTop);
  }
}
.pf-v5-c-login__header .pf-v5-c-brand {
  margin-block-end: var(--pf-v5-c-login__header--c-brand--MarginBottom);
}

.pf-v5-c-login__main {
  grid-area: main;
  align-self: start;
  margin-block-end: var(--pf-v5-c-login__main--MarginBottom);
  background-color: var(--pf-v5-c-login__main--BackgroundColor);
  box-shadow: var(--pf-v5-c-login__main--BoxShadow);
}
.pf-v5-c-login__main > :first-child:not(.pf-v5-c-login__main-header) {
  padding-block-start: var(--pf-v5-c-login__main-header--PaddingTop);
}
.pf-v5-c-login__main > :last-child:not(.pf-v5-c-login__main-footer) {
  padding-block-end: var(--pf-v5-c-login__main-footer--PaddingBottom);
}

.pf-v5-c-login__main-header {
  display: grid;
  grid-template-columns: 100%;
  row-gap: var(--pf-v5-c-login__main-header--RowGap);
  column-gap: var(--pf-v5-c-login__main-header--ColumnGap);
  align-items: center;
  padding-block-start: var(--pf-v5-c-login__main-header--PaddingTop);
  padding-block-end: var(--pf-v5-c-login__main-header--PaddingBottom);
  padding-inline-start: var(--pf-v5-c-login__main-header--PaddingLeft);
  padding-inline-end: var(--pf-v5-c-login__main-header--PaddingRight);
}
@media (min-width: 768px) {
  .pf-v5-c-login__main-header {
    grid-template-columns: 1fr auto;
  }
}

.pf-v5-c-login__main-header-utilities,
.pf-v5-c-login__main-header .pf-v5-c-dropdown {
  grid-row: auto;
  grid-column: auto;
}
@media (min-width: 768px) {
  .pf-v5-c-login__main-header-utilities,
  .pf-v5-c-login__main-header .pf-v5-c-dropdown {
    grid-row: 1;
    grid-column: 2/3;
  }
}

.pf-v5-c-login__main-header-utilities .pf-v5-c-dropdown {
  grid-row: auto;
  grid-column: auto;
}

.pf-v5-c-login__main-header-desc {
  grid-column: 1/-1;
  margin-block-end: var(--pf-v5-c-login__main-header-desc--MarginBottom);
  font-size: var(--pf-v5-c-login__main-header-desc--FontSize);
}

.pf-v5-c-login__main-body {
  padding-block-end: var(--pf-v5-c-login__main-body--PaddingBottom);
  padding-inline-start: var(--pf-v5-c-login__main-body--PaddingLeft);
  padding-inline-end: var(--pf-v5-c-login__main-body--PaddingRight);
}

.pf-v5-c-login__main-footer {
  display: flex;
  flex-wrap: wrap;
}
.pf-v5-c-login__main-footer .pf-v5-c-title {
  margin-block-end: var(--pf-v5-c-login__main-footer--c-title--MarginBottom);
  text-align: center;
}
.pf-v5-c-login__main-footer > * {
  flex-basis: 100%;
}

.pf-v5-c-login__main-footer-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-block-start: var(--pf-v5-c-login__main-footer-links--PaddingTop);
  padding-block-end: var(--pf-v5-c-login__main-footer-links--PaddingBottom);
  padding-inline-start: var(--pf-v5-c-login__main-footer-links--PaddingLeft);
  padding-inline-end: var(--pf-v5-c-login__main-footer-links--PaddingRight);
}

.pf-v5-c-login__main-footer-links-item {
  padding-inline-start: var(--pf-v5-c-login__main-footer-links-item--PaddingLeft);
  padding-inline-end: var(--pf-v5-c-login__main-footer-links-item--PaddingRight);
  margin-block-end: var(--pf-v5-c-login__main-footer-links-item--MarginBottom);
}

.pf-v5-c-login__main-footer-links-item-link svg {
  width: 100%;
  max-width: var(--pf-v5-c-login__main-footer-links-item-link-svg--Width);
  height: 100%;
  max-height: var(--pf-v5-c-login__main-footer-links-item-link-svg--Height);
  fill: var(--pf-v5-c-login__main-footer-links-item-link-svg--Fill);
}
.pf-v5-c-login__main-footer-links-item-link:hover svg {
  fill: var(--pf-v5-c-login__main-footer-links-item-link-svg--hover--Fill);
}

.pf-v5-c-login__main-footer-band {
  padding-block-start: var(--pf-v5-c-login__main-footer-band--PaddingTop);
  padding-block-end: var(--pf-v5-c-login__main-footer-band--PaddingBottom);
  padding-inline-start: var(--pf-v5-c-login__main-footer-band--PaddingLeft);
  padding-inline-end: var(--pf-v5-c-login__main-footer-band--PaddingRight);
  text-align: center;
  border-block-start: var(--pf-v5-c-login__main-footer-band--BorderTopWidth) solid var(--pf-v5-c-login__main-footer-band--BorderTopColor);
}
.pf-v5-c-login__main-footer-band > * + * {
  padding-block-start: var(--pf-v5-c-login__main-footer-band-item--PaddingTop);
}

.pf-v5-c-login__footer {
  color: var(--pf-v5-global--Color--100);
  grid-area: footer;
  padding-inline-start: var(--pf-v5-c-login__footer--PaddingLeft);
  padding-inline-end: var(--pf-v5-c-login__footer--PaddingRight);
}
.pf-v5-c-login__footer .pf-v5-c-list a {
  color: unset;
}
.pf-v5-c-login__footer .pf-v5-c-list:not(:only-child) {
  padding-block-start: var(--pf-v5-c-login__footer--c-list--PaddingTop);
}

:where(.pf-v5-theme-dark) .pf-v5-c-login__header .pf-v5-c-button,
:where(.pf-v5-theme-dark) .pf-v5-c-login__footer .pf-v5-c-button {
  --pf-v5-c-button--m-primary--BackgroundColor: var(--pf-v5-global--primary-color--300);
}

:where(.pf-v5-theme-dark) .pf-v5-c-login {
  --pf-v5-c-login__main--BackgroundColor: var(--pf-v5-global--BackgroundColor--300);
}
:where(.pf-v5-theme-dark) .pf-v5-c-login__header,
:where(.pf-v5-theme-dark) .pf-v5-c-login__footer {
  color: var(--pf-v5-global--Color--100);
}
    `],shadowOptions:{mode:"open"}})],r);let t=(0,l.html)`${i=>(0,l.html)`<login-page>
    <h3>Hello</h3>
  </login-page>`}`;document.addEventListener("DOMContentLoaded",()=>{let i=document.querySelector("form"),a=document.createElement("div");i?.appendChild(a),i&&i.addEventListener("submit",i=>{i.preventDefault();let o=document.querySelectorAll("input"),n=o[0].value,l=o[1].value;if(!n||!l){a.textContent="Veuillez remplir tous les champs.";return}let e={email:n,password:l};console.log(e),fetch("http://localhost:3000/connexion/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(i=>{if(!i.ok)throw Error("Erreur serveur.");return i.json()}).then(i=>{if(i.length>0){for(let a of i)localStorage.setItem("first_name",a.first_name),localStorage.setItem("email",a.email),localStorage.setItem("role",a.status),localStorage.setItem("isLogged","true"),console.log("mise en mémoire dans le locale storage"+a.first_name+a.email);window.location.href="http://localhost:1234"}else a.textContent="Utilisateur non trouvé ou mot de passe incorrect.";console.log("Réponse du serveur:",i)}).catch(i=>{a.innerHTML="Vous n'êtes pas encore inscris, veuillez vous <a href='inscriptions'><strong>inscrire</string></a>",console.error("Erreur lors de la requête fetch:",i)})})}),(0,l.render)(t);
//# sourceMappingURL=index.58dede69.js.map
