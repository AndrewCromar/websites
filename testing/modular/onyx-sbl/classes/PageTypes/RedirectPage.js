class RedirectPage {
  constructor(redirectUrl) {
    this.redirectUrl = redirectUrl;
  }

  Render() {
    return `
        <title>Redirecting...</title>
        <script>
          window.location.href = "${this.redirectUrl}";
        </script>
        <div>
          <h1>Redirecting...</h1>
          <p>If you are not redirected automatically, <a href="${this.redirectUrl}">click here</a>.</p>
        </div>
      `;
  }
}
